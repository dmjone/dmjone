#include <bits/stdc++.h>
using namespace std;

// Internal face indices: 0:F, 1:B, 2:U, 3:D, 4:L, 5:R
enum
{
    F = 0,
    B = 1,
    U = 2,
    D = 3,
    L = 4,
    R = 5
};

struct Vec
{
    int x, y, z;
};
static Vec Nvec[6], Uvec[6], Vvec[6];

inline Vec add(const Vec &a, const Vec &b) { return {a.x + b.x, a.y + b.y, a.z + b.z}; }
inline Vec mul(int k, const Vec &v) { return {k * v.x, k * v.y, k * v.z}; }
inline int dot(const Vec &a, const Vec &b) { return a.x * b.x + a.y * b.y + a.z * b.z; }

inline Vec rotYminus(const Vec &v) { return {-v.z, v.y, v.x}; } // -90° about Y
inline Vec rotYplus(const Vec &v) { return {v.z, v.y, -v.x}; }  // +90° about Y
inline Vec rotXplus(const Vec &v) { return {v.x, -v.z, v.y}; }  // +90° about X
inline Vec rotXminus(const Vec &v) { return {v.x, v.z, -v.y}; } // -90° about X
inline Vec rotZplus(const Vec &v) { return {-v.y, v.x, v.z}; }  // +90° about Z
inline Vec rotZminus(const Vec &v) { return {v.y, -v.x, v.z}; } // -90° about Z

inline int whichFace(const Vec &w)
{
    int ax = abs(w.x), ay = abs(w.y), az = abs(w.z);
    if (ax >= ay && ax >= az)
        return w.x > 0 ? R : L;
    if (ay >= ax && ay >= az)
        return w.y > 0 ? U : D;
    return w.z > 0 ? F : B;
}

inline Vec worldFrom(int f, int i, int j, int n)
{
    const int BIG = 1000; // normal dominates
    int S = n - 1;
    int s = -S + 2 * j; // left -> right
    int t = -S + 2 * i; // top  -> down
    return add(mul(BIG, Nvec[f]), add(mul(s, Uvec[f]), mul(t, Vvec[f])));
}

inline pair<int, int> toIJ(const Vec &w, int f, int n)
{
    int S = n - 1;
    int s = dot(w, Uvec[f]);
    int t = dot(w, Vvec[f]);
    int j = (s + S) / 2;
    int i = (t + S) / 2;
    if (j < 0)
        j = 0;
    if (j >= n)
        j = n - 1;
    if (i < 0)
        i = 0;
    if (i >= n)
        i = n - 1;
    return {i, j};
}

inline int pos(int f, int i, int j, int n) { return f * n * n + i * n + j; }

using Perm = vector<int>;

inline Perm identityPerm(int n)
{
    int m = 6 * n * n;
    Perm p(m);
    iota(p.begin(), p.end(), 0);
    return p;
}
inline Perm compose(const Perm &Q, const Perm &P)
{
    Perm R(P.size());
    for (size_t i = 0; i < P.size(); ++i)
        R[i] = Q[P[i]];
    return R;
}
inline Perm inverse(const Perm &P)
{
    Perm I(P.size());
    for (size_t i = 0; i < P.size(); ++i)
        I[P[i]] = (int)i;
    return I;
}
inline vector<char> applyPerm(const Perm &P, const vector<char> &A)
{
    vector<char> B(A.size());
    for (size_t i = 0; i < A.size(); ++i)
        B[P[i]] = A[i];
    return B;
}

// Whole-cube rotation as a permutation (exact 90° axis rotation)
Perm permWhole(int n, Vec (*rot)(const Vec &))
{
    Perm P = identityPerm(n);
    for (int f = 0; f < 6; ++f)
        for (int i = 0; i < n; ++i)
            for (int j = 0; j < n; ++j)
            {
                Vec w = worldFrom(f, i, j, n), w2 = rot(w);
                int df = whichFace(w2);
                auto ij = toIJ(w2, df, n);
                P[pos(f, i, j, n)] = pos(df, ij.first, ij.second, n);
            }
    return P;
}

// Front-canonical row ring (about Y). If r==0 or r==n-1, rotate U / D entirely by ringRot.
Perm permFrontRow(int n, int r, bool left)
{
    Perm P = identityPerm(n);
    auto ringRot = left ? rotYminus : rotYplus;

    // Move the four stripes
    int cyc[4] = {F, L, B, R};
    for (int k = 0; k < 4; ++k)
    {
        int f = cyc[k];
        for (int j = 0; j < n; ++j)
        {
            Vec w = worldFrom(f, r, j, n), w2 = ringRot(w);
            int df = whichFace(w2);
            auto ij = toIJ(w2, df, n);
            P[pos(f, r, j, n)] = pos(df, ij.first, ij.second, n);
        }
    }
    // Rotate U or D face completely if boundary
    if (r == 0)
    {
        for (int i = 0; i < n; ++i)
            for (int j = 0; j < n; ++j)
            {
                Vec w = worldFrom(U, i, j, n), w2 = ringRot(w);
                int df = whichFace(w2);
                auto ij = toIJ(w2, df, n);
                P[pos(U, i, j, n)] = pos(df, ij.first, ij.second, n);
            }
    }
    if (r == n - 1)
    {
        for (int i = 0; i < n; ++i)
            for (int j = 0; j < n; ++j)
            {
                Vec w = worldFrom(D, i, j, n), w2 = ringRot(w);
                int df = whichFace(w2);
                auto ij = toIJ(w2, df, n);
                P[pos(D, i, j, n)] = pos(df, ij.first, ij.second, n);
            }
    }
    return P;
}

// Front-canonical column ring (about X). If c==0 or c==n-1, rotate L / R entirely by ringRot.
Perm permFrontCol(int n, int c, bool up)
{
    Perm P = identityPerm(n);
    auto ringRot = up ? rotXminus : rotXplus;

    int cyc[4] = {F, U, B, D};
    for (int k = 0; k < 4; ++k)
    {
        int f = cyc[k];
        for (int i = 0; i < n; ++i)
        {
            Vec w = worldFrom(f, i, c, n), w2 = ringRot(w);
            int df = whichFace(w2);
            auto ij = toIJ(w2, df, n);
            P[pos(f, i, c, n)] = pos(df, ij.first, ij.second, n);
        }
    }
    if (c == 0)
    {
        for (int i = 0; i < n; ++i)
            for (int j = 0; j < n; ++j)
            {
                Vec w = worldFrom(L, i, j, n), w2 = ringRot(w);
                int df = whichFace(w2);
                auto ij = toIJ(w2, df, n);
                P[pos(L, i, j, n)] = pos(df, ij.first, ij.second, n);
            }
    }
    if (c == n - 1)
    {
        for (int i = 0; i < n; ++i)
            for (int j = 0; j < n; ++j)
            {
                Vec w = worldFrom(R, i, j, n), w2 = ringRot(w);
                int df = whichFace(w2);
                auto ij = toIJ(w2, df, n);
                P[pos(R, i, j, n)] = pos(df, ij.first, ij.second, n);
            }
    }
    return P;
}

// uniform / one-off checks
bool faceUniform(const vector<char> &A, int n, int f)
{
    int base = f * n * n;
    char c = A[base];
    for (int t = 0; t < n * n; ++t)
        if (A[base + t] != c)
            return false;
    return true;
}
bool faceOneOff(const vector<char> &A, int n, int f)
{
    int base = f * n * n, total = n * n;
    int cnt[256] = {0}, kinds = 0;
    for (int t = 0; t < total; ++t)
    {
        unsigned char ch = A[base + t];
        if (cnt[ch] == 0)
            ++kinds;
        ++cnt[ch];
    }
    if (kinds != 2)
        return false;
    int a = 0, b = 0;
    for (int i = 0; i < 256; ++i)
        if (cnt[i])
        {
            if (!a)
                a = cnt[i];
            else
                b = cnt[i];
        }
    return (a == total - 1 && b == 1) || (b == total - 1 && a == 1);
}

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    // Canonical local bases (front facing +Z; rows go down; cols go right)
    Nvec[F] = {0, 0, 1};
    Uvec[F] = {1, 0, 0};
    Vvec[F] = {0, -1, 0};
    Nvec[B] = {0, 0, -1};
    Uvec[B] = {-1, 0, 0};
    Vvec[B] = {0, -1, 0};
    Nvec[U] = {0, 1, 0};
    Uvec[U] = {1, 0, 0};
    Vvec[U] = {0, 0, 1};
    Nvec[D] = {0, -1, 0};
    Uvec[D] = {1, 0, 0};
    Vvec[D] = {0, 0, -1};
    Nvec[L] = {-1, 0, 0};
    Uvec[L] = {0, 0, 1};
    Vvec[L] = {0, -1, 0};
    Nvec[R] = {1, 0, 0};
    Uvec[R] = {0, 0, -1};
    Vvec[R] = {0, -1, 0};

    int n, k;
    if (!(cin >> n >> k))
        return 0;

    // Read initial cube: base, back, top, front, left, right
    // Map to our internal order: F,B,U,D,L,R
    vector<char> start(6 * n * n);
    int mapIn[6] = {D, B, U, F, L, R};
    for (int blk = 0; blk < 6; ++blk)
    {
        int f = mapIn[blk];
        for (int i = 0; i < n; ++i)
            for (int j = 0; j < n; ++j)
            {
                char c;
                cin >> c;
                start[pos(f, i, j, n)] = c;
            }
    }
    string trash;
    getline(cin, trash);

    vector<string> ops;
    ops.reserve(k);
    for (int i = 0; i < k;)
    {
        string line;
        getline(cin, line);
        if (line.empty())
            continue;
        ops.push_back(line);
        ++i;
    }

    // Whole-cube permutations
    Perm TL = permWhole(n, rotYminus); // turn left
    Perm TR = permWhole(n, rotYplus);  // turn right
    Perm RF = permWhole(n, rotXplus);  // rotate front
    Perm RB = permWhole(n, rotXminus); // rotate back
    Perm RL = permWhole(n, rotZplus);  // rotate left
    Perm RR = permWhole(n, rotZminus); // rotate right
    Perm ID = identityPerm(n);

    // α(side): side -> front (pure permutation)
    unordered_map<string, Perm> alpha;
    alpha["front"] = ID;
    alpha["back"] = compose(TL, TL);
    alpha["left"] = TR;
    alpha["right"] = TL;
    alpha["top"] = RF;
    alpha["base"] = RB;

    unordered_map<string, Perm> alphaInv;
    for (auto &e : alpha)
        alphaInv[e.first] = inverse(e.second);

    // For axis-flip detection: apply same 90° functions used by α on basis vectors
    auto apply_to_vec = [&](const string &side, const Vec &v) -> Vec
    {
        if (side == "front")
            return v;
        if (side == "back")
            return rotYminus(rotYminus(v));
        if (side == "left")
            return rotYplus(v);
        if (side == "right")
            return rotYminus(v);
        if (side == "top")
            return rotXplus(v);
        /* base */ return rotXminus(v);
    };
    auto side_id = [&](const string &s) -> int
    {
        if (s == "front")
            return F;
        if (s == "back")
            return B;
        if (s == "top")
            return U;
        if (s == "base")
            return D;
        if (s == "left")
            return L;
        return R;
    };

    // Front canonical slice permutations for all indices
    vector<Perm> rowL(n), rowR(n), colU(n), colD(n);
    for (int i = 0; i < n; ++i)
    {
        rowL[i] = permFrontRow(n, i, true);
        rowR[i] = permFrontRow(n, i, false);
        colU[i] = permFrontCol(n, i, true);
        colD[i] = permFrontCol(n, i, false);
    }

    // Expand each instruction to a permutation (with proper index flip)
    vector<Perm> P;
    P.reserve(k);
    for (string s : ops)
    {
        string t = s;
        for (char &ch : t)
            ch = tolower(ch);
        stringstream ss(t);
        vector<string> tok;
        string w;
        while (ss >> w)
            tok.push_back(w);

        if (tok.size() == 2)
        {
            if (tok[0] == "turn" && tok[1] == "left")
                P.push_back(TL);
            else if (tok[0] == "turn" && tok[1] == "right")
                P.push_back(TR);
            else if (tok[0] == "rotate" && tok[1] == "front")
                P.push_back(RF);
            else if (tok[0] == "rotate" && tok[1] == "back")
                P.push_back(RB);
            else if (tok[0] == "rotate" && tok[1] == "left")
                P.push_back(RL);
            else if (tok[0] == "rotate" && tok[1] == "right")
                P.push_back(RR);
            else
                P.push_back(ID);
            continue;
        }

        string side = tok[0];
        int idxRC = stoi(tok[1]) - 1; // 0-based
        string dir = tok[2];

        bool isRow = (dir == "left" || dir == "right");

        // Determine if that side's local axes flip when brought to front
        int sid = side_id(side);
        Vec uPrime = apply_to_vec(side, Uvec[sid]); // columns direction
        Vec vPrime = apply_to_vec(side, Vvec[sid]); // rows direction

        bool flipCol = (dot(uPrime, Uvec[F]) < 0);
        bool flipRow = (dot(vPrime, Vvec[F]) < 0);

        int idxFront = idxRC;
        if (isRow && flipRow)
            idxFront = (n - 1 - idxRC);
        if (!isRow && flipCol)
            idxFront = (n - 1 - idxRC);

        Perm frontMove = ID;
        if (isRow)
        {
            frontMove = (dir == "left") ? rowL[idxFront] : rowR[idxFront];
        }
        else
        {
            frontMove = (dir == "up") ? colU[idxFront] : colD[idxFront];
        }

        P.push_back(compose(alphaInv[side], compose(frontMove, alpha[side])));
    }

    // Prefix/suffix for O(1) per-skip composition
    vector<Perm> prefix(k), suffix(k + 1);
    suffix[k] = ID;
    for (int i = 0; i < k; ++i)
        prefix[i] = (i == 0) ? P[0] : compose(P[i], prefix[i - 1]);
    for (int i = k - 1; i >= 0; --i)
        suffix[i] = compose(suffix[i + 1], P[i]);

    int good = -1, faulty = -1;
    for (int skip = 0; skip < k; ++skip)
    {
        Perm net = compose(suffix[skip + 1], (skip == 0 ? ID : prefix[skip - 1]));
        vector<char> S = applyPerm(net, start);

        bool ok = false, almost = false;
        for (int f = 0; f < 6; ++f)
        {
            if (faceUniform(S, n, f))
            {
                ok = true;
                break;
            }
        }
        if (!ok)
            for (int f = 0; f < 6; ++f)
            {
                if (faceOneOff(S, n, f))
                {
                    almost = true;
                    break;
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
        cout << ops[good] << '\n';
    }
    else if (faulty != -1)
    {
        cout << "Faulty\n"
             << ops[faulty] << '\n';
    }
    else
    {
        cout << "Not Possible\n";
    }
    return 0;
}
