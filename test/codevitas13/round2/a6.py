import sys

sys.setrecursionlimit(5000)

def solve():
    def input_generator():
        input_data = sys.stdin.read().split()
        for token in input_data:
            yield token

    iterator = input_generator()

    try:
        N_str = next(iterator)
        K_str = next(iterator)
        N = int(N_str)
        K = int(K_str)
    except StopIteration:
        return

    initial_colors = []
    for _ in range(6):
        for _ in range(N):
            for _ in range(N):
                initial_colors.append(next(iterator))

    commands = []
    raw_commands = []
    side_map = {'base': 0, 'back': 1, 'top': 2, 'front': 3, 'left': 4, 'right': 5}

    for _ in range(K):
        p1 = next(iterator)
        if p1 == 'turn':
            p2 = next(iterator)
            commands.append(('turn', p2, None, None))
            raw_commands.append(f"turn {p2}")
        elif p1 == 'rotate':
            p2 = next(iterator)
            commands.append(('rotate', p2, None, None))
            raw_commands.append(f"rotate {p2}")
        else:
            side_idx = side_map[p1]
            idx_token = next(iterator)
            idx = int(idx_token) - 1
            direction = next(iterator)
            commands.append(('move', side_idx, idx, direction))
            raw_commands.append(f"{p1} {idx_token} {direction}")

    def fast_copy(cube):
        return [[row[:] for row in face] for face in cube]

    def rotate_cw(face):
        return [list(x) for x in zip(*face[::-1])]

    def rotate_ccw(face):
        return [list(x) for x in zip(*face)][::-1]

    def turn_left(c):
        return [rotate_ccw(c[0]), c[4], rotate_cw(c[2]), c[5], c[3], c[1]]

    def turn_right(c):
        return [rotate_cw(c[0]), c[5], rotate_ccw(c[2]), c[4], c[1], c[3]]

    def rotate_front(c):
        return [c[3], c[0], c[1], c[2], rotate_cw(c[4]), rotate_ccw(c[5])]

    def rotate_back(c):
        return [c[1], c[2], c[3], c[0], rotate_ccw(c[4]), rotate_cw(c[5])]

    def rotate_left_roll(c):
        return [c[4], rotate_cw(c[1]), c[5], rotate_ccw(c[3]), c[2], c[0]]

    def rotate_right_roll(c):
        return [c[5], rotate_ccw(c[1]), c[4], rotate_cw(c[3]), c[0], c[2]]

    def move_front_row_left(cube, r):
        c = fast_copy(cube)
        c[4][r] = cube[3][r][:]
        c[1][r] = cube[4][r][:]
        c[5][r] = cube[1][r][:]
        c[3][r] = cube[5][r][:]
        return c

    def move_front_row_right(cube, r):
        c = fast_copy(cube)
        c[5][r] = cube[3][r][:]
        c[1][r] = cube[5][r][:]
        c[4][r] = cube[1][r][:]
        c[3][r] = cube[4][r][:]
        return c

    def move_front_col_up(cube, idx):
        c = fast_copy(cube)
        for i in range(N):
            c[3][i][idx] = cube[0][i][idx]
            c[2][i][idx] = cube[3][i][idx]
            c[1][i][idx] = cube[2][i][idx]
            c[0][i][idx] = cube[1][i][idx]
        return c

    def move_front_col_down(cube, idx):
        c = fast_copy(cube)
        for i in range(N):
            c[0][i][idx] = cube[3][i][idx]
            c[1][i][idx] = cube[0][i][idx]
            c[2][i][idx] = cube[1][i][idx]
            c[3][i][idx] = cube[2][i][idx]
        return c

    def get_permutation_for_cmd(cmd):
        ref_cube = []
        counter = 0
        for _ in range(6):
            face = []
            for _ in range(N):
                row = []
                for _ in range(N):
                    row.append(counter)
                    counter += 1
                face.append(row)
            ref_cube.append(face)

        ctype, p1, p2, p3 = cmd
        res = ref_cube

        if ctype == 'turn':
            res = turn_left(ref_cube) if p1 == 'left' else turn_right(ref_cube)
        elif ctype == 'rotate':
            if p1 == 'front': res = rotate_front(ref_cube)
            elif p1 == 'back': res = rotate_back(ref_cube)
            elif p1 == 'left': res = rotate_left_roll(ref_cube)
            else: res = rotate_right_roll(ref_cube)
        elif ctype == 'move':
            side_idx = p1
            curr = ref_cube
            path = []
            if side_idx == 0:
                curr = rotate_back(curr)
                path.append(0)
            elif side_idx == 1:
                curr = turn_left(turn_left(curr))
                path.append(1)
            elif side_idx == 2:
                curr = rotate_front(curr)
                path.append(2)
            elif side_idx == 4:
                curr = turn_right(curr)
                path.append(3)
            elif side_idx == 5:
                curr = turn_left(curr)
                path.append(4)
            if p3 == 'left':
                curr = move_front_row_left(curr, p2)
            elif p3 == 'right':
                curr = move_front_row_right(curr, p2)
            elif p3 == 'up':
                curr = move_front_col_up(curr, p2)
            elif p3 == 'down':
                curr = move_front_col_down(curr, p2)
            for op in reversed(path):
                if op == 0: curr = rotate_front(curr)
                elif op == 1: curr = turn_right(turn_right(curr))
                elif op == 2: curr = rotate_back(curr)
                elif op == 3: curr = turn_left(curr)
                elif op == 4: curr = turn_right(curr)
            res = curr

        perm = []
        for f in range(6):
            for r in range(N):
                perm.extend(res[f][r])
        return perm

    def compose(perm_first, perm_second):
        return [perm_first[x] for x in perm_second]

    total_cells = 6 * N * N
    identity = list(range(total_cells))

    cmd_perms = [get_permutation_for_cmd(cmd) for cmd in commands]

    prefix_perms = []
    curr = identity
    for p in cmd_perms:
        curr = compose(curr, p)
        prefix_perms.append(curr)

    suffix_perms = [None] * K
    curr = identity
    for i in range(K - 1, -1, -1):
        curr = compose(cmd_perms[i], curr)
        suffix_perms[i] = curr

    faulty_solution = None
    face_size = N * N

    for skip_idx in range(K):
        if skip_idx == 0:
            state_before = identity
        else:
            state_before = prefix_perms[skip_idx - 1]

        if skip_idx == K - 1:
            transform_after = identity
        else:
            transform_after = suffix_perms[skip_idx + 1]

        final_perm = compose(state_before, transform_after)

        perfect_found = False
        current_faulty = False

        for f in range(6):
            start = f * face_size
            counts = {}
            for i in range(face_size):
                idx = final_perm[start + i]
                col = initial_colors[idx]
                counts[col] = counts.get(col, 0) + 1

            if len(counts) == 1:
                perfect_found = True
                break
            elif len(counts) == 2:
                if 1 in counts.values():
                    current_faulty = True

        if perfect_found:
            print(raw_commands[skip_idx])
            return

        if current_faulty and faulty_solution is None:
            faulty_solution = raw_commands[skip_idx]

    if faulty_solution:
        print("Faulty")
        print(faulty_solution)
    else:
        print("Not Possible")

if __name__ == '__main__':
    solve()
