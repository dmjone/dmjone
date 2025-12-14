import sys

def solve():
    input_data = sys.stdin.read().split()
    if not input_data:
        return

    houses_meta = []
    max_global_height = 0

    for spec in input_data:
        direction = spec[-1]
        dims = spec[:-1].split('x')
        w = int(dims[0])
        h_wall = int(dims[1])
        
        h_roof = w // 2
        h_total = h_wall + h_roof
        
        is_inverted = (direction == 'U' or direction == 'D')
        is_swapped = (direction == 'L' or direction == 'R')
        
        left_char = '&' if is_swapped else '@'
        right_char = '@' if is_swapped else '&'
        
        if h_total > max_global_height:
            max_global_height = h_total
            
        houses_meta.append({
            'w': w,
            'hw': h_wall,
            'hr': h_roof,
            'ht': h_total,
            'inv': is_inverted,
            'lc': left_char,
            'rc': right_char
        })

    output_buffer = []
    
    SPACE = " "
    BASE_CHAR = "#"
    SLASH = "/"
    BACKSLASH = "\\"
    
    for r in range(max_global_height):
        line_parts = []
        
        for h in houses_meta:
            local_r = r - (max_global_height - h['ht'])
            
            w = h['w']
            
            if local_r < 0:
                line_parts.append(SPACE * w)
                continue
                
            if h['inv']:
                if local_r == 0:
                    line_parts.append(BASE_CHAR * w)
                elif local_r < h['hw']:
                    line_parts.append(f"{h['lc']}{SPACE * (w - 2)}{h['rc']}")
                else:
                    curr_roof_row = local_r - h['hw']
                    i = (h['hr'] - 1) - curr_roof_row
                    
                    gap = 2 * i
                    pad = (w - 2 - gap) // 2
                    line_parts.append(f"{SPACE * pad}{BACKSLASH}{SPACE * gap}{SLASH}{SPACE * pad}")
            else:
                if local_r < h['hr']:
                    i = local_r
                    gap = 2 * i
                    pad = (w - 2 - gap) // 2
                    line_parts.append(f"{SPACE * pad}{SLASH}{SPACE * gap}{BACKSLASH}{SPACE * pad}")
                elif local_r < (h['ht'] - 1):
                    line_parts.append(f"{h['lc']}{SPACE * (w - 2)}{h['rc']}")
                else:
                    line_parts.append(BASE_CHAR * w)

        output_buffer.append("".join(line_parts).rstrip())

    sys.stdout.write("\n".join(output_buffer))

if __name__ == '__main__':
    solve()
