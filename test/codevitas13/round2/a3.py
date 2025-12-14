import sys

def add_vectors(a, b):
    return (a[0] + b[0], a[1] + b[1], a[2] + b[2])

def subtract_vectors(a, b):
    return (a[0] - b[0], a[1] - b[1], a[2] - b[2])

def negate_vector(a):
    return (-a[0], -a[1], -a[2])

def dmj_unfold_solver():
    data = sys.stdin.read().split()
    if not data:
        return

    net_rows = data[:4]
    face_letters_stream = data[4]
    corner_query = data[5]

    face_to_chars = {}
    discovered_face_order = []
    origin_cell = None

    for row_index, row_contents in enumerate(net_rows):
        for col_index, cell in enumerate(row_contents):
            if cell != '.':
                discovered_face_order.append(cell)
                if origin_cell is None:
                    origin_cell = (row_index, col_index)

    block_size = 4
    for i, face_label in enumerate(discovered_face_order):
        start_index = i * block_size
        face_to_chars[face_label] = face_letters_stream[start_index:start_index + block_size]

    face_corner_positions = {}
    exploration_queue = [(origin_cell[0], origin_cell[1], (0, 0, 1), (0, 1, 0), (1, 0, 0))]
    visited_cells = {origin_cell}

    while exploration_queue:
        current_row, current_col, normal_vec, up_vec, right_vec = exploration_queue.pop(0)
        face_label = net_rows[current_row][current_col]

        corner_list = []
        corner_list.append(subtract_vectors(add_vectors(normal_vec, up_vec), right_vec))
        corner_list.append(add_vectors(add_vectors(normal_vec, up_vec), right_vec))
        corner_list.append(subtract_vectors(subtract_vectors(normal_vec, up_vec), right_vec))
        corner_list.append(add_vectors(subtract_vectors(normal_vec, up_vec), right_vec))

        face_corner_positions[face_label] = corner_list

        if current_row - 1 >= 0:
            nr, nc = current_row - 1, current_col
            if net_rows[nr][nc] != '.' and (nr, nc) not in visited_cells:
                visited_cells.add((nr, nc))
                exploration_queue.append((nr, nc, up_vec, negate_vector(normal_vec), right_vec))

        if current_row + 1 < 4:
            nr, nc = current_row + 1, current_col
            if net_rows[nr][nc] != '.' and (nr, nc) not in visited_cells:
                visited_cells.add((nr, nc))
                exploration_queue.append((nr, nc, negate_vector(up_vec), normal_vec, right_vec))

        if current_col - 1 >= 0:
            nr, nc = current_row, current_col - 1
            if net_rows[nr][nc] != '.' and (nr, nc) not in visited_cells:
                visited_cells.add((nr, nc))
                exploration_queue.append((nr, nc, negate_vector(right_vec), up_vec, normal_vec))

        if current_col + 1 < 4:
            nr, nc = current_row, current_col + 1
            if net_rows[nr][nc] != '.' and (nr, nc) not in visited_cells:
                visited_cells.add((nr, nc))
                exploration_queue.append((nr, nc, right_vec, up_vec, negate_vector(normal_vec)))

    face_a, face_b, face_c = corner_query[0], corner_query[1], corner_query[2]
    corners_a = face_corner_positions[face_a]
    corners_b = face_corner_positions[face_b]
    corners_c = face_corner_positions[face_c]

    meeting_corner = None
    for corner in corners_a:
        if corner in corners_b and corner in corners_c:
            meeting_corner = corner
            break

    if meeting_corner is None:
        return

    output_chars = []
    output_chars.append(face_to_chars[face_a][corners_a.index(meeting_corner)])
    output_chars.append(face_to_chars[face_b][corners_b.index(meeting_corner)])
    output_chars.append(face_to_chars[face_c][corners_c.index(meeting_corner)])
    sys.stdout.write("".join(output_chars))

if __name__ == "__main__":
    dmj_unfold_solver()
