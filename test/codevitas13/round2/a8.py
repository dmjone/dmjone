import sys
from collections import deque

sys.setrecursionlimit(1000)

def solve():
    try:
        input_data = sys.stdin.read().split()
    except Exception:
        return

    if not input_data:
        return

    iterator = iter(input_data)

    try:
        R = int(next(iterator))
        C = int(next(iterator))
        M = int(next(iterator))

        grid = []
        for _ in range(M):
            row = []
            for _ in range(C):
                row.append(next(iterator))
            grid.append(row)

        for _ in range(R - M):
            grid.append(['.' for _ in range(C)])

        colors = []
        scores = []
        
        while True:
            token = next(iterator)
            try:
                val = int(token)
                scores.append(val)
                break
            except ValueError:
                colors.append(token)
        
        for _ in range(len(colors) - 1):
            scores.append(int(next(iterator)))

        score_map = {col: val for col, val in zip(colors, scores)}

        start_col = int(next(iterator))
        current_paddle_len = int(next(iterator))
        min_paddle_len = int(next(iterator))
        K_target = int(next(iterator))

    except StopIteration:
        return

    ball_r = R - 1
    ball_c = start_col
    vel_r = -1
    vel_c = -1
    
    bounces = 0
    max_paddle_len = current_paddle_len
    
    steps = 0
    MAX_STEPS = 500000

    def is_brick(r, c):
        if 0 <= r < R and 0 <= c < C:
            return grid[r][c] != '.'
        return False

    while bounces < K_target and steps < MAX_STEPS:
        steps += 1
        
        next_r = ball_r + vel_r
        next_c = ball_c + vel_c

        if next_r >= R:
            half_p = current_paddle_len // 2
            p_center = ball_c 
            max_center = C - 1 - half_p
            p_center = max(half_p, min(p_center, max_center))
            p_left = p_center - half_p
            p_right = p_center + half_p
            if next_c <= p_left:
                vel_c = -1
            elif next_c >= p_right:
                vel_c = 1
            vel_r = -1
            ball_r = R - 1
            ball_c = max(0, min(next_c, C - 1))
            continue

        if next_c < 0:
            vel_c = -vel_c
            next_c = ball_c + vel_c
        elif next_c >= C:
            vel_c = -vel_c
            next_c = ball_c + vel_c
            
        if next_r < 0:
            vel_r = -vel_r
            next_r = ball_r + vel_r

        dest_brick = is_brick(next_r, next_c)
        v_brick = is_brick(next_r, ball_c)
        h_brick = is_brick(ball_r, next_c)
        
        hit_occurred = False
        hit_set = set()

        if dest_brick:
            if v_brick and h_brick:
                vel_r = -vel_r
                vel_c = -vel_c
                hit_set.add((next_r, ball_c))
                hit_set.add((ball_r, next_c))
                hit_occurred = True
            elif v_brick:
                vel_r = -vel_r
                hit_set.add((next_r, ball_c))
                hit_occurred = True
            elif h_brick:
                vel_c = -vel_c
                hit_set.add((ball_r, next_c))
                hit_occurred = True
            else:
                vel_r = -vel_r
                vel_c = -vel_c
                hit_set.add((next_r, next_c))
                hit_occurred = True
        else:
            if v_brick and h_brick:
                vel_r = -vel_r
                vel_c = -vel_c
                hit_set.add((next_r, ball_c))
                hit_set.add((ball_r, next_c))
                hit_occurred = True
            else:
                pass

        if hit_occurred:
            bounces += 1
            
            queue = deque(list(hit_set))
            falling_bricks = set(hit_set)
            
            while queue:
                curr_r, curr_c = queue.popleft()
                if not is_brick(curr_r, curr_c): continue
                
                curr_color = grid[curr_r][curr_c]
                
                neighbors = [(-1, 0), (1, 0), (0, -1), (0, 1)]
                for dr, dc in neighbors:
                    nr, nc = curr_r + dr, curr_c + dc
                    
                    if is_brick(nr, nc) and (nr, nc) not in falling_bricks:
                        should_fall = False
                        neighbor_color = grid[nr][nc]
                        
                        if neighbor_color == curr_color:
                            should_fall = True
                        
                        if nr == curr_r + 1 and nc == curr_c:
                            should_fall = True
                            
                        if should_fall:
                            falling_bricks.add((nr, nc))
                            queue.append((nr, nc))
            
            turn_score = 0
            for r, c in falling_bricks:
                if grid[r][c] in score_map:
                    turn_score += score_map[grid[r][c]]
                grid[r][c] = '.'
            
            max_limit = C if C % 2 != 0 else C - 1
            
            if turn_score > 0:
                if current_paddle_len < max_limit:
                    current_paddle_len += 2
                    if current_paddle_len > max_limit: current_paddle_len = max_limit
            elif turn_score < 0:
                if current_paddle_len > min_paddle_len:
                    current_paddle_len -= 2
                    if current_paddle_len < min_paddle_len: current_paddle_len = min_paddle_len
            
            if current_paddle_len > max_paddle_len:
                max_paddle_len = current_paddle_len
            
            ball_r += vel_r
            ball_c += vel_c
            ball_r = max(0, min(ball_r, R - 1))
            ball_c = max(0, min(ball_c, C - 1))

        else:
            ball_r = next_r
            ball_c = next_c

    print(max_paddle_len)

if __name__ == "__main__":
    solve()
