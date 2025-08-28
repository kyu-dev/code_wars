def number(lines):
    editor = []
    for i, line in enumerate(lines):
        editor.append(f"{i+1}: {line}")
    return editor

number(["a","b","c"])
