# TrussSketch AngelScript Migration - Website Tasks

This document describes the website (trussc.org) changes needed for the AngelScript version of TrussSketch.

## Background

TrussSketch is migrating from ChaiScript to AngelScript to reduce WASM binary size:
- ChaiScript: ~31MB (87% of total)
- AngelScript: ~300-500KB expected

## Branch

Work on the `angelscript` branch.

```bash
git checkout angelscript
```

---

## Task 1: Update TrussSketch Page

**File:** `sketch/index.html`

### Changes needed:
1. Update the description to mention AngelScript (optional - can keep generic)
2. No syntax changes needed - AngelScript syntax is nearly identical to current

### No action required if:
- The page doesn't mention "ChaiScript" explicitly
- Syntax examples still work (AngelScript is C++-like)

---

## Task 2: Update API Reference JS

**File:** `generated/trusssketch-api.js`

### Changes needed:
- This file is auto-generated from `TrussC/docs/api-definition.yaml`
- No manual changes needed
- Will be regenerated after TrussSketch bindings are updated

---

## Task 3: Update Syntax Examples (if any)

### Syntax comparison:

**Before (ChaiScript):**
```cpp
def setup() {
    var x = 10
}

def draw() {
    clear(0.1)
    drawCircle(100, 100, 50)
}
```

**After (AngelScript):**
```cpp
void setup() {
    int x = 10;
}

void draw() {
    clear(0.1f);
    drawCircle(100, 100, 50);
}
```

### Key differences:
| ChaiScript | AngelScript |
|------------|-------------|
| `def` | `void` / return type |
| `var` | `int`, `float`, etc. (explicit type) |
| No semicolons | Semicolons required |
| `10` | `10` or `10.0f` (typed literals) |

---

## Task 4: Deploy New WASM

**Files:**
- `sketch/TrussSketch.wasm`
- `sketch/TrussSketch.js`

### Steps:
1. Wait for TrussSketch AngelScript build to complete
2. Copy built files from `TrussSketch/bin/`
3. Upload to R2:
   ```bash
   cd TrussSketch/bin
   wrangler r2 object put trussc-wasm/sketch/TrussSketch.wasm --file TrussSketch.wasm --remote
   wrangler r2 object put trussc-wasm/sketch/TrussSketch.js --file TrussSketch.js --remote
   ```

---

## Task 5: Update Documentation (if exists)

Check these files for ChaiScript mentions:
- `sketch/` directory
- Any tutorial or guide pages

Replace "ChaiScript" with "AngelScript" where appropriate.

---

## Testing Checklist

- [ ] Sketch page loads without errors
- [ ] Code editor works
- [ ] Run button executes script
- [ ] Basic drawing functions work (`clear`, `drawCircle`, etc.)
- [ ] Syntax highlighting works (may need adjustment for type declarations)

---

## Notes

- AngelScript syntax is closer to C++ than ChaiScript
- Users need to declare types explicitly (`int`, `float`, `void`)
- Semicolons are required
- The API itself (function names, parameters) remains the same
