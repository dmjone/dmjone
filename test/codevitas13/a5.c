#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

/* faces: 0:F, 1:B, 2:U, 3:D, 4:L, 5:R */
enum
{
    F = 0,
    B = 1,
    U = 2,
    D = 3,
    L = 4,
    R = 5
};

typedef struct
{
    int x, y, z;
} Vec;

/* canonical bases (rows go downward, cols go right) */
static Vec Nvec[6], Uvec[6], Vvec[6];

static inline Vec addV(Vec a, Vec b)
{
    Vec r = {a.x + b.x, a.y + b.y, a.z + b.z};
    return r;
}
static inline Vec mulV(int k, Vec v)
{
    Vec r = {k * v.x, k * v.y, k * v.z};
    return r;
}
static inline int dotV(Vec a, Vec b) { return a.x * b.x + a.y * b.y + a.z * b.z; }

static inline Vec rotYminus(Vec v)
{
    Vec r = {-v.z, v.y, v.x};
    return r;
} /* -90° */
static inline Vec rotYplus(Vec v)
{
    Vec r = {v.z, v.y, -v.x};
    return r;
} /* +90° */
static inline Vec rotXplus(Vec v)
{
    Vec r = {v.x, -v.z, v.y};
    return r;
}
static inline Vec rotXminus(Vec v)
{
    Vec r = {v.x, v.z, -v.y};
    return r;
}
static inline Vec rotZplus(Vec v)
{
    Vec r = {-v.y, v.x, v.z};
    return r;
}
static inline Vec rotZminus(Vec v)
{
    Vec r = {v.y, -v.x, v.z};
    return r;
}

static inline int whichFace(Vec w)
{
    int ax = w.x < 0 ? -w.x : w.x;
    int ay = w.y < 0 ? -w.y : w.y;
    int az = w.z < 0 ? -w.z : w.z;
    if (ax >= ay && ax >= az)
        return w.x > 0 ? R : L;
    if (ay >= ax && ay >= az)
        return w.y > 0 ? U : D;
    return w.z > 0 ? F : B;
}

static inline Vec worldFrom(int f, int i, int j, int n)
{
    const int BIG = 1000;
    int S = n - 1, s = -S + 2 * j, t = -S + 2 * i;
    return addV(mulV(BIG, Nvec[f]), addV(mulV(s, Uvec[f]), mulV(t, Vvec[f])));
}

static inline void toIJ(Vec w, int f, int n, int *pi, int *pj)
{
    int S = n - 1;
    int s = dotV(w, Uvec[f]);
    int t = dotV(w, Vvec[f]);
    int j = (s + S) / 2, i = (t + S) / 2;
    if (j < 0)
        j = 0;
    if (j >= n)
        j = n - 1;
    if (i < 0)
        i = 0;
    if (i >= n)
        i = n - 1;
    *pi = i;
    *pj = j;
}

static inline int IDX(int f, int i, int j, int n) { return f * n * n + i * n + j; }

/* permutation helpers ------------------------------------------------------- */
typedef int *Perm;

static inline Perm perm_new(int m) { return (int *)malloc(sizeof(int) * m); }
static inline void perm_identity(Perm P, int m)
{
    for (int i = 0; i < m; i++)
        P[i] = i;
}
static inline void perm_copy(Perm dst, const Perm src, int m) { memcpy(dst, src, sizeof(int) * m); }

static inline void perm_compose(Perm out, const Perm Q, const Perm P, int m)
{
    for (int i = 0; i < m; i++)
        out[i] = Q[P[i]];
}
static inline void perm_inverse(Perm inv, const Perm P, int m)
{
    for (int i = 0; i < m; i++)
        inv[P[i]] = i;
}
static inline void apply_perm_chars(char *dst, const Perm P, const char *src, int m)
{
    for (int i = 0; i < m; i++)
        dst[P[i]] = src[i];
}

/* whole-cube rotation as a permutation ------------------------------------- */
static void build_perm_whole(Perm P, int n, Vec (*rot)(Vec))
{
    int m = 6 * n * n;
    for (int f = 0; f < 6; f++)
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++)
            {
                Vec w = worldFrom(f, i, j, n);
                Vec w2 = rot(w);
                int df = whichFace(w2), ii, jj;
                toIJ(w2, df, n, &ii, &jj);
                P[IDX(f, i, j, n)] = IDX(df, ii, jj, n);
            }
}

/* front-canonical slice permutations --------------------------------------- */
static void build_perm_front_row(Perm P, int n, int r, int left)
{
    perm_identity(P, n * 6 * n);
    Vec (*ringRot)(Vec) = left ? rotYminus : rotYplus;

    int cyc[4] = {F, L, B, R};
    for (int k = 0; k < 4; k++)
    {
        int f = cyc[k];
        for (int j = 0; j < n; j++)
        {
            Vec w = worldFrom(f, r, j, n), w2 = ringRot(w);
            int df = whichFace(w2), ii, jj;
            toIJ(w2, df, n, &ii, &jj);
            P[IDX(f, r, j, n)] = IDX(df, ii, jj, n);
        }
    }
    if (r == 0)
    {
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++)
            {
                Vec w = worldFrom(U, i, j, n), w2 = ringRot(w);
                int df = whichFace(w2), ii, jj;
                toIJ(w2, df, n, &ii, &jj);
                P[IDX(U, i, j, n)] = IDX(df, ii, jj, n);
            }
    }
    if (r == n - 1)
    {
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++)
            {
                Vec w = worldFrom(D, i, j, n), w2 = ringRot(w);
                int df = whichFace(w2), ii, jj;
                toIJ(w2, df, n, &ii, &jj);
                P[IDX(D, i, j, n)] = IDX(df, ii, jj, n);
            }
    }
}
static void build_perm_front_col(Perm P, int n, int c, int up)
{
    perm_identity(P, n * 6 * n);
    Vec (*ringRot)(Vec) = up ? rotXminus : rotXplus;

    int cyc[4] = {F, U, B, D};
    for (int k = 0; k < 4; k++)
    {
        int f = cyc[k];
        for (int i = 0; i < n; i++)
        {
            Vec w = worldFrom(f, i, c, n), w2 = ringRot(w);
            int df = whichFace(w2), ii, jj;
            toIJ(w2, df, n, &ii, &jj);
            P[IDX(f, i, c, n)] = IDX(df, ii, jj, n);
        }
    }
    if (c == 0)
    {
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++)
            {
                Vec w = worldFrom(L, i, j, n), w2 = ringRot(w);
                int df = whichFace(w2), ii, jj;
                toIJ(w2, df, n, &ii, &jj);
                P[IDX(L, i, j, n)] = IDX(df, ii, jj, n);
            }
    }
    if (c == n - 1)
    {
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++)
            {
                Vec w = worldFrom(R, i, j, n), w2 = ringRot(w);
                int df = whichFace(w2), ii, jj;
                toIJ(w2, df, n, &ii, &jj);
                P[IDX(R, i, j, n)] = IDX(df, ii, jj, n);
            }
    }
}

/* checks -------------------------------------------------------------------- */
static int face_uniform(const char *A, int n, int f)
{
    int base = f * n * n;
    char c = A[base];
    for (int t = 0; t < n * n; t++)
        if (A[base + t] != c)
            return 0;
    return 1;
}
static int face_oneoff(const char *A, int n, int f)
{
    int base = f * n * n, total = n * n, cnt[256] = {0}, k = 0;
    for (int t = 0; t < total; t++)
    {
        unsigned char ch = A[base + t];
        if (!cnt[ch])
            k++;
        cnt[ch]++;
    }
    if (k != 2)
        return 0;
    int a = 0, b = 0;
    for (int i = 0; i < 256; i++)
        if (cnt[i])
        {
            if (!a)
                a = cnt[i];
            else
                b = cnt[i];
        }
    return (a == total - 1 && b == 1) || (b == total - 1 && a == 1);
}

/* small utils --------------------------------------------------------------- */
static void tolower_str(char *s)
{
    for (; *s; ++s)
        *s = (char)tolower(*s);
}
static int side_id(const char *s)
{
    if (!strcmp(s, "front"))
        return F;
    if (!strcmp(s, "back"))
        return B;
    if (!strcmp(s, "top"))
        return U;
    if (!strcmp(s, "base"))
        return D;
    if (!strcmp(s, "left"))
        return L;
    return R;
}
static Vec apply_vec_alpha(const char *side, Vec v)
{
    if (!strcmp(side, "front"))
        return v;
    if (!strcmp(side, "back"))
        return rotYminus(rotYminus(v));
    if (!strcmp(side, "left"))
        return rotYplus(v);
    if (!strcmp(side, "right"))
        return rotYminus(v);
    if (!strcmp(side, "top"))
        return rotXplus(v);
    /* base */ return rotXminus(v);
}

int main(void)
{
    /* bases */
    Nvec[F] = (Vec){0, 0, 1};
    Uvec[F] = (Vec){1, 0, 0};
    Vvec[F] = (Vec){0, -1, 0};
    Nvec[B] = (Vec){0, 0, -1};
    Uvec[B] = (Vec){-1, 0, 0};
    Vvec[B] = (Vec){0, -1, 0};
    Nvec[U] = (Vec){0, 1, 0};
    Uvec[U] = (Vec){1, 0, 0};
    Vvec[U] = (Vec){0, 0, 1};
    Nvec[D] = (Vec){0, -1, 0};
    Uvec[D] = (Vec){1, 0, 0};
    Vvec[D] = (Vec){0, 0, -1};
    Nvec[L] = (Vec){-1, 0, 0};
    Uvec[L] = (Vec){0, 0, 1};
    Vvec[L] = (Vec){0, -1, 0};
    Nvec[R] = (Vec){1, 0, 0};
    Uvec[R] = (Vec){0, 0, -1};
    Vvec[R] = (Vec){0, -1, 0};

    int n, k;
    if (scanf("%d %d", &n, &k) != 2)
        return 0;
    int M = 6 * n * n;

    /* read cube: input order base, back, top, front, left, right */
    char *start = (char *)malloc(M);
    int mapIn[6] = {D, B, U, F, L, R};
    for (int blk = 0; blk < 6; ++blk)
    {
        int f = mapIn[blk];
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++)
            {
                char c;
                scanf(" %c", &c);
                start[IDX(f, i, j, n)] = c;
            }
    }
    /* consume endline */
    int ch;
    while ((ch = getchar()) != '\n' && ch != EOF)
    {
    }

    /* precompute base permutations */
    Perm TL = perm_new(M), TR = perm_new(M),
         RF = perm_new(M), RB = perm_new(M),
         RL = perm_new(M), RR = perm_new(M), ID = perm_new(M);
    build_perm_whole(TL, n, rotYminus);
    build_perm_whole(TR, n, rotYplus);
    build_perm_whole(RF, n, rotXplus);
    build_perm_whole(RB, n, rotXminus);
    build_perm_whole(RL, n, rotZplus);
    build_perm_whole(RR, n, rotZminus);
    perm_identity(ID, M);

    /* alpha(side) and inverse */
    Perm alpha_front = ID;
    Perm alpha_back = perm_new(M);
    perm_compose(alpha_back, TL, TL, M);
    Perm alpha_left = TR;
    Perm alpha_right = TL;
    Perm alpha_top = RF;
    Perm alpha_base = RB;

    Perm inv_front = perm_new(M);
    perm_inverse(inv_front, alpha_front, M);
    Perm inv_back = perm_new(M);
    perm_inverse(inv_back, alpha_back, M);
    Perm inv_left = perm_new(M);
    perm_inverse(inv_left, alpha_left, M);
    Perm inv_right = perm_new(M);
    perm_inverse(inv_right, alpha_right, M);
    Perm inv_top = perm_new(M);
    perm_inverse(inv_top, alpha_top, M);
    Perm inv_base = perm_new(M);
    perm_inverse(inv_base, alpha_base, M);

    /* canonical front slice perms for each index */
    Perm *rowL = (Perm *)malloc(sizeof(Perm) * n);
    Perm *rowR = (Perm *)malloc(sizeof(Perm) * n);
    Perm *colU = (Perm *)malloc(sizeof(Perm) * n);
    Perm *colD = (Perm *)malloc(sizeof(Perm) * n);
    for (int i = 0; i < n; i++)
    {
        rowL[i] = perm_new(M);
        build_perm_front_row(rowL[i], n, i, 1);
        rowR[i] = perm_new(M);
        build_perm_front_row(rowR[i], n, i, 0);
        colU[i] = perm_new(M);
        build_perm_front_col(colU[i], n, i, 1);
        colD[i] = perm_new(M);
        build_perm_front_col(colD[i], n, i, 0);
    }

    /* read K instructions and expand to permutations */
    Perm *P = (Perm *)malloc(sizeof(Perm) * k);
    char **orig = (char **)malloc(sizeof(char *) * k);
    for (int i = 0; i < k; i++)
    {
        char line[128];
        if (!fgets(line, sizeof(line), stdin))
        {
            i--;
            continue;
        }
        int Ls = (int)strlen(line);
        while (Ls > 0 && (line[Ls - 1] == '\n' || line[Ls - 1] == '\r'))
            line[--Ls] = 0;
        if (Ls == 0)
        {
            i--;
            continue;
        }
        orig[i] = (char *)malloc(Ls + 1);
        strcpy(orig[i], line);

        char a[16] = {0}, b[16] = {0}, cdir[16] = {0};
        int nt = sscanf(line, "%15s %15s %15s", a, b, cdir);
        for (int t = 0; a[t]; ++t)
            a[t] = (char)tolower(a[t]);
        for (int t = 0; b[t]; ++t)
            b[t] = (char)tolower(b[t]);
        for (int t = 0; cdir[t]; ++t)
            cdir[t] = (char)tolower(cdir[t]);

        if (nt == 2 && (!strcmp(a, "turn") || !strcmp(a, "rotate")))
        {
            P[i] = perm_new(M);
            if (!strcmp(a, "turn") && !strcmp(b, "left"))
                perm_copy(P[i], TL, M);
            else if (!strcmp(a, "turn") && !strcmp(b, "right"))
                perm_copy(P[i], TR, M);
            else if (!strcmp(a, "rotate") && !strcmp(b, "front"))
                perm_copy(P[i], RF, M);
            else if (!strcmp(a, "rotate") && !strcmp(b, "back"))
                perm_copy(P[i], RB, M);
            else if (!strcmp(a, "rotate") && !strcmp(b, "left"))
                perm_copy(P[i], RL, M);
            else if (!strcmp(a, "rotate") && !strcmp(b, "right"))
                perm_copy(P[i], RR, M);
            else
                perm_identity(P[i], M);
            continue;
        }

        /* slice: <side> <idx> <dir> */
        int idx = atoi(b) - 1;
        if (idx < 0)
            idx = 0;
        if (idx >= n)
            idx = n - 1;
        int sid = side_id(a);

        /* determine axis flip for index after α(side) */
        Vec uP = apply_vec_alpha(a, Uvec[sid]);
        Vec vP = apply_vec_alpha(a, Vvec[sid]);
        int flipCol = (dotV(uP, Uvec[F]) < 0);
        int flipRow = (dotV(vP, Vvec[F]) < 0);

        int isRow = (!strcmp(cdir, "left") || !strcmp(cdir, "right"));
        int idxFront = idx;
        if (isRow && flipRow)
            idxFront = (n - 1 - idxFront);
        if (!isRow && flipCol)
            idxFront = (n - 1 - idxFront);

        Perm frontMove = NULL;
        if (isRow)
        {
            frontMove = (!strcmp(cdir, "left")) ? rowL[idxFront] : rowR[idxFront];
        }
        else
        {
            frontMove = (!strcmp(cdir, "up")) ? colU[idxFront] : colD[idxFront];
        }

        Perm A = NULL, Ainv = NULL;
        if (!strcmp(a, "front"))
        {
            A = alpha_front;
            Ainv = inv_front;
        }
        else if (!strcmp(a, "back"))
        {
            A = alpha_back;
            Ainv = inv_back;
        }
        else if (!strcmp(a, "left"))
        {
            A = alpha_left;
            Ainv = inv_left;
        }
        else if (!strcmp(a, "right"))
        {
            A = alpha_right;
            Ainv = inv_right;
        }
        else if (!strcmp(a, "top"))
        {
            A = alpha_top;
            Ainv = inv_top;
        }
        else
        {
            A = alpha_base;
            Ainv = inv_base;
        }

        P[i] = perm_new(M);
        Perm tmp = perm_new(M);
        perm_compose(tmp, frontMove, A, M); /* tmp = frontMove ∘ A */
        perm_compose(P[i], Ainv, tmp, M);   /* P = A^{-1} ∘ tmp   */
        free(tmp);
    }

    /* prefix/suffix */
    Perm *prefix = (Perm *)malloc(sizeof(Perm) * k);
    Perm *suffix = (Perm *)malloc(sizeof(Perm) * (k + 1));
    suffix[k] = perm_new(M);
    perm_identity(suffix[k], M);
    for (int i = 0; i < k; i++)
    {
        prefix[i] = perm_new(M);
        if (i == 0)
            perm_copy(prefix[i], P[0], M);
        else
            perm_compose(prefix[i], P[i], prefix[i - 1], M);
    }
    for (int i = k - 1; i >= 0; i--)
    {
        suffix[i] = perm_new(M);
        perm_compose(suffix[i], suffix[i + 1], P[i], M);
    }

    /* try skipping each instruction */
    int good = -1, faulty = -1;
    char *finalS = (char *)malloc(M);
    for (int skip = 0; skip < k; ++skip)
    {
        Perm net = perm_new(M);
        if (skip == 0)
            perm_copy(net, suffix[1], M);
        else
        {
            Perm tmp = perm_new(M);
            perm_compose(tmp, suffix[skip + 1], prefix[skip - 1], M);
            perm_copy(net, tmp, M);
            free(tmp);
        }
        apply_perm_chars(finalS, net, start, M);
        free(net);

        int ok = 0, almost = 0;
        for (int f = 0; f < 6; ++f)
        {
            if (face_uniform(finalS, n, f))
            {
                ok = 1;
                break;
            }
        }
        if (!ok)
        {
            for (int f = 0; f < 6; ++f)
            {
                if (face_oneoff(finalS, n, f))
                {
                    almost = 1;
                    break;
                }
            }
        }

        if (ok)
        {
            good = skip;
            break;
        }
        if (almost && faulty == -1)
            faulty = skip;
    }

    if (good != -1)
    {
        printf("%s\n", orig[good]);
    }
    else if (faulty != -1)
    {
        printf("Faulty\n%s\n", orig[faulty]);
    }
    else
    {
        printf("Not Possible\n");
    }

    return 0;
}
