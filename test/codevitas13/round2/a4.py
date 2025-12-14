import sys
from collections import deque, defaultdict

def solve():
    input_data = sys.stdin.read().split()
    if not input_data:
        return

    iterator = iter(input_data)
    
    try:
        S = int(next(iterator))
        
        grid = {}
        
        for l in range(S):
            for r in range(S):
                row_str = next(iterator)
                for c, char in enumerate(row_str):
                    if char != 'E':
                        grid[(l, r, c)] = char
                        
        start_l, start_r, start_c = int(next(iterator)), int(next(iterator)), int(next(iterator))
        gold_l, gold_r, gold_c = int(next(iterator)), int(next(iterator)), int(next(iterator))
        
        start_node = (start_l, start_r, start_c)
        gold_node = (gold_l, gold_r, gold_c)
        
        if start_node not in grid or gold_node not in grid:
            print(0, end="")
            return

    except StopIteration:
        return

    adj = defaultdict(list)
    
    def add_edge(u, v):
        if v in grid:
            adj[u].append(v)
            adj[v].append(u)

    for (l, r, c), char in grid.items():
        current = (l, r, c)
        
        if char == 'D':
            targets = [
                (l, r, c - 1),
                (l, r, c + 1),
                (l - 1, r, c),
                (l + 1, r, c)
            ]
            for t in targets:
                add_edge(current, t)
                
        elif char == 'L':
            target = (l, r - 1, c - 1)
            add_edge(current, target)
            
        elif char == 'R':
            target = (l, r - 1, c + 1)
            add_edge(current, target)
            
        elif char == 'B':
            target = (l + 1, r - 1, c)
            add_edge(current, target)
            
        elif char == 'F':
            target = (l - 1, r - 1, c)
            add_edge(current, target)

    queue = deque([(start_node, 0)])
    visited = {start_node}
    
    min_steps = -1
    
    while queue:
        curr, steps = queue.popleft()
        
        if curr == gold_node:
            min_steps = steps
            break
        
        for neighbor in adj[curr]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append((neighbor, steps + 1))
    
    print(min_steps, end="")

if __name__ == "__main__":
    solve()
