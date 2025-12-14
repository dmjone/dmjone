import sys
from collections import deque

def locate_token(lines, start_index, token):
    token = token.lower()
    index = start_index
    while index < len(lines):
        if lines[index].strip().lower() == token:
            return index
        index += 1
    return -1

def parse_problem_input(raw_text):
    all_lines = raw_text.splitlines()
    cursor = 0
    while cursor < len(all_lines) and not all_lines[cursor].strip():
        cursor += 1
    number_of_instructions = int(all_lines[cursor].strip())
    cursor += 1
    shuffled_marker_index = locate_token(all_lines, cursor, "shuffled")
    cursor = shuffled_marker_index + 1
    shuffled_instructions = all_lines[cursor:cursor + number_of_instructions]
    cursor += number_of_instructions
    original_marker_index = locate_token(all_lines, cursor, "original")
    cursor = original_marker_index + 1
    original_instructions = all_lines[cursor:cursor + number_of_instructions]
    return number_of_instructions, shuffled_instructions, original_instructions

def iterate_all_cut_and_insert_states(state_tuple):
    length = len(state_tuple)
    for left_index in range(length):
        for right_index in range(left_index + 1, length + 1):
            block = state_tuple[left_index:right_index]
            remainder = state_tuple[:left_index] + state_tuple[right_index:]
            for insert_position in range(len(remainder) + 1):
                if insert_position == left_index:
                    continue
                yield remainder[:insert_position] + block + remainder[insert_position:]

def minimum_block_insertions_to_sort(permutation):
    total_items = len(permutation)
    start_state = tuple(permutation)
    goal_state = tuple(range(total_items))
    if start_state == goal_state:
        return 0
    frontier_from_start = deque([start_state])
    frontier_from_goal = deque([goal_state])
    distance_from_start = {start_state: 0}
    distance_from_goal = {goal_state: 0}
    while frontier_from_start and frontier_from_goal:
        if len(frontier_from_start) <= len(frontier_from_goal):
            current_layer_size = len(frontier_from_start)
            for _ in range(current_layer_size):
                current_state = frontier_from_start.popleft()
                current_steps = distance_from_start[current_state]
                for next_state in iterate_all_cut_and_insert_states(current_state):
                    if next_state in distance_from_start:
                        continue
                    if next_state in distance_from_goal:
                        return current_steps + 1 + distance_from_goal[next_state]
                    distance_from_start[next_state] = current_steps + 1
                    frontier_from_start.append(next_state)
        else:
            current_layer_size = len(frontier_from_goal)
            for _ in range(current_layer_size):
                current_state = frontier_from_goal.popleft()
                current_steps = distance_from_goal[current_state]
                for next_state in iterate_all_cut_and_insert_states(current_state):
                    if next_state in distance_from_goal:
                        continue
                    if next_state in distance_from_start:
                        return current_steps + 1 + distance_from_start[next_state]
                    distance_from_goal[next_state] = current_steps + 1
                    frontier_from_goal.append(next_state)
    return 0

def build_target_permutation(shuffled_instructions, original_instructions):
    position_by_instruction = {text: index for index, text in enumerate(original_instructions)}
    return [position_by_instruction[text] for text in shuffled_instructions]

def main():
    number_of_instructions, shuffled_instructions, original_instructions = parse_problem_input(sys.stdin.read())
    target_permutation = build_target_permutation(shuffled_instructions, original_instructions)
    result = minimum_block_insertions_to_sort(target_permutation)
    print(result)

if __name__ == "__main__":
    main()
