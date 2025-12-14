import sys
from collections import defaultdict

def read_all_integers():
    tokens = sys.stdin.read().strip().split()
    return list(map(int, tokens)) if tokens else []

def build_slide_maps(slides):
    points_to_slides = defaultdict(list)
    step_after_point = {}
    for slide_id, (x1, y1, x2, y2) in enumerate(slides):
        step_x = 1 if x2 > x1 else -1
        upper_end = (x1, y1) if y1 > y2 else (x2, y2)
        length = abs(x2 - x1)
        if upper_end == (x1, y1):
            for t in range(length):
                px = x1 + step_x * t
                py = y1 - t
                points_to_slides[(px, py)].append(slide_id)
                step_after_point[(px, py, slide_id)] = (px + step_x, py - 1)
            points_to_slides[(x2, y2)].append(slide_id)
        else:
            for t in range(length):
                px = x2 - step_x * t
                py = y2 - t
                points_to_slides[(px, py)].append(slide_id)
                step_after_point[(px, py, slide_id)] = (px - step_x, py - 1)
            points_to_slides[(x1, y1)].append(slide_id)
    return points_to_slides, step_after_point

def drop_by_gravity(x, y, points_to_slides):
    for yy in range(y - 1, -1, -1):
        if (x, yy) in points_to_slides:
            return x, yy
    return x, 0

def simulate_motion(start_x, start_y, energy, points_to_slides, step_after_point):
    curr_x, curr_y = start_x, start_y
    if (curr_x, curr_y) not in points_to_slides:
        curr_x, curr_y = drop_by_gravity(curr_x, curr_y, points_to_slides)
    while True:
        if curr_y == 0:
            break
        slide_ids = points_to_slides.get((curr_x, curr_y))
        if not slide_ids:
            curr_x, curr_y = drop_by_gravity(curr_x, curr_y, points_to_slides)
            continue
        if len(slide_ids) == 1:
            s = slide_ids[0]
            nxt = step_after_point.get((curr_x, curr_y, s))
            if not nxt:
                curr_x, curr_y = drop_by_gravity(curr_x, curr_y, points_to_slides)
                continue
            if energy == 0:
                break
            energy -= 1
            curr_x, curr_y = nxt
        else:
            unlock_cost = curr_x * curr_y
            options = []
            for s in slide_ids:
                nxt = step_after_point.get((curr_x, curr_y, s))
                if nxt is not None:
                    options.append(nxt)
            if energy <= unlock_cost:
                if not options:
                    curr_x, curr_y = drop_by_gravity(curr_x, curr_y, points_to_slides)
                    continue
                break
            energy -= unlock_cost
            if not options:
                curr_x, curr_y = drop_by_gravity(curr_x, curr_y, points_to_slides)
                continue
            next_x, next_y = max(options, key=lambda p: p[1])
            if energy == 0:
                break
            energy -= 1
            curr_x, curr_y = next_x, next_y
    return curr_x, curr_y

def main():
    data = read_all_integers()
    if not data:
        return
    idx = 0
    count_slides = data[idx]; idx += 1
    slides = []
    for _ in range(count_slides):
        x1, y1, x2, y2 = data[idx:idx + 4]; idx += 4
        slides.append((x1, y1, x2, y2))
    start_x, start_y, energy = data[idx:idx + 3]
    points_to_slides, step_after_point = build_slide_maps(slides)
    final_x, final_y = simulate_motion(start_x, start_y, energy, points_to_slides, step_after_point)
    print(final_x, final_y)

if __name__ == "__main__":
    main()
