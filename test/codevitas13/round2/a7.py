import sys
from collections import deque, defaultdict

def dmj_solve_interstellar():
    try:
        input_data = sys.stdin.read().splitlines()
    except Exception:
        return

    iterator = iter(input_data)
    
    try:
        first_line = next(iterator, "").strip()
        while not first_line:
            first_line = next(iterator).strip()
        
        num_relations = int(first_line)
        
        orbit_data = []
        
        for _ in range(num_relations):
            line = next(iterator).strip()
            while not line:
                line = next(iterator).strip()
            
            parts = line.split()
            
            if len(parts) == 3:
                satellite = parts[0]
                primary = parts[1]
                radius_val = int(parts[2])
            else:
                satellite = line[0]
                primary = line[1]
                radius_val = int(line[2:])
            
            orbit_data.append((satellite, primary, radius_val))
            
        last_line = next(iterator, "").strip()
        while not last_line:
            last_line = next(iterator).strip()
            
        parts = last_line.split()
        if len(parts) == 2:
            source_planet = parts[0]
            dest_planet = parts[1]
        else:
            source_planet = last_line[0]
            dest_planet = last_line[1]
            
    except StopIteration:
        return
    except ValueError:
        return

    orbit_tree = defaultdict(list)
    parent_map = {}
    radius_map = {}
    all_planets = set()

    for satellite, primary, radius_val in orbit_data:
        orbit_tree[primary].append(satellite)
        parent_map[satellite] = primary
        radius_map[satellite] = radius_val
        all_planets.add(satellite)
        all_planets.add(primary)

    root_planet = None
    for p in all_planets:
        if p not in parent_map:
            root_planet = p
            break
            
    if not root_planet:
        return

    MAX_TIME = 200
    
    trajectory_db = defaultdict(lambda: [(0, 0)] * (MAX_TIME + 1))
    
    queue = deque([root_planet])
    processed = {root_planet}
    
    while queue:
        current_planet = queue.popleft()
        parent_traj = trajectory_db[current_planet]
        
        for satellite in orbit_tree[current_planet]:
            rad = radius_map[satellite]
            dist = rad - 1
            
            sat_traj = []
            
            if dist <= 0:
                trajectory_db[satellite] = parent_traj[:]
            else:
                orbit_period = 8 * dist
                
                for t in range(MAX_TIME + 1):
                    parent_x, parent_y = parent_traj[t]
                    
                    phase = t % orbit_period
                    rel_x, rel_y = 0, 0
                    
                    if phase <= dist:
                        rel_x = dist
                        rel_y = phase
                    elif phase <= 3 * dist:
                        rel_y = dist
                        rel_x = dist - (phase - dist)
                    elif phase <= 5 * dist:
                        rel_x = -dist
                        rel_y = dist - (phase - 3 * dist)
                    elif phase <= 7 * dist:
                        rel_y = -dist
                        rel_x = -dist + (phase - 5 * dist)
                    else:
                        rel_x = dist
                        rel_y = -dist + (phase - 7 * dist)
                    
                    sat_traj.append((parent_x + rel_x, parent_y + rel_y))
                
                trajectory_db[satellite] = sat_traj
            
            if satellite not in processed:
                processed.add(satellite)
                queue.append(satellite)

    s_traj = trajectory_db[source_planet]
    d_traj = trajectory_db[dest_planet]
    
    for t_arr in range(MAX_TIME + 1):
        dest_pos = d_traj[t_arr]
        dx, dy = dest_pos
        
        for t_dep in range(t_arr + 1):
            src_pos = s_traj[t_dep]
            sx, sy = src_pos
            
            flight_dist = abs(dx - sx) + abs(dy - sy)
            time_budget = t_arr - t_dep
            
            if flight_dist <= time_budget and (time_budget - flight_dist) % 2 == 0:
                print(t_arr, sep="", end="")
                return

if __name__ == "__main__":
    dmj_solve_interstellar()
