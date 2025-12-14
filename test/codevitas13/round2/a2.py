import sys
from collections import deque

sys.setrecursionlimit(1000)

class MatchingSolver:
    def __init__(self, vertices):
        self.num_vertices = vertices
        self.adj_list = [[] for _ in range(vertices)]
        self.match = [-1] * vertices
        self.father = [-1] * vertices
        self.base = []
        self.marked = []
        self.in_blossom = []
        self.queue = deque()

    def add_edge(self, u, v):
        self.adj_list[u].append(v)
        self.adj_list[v].append(u)

    def get_lca(self, root, u, v):
        visited = [False] * self.num_vertices
        curr = u
        while True:
            curr = self.base[curr]
            visited[curr] = True
            if self.match[curr] == -1:
                break
            curr = self.father[self.match[curr]]
        curr = v
        while True:
            curr = self.base[curr]
            if visited[curr]:
                return curr
            curr = self.father[self.match[curr]]

    def mark_blossom(self, u, lca, child):
        while self.base[u] != lca:
            p = self.base[u]
            self.in_blossom[p] = True
            self.in_blossom[self.base[self.match[u]]] = True
            self.father[u] = child
            child = self.match[u]
            u = self.father[self.match[u]]

    def find_augmenting_path(self, root):
        self.marked = [False] * self.num_vertices
        self.father = [-1] * self.num_vertices
        self.base = list(range(self.num_vertices))
        self.queue.clear()
        self.queue.append(root)
        self.marked[root] = True

        while self.queue:
            u = self.queue.popleft()
            for v in self.adj_list[u]:
                if self.base[u] == self.base[v] or self.match[u] == v:
                    continue
                if v == root or (self.match[v] != -1 and self.father[self.match[v]] != -1):
                    lca = self.get_lca(root, u, v)
                    self.in_blossom = [False] * self.num_vertices
                    self.mark_blossom(u, lca, v)
                    self.mark_blossom(v, lca, u)
                    for i in range(self.num_vertices):
                        if self.in_blossom[self.base[i]]:
                            self.base[i] = lca
                            if not self.marked[i]:
                                self.marked[i] = True
                                self.queue.append(i)
                elif self.father[v] == -1:
                    self.father[v] = u
                    if self.match[v] == -1:
                        return v
                    nxt = self.match[v]
                    self.marked[nxt] = True
                    self.queue.append(nxt)
        return -1

    def greedy_match(self):
        for u in range(self.num_vertices):
            if self.match[u] == -1:
                for v in self.adj_list[u]:
                    if self.match[v] == -1:
                        self.match[u] = v
                        self.match[v] = u
                        break

    def solve(self):
        self.greedy_match()
        count = 0
        for i in range(self.num_vertices):
            if self.match[i] != -1:
                count += 1
        count //= 2
        for i in range(self.num_vertices):
            if self.match[i] == -1:
                endpoint = self.find_augmenting_path(i)
                if endpoint != -1:
                    while endpoint != -1:
                        parent = self.father[endpoint]
                        temp_next = self.match[parent]
                        self.match[endpoint] = parent
                        self.match[parent] = endpoint
                        endpoint = temp_next
                    count += 1
        return count

def calculate_minimum_holes():
    input_data = sys.stdin.read().split()
    if not input_data:
        return
    
    iterator = iter(input_data)
    
    try:
        dim_rows = int(next(iterator))
        dim_cols = int(next(iterator))
        num_lines = int(next(iterator))
        
        v_walls = set()
        h_walls = set()
        
        for _ in range(num_lines):
            x1 = int(next(iterator))
            y1 = int(next(iterator))
            x2 = int(next(iterator))
            y2 = int(next(iterator))
            
            if x1 == x2:
                start_y, end_y = min(y1, y2), max(y1, y2)
                for y in range(start_y, end_y):
                    if 0 <= y < dim_cols:
                        v_walls.add((x1, y))
            else:
                start_x, end_x = min(x1, x2), max(x1, x2)
                for x in range(start_x, end_x):
                    if 0 <= x < dim_rows:
                        h_walls.add((x, y1))
        
        grid = [[-1] * dim_cols for _ in range(dim_rows)]
        rooms = []
        room_id_counter = 0
        
        for r in range(dim_rows):
            for c in range(dim_cols):
                if grid[r][c] == -1:
                    current_room_cells = []
                    q = deque([(r, c)])
                    grid[r][c] = room_id_counter
                    current_room_cells.append((r, c))
                    
                    while q:
                        curr_x, curr_y = q.popleft()
                        
                        if curr_x > 0 and (curr_x, curr_y) not in v_walls:
                            if grid[curr_x-1][curr_y] == -1:
                                grid[curr_x-1][curr_y] = room_id_counter
                                q.append((curr_x-1, curr_y))
                                current_room_cells.append((curr_x-1, curr_y))
                        
                        if curr_x < dim_rows - 1 and (curr_x + 1, curr_y) not in v_walls:
                            if grid[curr_x+1][curr_y] == -1:
                                grid[curr_x+1][curr_y] = room_id_counter
                                q.append((curr_x+1, curr_y))
                                current_room_cells.append((curr_x+1, curr_y))
                        
                        if curr_y > 0 and (curr_x, curr_y) not in h_walls:
                            if grid[curr_x][curr_y-1] == -1:
                                grid[curr_x][curr_y-1] = room_id_counter
                                q.append((curr_x, curr_y-1))
                                current_room_cells.append((curr_x, curr_y-1))
                        
                        if curr_y < dim_cols - 1 and (curr_x, curr_y + 1) not in h_walls:
                            if grid[curr_x][curr_y+1] == -1:
                                grid[curr_x][curr_y+1] = room_id_counter
                                q.append((curr_x, curr_y+1))
                                current_room_cells.append((curr_x, curr_y+1))
                    
                    rooms.append(current_room_cells)
                    room_id_counter += 1
        
        for cells in rooms:
            xs = [p[0] for p in cells]
            ys = [p[1] for p in cells]
            min_x, max_x = min(xs), max(xs)
            min_y, max_y = min(ys), max(ys)
            
            width = max_x - min_x + 1
            height = max_y - min_y + 1
            
            if len(cells) != width * height:
                print("Invalid", end="")
                return

            for (cx, cy) in cells:
                if cx + 1 <= max_x:
                    if (cx + 1, cy) in v_walls:
                        print("Invalid", end="")
                        return
                if cy + 1 <= max_y:
                    if (cx, cy + 1) in h_walls:
                        print("Invalid", end="")
                        return

        solver = MatchingSolver(room_id_counter)
        
        added_edges = set()

        for r in range(dim_rows):
            for c in range(dim_cols):
                current_id = grid[r][c]
                
                if r < dim_rows - 1:
                    neighbor_id = grid[r+1][c]
                    if current_id != neighbor_id:
                        edge = tuple(sorted((current_id, neighbor_id)))
                        if edge not in added_edges:
                            solver.add_edge(current_id, neighbor_id)
                            added_edges.add(edge)
                
                if c < dim_cols - 1:
                    neighbor_id = grid[r][c+1]
                    if current_id != neighbor_id:
                        edge = tuple(sorted((current_id, neighbor_id)))
                        if edge not in added_edges:
                            solver.add_edge(current_id, neighbor_id)
                            added_edges.add(edge)

        max_matches = solver.solve()
        min_holes = room_id_counter - max_matches
        
        print(min_holes, end="")

    except Exception:
        return

if __name__ == "__main__":
    calculate_minimum_holes()