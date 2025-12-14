import sys
from collections import deque

class Point:
    def __init__(self, x, y):
        self.x = int(x)
        self.y = int(y)

    def __eq__(self, other):
        return self.x == other.x and self.y == other.y

    def __hash__(self):
        return hash((self.x, self.y))
    
    def __repr__(self):
        return f"({self.x}, {self.y})"

class Bar:
    def __init__(self, id, p1, p2):
        self.id = id
        if (p1.x < p2.x) or (p1.x == p2.x and p1.y < p2.y):
            self.p1 = p1
            self.p2 = p2
        else:
            self.p1 = p2
            self.p2 = p1
        
        self.midpoint = Point((self.p1.x + self.p2.x) // 2, (self.p1.y + self.p2.y) // 2)
        self.type = "INDIVIDUAL"
        self.pivot = self.midpoint
        self.partner = None

    def get_y(self, x):
        if not (self.p1.x <= x <= self.p2.x):
            return None
        if self.p1.x == self.p2.x:
            return None
        slope = (self.p2.y - self.p1.y) // (self.p2.x - self.p1.x)
        return self.p1.y + slope * (x - self.p1.x)

def rotate_point(pt, pivot, direction):
    dx = pt.x - pivot.x
    dy = pt.y - pivot.y
    if direction == 1:
        return Point(pivot.x + dy, pivot.y - dx)
    elif direction == -1:
        return Point(pivot.x - dy, pivot.y + dx)
    return pt

def get_slide_target(bar, start_pt, stop_at_pivot=True):
    if bar.p1.y < bar.p2.y:
        target = bar.p1
    else:
        target = bar.p2
        
    if stop_at_pivot and bar.type == "CROSS":
        py = bar.pivot.y
        sy = start_pt.y
        ty = target.y
        
        if start_pt == bar.pivot:
            return bar.pivot, 'PIVOT'
            
        if (sy > py > ty) or (sy < py < ty):
            return bar.pivot, 'PIVOT'
    
    return target, 'END'

def solve():
    input_data = sys.stdin.read().split()
    if not input_data:
        return

    iterator = iter(input_data)
    try:
        N = int(next(iterator))
        bars = []
        for i in range(N):
            x1, y1, x2, y2 = int(next(iterator)), int(next(iterator)), int(next(iterator)), int(next(iterator))
            bars.append(Bar(i, Point(x1, y1), Point(x2, y2)))
        ball_x = int(next(iterator))
        ball_y = int(next(iterator))
    except StopIteration:
        return

    for i in range(N):
        for j in range(i + 1, N):
            b1 = bars[i]
            b2 = bars[j]
            
            m1 = (b1.p2.y - b1.p1.y) // (b1.p2.x - b1.p1.x)
            m2 = (b2.p2.y - b2.p1.y) // (b2.p2.x - b2.p1.x)
            if m1 == m2:
                continue
            
            det = m1 - m2
            if det == 0:
                continue
            
            ix = (m1 * b1.p1.x - m2 * b2.p1.x + b2.p1.y - b1.p1.y) // det
            iy = b1.p1.y + m1 * (ix - b1.p1.x)
            
            if (min(b1.p1.x, b1.p2.x) < ix < max(b1.p1.x, b1.p2.x)) and \
               (min(b2.p1.x, b2.p2.x) < ix < max(b2.p1.x, b2.p2.x)):
                
                pivot = Point(ix, iy)
                b1.type = "CROSS"
                b2.type = "CROSS"
                b1.pivot = pivot
                b2.pivot = pivot
                b1.partner = b2
                b2.partner = b1

    queue = deque([Point(ball_x, ball_y)])
    visited_drops = set()
    visited_drops.add((ball_x, ball_y))
    
    ground_hits = set()

    while queue:
        curr = queue.popleft()
        
        hit_bar = None
        hit_y = -1
        
        for bar in bars:
            if min(bar.p1.x, bar.p2.x) <= curr.x <= max(bar.p1.x, bar.p2.x):
                y_on_bar = bar.get_y(curr.x)
                if y_on_bar is not None and y_on_bar < curr.y:
                    if y_on_bar > hit_y:
                        hit_y = y_on_bar
                        hit_bar = bar
        
        if hit_bar is None:
            ground_hits.add(curr.x)
            continue
        
        collision_pt = Point(curr.x, hit_y)
        
        next_drop_points = set()

        for d in [1, -1]:
            pivot = hit_bar.pivot
            new_ball = rotate_point(collision_pt, pivot, d)
            
            legs = []
            
            np1 = rotate_point(hit_bar.p1, pivot, d)
            np2 = rotate_point(hit_bar.p2, pivot, d)
            temp = Bar(-1, np1, np2)
            temp.pivot = pivot 
            temp.type = hit_bar.type
            legs.append(temp)
            
            if hit_bar.type == "CROSS" and collision_pt == pivot:
                pp1 = rotate_point(hit_bar.partner.p1, pivot, d)
                pp2 = rotate_point(hit_bar.partner.p2, pivot, d)
                temp_p = Bar(-2, pp1, pp2)
                temp_p.pivot = pivot
                temp_p.type = "CROSS"
                legs.append(temp_p)
            
            for leg in legs:
                dest, _ = get_slide_target(leg, new_ball, stop_at_pivot=False)
                next_drop_points.add(dest)

        slide_dest, status = get_slide_target(hit_bar, collision_pt, stop_at_pivot=True)
        
        if status == 'PIVOT':
            for d in [1, -1]:
                pivot = hit_bar.pivot
                legs = []
                
                np1 = rotate_point(hit_bar.p1, pivot, d)
                np2 = rotate_point(hit_bar.p2, pivot, d)
                legs.append(Bar(-1, np1, np2))
                
                pp1 = rotate_point(hit_bar.partner.p1, pivot, d)
                pp2 = rotate_point(hit_bar.partner.p2, pivot, d)
                legs.append(Bar(-2, pp1, pp2))
                
                for leg in legs:
                    dest, _ = get_slide_target(leg, pivot, stop_at_pivot=False)
                    if dest != pivot:
                        next_drop_points.add(dest)

        elif status == 'END':
            next_drop_points.add(slide_dest)
            
            for d in [1, -1]:
                pivot = hit_bar.pivot
                new_ball = rotate_point(slide_dest, pivot, d)
                
                np1 = rotate_point(hit_bar.p1, pivot, d)
                np2 = rotate_point(hit_bar.p2, pivot, d)
                temp = Bar(-1, np1, np2)
                
                final_dest, _ = get_slide_target(temp, new_ball, stop_at_pivot=False)
                next_drop_points.add(final_dest)

        for pt in next_drop_points:
            if (pt.x, pt.y) not in visited_drops:
                visited_drops.add((pt.x, pt.y))
                queue.append(pt)

    sorted_hits = sorted(list(ground_hits))
    for x in sorted_hits:
        print(f"{x} 0")

if __name__ == '__main__':
    solve()
