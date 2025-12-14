import sys
from collections import defaultdict, deque

def normalize_edge_set(edge_pairs):
    normalized = []
    for left, right in edge_pairs:
        if left > right:
            left, right = right, left
        normalized.append((left, right))
    normalized.sort()
    return tuple(normalized)

def find_all_simple_cycles(edge_pairs, vertex_list):
    adjacency = defaultdict(list)
    for u, v in edge_pairs:
        adjacency[u].append(v)
        adjacency[v].append(u)
    cycles = set()
    bound = len(vertex_list)

    def explore_from(source):
        stack = []
        position_in_stack = {}

        def go(node, parent):
            position_in_stack[node] = len(stack)
            stack.append(node)
            for neighbor in adjacency[node]:
                if neighbor == parent:
                    continue
                if neighbor in position_in_stack:
                    segment = tuple(stack[position_in_stack[neighbor]:])
                    if len(segment) >= 3:
                        m = min(segment)
                        i = segment.index(m)
                        arranged = tuple(list(segment[i:]) + list(segment[:i]))
                        cycles.add(arranged)
                elif len(stack) < bound:
                    go(neighbor, node)
            stack.pop()
            position_in_stack.pop(node, None)

        go(source, -1)

    for v in vertex_list:
        explore_from(v)
    return cycles

def rotate_along_cycle(edge_pairs, cycle, vertex_list):
    next_vertex = {v: v for v in vertex_list}
    length = len(cycle)
    for idx, v in enumerate(cycle):
        next_vertex[v] = cycle[(idx + 1) % length]
    moved = [(next_vertex[a], next_vertex[b]) for a, b in edge_pairs]
    return normalize_edge_set(moved)

def main():
    data = list(map(int, sys.stdin.read().strip().split()))
    it = iter(data)
    edge_count = next(it)

    current_edges = []
    present_vertices = set()
    for _ in range(edge_count):
        a, b = next(it), next(it)
        current_edges.append((a, b))
        present_vertices.add(a)
        present_vertices.add(b)

    goal_edges = [(next(it), next(it)) for _ in range(edge_count)]
    vertices = sorted(present_vertices)

    start_state = normalize_edge_set(current_edges)
    goal_state = normalize_edge_set(goal_edges)
    if start_state == goal_state:
        print(0)
        return

    agenda = deque([(start_state, 0)])
    visited = {start_state}

    while agenda:
        state, steps = agenda.popleft()
        edges_list = list(state)
        for cycle in find_all_simple_cycles(edges_list, vertices):
            next_state = rotate_along_cycle(edges_list, cycle, vertices)
            if next_state == goal_state:
                print(steps + 1)
                return
            if next_state not in visited:
                visited.add(next_state)
                agenda.append((next_state, steps + 1))

    print(-1)

if __name__ == "__main__":
    main()
