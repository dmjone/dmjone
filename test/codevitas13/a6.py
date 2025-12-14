import sys

def take_blocks(rows, step):
    widest = max(len(r) for r in rows) if rows else 0
    padded = [r + " " * (widest - len(r)) for r in rows]
    if widest < 3:
        return []
    count = (widest + (step - 3)) // step
    out = []
    for i in range(count):
        pos = i * step
        cell = ""
        for rr in padded:
            if pos + 3 > len(rr):
                rr = rr + " " * (pos + 3 - len(rr))
            cell += rr[pos:pos + 3]
        out.append(cell)
    return out

def choose_blocks(rows, expected=None):
    four = take_blocks(rows, 4)
    three = take_blocks(rows, 3)
    if expected is not None and expected > 0:
        if len(four) == expected:
            return four
        if len(three) == expected:
            return three
    def nonempty(v):
        c = 0
        for s in v:
            if any(ch != " " for ch in s):
                c += 1
        return c
    return four if nonempty(four) >= nonempty(three) else three

def as_bits(cell):
    return "".join("0" if ch == " " else "1" for ch in cell)

def catalog(area_rows, labels):
    blocks = choose_blocks(area_rows, len(labels))
    mapping = {}
    for i, lbl in enumerate(labels):
        if i < len(blocks):
            mapping[as_bits(blocks[i])] = lbl
    return mapping

def scan_expression(expr_rows, glyph_to_symbol):
    blocks = choose_blocks(expr_rows)
    tokens, current_number = [], []
    for b in blocks:
        key = as_bits(b)
        sym = glyph_to_symbol.get(key)
        if sym is None:
            if set(key) == {"0"}:
                continue
            else:
                continue
        if len(sym) == 1 and sym.isdigit():
            current_number.append(sym)
        else:
            if current_number:
                tokens.append("".join(current_number))
                current_number = []
            tokens.append(sym)
    if current_number:
        tokens.append("".join(current_number))
    return tokens

def pad_left(a, b):
    n = max(len(a), len(b))
    return a.rjust(n, "0"), b.rjust(n, "0")

def bits_or(a, b):
    a, b = pad_left(a, b)
    return "".join("1" if (x == "1" or y == "1") else "0" for x, y in zip(a, b))

def bits_and(a, b):
    a, b = pad_left(a, b)
    return "".join("1" if (x == "1" and y == "1") else "0" for x, y in zip(a, b))

def bits_not(s):
    return "".join("0" if c == "1" else "1" for c in s)

def digits_to_mask(num_text, digit_to_bits):
    out = []
    for ch in num_text:
        out.append(digit_to_bits.get(ch, "0" * 9))
    return "".join(out)

def mask_to_digits(mask, bits_to_digit):
    if not mask:
        return "0"
    missing = (9 - (len(mask) % 9)) % 9
    s = "0" * missing + mask
    res = []
    for i in range(0, len(s), 9):
        seg = s[i:i + 9]
        res.append(bits_to_digit.get(seg, "0"))
    joined = "".join(res)
    k = 0
    while k + 1 < len(joined) and joined[k] == "0":
        k += 1
    return joined[k:]

def evaluate(tokens, digit_to_bits):
    idx = 0
    def peek():
        return tokens[idx] if idx < len(tokens) else None
    def take():
        nonlocal idx
        t = peek()
        idx += 1
        return t
    def parse_unary():
        t = peek()
        if t == "~":
            take()
            return bits_not(parse_unary())
        if t == "(":
            take()
            val = parse_and()
            if peek() == ")":
                take()
            return val
        v = take()
        return digits_to_mask(v, digit_to_bits)
    def parse_or():
        val = parse_unary()
        while peek() == "|":
            take()
            rhs = parse_unary()
            val = bits_or(val, rhs)
        return val
    def parse_and():
        val = parse_or()
        while peek() == "&":
            take()
            rhs = parse_or()
            val = bits_and(val, rhs)
        return val
    return parse_and()

def main():
    raw = []
    for _ in range(9):
        line = sys.stdin.readline()
        if not line:
            raw.append("")
        else:
            raw.append(line[:-1] if line.endswith("\n") else line)
    top = raw[0:3]
    mid = raw[3:6]
    bot = raw[6:9]
    digit_labels = [str(i) for i in range(10)]
    op_labels = ["|", "&", "~", "(", ")"]
    digits_map = catalog(top, digit_labels)
    ops_map = catalog(mid, op_labels)
    bits_to_digit = dict(digits_map)
    digit_to_bits = {v: k for k, v in digits_map.items()}
    full_lexicon = {}
    full_lexicon.update(digits_map)
    full_lexicon.update(ops_map)
    tokens = scan_expression(bot, full_lexicon)
    result_bits = evaluate(tokens, digit_to_bits)
    answer = mask_to_digits(result_bits, bits_to_digit)
    print(answer)

if __name__ == "__main__":
    main()
