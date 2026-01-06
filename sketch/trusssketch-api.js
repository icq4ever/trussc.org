// TrussSketch API Definition
// This is the single source of truth for all TrussSketch functions.
// Used by: autocomplete, reference page, REFERENCE.md generation
//
// AUTO-GENERATED from api-definition.yaml
// Do not edit directly - edit api-definition.yaml instead

const TrussSketchAPI = {
    "categories": [
        {
            "name": "Lifecycle",
            "functions": [
                {
                    "name": "setup",
                    "params": "",
                    "desc": "Called once at start",
                    "snippet": "setup() {\n\t$0\n}"
                },
                {
                    "name": "update",
                    "params": "",
                    "desc": "Called every frame before draw",
                    "snippet": "update() {\n\t$0\n}"
                },
                {
                    "name": "draw",
                    "params": "",
                    "desc": "Called every frame after update",
                    "snippet": "draw() {\n\t$0\n}"
                }
            ]
        },
        {
            "name": "Events",
            "functions": [
                {
                    "name": "mousePressed",
                    "params": "x, y, button",
                    "desc": "Mouse button pressed",
                    "snippet": "mousePressed(x, y, button) {\n\t$0\n}"
                },
                {
                    "name": "mouseReleased",
                    "params": "x, y, button",
                    "desc": "Mouse button released",
                    "snippet": "mouseReleased(x, y, button) {\n\t$0\n}"
                },
                {
                    "name": "mouseMoved",
                    "params": "x, y",
                    "desc": "Mouse moved",
                    "snippet": "mouseMoved(x, y) {\n\t$0\n}"
                },
                {
                    "name": "mouseDragged",
                    "params": "x, y, button",
                    "desc": "Mouse dragged",
                    "snippet": "mouseDragged(x, y, button) {\n\t$0\n}"
                },
                {
                    "name": "keyPressed",
                    "params": "key",
                    "desc": "Key pressed",
                    "snippet": "keyPressed(key) {\n\t$0\n}"
                },
                {
                    "name": "keyReleased",
                    "params": "key",
                    "desc": "Key released",
                    "snippet": "keyReleased(key) {\n\t$0\n}"
                },
                {
                    "name": "windowResized",
                    "params": "width, height",
                    "desc": "Window resized",
                    "snippet": "windowResized(width, height) {\n\t$0\n}"
                }
            ]
        },
        {
            "name": "Graphics - Color",
            "functions": [
                {
                    "name": "clear",
                    "params": "gray",
                    "desc": "Clear screen",
                    "snippet": "clear(${1:0.0})"
                },
                {
                    "name": "clear",
                    "params": "r, g, b",
                    "desc": "Clear screen",
                    "snippet": "clear(${1:0.0})"
                },
                {
                    "name": "setColor",
                    "params": "gray",
                    "desc": "Set drawing color (0.0-1.0)",
                    "snippet": "setColor(${1:1.0}, ${2:1.0}, ${3:1.0})"
                },
                {
                    "name": "setColor",
                    "params": "r, g, b",
                    "desc": "Set drawing color (0.0-1.0)",
                    "snippet": "setColor(${1:1.0}, ${2:1.0}, ${3:1.0})"
                },
                {
                    "name": "setColor",
                    "params": "r, g, b, a",
                    "desc": "Set drawing color (0.0-1.0)",
                    "snippet": "setColor(${1:1.0}, ${2:1.0}, ${3:1.0})"
                },
                {
                    "name": "setColorHSB",
                    "params": "h, s, b",
                    "desc": "Set color from HSB (H: 0-TAU)",
                    "snippet": "setColorHSB(${1:0.0}, ${2:1.0}, ${3:1.0})"
                },
                {
                    "name": "setColorOKLCH",
                    "params": "L, C, H",
                    "desc": "Set color from OKLCH",
                    "snippet": "setColorOKLCH(${1:0.7}, ${2:0.15}, ${3:0.0})"
                },
                {
                    "name": "setColorOKLab",
                    "params": "L, a, b",
                    "desc": "Set color from OKLab",
                    "snippet": "setColorOKLab(${1:0.7}, ${2:0.0}, ${3:0.0})"
                }
            ]
        },
        {
            "name": "Graphics - Shapes",
            "functions": [
                {
                    "name": "drawRect",
                    "params": "x, y, w, h",
                    "desc": "Draw rectangle",
                    "snippet": "drawRect(${1:x}, ${2:y}, ${3:w}, ${4:h})"
                },
                {
                    "name": "drawCircle",
                    "params": "x, y, radius",
                    "desc": "Draw circle",
                    "snippet": "drawCircle(${1:x}, ${2:y}, ${3:radius})"
                },
                {
                    "name": "drawEllipse",
                    "params": "x, y, w, h",
                    "desc": "Draw ellipse",
                    "snippet": "drawEllipse(${1:x}, ${2:y}, ${3:w}, ${4:h})"
                },
                {
                    "name": "drawLine",
                    "params": "x1, y1, x2, y2",
                    "desc": "Draw line",
                    "snippet": "drawLine(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2})"
                },
                {
                    "name": "drawTriangle",
                    "params": "x1, y1, x2, y2, x3, y3",
                    "desc": "Draw triangle",
                    "snippet": "drawTriangle(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2}, ${5:x3}, ${6:y3})"
                },
                {
                    "name": "beginShape",
                    "params": "",
                    "desc": "Begin drawing a shape",
                    "snippet": "beginShape()"
                },
                {
                    "name": "vertex",
                    "params": "x, y",
                    "desc": "Add a vertex",
                    "snippet": "vertex(${1:x}, ${2:y})"
                },
                {
                    "name": "vertex",
                    "params": "x, y, z",
                    "desc": "Add a vertex",
                    "snippet": "vertex(${1:x}, ${2:y})"
                },
                {
                    "name": "vertex",
                    "params": "v",
                    "desc": "Add a vertex",
                    "snippet": "vertex(${1:x}, ${2:y})"
                },
                {
                    "name": "vertex",
                    "params": "v",
                    "desc": "Add a vertex",
                    "snippet": "vertex(${1:x}, ${2:y})"
                },
                {
                    "name": "endShape",
                    "params": "close",
                    "desc": "End drawing a shape",
                    "snippet": "endShape()"
                },
                {
                    "name": "drawBitmapString",
                    "params": "text, x, y",
                    "desc": "Draw text",
                    "snippet": "drawBitmapString(${1:\"text\"}, ${2:x}, ${3:y})"
                }
            ]
        },
        {
            "name": "Graphics - Style",
            "functions": [
                {
                    "name": "fill",
                    "params": "",
                    "desc": "Enable fill",
                    "snippet": "fill()"
                },
                {
                    "name": "noFill",
                    "params": "",
                    "desc": "Disable fill",
                    "snippet": "noFill()"
                },
                {
                    "name": "stroke",
                    "params": "",
                    "desc": "Enable stroke",
                    "snippet": "stroke()"
                },
                {
                    "name": "noStroke",
                    "params": "",
                    "desc": "Disable stroke",
                    "snippet": "noStroke()"
                },
                {
                    "name": "setStrokeWeight",
                    "params": "weight",
                    "desc": "Set stroke width",
                    "snippet": "setStrokeWeight(${1:1.0})"
                }
            ]
        },
        {
            "name": "Transform",
            "functions": [
                {
                    "name": "translate",
                    "params": "x, y",
                    "desc": "Move origin",
                    "snippet": "translate(${1:x}, ${2:y})"
                },
                {
                    "name": "translate",
                    "params": "x, y, z",
                    "desc": "Move origin",
                    "snippet": "translate(${1:x}, ${2:y})"
                },
                {
                    "name": "rotate",
                    "params": "radians",
                    "desc": "Rotate by radians",
                    "snippet": "rotate(${1:radians})"
                },
                {
                    "name": "rotateDeg",
                    "params": "degrees",
                    "desc": "Rotate by degrees",
                    "snippet": "rotateDeg(${1:degrees})"
                },
                {
                    "name": "scale",
                    "params": "s",
                    "desc": "Scale",
                    "snippet": "scale(${1:s})"
                },
                {
                    "name": "scale",
                    "params": "sx, sy",
                    "desc": "Scale",
                    "snippet": "scale(${1:s})"
                },
                {
                    "name": "pushMatrix",
                    "params": "",
                    "desc": "Save transform state",
                    "snippet": "pushMatrix()"
                },
                {
                    "name": "popMatrix",
                    "params": "",
                    "desc": "Restore transform state",
                    "snippet": "popMatrix()"
                }
            ]
        },
        {
            "name": "Window & Input",
            "functions": [
                {
                    "name": "getWindowWidth",
                    "params": "",
                    "desc": "Get canvas width",
                    "snippet": "getWindowWidth()"
                },
                {
                    "name": "getWindowHeight",
                    "params": "",
                    "desc": "Get canvas height",
                    "snippet": "getWindowHeight()"
                },
                {
                    "name": "getMouseX",
                    "params": "",
                    "desc": "Get mouse X position",
                    "snippet": "getMouseX()"
                },
                {
                    "name": "getMouseY",
                    "params": "",
                    "desc": "Get mouse Y position",
                    "snippet": "getMouseY()"
                },
                {
                    "name": "isMousePressed",
                    "params": "",
                    "desc": "Is mouse button pressed",
                    "snippet": "isMousePressed()"
                }
            ]
        },
        {
            "name": "Time - Frame",
            "functions": [
                {
                    "name": "getDeltaTime",
                    "params": "",
                    "desc": "Seconds since last frame",
                    "snippet": "getDeltaTime()"
                },
                {
                    "name": "getFrameRate",
                    "params": "",
                    "desc": "Current FPS",
                    "snippet": "getFrameRate()"
                },
                {
                    "name": "getFrameCount",
                    "params": "",
                    "desc": "Total frames rendered",
                    "snippet": "getFrameCount()"
                }
            ]
        },
        {
            "name": "Time - Elapsed",
            "functions": [
                {
                    "name": "getElapsedTimef",
                    "params": "",
                    "desc": "Elapsed seconds (float)",
                    "snippet": "getElapsedTimef()"
                },
                {
                    "name": "getElapsedTimeMillis",
                    "params": "",
                    "desc": "Elapsed milliseconds (int64)",
                    "snippet": "getElapsedTimeMillis()"
                },
                {
                    "name": "getElapsedTimeMicros",
                    "params": "",
                    "desc": "Elapsed microseconds (int64)",
                    "snippet": "getElapsedTimeMicros()"
                },
                {
                    "name": "resetElapsedTimeCounter",
                    "params": "",
                    "desc": "Reset elapsed time",
                    "snippet": "resetElapsedTimeCounter()"
                }
            ]
        },
        {
            "name": "Time - System",
            "functions": [
                {
                    "name": "getSystemTimeMillis",
                    "params": "",
                    "desc": "Unix time in milliseconds",
                    "snippet": "getSystemTimeMillis()"
                },
                {
                    "name": "getSystemTimeMicros",
                    "params": "",
                    "desc": "Unix time in microseconds",
                    "snippet": "getSystemTimeMicros()"
                },
                {
                    "name": "getTimestampString",
                    "params": "",
                    "desc": "Formatted timestamp",
                    "snippet": "getTimestampString()"
                },
                {
                    "name": "getTimestampString",
                    "params": "format",
                    "desc": "Formatted timestamp",
                    "snippet": "getTimestampString()"
                }
            ]
        },
        {
            "name": "Time - Current",
            "functions": [
                {
                    "name": "getSeconds",
                    "params": "",
                    "desc": "Current seconds (0-59)",
                    "snippet": "getSeconds()"
                },
                {
                    "name": "getMinutes",
                    "params": "",
                    "desc": "Current minutes (0-59)",
                    "snippet": "getMinutes()"
                },
                {
                    "name": "getHours",
                    "params": "",
                    "desc": "Current hours (0-23)",
                    "snippet": "getHours()"
                },
                {
                    "name": "getYear",
                    "params": "",
                    "desc": "Current year",
                    "snippet": "getYear()"
                },
                {
                    "name": "getMonth",
                    "params": "",
                    "desc": "Current month (1-12)",
                    "snippet": "getMonth()"
                },
                {
                    "name": "getDay",
                    "params": "",
                    "desc": "Current day (1-31)",
                    "snippet": "getDay()"
                },
                {
                    "name": "getWeekday",
                    "params": "",
                    "desc": "Weekday (0=Sun, 6=Sat)",
                    "snippet": "getWeekday()"
                }
            ]
        },
        {
            "name": "Math - Random & Noise",
            "functions": [
                {
                    "name": "random",
                    "params": "",
                    "desc": "Random number",
                    "snippet": "random()"
                },
                {
                    "name": "random",
                    "params": "max",
                    "desc": "Random number",
                    "snippet": "random()"
                },
                {
                    "name": "random",
                    "params": "min, max",
                    "desc": "Random number",
                    "snippet": "random()"
                },
                {
                    "name": "noise",
                    "params": "x",
                    "desc": "Perlin noise",
                    "snippet": "noise(${1:x})"
                },
                {
                    "name": "noise",
                    "params": "x, y",
                    "desc": "Perlin noise",
                    "snippet": "noise(${1:x})"
                },
                {
                    "name": "noise",
                    "params": "x, y, z",
                    "desc": "Perlin noise",
                    "snippet": "noise(${1:x})"
                },
                {
                    "name": "signedNoise",
                    "params": "x",
                    "desc": "Perlin noise (-1.0 to 1.0)",
                    "snippet": "signedNoise(${1:x})"
                },
                {
                    "name": "signedNoise",
                    "params": "x, y",
                    "desc": "Perlin noise (-1.0 to 1.0)",
                    "snippet": "signedNoise(${1:x})"
                },
                {
                    "name": "signedNoise",
                    "params": "x, y, z",
                    "desc": "Perlin noise (-1.0 to 1.0)",
                    "snippet": "signedNoise(${1:x})"
                },
                {
                    "name": "signedNoise",
                    "params": "x, y, z, w",
                    "desc": "Perlin noise (-1.0 to 1.0)",
                    "snippet": "signedNoise(${1:x})"
                },
                {
                    "name": "fbm",
                    "params": "x, y, octaves, lacunarity, gain",
                    "desc": "Fractal Brownian Motion noise",
                    "snippet": "fbm(${1:x}, ${2:y})"
                },
                {
                    "name": "fbm",
                    "params": "x, y, z, octaves, lacunarity, gain",
                    "desc": "Fractal Brownian Motion noise",
                    "snippet": "fbm(${1:x}, ${2:y})"
                }
            ]
        },
        {
            "name": "Math - Interpolation",
            "functions": [
                {
                    "name": "lerp",
                    "params": "a, b, t",
                    "desc": "Linear interpolation",
                    "snippet": "lerp(${1:a}, ${2:b}, ${3:t})"
                },
                {
                    "name": "clamp",
                    "params": "v, min, max",
                    "desc": "Clamp value to range",
                    "snippet": "clamp(${1:v}, ${2:min}, ${3:max})"
                },
                {
                    "name": "map",
                    "params": "v, inMin, inMax, outMin, outMax",
                    "desc": "Map value between ranges",
                    "snippet": "map(${1:v}, ${2:inMin}, ${3:inMax}, ${4:outMin}, ${5:outMax})"
                }
            ]
        },
        {
            "name": "Math - Trigonometry",
            "functions": [
                {
                    "name": "sin",
                    "params": "x",
                    "desc": "Sine",
                    "snippet": "sin(${1:x})"
                },
                {
                    "name": "cos",
                    "params": "x",
                    "desc": "Cosine",
                    "snippet": "cos(${1:x})"
                },
                {
                    "name": "tan",
                    "params": "x",
                    "desc": "Tangent",
                    "snippet": "tan(${1:x})"
                },
                {
                    "name": "asin",
                    "params": "x",
                    "desc": "Arc sine",
                    "snippet": "asin(${1:x})"
                },
                {
                    "name": "acos",
                    "params": "x",
                    "desc": "Arc cosine",
                    "snippet": "acos(${1:x})"
                },
                {
                    "name": "atan",
                    "params": "x",
                    "desc": "Arc tangent",
                    "snippet": "atan(${1:x})"
                },
                {
                    "name": "atan2",
                    "params": "y, x",
                    "desc": "Arc tangent of y/x",
                    "snippet": "atan2(${1:y}, ${2:x})"
                },
                {
                    "name": "deg2rad",
                    "params": "degrees",
                    "desc": "Degrees to radians",
                    "snippet": "deg2rad(${1:degrees})"
                },
                {
                    "name": "rad2deg",
                    "params": "radians",
                    "desc": "Radians to degrees",
                    "snippet": "rad2deg(${1:radians})"
                }
            ]
        },
        {
            "name": "Math - General",
            "functions": [
                {
                    "name": "abs",
                    "params": "x",
                    "desc": "Absolute value",
                    "snippet": "abs(${1:x})"
                },
                {
                    "name": "sqrt",
                    "params": "x",
                    "desc": "Square root",
                    "snippet": "sqrt(${1:x})"
                },
                {
                    "name": "sq",
                    "params": "x",
                    "desc": "Square (x*x)",
                    "snippet": "sq(${1:x})"
                },
                {
                    "name": "pow",
                    "params": "x, y",
                    "desc": "Power (x^y)",
                    "snippet": "pow(${1:x}, ${2:y})"
                },
                {
                    "name": "log",
                    "params": "x",
                    "desc": "Natural logarithm",
                    "snippet": "log(${1:x})"
                },
                {
                    "name": "exp",
                    "params": "x",
                    "desc": "Exponential (e^x)",
                    "snippet": "exp(${1:x})"
                },
                {
                    "name": "min",
                    "params": "a, b",
                    "desc": "Minimum",
                    "snippet": "min(${1:a}, ${2:b})"
                },
                {
                    "name": "max",
                    "params": "a, b",
                    "desc": "Maximum",
                    "snippet": "max(${1:a}, ${2:b})"
                },
                {
                    "name": "floor",
                    "params": "x",
                    "desc": "Round down",
                    "snippet": "floor(${1:x})"
                },
                {
                    "name": "ceil",
                    "params": "x",
                    "desc": "Round up",
                    "snippet": "ceil(${1:x})"
                },
                {
                    "name": "round",
                    "params": "x",
                    "desc": "Round to nearest",
                    "snippet": "round(${1:x})"
                },
                {
                    "name": "fmod",
                    "params": "x, y",
                    "desc": "Floating-point modulo",
                    "snippet": "fmod(${1:x}, ${2:y})"
                },
                {
                    "name": "sign",
                    "params": "x",
                    "desc": "Sign (-1, 0, 1)",
                    "snippet": "sign(${1:x})"
                },
                {
                    "name": "fract",
                    "params": "x",
                    "desc": "Fractional part",
                    "snippet": "fract(${1:x})"
                }
            ]
        },
        {
            "name": "Math - Geometry",
            "functions": [
                {
                    "name": "dist",
                    "params": "x1, y1, x2, y2",
                    "desc": "Distance between points",
                    "snippet": "dist(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2})"
                },
                {
                    "name": "distSquared",
                    "params": "x1, y1, x2, y2",
                    "desc": "Squared distance",
                    "snippet": "distSquared(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2})"
                }
            ]
        },
        {
            "name": "Window & System",
            "functions": [
                {
                    "name": "toggleFullscreen",
                    "params": "",
                    "desc": "Toggle fullscreen mode"
                },
                {
                    "name": "setClipboardString",
                    "params": "text",
                    "desc": "Copy text to clipboard"
                },
                {
                    "name": "getClipboardString",
                    "params": "",
                    "desc": "Get text from clipboard"
                }
            ]
        },
        {
            "name": "Utility",
            "functions": [
                {
                    "name": "logNotice",
                    "params": "message",
                    "desc": "Print to console",
                    "snippet": "logNotice(${1:\"message\"})"
                },
                {
                    "name": "to_string",
                    "params": "value",
                    "desc": "Convert to string",
                    "snippet": "to_string(${1:value})"
                },
                {
                    "name": "beep",
                    "params": "",
                    "desc": "Play a beep sound",
                    "snippet": "beep()"
                },
                {
                    "name": "beep",
                    "params": "frequency",
                    "desc": "Play a beep sound",
                    "snippet": "beep()"
                }
            ]
        },
        {
            "name": "Sound",
            "functions": [
                {
                    "name": "Sound",
                    "params": "",
                    "desc": "Create a sound player",
                    "snippet": "Sound()"
                },
                {
                    "name": "play",
                    "params": "",
                    "desc": "Play sound",
                    "snippet": "play()"
                },
                {
                    "name": "stop",
                    "params": "",
                    "desc": "Stop sound",
                    "snippet": "stop()"
                },
                {
                    "name": "setVolume",
                    "params": "vol",
                    "desc": "Set volume (0.0-1.0)",
                    "snippet": "setVolume(${1:0.8})"
                },
                {
                    "name": "setLoop",
                    "params": "loop",
                    "desc": "Enable/disable looping",
                    "snippet": "setLoop(${1:true})"
                }
            ]
        },
        {
            "name": "Animation",
            "functions": [
                {
                    "name": "Tween",
                    "params": "",
                    "desc": "Create a tween",
                    "snippet": "Tween()"
                },
                {
                    "name": "setDuration",
                    "params": "seconds",
                    "desc": "Set animation duration",
                    "snippet": "setDuration(${1:1.0})"
                },
                {
                    "name": "start",
                    "params": "",
                    "desc": "Start animation",
                    "snippet": "start()"
                },
                {
                    "name": "update",
                    "params": "dt",
                    "desc": "Update animation",
                    "snippet": "update(getDeltaTime())"
                },
                {
                    "name": "getValue",
                    "params": "",
                    "desc": "Get current tween value",
                    "snippet": "getValue()"
                }
            ]
        },
        {
            "name": "Types - Vec2",
            "functions": [
                {
                    "name": "Vec2",
                    "params": "",
                    "desc": "Create 2D vector",
                    "snippet": "Vec2(${1:x}, ${2:y})"
                },
                {
                    "name": "Vec2",
                    "params": "x, y",
                    "desc": "Create 2D vector",
                    "snippet": "Vec2(${1:x}, ${2:y})"
                },
                {
                    "name": "Vec2",
                    "params": "v",
                    "desc": "Create 2D vector",
                    "snippet": "Vec2(${1:x}, ${2:y})"
                },
                {
                    "name": "set",
                    "params": "x, y",
                    "desc": "Set vector components",
                    "snippet": "set(${1:x}, ${2:y})"
                },
                {
                    "name": "set",
                    "params": "v",
                    "desc": "Set vector components",
                    "snippet": "set(${1:x}, ${2:y})"
                },
                {
                    "name": "Vec2_fromAngle",
                    "params": "radians",
                    "desc": "Create Vec2 from angle",
                    "snippet": "Vec2_fromAngle(${1:radians})"
                },
                {
                    "name": "Vec2_fromAngle",
                    "params": "radians, length",
                    "desc": "Create Vec2 from angle",
                    "snippet": "Vec2_fromAngle(${1:radians})"
                }
            ]
        },
        {
            "name": "Types - Vec3",
            "functions": [
                {
                    "name": "Vec3",
                    "params": "",
                    "desc": "Create 3D vector",
                    "snippet": "Vec3(${1:x}, ${2:y}, ${3:z})"
                },
                {
                    "name": "Vec3",
                    "params": "x, y, z",
                    "desc": "Create 3D vector",
                    "snippet": "Vec3(${1:x}, ${2:y}, ${3:z})"
                },
                {
                    "name": "Vec3",
                    "params": "v",
                    "desc": "Create 3D vector",
                    "snippet": "Vec3(${1:x}, ${2:y}, ${3:z})"
                },
                {
                    "name": "set",
                    "params": "x, y, z",
                    "desc": "Set vector components",
                    "snippet": "set(${1:x}, ${2:y}, ${3:z})"
                },
                {
                    "name": "set",
                    "params": "v",
                    "desc": "Set vector components",
                    "snippet": "set(${1:x}, ${2:y}, ${3:z})"
                }
            ]
        },
        {
            "name": "Types - Color",
            "functions": [
                {
                    "name": "Color",
                    "params": "",
                    "desc": "Create color (0.0-1.0)",
                    "snippet": "Color(${1:r}, ${2:g}, ${3:b})"
                },
                {
                    "name": "Color",
                    "params": "r, g, b",
                    "desc": "Create color (0.0-1.0)",
                    "snippet": "Color(${1:r}, ${2:g}, ${3:b})"
                },
                {
                    "name": "Color",
                    "params": "r, g, b, a",
                    "desc": "Create color (0.0-1.0)",
                    "snippet": "Color(${1:r}, ${2:g}, ${3:b})"
                },
                {
                    "name": "set",
                    "params": "r, g, b",
                    "desc": "Set color components",
                    "snippet": "set(${1:r}, ${2:g}, ${3:b})"
                },
                {
                    "name": "set",
                    "params": "r, g, b, a",
                    "desc": "Set color components",
                    "snippet": "set(${1:r}, ${2:g}, ${3:b})"
                },
                {
                    "name": "set",
                    "params": "gray",
                    "desc": "Set color components",
                    "snippet": "set(${1:r}, ${2:g}, ${3:b})"
                },
                {
                    "name": "set",
                    "params": "c",
                    "desc": "Set color components",
                    "snippet": "set(${1:r}, ${2:g}, ${3:b})"
                },
                {
                    "name": "Color_fromHSB",
                    "params": "h, s, b",
                    "desc": "Create Color from HSB",
                    "snippet": "Color_fromHSB(${1:h}, ${2:s}, ${3:b})"
                },
                {
                    "name": "Color_fromHSB",
                    "params": "h, s, b, a",
                    "desc": "Create Color from HSB",
                    "snippet": "Color_fromHSB(${1:h}, ${2:s}, ${3:b})"
                },
                {
                    "name": "Color_fromOKLCH",
                    "params": "L, C, H",
                    "desc": "Create Color from OKLCH",
                    "snippet": "Color_fromOKLCH(${1:L}, ${2:C}, ${3:H})"
                },
                {
                    "name": "Color_fromOKLCH",
                    "params": "L, C, H, a",
                    "desc": "Create Color from OKLCH",
                    "snippet": "Color_fromOKLCH(${1:L}, ${2:C}, ${3:H})"
                },
                {
                    "name": "Color_fromOKLab",
                    "params": "L, a, b",
                    "desc": "Create Color from OKLab",
                    "snippet": "Color_fromOKLab(${1:L}, ${2:a}, ${3:b})"
                },
                {
                    "name": "Color_fromOKLab",
                    "params": "L, a, b, alpha",
                    "desc": "Create Color from OKLab",
                    "snippet": "Color_fromOKLab(${1:L}, ${2:a}, ${3:b})"
                }
            ]
        },
        {
            "name": "Types - Rect",
            "functions": [
                {
                    "name": "Rect",
                    "params": "",
                    "desc": "Create a rectangle",
                    "snippet": "Rect(${1:x}, ${2:y}, ${3:w}, ${4:h})"
                },
                {
                    "name": "Rect",
                    "params": "x, y, w, h",
                    "desc": "Create a rectangle",
                    "snippet": "Rect(${1:x}, ${2:y}, ${3:w}, ${4:h})"
                },
                {
                    "name": "set",
                    "params": "x, y, w, h",
                    "desc": "Set rectangle properties",
                    "snippet": "set(${1:x}, ${2:y}, ${3:w}, ${4:h})"
                },
                {
                    "name": "set",
                    "params": "pos, w, h",
                    "desc": "Set rectangle properties",
                    "snippet": "set(${1:x}, ${2:y}, ${3:w}, ${4:h})"
                },
                {
                    "name": "contains",
                    "params": "x, y",
                    "desc": "Check if point is inside",
                    "snippet": "contains(${1:x}, ${2:y})"
                },
                {
                    "name": "intersects",
                    "params": "other",
                    "desc": "Check intersection",
                    "snippet": "intersects(${1:other})"
                }
            ]
        },
        {
            "name": "Scene Graph",
            "functions": [
                {
                    "name": "Node",
                    "params": "",
                    "desc": "Create a base scene node",
                    "snippet": "Node()"
                },
                {
                    "name": "addChild",
                    "params": "child",
                    "desc": "Add a child node"
                },
                {
                    "name": "setPosition",
                    "params": "x, y",
                    "desc": "Set position"
                },
                {
                    "name": "setPosition",
                    "params": "pos",
                    "desc": "Set position"
                },
                {
                    "name": "RectNode",
                    "params": "",
                    "desc": "Create a 2D rectangle node",
                    "snippet": "RectNode()"
                },
                {
                    "name": "setSize",
                    "params": "w, h",
                    "desc": "Set size"
                }
            ]
        },
        {
            "name": "3D Camera",
            "functions": [
                {
                    "name": "EasyCam",
                    "params": "",
                    "desc": "Create an easy-to-use 3D camera",
                    "snippet": "EasyCam()"
                },
                {
                    "name": "begin",
                    "params": "",
                    "desc": "Apply camera transform"
                },
                {
                    "name": "end",
                    "params": "",
                    "desc": "Restore previous transform"
                }
            ]
        },
        {
            "name": "Math - 3D",
            "functions": [
                {
                    "name": "Mat4",
                    "params": "",
                    "desc": "Create a 4x4 matrix",
                    "snippet": "Mat4()"
                },
                {
                    "name": "Quaternion",
                    "params": "",
                    "desc": "Create a quaternion",
                    "snippet": "Quaternion()"
                }
            ]
        },
        {
            "name": "Graphics - Advanced",
            "functions": [
                {
                    "name": "drawMesh",
                    "params": "mesh",
                    "desc": "Draw a mesh",
                    "snippet": "drawMesh(${1:mesh})"
                },
                {
                    "name": "drawPolyline",
                    "params": "polyline",
                    "desc": "Draw a polyline",
                    "snippet": "drawPolyline(${1:polyline})"
                },
                {
                    "name": "createBox",
                    "params": "size",
                    "desc": "Create a box mesh"
                },
                {
                    "name": "createBox",
                    "params": "w, h, d",
                    "desc": "Create a box mesh"
                },
                {
                    "name": "createSphere",
                    "params": "radius, res",
                    "desc": "Create a sphere mesh"
                }
            ]
        },
        {
            "name": "Types - Mesh",
            "functions": [
                {
                    "name": "Mesh",
                    "params": "",
                    "desc": "Create a new Mesh",
                    "snippet": "Mesh()"
                },
                {
                    "name": "setMode",
                    "params": "mode",
                    "desc": "Set primitive mode (MESH_TRIANGLES, etc.)",
                    "snippet": "setMode(${1:MESH_TRIANGLES})"
                },
                {
                    "name": "addVertex",
                    "params": "x, y, z",
                    "desc": "Add a vertex",
                    "snippet": "addVertex(${1:x}, ${2:y}, ${3:0})"
                },
                {
                    "name": "addVertex",
                    "params": "v",
                    "desc": "Add a vertex",
                    "snippet": "addVertex(${1:x}, ${2:y}, ${3:0})"
                },
                {
                    "name": "addColor",
                    "params": "r, g, b, a",
                    "desc": "Add a color for the vertex",
                    "snippet": "addColor(${1:1}, ${2:1}, ${3:1}, ${4:1})"
                },
                {
                    "name": "addColor",
                    "params": "c",
                    "desc": "Add a color for the vertex",
                    "snippet": "addColor(${1:1}, ${2:1}, ${3:1}, ${4:1})"
                },
                {
                    "name": "addTexCoord",
                    "params": "u, v",
                    "desc": "Add a texture coordinate",
                    "snippet": "addTexCoord(${1:u}, ${2:v})"
                },
                {
                    "name": "addNormal",
                    "params": "x, y, z",
                    "desc": "Add a normal vector",
                    "snippet": "addNormal(${1:x}, ${2:y}, ${3:z})"
                },
                {
                    "name": "addIndex",
                    "params": "index",
                    "desc": "Add an index",
                    "snippet": "addIndex(${1:index})"
                },
                {
                    "name": "addTriangle",
                    "params": "i1, i2, i3",
                    "desc": "Add a triangle (3 indices)",
                    "snippet": "addTriangle(${1:i1}, ${2:i2}, ${3:i3})"
                },
                {
                    "name": "clear",
                    "params": "",
                    "desc": "Clear all data",
                    "snippet": "clear()"
                },
                {
                    "name": "draw",
                    "params": "",
                    "desc": "Draw the mesh",
                    "snippet": "draw()"
                }
            ]
        },
        {
            "name": "Types - Polyline",
            "functions": [
                {
                    "name": "Polyline",
                    "params": "",
                    "desc": "Create a new Polyline (Path)",
                    "snippet": "Polyline()"
                },
                {
                    "name": "addVertex",
                    "params": "x, y",
                    "desc": "Add a vertex",
                    "snippet": "addVertex(${1:x}, ${2:y})"
                },
                {
                    "name": "lineTo",
                    "params": "x, y",
                    "desc": "Add a line segment to point",
                    "snippet": "lineTo(${1:x}, ${2:y})"
                },
                {
                    "name": "bezierTo",
                    "params": "cx1, cy1, cx2, cy2, x, y",
                    "desc": "Add a cubic bezier curve",
                    "snippet": "bezierTo(${1:cx1}, ${2:cy1}, ${3:cx2}, ${4:cy2}, ${5:x}, ${6:y})"
                },
                {
                    "name": "quadBezierTo",
                    "params": "cx, cy, x, y",
                    "desc": "Add a quadratic bezier curve",
                    "snippet": "quadBezierTo(${1:cx}, ${2:cy}, ${3:x}, ${4:y})"
                },
                {
                    "name": "curveTo",
                    "params": "x, y",
                    "desc": "Add a Catmull-Rom curve segment",
                    "snippet": "curveTo(${1:x}, ${2:y})"
                },
                {
                    "name": "arc",
                    "params": "x, y, rX, rY, start, end",
                    "desc": "Add an arc",
                    "snippet": "arc(${1:x}, ${2:y}, ${3:rX}, ${4:rY}, ${5:0}, ${6:360})"
                },
                {
                    "name": "close",
                    "params": "",
                    "desc": "Close the shape",
                    "snippet": "close()"
                }
            ]
        },
        {
            "name": "Types - StrokeMesh",
            "functions": [
                {
                    "name": "StrokeMesh",
                    "params": "",
                    "desc": "Create a new StrokeMesh",
                    "snippet": "StrokeMesh()"
                },
                {
                    "name": "setWidth",
                    "params": "width",
                    "desc": "Set stroke width",
                    "snippet": "setWidth(${1:5.0})"
                },
                {
                    "name": "setColor",
                    "params": "color",
                    "desc": "Set stroke color",
                    "snippet": "setColor(${1:color})"
                },
                {
                    "name": "setCapType",
                    "params": "type",
                    "desc": "Set cap type (CAP_BUTT, CAP_ROUND, CAP_SQUARE)",
                    "snippet": "setCapType(${1:CAP_ROUND})"
                },
                {
                    "name": "setJoinType",
                    "params": "type",
                    "desc": "Set join type (JOIN_MITER, JOIN_ROUND, JOIN_BEVEL)",
                    "snippet": "setJoinType(${1:JOIN_ROUND})"
                },
                {
                    "name": "addVertex",
                    "params": "x, y",
                    "desc": "Add a vertex",
                    "snippet": "addVertex(${1:x}, ${2:y})"
                },
                {
                    "name": "update",
                    "params": "",
                    "desc": "Update the internal mesh",
                    "snippet": "update()"
                }
            ]
        }
    ],
    "constants": [
        {
            "name": "TAU",
            "value": "6.283...",
            "desc": "Full circle (2*PI)"
        },
        {
            "name": "HALF_TAU",
            "value": "3.141...",
            "desc": "Half circle (PI)"
        },
        {
            "name": "QUARTER_TAU",
            "value": "1.570...",
            "desc": "Quarter circle (PI/2)"
        },
        {
            "name": "PI",
            "value": "3.141...",
            "desc": "Pi (use TAU instead)"
        }
    ],
    "keywords": [
        "def",
        "var",
        "global",
        "if",
        "else",
        "for",
        "while",
        "return",
        "true",
        "false"
    ]
};

// Export for different environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TrussSketchAPI;
}
