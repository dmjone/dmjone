import sys
from collections import defaultdict


def identity_perm(M):
    return list(range(M))

def compose(A, B):
    """Return A ∘ B (apply B, then A). Perms are dest->src mappings."""
    M = len(A)
    P = [0] * M
    for x in range(M):
        P[x] = A[B[x]]
    return P

def inverse(P):
    M = len(P)
    I = [0] * M
    for x in range(M):
        I[P[x]] = x
    return I

def ID(f, i, j, N):
    """1-based f,i,j -> 0-based linear id"""
    return (f - 1) * N * N + (i - 1) * N + (j - 1)

def row_ids(f, r, N):
    return [ID(f, r, j, N) for j in range(1, N + 1)]

def row_ids_rev(f, r, N):
    L = row_ids(f, r, N)
    L.reverse()
    return L

def col_ids(f, c, N):
    return [ID(f, i, c, N) for i in range(1, N + 1)]

def col_ids_rev(f, c, N):
    L = col_ids(f, c, N)
    L.reverse()
    return L

def rotate_face_perm(f, which, N):
    """Rotate face f in place. which in {'CW','CCW','CW2'}."""
    M = 6 * N * N
    P = identity_perm(M)
    for i in range(1, N + 1):
        for j in range(1, N + 1):
            if which == 'CW':
                ni, nj = j, N - i + 1
            elif which == 'CCW':
                ni, nj = N - j + 1, i
            else:  # 180°
                ni, nj = N - i + 1, N - j + 1
            dst = ID(f, ni, nj, N)
            src = ID(f, i, j, N)
            P[dst] = src
    return P


def perm_turn_left(N):
    M = 6 * N * N
    P = identity_perm(M)
    for i in range(1, N + 1):
        for j in range(1, N + 1):
            P[ID(5, i, j, N)] = ID(4, i, j, N) 
            P[ID(2, i, j, N)] = ID(5, i, j, N) 
            P[ID(6, i, j, N)] = ID(2, i, j, N) 
            P[ID(4, i, j, N)] = ID(6, i, j, N) 
    P = compose(rotate_face_perm(3, 'CW', N), P)    # top CW
    P = compose(rotate_face_perm(1, 'CCW', N), P)   # base CCW
    return P

def perm_turn_right(N):
    return inverse(perm_turn_left(N))

def perm_rotate_front(N):
    
    M = 6 * N * N
    P = identity_perm(M)
    for i in range(1, N + 1):
        for j in range(1, N + 1):
            P[ID(1, i, j, N)] = ID(4, i, j, N)  
            P[ID(2, i, j, N)] = ID(1, i, j, N)  
            P[ID(3, i, j, N)] = ID(2, i, j, N)  
            P[ID(4, i, j, N)] = ID(3, i, j, N)  
    P = compose(rotate_face_perm(5, 'CW', N), P)    # left CW
    P = compose(rotate_face_perm(6, 'CCW', N), P)   # right CCW
    return P

def perm_rotate_back(N):
    return inverse(perm_rotate_front(N))

def perm_rotate_left(N):
    
    M = 6 * N * N
    P = identity_perm(M)
    for i in range(1, N + 1):
        for j in range(1, N + 1):
            P[ID(5, i, j, N)] = ID(3, i, j, N)  
            P[ID(1, i, j, N)] = ID(5, i, j, N)  
            P[ID(6, i, j, N)] = ID(1, i, j, N)  
            P[ID(3, i, j, N)] = ID(6, i, j, N)  
    P = compose(rotate_face_perm(4, 'CCW', N), P)   # front CCW
    P = compose(rotate_face_perm(2, 'CW', N), P)    # back CW
    return P

def perm_rotate_right(N):
    return inverse(perm_rotate_left(N))


def bring_to_front(side, N):
    if side == 'front':
        return identity_perm(6 * N * N)
    if side == 'left':
        return perm_turn_right(N)
    if side == 'right':
        return perm_turn_left(N)
    if side == 'top':
        return perm_rotate_front(N)
    if side == 'base':
        return perm_rotate_back(N)
    if side == 'back':
        TL = perm_turn_left(N)
        return compose(TL, TL)  # turn left twice
    raise ValueError("Unknown side: " + side)

def _put_ring_left(segments, P):
    """segments = [S0,S1,S2,S3], each a list of ids"""
    for k in range(4):
        FROM = segments[(k + 3) % 4]
        TO = segments[k]
        for t in range(len(FROM)):
            P[TO[t]] = FROM[t]

def perm_front_row_left(N, r):
    M = 6 * N * N
    P = identity_perm(M)
    segs = [
        row_ids(5, r, N),
        row_ids_rev(2, r, N),
        row_ids(6, r, N),
        row_ids(4, r, N),
    ]
    _put_ring_left(segs, P)
    return P

def perm_front_row_right(N, r):
    return inverse(perm_front_row_left(N, r))

def perm_front_col_up(N, c):
    M = 6 * N * N
    P = identity_perm(M)
    bc = N - c + 1
    segs = [
        col_ids(3, c, N),
        col_ids_rev(2, bc, N),
        col_ids(1, c, N),
        col_ids(4, c, N),
    ]
    _put_ring_left(segs, P)
    return P

def perm_front_col_down(N, c):
    return inverse(perm_front_col_up(N, c))

def perm_slice(side, k, direction, N):
    B = bring_to_front(side, N)
    Binv = inverse(B)
    if direction in ('left', 'right'):
        R = perm_front_row_left(N, k) if direction == 'left' else perm_front_row_right(N, k)
    else:
        R = perm_front_col_up(N, k) if direction == 'up' else perm_front_col_down(N, k)
    return compose(Binv, compose(R, B))

def perm_from_instruction(line, N):
    s = " ".join(line.strip().lower().split())
    if s == "turn left":
        return perm_turn_left(N)
    if s == "turn right":
        return perm_turn_right(N)
    if s == "rotate front":
        return perm_rotate_front(N)
    if s == "rotate back":
        return perm_rotate_back(N)
    if s == "rotate left":
        return perm_rotate_left(N)
    if s == "rotate right":
        return perm_rotate_right(N)
    parts = s.split()
    if len(parts) != 3:
        raise ValueError("Bad instruction: " + line)
    side, k, direction = parts[0], int(parts[1]), parts[2]
    return perm_slice(side, k, direction, N)


def solve():
    raw_lines = [ln.strip() for ln in sys.stdin.read().splitlines() if ln.strip() != ""]
    if not raw_lines:
        return
    first = raw_lines[0].split()
    N, K = int(first[0]), int(first[1])

    ptr = 1
    faces = [[] for _ in range(6)]  # list of lists of N lists each
    for f in range(6):
        grid = []
        for _ in range(N):
            tokens = raw_lines[ptr].split()
            ptr += 1
            if len(tokens) == 1 and len(tokens[0]) == N:
                row = list(tokens[0])
            else:
                row = tokens
            grid.append(row)
        faces[f] = grid

    M = 6 * N * N
    C0 = [''] * M
    for f in range(1, 7):
        for i in range(1, N + 1):
            for j in range(1, N + 1):
                C0[ID(f, i, j, N)] = faces[f - 1][i - 1][j - 1]

    instr = []
    for _ in range(K):
        if ptr >= len(raw_lines):
            break
        instr.append(raw_lines[ptr])
        ptr += 1

    P = [perm_from_instruction(line, N) for line in instr]

    pre = [identity_perm(M)]
    for t in range(K):
        pre.append(compose(P[t], pre[-1]))      # pre[t+1] = P[t] ∘ pre[t]

    suf = [None] * (K + 1)
    suf[K] = identity_perm(M)
    for t in range(K - 1, -1, -1):
        suf[t] = compose(suf[t + 1], P[t])      # suf[t] = P[K-1] ... P[t]

    best_not_faulty = None   # (index, instruction_str)
    best_faulty = None       # (index, instruction_str)

    for r in range(K):
        Q = compose(suf[r + 1], pre[r])
        face_best = N * N + 1
        for f in range(1, 7):
            counter = defaultdict(int)
            for i in range(1, N + 1):
                for j in range(1, N + 1):
                    dest = ID(f, i, j, N)
                    orig = Q[dest]
                    counter[C0[orig]] += 1
            maxfreq = max(counter.values())
            mismatches = N * N - maxfreq
            if mismatches < face_best:
                face_best = mismatches

        if face_best == 0:
            if best_not_faulty is None:
                best_not_faulty = (r, instr[r])
        elif face_best == 1:
            if best_faulty is None:
                best_faulty = (r, instr[r])

    if best_not_faulty is not None:
        print(best_not_faulty[1])
    elif best_faulty is not None:
        print("Faulty")
        print(best_faulty[1])
    else:
        print("Not Possible")

if __name__ == "__main__":
    solve()
