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
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Called once at start",
                    "snippet": "setup() {\n\t$0\n}"
                },
                {
                    "name": "update",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Called every frame before draw",
                    "snippet": "update() {\n\t$0\n}"
                },
                {
                    "name": "draw",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
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
                    "params_typed": "float x, float y, int button",
                    "return_type": "void",
                    "desc": "Mouse button pressed",
                    "snippet": "mousePressed(x, y, button) {\n\t$0\n}"
                },
                {
                    "name": "mouseReleased",
                    "params": "x, y, button",
                    "params_typed": "float x, float y, int button",
                    "return_type": "void",
                    "desc": "Mouse button released",
                    "snippet": "mouseReleased(x, y, button) {\n\t$0\n}"
                },
                {
                    "name": "mouseMoved",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "void",
                    "desc": "Mouse moved",
                    "snippet": "mouseMoved(x, y) {\n\t$0\n}"
                },
                {
                    "name": "mouseDragged",
                    "params": "x, y, button",
                    "params_typed": "float x, float y, int button",
                    "return_type": "void",
                    "desc": "Mouse dragged",
                    "snippet": "mouseDragged(x, y, button) {\n\t$0\n}"
                },
                {
                    "name": "keyPressed",
                    "params": "key",
                    "params_typed": "int key",
                    "return_type": "void",
                    "desc": "Key pressed",
                    "snippet": "keyPressed(key) {\n\t$0\n}"
                },
                {
                    "name": "keyReleased",
                    "params": "key",
                    "params_typed": "int key",
                    "return_type": "void",
                    "desc": "Key released",
                    "snippet": "keyReleased(key) {\n\t$0\n}"
                },
                {
                    "name": "windowResized",
                    "params": "width, height",
                    "params_typed": "int width, int height",
                    "return_type": "void",
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
                    "params_typed": "float gray",
                    "return_type": "void",
                    "desc": "Clear screen",
                    "snippet": "clear(${1:0.0})"
                },
                {
                    "name": "clear",
                    "params": "r, g, b",
                    "params_typed": "float r, float g, float b",
                    "return_type": "void",
                    "desc": "Clear screen",
                    "snippet": "clear(${1:0.0})"
                },
                {
                    "name": "setColor",
                    "params": "gray",
                    "params_typed": "float gray",
                    "return_type": "void",
                    "desc": "Set drawing color (0.0-1.0)",
                    "snippet": "setColor(${1:1.0}, ${2:1.0}, ${3:1.0})"
                },
                {
                    "name": "setColor",
                    "params": "r, g, b",
                    "params_typed": "float r, float g, float b",
                    "return_type": "void",
                    "desc": "Set drawing color (0.0-1.0)",
                    "snippet": "setColor(${1:1.0}, ${2:1.0}, ${3:1.0})"
                },
                {
                    "name": "setColor",
                    "params": "r, g, b, a",
                    "params_typed": "float r, float g, float b, float a",
                    "return_type": "void",
                    "desc": "Set drawing color (0.0-1.0)",
                    "snippet": "setColor(${1:1.0}, ${2:1.0}, ${3:1.0})"
                },
                {
                    "name": "setColorHSB",
                    "params": "h, s, b",
                    "params_typed": "float h, float s, float b",
                    "return_type": "void",
                    "desc": "Set color from HSB (H: 0-TAU)",
                    "snippet": "setColorHSB(${1:0.0}, ${2:1.0}, ${3:1.0})"
                },
                {
                    "name": "setColorOKLCH",
                    "params": "L, C, H",
                    "params_typed": "float L, float C, float H",
                    "return_type": "void",
                    "desc": "Set color from OKLCH",
                    "snippet": "setColorOKLCH(${1:0.7}, ${2:0.15}, ${3:0.0})"
                },
                {
                    "name": "setColorOKLab",
                    "params": "L, a, b",
                    "params_typed": "float L, float a, float b",
                    "return_type": "void",
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
                    "params_typed": "float x, float y, float w, float h",
                    "return_type": "void",
                    "desc": "Draw rectangle",
                    "snippet": "drawRect(${1:x}, ${2:y}, ${3:w}, ${4:h})"
                },
                {
                    "name": "drawRect",
                    "params": "pos, w, h",
                    "params_typed": "Vec3 pos, float w, float h",
                    "return_type": "void",
                    "desc": "Draw rectangle",
                    "snippet": "drawRect(${1:x}, ${2:y}, ${3:w}, ${4:h})"
                },
                {
                    "name": "drawRect",
                    "params": "pos, size",
                    "params_typed": "Vec3 pos, Vec2 size",
                    "return_type": "void",
                    "desc": "Draw rectangle",
                    "snippet": "drawRect(${1:x}, ${2:y}, ${3:w}, ${4:h})"
                },
                {
                    "name": "drawCircle",
                    "params": "x, y, radius",
                    "params_typed": "float x, float y, float radius",
                    "return_type": "void",
                    "desc": "Draw circle",
                    "snippet": "drawCircle(${1:x}, ${2:y}, ${3:radius})"
                },
                {
                    "name": "drawCircle",
                    "params": "center, radius",
                    "params_typed": "Vec3 center, float radius",
                    "return_type": "void",
                    "desc": "Draw circle",
                    "snippet": "drawCircle(${1:x}, ${2:y}, ${3:radius})"
                },
                {
                    "name": "drawEllipse",
                    "params": "x, y, w, h",
                    "params_typed": "float x, float y, float w, float h",
                    "return_type": "void",
                    "desc": "Draw ellipse",
                    "snippet": "drawEllipse(${1:x}, ${2:y}, ${3:w}, ${4:h})"
                },
                {
                    "name": "drawEllipse",
                    "params": "center, rx, ry",
                    "params_typed": "Vec3 center, float rx, float ry",
                    "return_type": "void",
                    "desc": "Draw ellipse",
                    "snippet": "drawEllipse(${1:x}, ${2:y}, ${3:w}, ${4:h})"
                },
                {
                    "name": "drawEllipse",
                    "params": "center, radii",
                    "params_typed": "Vec3 center, Vec2 radii",
                    "return_type": "void",
                    "desc": "Draw ellipse",
                    "snippet": "drawEllipse(${1:x}, ${2:y}, ${3:w}, ${4:h})"
                },
                {
                    "name": "drawLine",
                    "params": "x1, y1, x2, y2",
                    "params_typed": "float x1, float y1, float x2, float y2",
                    "return_type": "void",
                    "desc": "Draw line",
                    "snippet": "drawLine(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2})"
                },
                {
                    "name": "drawLine",
                    "params": "p1, p2",
                    "params_typed": "Vec3 p1, Vec3 p2",
                    "return_type": "void",
                    "desc": "Draw line",
                    "snippet": "drawLine(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2})"
                },
                {
                    "name": "drawTriangle",
                    "params": "x1, y1, x2, y2, x3, y3",
                    "params_typed": "float x1, float y1, float x2, float y2, float x3, float y3",
                    "return_type": "void",
                    "desc": "Draw triangle",
                    "snippet": "drawTriangle(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2}, ${5:x3}, ${6:y3})"
                },
                {
                    "name": "drawTriangle",
                    "params": "p1, p2, p3",
                    "params_typed": "Vec3 p1, Vec3 p2, Vec3 p3",
                    "return_type": "void",
                    "desc": "Draw triangle",
                    "snippet": "drawTriangle(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2}, ${5:x3}, ${6:y3})"
                },
                {
                    "name": "drawBox",
                    "params": "size",
                    "params_typed": "float size",
                    "return_type": "void",
                    "desc": "Draw 3D box (respects fill/noFill)",
                    "snippet": "drawBox(${1:size})"
                },
                {
                    "name": "drawBox",
                    "params": "w, h, d",
                    "params_typed": "float w, float h, float d",
                    "return_type": "void",
                    "desc": "Draw 3D box (respects fill/noFill)",
                    "snippet": "drawBox(${1:size})"
                },
                {
                    "name": "drawBox",
                    "params": "x, y, z, size",
                    "params_typed": "float x, float y, float z, float size",
                    "return_type": "void",
                    "desc": "Draw 3D box (respects fill/noFill)",
                    "snippet": "drawBox(${1:size})"
                },
                {
                    "name": "drawBox",
                    "params": "x, y, z, w, h, d",
                    "params_typed": "float x, float y, float z, float w, float h, float d",
                    "return_type": "void",
                    "desc": "Draw 3D box (respects fill/noFill)",
                    "snippet": "drawBox(${1:size})"
                },
                {
                    "name": "drawBox",
                    "params": "pos, size",
                    "params_typed": "Vec3 pos, float size",
                    "return_type": "void",
                    "desc": "Draw 3D box (respects fill/noFill)",
                    "snippet": "drawBox(${1:size})"
                },
                {
                    "name": "drawBox",
                    "params": "pos, w, h, d",
                    "params_typed": "Vec3 pos, float w, float h, float d",
                    "return_type": "void",
                    "desc": "Draw 3D box (respects fill/noFill)",
                    "snippet": "drawBox(${1:size})"
                },
                {
                    "name": "drawSphere",
                    "params": "radius",
                    "params_typed": "float radius",
                    "return_type": "void",
                    "desc": "Draw 3D sphere (respects fill/noFill)",
                    "snippet": "drawSphere(${1:radius})"
                },
                {
                    "name": "drawSphere",
                    "params": "x, y, z, radius",
                    "params_typed": "float x, float y, float z, float radius",
                    "return_type": "void",
                    "desc": "Draw 3D sphere (respects fill/noFill)",
                    "snippet": "drawSphere(${1:radius})"
                },
                {
                    "name": "drawSphere",
                    "params": "pos, radius",
                    "params_typed": "Vec3 pos, float radius",
                    "return_type": "void",
                    "desc": "Draw 3D sphere (respects fill/noFill)",
                    "snippet": "drawSphere(${1:radius})"
                },
                {
                    "name": "drawCone",
                    "params": "radius, height",
                    "params_typed": "float radius, float height",
                    "return_type": "void",
                    "desc": "Draw 3D cone (respects fill/noFill)",
                    "snippet": "drawCone(${1:radius}, ${2:height})"
                },
                {
                    "name": "drawCone",
                    "params": "x, y, z, radius, height",
                    "params_typed": "float x, float y, float z, float radius, float height",
                    "return_type": "void",
                    "desc": "Draw 3D cone (respects fill/noFill)",
                    "snippet": "drawCone(${1:radius}, ${2:height})"
                },
                {
                    "name": "drawCone",
                    "params": "pos, radius, height",
                    "params_typed": "Vec3 pos, float radius, float height",
                    "return_type": "void",
                    "desc": "Draw 3D cone (respects fill/noFill)",
                    "snippet": "drawCone(${1:radius}, ${2:height})"
                },
                {
                    "name": "beginShape",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Begin drawing a shape",
                    "snippet": "beginShape()"
                },
                {
                    "name": "vertex",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "void",
                    "desc": "Add a vertex",
                    "snippet": "vertex(${1:x}, ${2:y})"
                },
                {
                    "name": "vertex",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "void",
                    "desc": "Add a vertex",
                    "snippet": "vertex(${1:x}, ${2:y})"
                },
                {
                    "name": "vertex",
                    "params": "v",
                    "params_typed": "const Vec2& v",
                    "return_type": "void",
                    "desc": "Add a vertex",
                    "snippet": "vertex(${1:x}, ${2:y})"
                },
                {
                    "name": "vertex",
                    "params": "v",
                    "params_typed": "const Vec3& v",
                    "return_type": "void",
                    "desc": "Add a vertex",
                    "snippet": "vertex(${1:x}, ${2:y})"
                },
                {
                    "name": "endShape",
                    "params": "close",
                    "params_typed": "bool close = false",
                    "return_type": "void",
                    "desc": "End drawing a shape",
                    "snippet": "endShape()"
                },
                {
                    "name": "beginStroke",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Begin drawing a stroke (uses StrokeMesh internally)",
                    "snippet": "beginStroke()"
                },
                {
                    "name": "endStroke",
                    "params": "close",
                    "params_typed": "bool close = false",
                    "return_type": "void",
                    "desc": "End drawing a stroke",
                    "snippet": "endStroke()"
                },
                {
                    "name": "drawStroke",
                    "params": "x1, y1, x2, y2",
                    "params_typed": "float x1, float y1, float x2, float y2",
                    "return_type": "void",
                    "desc": "Draw a single stroke segment (thick line with cap/join)",
                    "snippet": "drawStroke(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2})"
                },
                {
                    "name": "drawStroke",
                    "params": "p1, p2",
                    "params_typed": "const Vec2& p1, const Vec2& p2",
                    "return_type": "void",
                    "desc": "Draw a single stroke segment (thick line with cap/join)",
                    "snippet": "drawStroke(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2})"
                },
                {
                    "name": "drawBitmapString",
                    "params": "text, x, y",
                    "params_typed": "const string& text, float x, float y",
                    "return_type": "void",
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
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Enable fill mode (shapes are solid, no outline)",
                    "snippet": "fill()"
                },
                {
                    "name": "noFill",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Enable stroke mode (shapes show outline only)",
                    "snippet": "noFill()"
                },
                {
                    "name": "setStrokeWeight",
                    "params": "weight",
                    "params_typed": "float weight",
                    "return_type": "void",
                    "desc": "Set stroke width",
                    "snippet": "setStrokeWeight(${1:1.0})"
                },
                {
                    "name": "getStrokeWeight",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current stroke width",
                    "snippet": "getStrokeWeight()"
                },
                {
                    "name": "setStrokeCap",
                    "params": "cap",
                    "params_typed": "StrokeCap cap",
                    "return_type": "void",
                    "desc": "Set stroke cap style (Butt, Round, Square)",
                    "snippet": "setStrokeCap(StrokeCap::${1:Round})"
                },
                {
                    "name": "getStrokeCap",
                    "params": "",
                    "params_typed": "",
                    "return_type": "StrokeCap",
                    "desc": "Get current stroke cap style",
                    "snippet": "getStrokeCap()"
                },
                {
                    "name": "setStrokeJoin",
                    "params": "join",
                    "params_typed": "StrokeJoin join",
                    "return_type": "void",
                    "desc": "Set stroke join style (Miter, Round, Bevel)",
                    "snippet": "setStrokeJoin(StrokeJoin::${1:Round})"
                },
                {
                    "name": "getStrokeJoin",
                    "params": "",
                    "params_typed": "",
                    "return_type": "StrokeJoin",
                    "desc": "Get current stroke join style",
                    "snippet": "getStrokeJoin()"
                }
            ]
        },
        {
            "name": "Transform",
            "functions": [
                {
                    "name": "translate",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "void",
                    "desc": "Move origin",
                    "snippet": "translate(${1:x}, ${2:y})"
                },
                {
                    "name": "translate",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "void",
                    "desc": "Move origin",
                    "snippet": "translate(${1:x}, ${2:y})"
                },
                {
                    "name": "rotate",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "void",
                    "desc": "Rotate by radians (single axis, euler angles, or quaternion)",
                    "snippet": "rotate(${1:radians})"
                },
                {
                    "name": "rotate",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "void",
                    "desc": "Rotate by radians (single axis, euler angles, or quaternion)",
                    "snippet": "rotate(${1:radians})"
                },
                {
                    "name": "rotate",
                    "params": "euler",
                    "params_typed": "Vec3 euler",
                    "return_type": "void",
                    "desc": "Rotate by radians (single axis, euler angles, or quaternion)",
                    "snippet": "rotate(${1:radians})"
                },
                {
                    "name": "rotate",
                    "params": "quat",
                    "params_typed": "Quaternion quat",
                    "return_type": "void",
                    "desc": "Rotate by radians (single axis, euler angles, or quaternion)",
                    "snippet": "rotate(${1:radians})"
                },
                {
                    "name": "rotateDeg",
                    "params": "degrees",
                    "params_typed": "float degrees",
                    "return_type": "void",
                    "desc": "Rotate by degrees",
                    "snippet": "rotateDeg(${1:degrees})"
                },
                {
                    "name": "rotateDeg",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "void",
                    "desc": "Rotate by degrees",
                    "snippet": "rotateDeg(${1:degrees})"
                },
                {
                    "name": "rotateDeg",
                    "params": "euler",
                    "params_typed": "Vec3 euler",
                    "return_type": "void",
                    "desc": "Rotate by degrees",
                    "snippet": "rotateDeg(${1:degrees})"
                },
                {
                    "name": "scale",
                    "params": "s",
                    "params_typed": "float s",
                    "return_type": "void",
                    "desc": "Scale",
                    "snippet": "scale(${1:s})"
                },
                {
                    "name": "scale",
                    "params": "sx, sy",
                    "params_typed": "float sx, float sy",
                    "return_type": "void",
                    "desc": "Scale",
                    "snippet": "scale(${1:s})"
                },
                {
                    "name": "pushMatrix",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Save transform state",
                    "snippet": "pushMatrix()"
                },
                {
                    "name": "popMatrix",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
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
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get canvas width",
                    "snippet": "getWindowWidth()"
                },
                {
                    "name": "getWindowHeight",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get canvas height",
                    "snippet": "getWindowHeight()"
                },
                {
                    "name": "getWindowSize",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Vec2",
                    "desc": "Get canvas size as Vec2",
                    "snippet": "getWindowSize()"
                },
                {
                    "name": "getMouseX",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get mouse X position",
                    "snippet": "getMouseX()"
                },
                {
                    "name": "getMouseY",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get mouse Y position",
                    "snippet": "getMouseY()"
                },
                {
                    "name": "getMousePos",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Vec2",
                    "desc": "Get mouse position as Vec2",
                    "snippet": "getMousePos()"
                },
                {
                    "name": "getGlobalMousePos",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Vec2",
                    "desc": "Get global mouse position as Vec2",
                    "snippet": "getGlobalMousePos()"
                },
                {
                    "name": "isMousePressed",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
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
                    "params_typed": "",
                    "return_type": "double",
                    "desc": "Seconds since last frame",
                    "snippet": "getDeltaTime()"
                },
                {
                    "name": "getFrameRate",
                    "params": "",
                    "params_typed": "",
                    "return_type": "double",
                    "desc": "Current FPS",
                    "snippet": "getFrameRate()"
                },
                {
                    "name": "getFrameCount",
                    "params": "",
                    "params_typed": "",
                    "return_type": "uint64_t",
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
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Elapsed seconds (float)",
                    "snippet": "getElapsedTimef()"
                },
                {
                    "name": "getElapsedTimeMillis",
                    "params": "",
                    "params_typed": "",
                    "return_type": "uint64_t",
                    "desc": "Elapsed milliseconds (int64)",
                    "snippet": "getElapsedTimeMillis()"
                },
                {
                    "name": "getElapsedTimeMicros",
                    "params": "",
                    "params_typed": "",
                    "return_type": "uint64_t",
                    "desc": "Elapsed microseconds (int64)",
                    "snippet": "getElapsedTimeMicros()"
                },
                {
                    "name": "resetElapsedTimeCounter",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
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
                    "params_typed": "",
                    "return_type": "uint64_t",
                    "desc": "Unix time in milliseconds",
                    "snippet": "getSystemTimeMillis()"
                },
                {
                    "name": "getSystemTimeMicros",
                    "params": "",
                    "params_typed": "",
                    "return_type": "uint64_t",
                    "desc": "Unix time in microseconds",
                    "snippet": "getSystemTimeMicros()"
                },
                {
                    "name": "getTimestampString",
                    "params": "",
                    "params_typed": "",
                    "return_type": "string",
                    "desc": "Formatted timestamp",
                    "snippet": "getTimestampString()"
                },
                {
                    "name": "getTimestampString",
                    "params": "format",
                    "params_typed": "const string& format",
                    "return_type": "string",
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
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Current seconds (0-59)",
                    "snippet": "getSeconds()"
                },
                {
                    "name": "getMinutes",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Current minutes (0-59)",
                    "snippet": "getMinutes()"
                },
                {
                    "name": "getHours",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Current hours (0-23)",
                    "snippet": "getHours()"
                },
                {
                    "name": "getYear",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Current year",
                    "snippet": "getYear()"
                },
                {
                    "name": "getMonth",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Current month (1-12)",
                    "snippet": "getMonth()"
                },
                {
                    "name": "getDay",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Current day (1-31)",
                    "snippet": "getDay()"
                },
                {
                    "name": "getWeekday",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
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
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Random number",
                    "snippet": "random()"
                },
                {
                    "name": "random",
                    "params": "max",
                    "params_typed": "float max",
                    "return_type": "float",
                    "desc": "Random number",
                    "snippet": "random()"
                },
                {
                    "name": "random",
                    "params": "min, max",
                    "params_typed": "float min, float max",
                    "return_type": "float",
                    "desc": "Random number",
                    "snippet": "random()"
                },
                {
                    "name": "randomInt",
                    "params": "max",
                    "params_typed": "int max",
                    "return_type": "int",
                    "desc": "Random integer",
                    "snippet": "randomInt(${1:max})"
                },
                {
                    "name": "randomInt",
                    "params": "min, max",
                    "params_typed": "int min, int max",
                    "return_type": "int",
                    "desc": "Random integer",
                    "snippet": "randomInt(${1:max})"
                },
                {
                    "name": "randomSeed",
                    "params": "seed",
                    "params_typed": "unsigned int seed",
                    "return_type": "void",
                    "desc": "Set random seed",
                    "snippet": "randomSeed(${1:seed})"
                },
                {
                    "name": "noise",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Perlin noise",
                    "snippet": "noise(${1:x})"
                },
                {
                    "name": "noise",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "float",
                    "desc": "Perlin noise",
                    "snippet": "noise(${1:x})"
                },
                {
                    "name": "noise",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "float",
                    "desc": "Perlin noise",
                    "snippet": "noise(${1:x})"
                },
                {
                    "name": "signedNoise",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Perlin noise (-1.0 to 1.0)",
                    "snippet": "signedNoise(${1:x})"
                },
                {
                    "name": "signedNoise",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "float",
                    "desc": "Perlin noise (-1.0 to 1.0)",
                    "snippet": "signedNoise(${1:x})"
                },
                {
                    "name": "signedNoise",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "float",
                    "desc": "Perlin noise (-1.0 to 1.0)",
                    "snippet": "signedNoise(${1:x})"
                },
                {
                    "name": "signedNoise",
                    "params": "x, y, z, w",
                    "params_typed": "float x, float y, float z, float w",
                    "return_type": "float",
                    "desc": "Perlin noise (-1.0 to 1.0)",
                    "snippet": "signedNoise(${1:x})"
                },
                {
                    "name": "fbm",
                    "params": "x, y, octaves, lacunarity, gain",
                    "params_typed": "float x, float y, int octaves = 4, float lacunarity = 2.0, float gain = 0.5",
                    "return_type": "float",
                    "desc": "Fractal Brownian Motion noise",
                    "snippet": "fbm(${1:x}, ${2:y})"
                },
                {
                    "name": "fbm",
                    "params": "x, y, z, octaves, lacunarity, gain",
                    "params_typed": "float x, float y, float z, int octaves = 4, float lacunarity = 2.0, float gain = 0.5",
                    "return_type": "float",
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
                    "params_typed": "float a, float b, float t",
                    "return_type": "float",
                    "desc": "Linear interpolation",
                    "snippet": "lerp(${1:a}, ${2:b}, ${3:t})"
                },
                {
                    "name": "clamp",
                    "params": "v, min, max",
                    "params_typed": "float v, float min, float max",
                    "return_type": "float",
                    "desc": "Clamp value to range",
                    "snippet": "clamp(${1:v}, ${2:min}, ${3:max})"
                },
                {
                    "name": "map",
                    "params": "v, inMin, inMax, outMin, outMax",
                    "params_typed": "float v, float inMin, float inMax, float outMin, float outMax",
                    "return_type": "float",
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
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Sine",
                    "snippet": "sin(${1:x})"
                },
                {
                    "name": "cos",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Cosine",
                    "snippet": "cos(${1:x})"
                },
                {
                    "name": "tan",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Tangent",
                    "snippet": "tan(${1:x})"
                },
                {
                    "name": "asin",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Arc sine",
                    "snippet": "asin(${1:x})"
                },
                {
                    "name": "acos",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Arc cosine",
                    "snippet": "acos(${1:x})"
                },
                {
                    "name": "atan",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Arc tangent",
                    "snippet": "atan(${1:x})"
                },
                {
                    "name": "atan2",
                    "params": "y, x",
                    "params_typed": "float y, float x",
                    "return_type": "float",
                    "desc": "Arc tangent of y/x",
                    "snippet": "atan2(${1:y}, ${2:x})"
                },
                {
                    "name": "deg2rad",
                    "params": "degrees",
                    "params_typed": "float degrees",
                    "return_type": "float",
                    "desc": "Degrees to radians",
                    "snippet": "deg2rad(${1:degrees})"
                },
                {
                    "name": "rad2deg",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "float",
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
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Absolute value",
                    "snippet": "abs(${1:x})"
                },
                {
                    "name": "sqrt",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Square root",
                    "snippet": "sqrt(${1:x})"
                },
                {
                    "name": "sq",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Square (x*x)",
                    "snippet": "sq(${1:x})"
                },
                {
                    "name": "pow",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "float",
                    "desc": "Power (x^y)",
                    "snippet": "pow(${1:x}, ${2:y})"
                },
                {
                    "name": "log",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Natural logarithm",
                    "snippet": "log(${1:x})"
                },
                {
                    "name": "exp",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Exponential (e^x)",
                    "snippet": "exp(${1:x})"
                },
                {
                    "name": "min",
                    "params": "a, b",
                    "params_typed": "float a, float b",
                    "return_type": "float",
                    "desc": "Minimum",
                    "snippet": "min(${1:a}, ${2:b})"
                },
                {
                    "name": "max",
                    "params": "a, b",
                    "params_typed": "float a, float b",
                    "return_type": "float",
                    "desc": "Maximum",
                    "snippet": "max(${1:a}, ${2:b})"
                },
                {
                    "name": "floor",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Round down",
                    "snippet": "floor(${1:x})"
                },
                {
                    "name": "ceil",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Round up",
                    "snippet": "ceil(${1:x})"
                },
                {
                    "name": "round",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Round to nearest",
                    "snippet": "round(${1:x})"
                },
                {
                    "name": "fmod",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "float",
                    "desc": "Floating-point modulo",
                    "snippet": "fmod(${1:x}, ${2:y})"
                },
                {
                    "name": "sign",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Sign (-1, 0, 1)",
                    "snippet": "sign(${1:x})"
                },
                {
                    "name": "fract",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
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
                    "params_typed": "float x1, float y1, float x2, float y2",
                    "return_type": "float",
                    "desc": "Distance between points",
                    "snippet": "dist(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2})"
                },
                {
                    "name": "distSquared",
                    "params": "x1, y1, x2, y2",
                    "params_typed": "float x1, float y1, float x2, float y2",
                    "return_type": "float",
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
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Toggle fullscreen mode",
                    "snippet": "toggleFullscreen()"
                },
                {
                    "name": "setClipboardString",
                    "params": "text",
                    "params_typed": "const string& text",
                    "return_type": "void",
                    "desc": "Copy text to clipboard",
                    "snippet": "setClipboardString(${1:\"text\"})"
                },
                {
                    "name": "getClipboardString",
                    "params": "",
                    "params_typed": "",
                    "return_type": "string",
                    "desc": "Get text from clipboard",
                    "snippet": "getClipboardString()"
                }
            ]
        },
        {
            "name": "Utility",
            "functions": [
                {
                    "name": "logNotice",
                    "params": "message",
                    "params_typed": "const string& message",
                    "return_type": "void",
                    "desc": "Print to console",
                    "snippet": "logNotice(${1:\"message\"})"
                },
                {
                    "name": "to_string",
                    "params": "value",
                    "params_typed": "value",
                    "return_type": "string",
                    "desc": "Convert to string",
                    "snippet": "to_string(${1:value})"
                },
                {
                    "name": "beep",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Play a beep sound",
                    "snippet": "beep()"
                },
                {
                    "name": "beep",
                    "params": "frequency",
                    "params_typed": "float frequency",
                    "return_type": "void",
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
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create a sound player",
                    "snippet": "Sound()"
                },
                {
                    "name": "play",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Play sound",
                    "snippet": "play()"
                },
                {
                    "name": "stop",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Stop sound",
                    "snippet": "stop()"
                },
                {
                    "name": "setVolume",
                    "params": "vol",
                    "params_typed": "float vol",
                    "return_type": "void",
                    "desc": "Set volume (0.0-1.0)",
                    "snippet": "setVolume(${1:0.8})"
                },
                {
                    "name": "setLoop",
                    "params": "loop",
                    "params_typed": "bool loop",
                    "return_type": "void",
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
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create a tween",
                    "snippet": "Tween()"
                },
                {
                    "name": "setDuration",
                    "params": "seconds",
                    "params_typed": "float seconds",
                    "return_type": "void",
                    "desc": "Set animation duration",
                    "snippet": "setDuration(${1:1.0})"
                },
                {
                    "name": "start",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Start animation",
                    "snippet": "start()"
                },
                {
                    "name": "update",
                    "params": "dt",
                    "params_typed": "float dt",
                    "return_type": "void",
                    "desc": "Update animation",
                    "snippet": "update(getDeltaTime())"
                },
                {
                    "name": "getValue",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
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
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create 2D vector",
                    "snippet": "Vec2(${1:x}, ${2:y})"
                },
                {
                    "name": "Vec2",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "",
                    "desc": "Create 2D vector",
                    "snippet": "Vec2(${1:x}, ${2:y})"
                },
                {
                    "name": "Vec2",
                    "params": "v",
                    "params_typed": "float v",
                    "return_type": "",
                    "desc": "Create 2D vector",
                    "snippet": "Vec2(${1:x}, ${2:y})"
                },
                {
                    "name": "set",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "Vec2&",
                    "desc": "Set vector components",
                    "snippet": "set(${1:x}, ${2:y})"
                },
                {
                    "name": "set",
                    "params": "v",
                    "params_typed": "Vec2 v",
                    "return_type": "Vec2&",
                    "desc": "Set vector components",
                    "snippet": "set(${1:x}, ${2:y})"
                },
                {
                    "name": "Vec2_fromAngle",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "Vec2",
                    "desc": "Create Vec2 from angle",
                    "snippet": "Vec2_fromAngle(${1:radians})"
                },
                {
                    "name": "Vec2_fromAngle",
                    "params": "radians, length",
                    "params_typed": "float radians, float length",
                    "return_type": "Vec2",
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
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create 3D vector",
                    "snippet": "Vec3(${1:x}, ${2:y}, ${3:z})"
                },
                {
                    "name": "Vec3",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "",
                    "desc": "Create 3D vector",
                    "snippet": "Vec3(${1:x}, ${2:y}, ${3:z})"
                },
                {
                    "name": "Vec3",
                    "params": "v",
                    "params_typed": "float v",
                    "return_type": "",
                    "desc": "Create 3D vector",
                    "snippet": "Vec3(${1:x}, ${2:y}, ${3:z})"
                },
                {
                    "name": "set",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "Vec3&",
                    "desc": "Set vector components",
                    "snippet": "set(${1:x}, ${2:y}, ${3:z})"
                },
                {
                    "name": "set",
                    "params": "v",
                    "params_typed": "Vec3 v",
                    "return_type": "Vec3&",
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
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create color (0.0-1.0)",
                    "snippet": "Color(${1:r}, ${2:g}, ${3:b})"
                },
                {
                    "name": "Color",
                    "params": "r, g, b",
                    "params_typed": "float r, float g, float b",
                    "return_type": "",
                    "desc": "Create color (0.0-1.0)",
                    "snippet": "Color(${1:r}, ${2:g}, ${3:b})"
                },
                {
                    "name": "Color",
                    "params": "r, g, b, a",
                    "params_typed": "float r, float g, float b, float a",
                    "return_type": "",
                    "desc": "Create color (0.0-1.0)",
                    "snippet": "Color(${1:r}, ${2:g}, ${3:b})"
                },
                {
                    "name": "set",
                    "params": "r, g, b",
                    "params_typed": "float r, float g, float b",
                    "return_type": "Color&",
                    "desc": "Set color components",
                    "snippet": "set(${1:r}, ${2:g}, ${3:b})"
                },
                {
                    "name": "set",
                    "params": "r, g, b, a",
                    "params_typed": "float r, float g, float b, float a",
                    "return_type": "Color&",
                    "desc": "Set color components",
                    "snippet": "set(${1:r}, ${2:g}, ${3:b})"
                },
                {
                    "name": "set",
                    "params": "gray",
                    "params_typed": "float gray",
                    "return_type": "Color&",
                    "desc": "Set color components",
                    "snippet": "set(${1:r}, ${2:g}, ${3:b})"
                },
                {
                    "name": "set",
                    "params": "c",
                    "params_typed": "Color c",
                    "return_type": "Color&",
                    "desc": "Set color components",
                    "snippet": "set(${1:r}, ${2:g}, ${3:b})"
                },
                {
                    "name": "Color_fromHSB",
                    "params": "h, s, b",
                    "params_typed": "float h, float s, float b",
                    "return_type": "Color",
                    "desc": "Create Color from HSB",
                    "snippet": "Color_fromHSB(${1:h}, ${2:s}, ${3:b})"
                },
                {
                    "name": "Color_fromHSB",
                    "params": "h, s, b, a",
                    "params_typed": "float h, float s, float b, float a",
                    "return_type": "Color",
                    "desc": "Create Color from HSB",
                    "snippet": "Color_fromHSB(${1:h}, ${2:s}, ${3:b})"
                },
                {
                    "name": "Color_fromOKLCH",
                    "params": "L, C, H",
                    "params_typed": "float L, float C, float H",
                    "return_type": "Color",
                    "desc": "Create Color from OKLCH",
                    "snippet": "Color_fromOKLCH(${1:L}, ${2:C}, ${3:H})"
                },
                {
                    "name": "Color_fromOKLCH",
                    "params": "L, C, H, a",
                    "params_typed": "float L, float C, float H, float a",
                    "return_type": "Color",
                    "desc": "Create Color from OKLCH",
                    "snippet": "Color_fromOKLCH(${1:L}, ${2:C}, ${3:H})"
                },
                {
                    "name": "Color_fromOKLab",
                    "params": "L, a, b",
                    "params_typed": "float L, float a, float b",
                    "return_type": "Color",
                    "desc": "Create Color from OKLab",
                    "snippet": "Color_fromOKLab(${1:L}, ${2:a}, ${3:b})"
                },
                {
                    "name": "Color_fromOKLab",
                    "params": "L, a, b, alpha",
                    "params_typed": "float L, float a, float b, float alpha",
                    "return_type": "Color",
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
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create a rectangle",
                    "snippet": "Rect(${1:x}, ${2:y}, ${3:w}, ${4:h})"
                },
                {
                    "name": "Rect",
                    "params": "x, y, w, h",
                    "params_typed": "float x, float y, float w, float h",
                    "return_type": "",
                    "desc": "Create a rectangle",
                    "snippet": "Rect(${1:x}, ${2:y}, ${3:w}, ${4:h})"
                },
                {
                    "name": "set",
                    "params": "x, y, w, h",
                    "params_typed": "float x, float y, float w, float h",
                    "return_type": "Rect&",
                    "desc": "Set rectangle properties",
                    "snippet": "set(${1:x}, ${2:y}, ${3:w}, ${4:h})"
                },
                {
                    "name": "set",
                    "params": "pos, w, h",
                    "params_typed": "Vec2 pos, float w, float h",
                    "return_type": "Rect&",
                    "desc": "Set rectangle properties",
                    "snippet": "set(${1:x}, ${2:y}, ${3:w}, ${4:h})"
                },
                {
                    "name": "contains",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "bool",
                    "desc": "Check if point is inside",
                    "snippet": "contains(${1:x}, ${2:y})"
                },
                {
                    "name": "intersects",
                    "params": "other",
                    "params_typed": "Rect other",
                    "return_type": "bool",
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
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create a base scene node",
                    "snippet": "Node()"
                },
                {
                    "name": "addChild",
                    "params": "child",
                    "params_typed": "shared_ptr<Node> child",
                    "return_type": "void",
                    "desc": "Add a child node",
                    "snippet": "addChild(${1:child})"
                },
                {
                    "name": "setPosition",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "void",
                    "desc": "Set position",
                    "snippet": "setPosition(${1:x}, ${2:y})"
                },
                {
                    "name": "setPosition",
                    "params": "pos",
                    "params_typed": "Vec3 pos",
                    "return_type": "void",
                    "desc": "Set position",
                    "snippet": "setPosition(${1:x}, ${2:y})"
                },
                {
                    "name": "RectNode",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create a 2D rectangle node",
                    "snippet": "RectNode()"
                },
                {
                    "name": "setSize",
                    "params": "w, h",
                    "params_typed": "float w, float h",
                    "return_type": "void",
                    "desc": "Set size",
                    "snippet": "setSize(${1:w}, ${2:h})"
                }
            ]
        },
        {
            "name": "3D Setup",
            "functions": [
                {
                    "name": "setupScreenPerspective",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Set up perspective projection (oF-style default 3D)",
                    "snippet": "setupScreenPerspective()"
                },
                {
                    "name": "setupScreenPerspective",
                    "params": "fovDeg",
                    "params_typed": "float fovDeg",
                    "return_type": "void",
                    "desc": "Set up perspective projection (oF-style default 3D)",
                    "snippet": "setupScreenPerspective()"
                },
                {
                    "name": "setupScreenPerspective",
                    "params": "fovDeg, nearDist, farDist",
                    "params_typed": "float fovDeg, float nearDist, float farDist",
                    "return_type": "void",
                    "desc": "Set up perspective projection (oF-style default 3D)",
                    "snippet": "setupScreenPerspective()"
                },
                {
                    "name": "setupScreenOrtho",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Set up orthographic projection (2D mode)",
                    "snippet": "setupScreenOrtho()"
                },
                {
                    "name": "setupScreenFov",
                    "params": "fovDeg",
                    "params_typed": "float fovDeg",
                    "return_type": "void",
                    "desc": "Set up screen projection with specified FOV (0 = ortho, >0 = perspective)",
                    "snippet": "setupScreenFov(${1:45.0})"
                },
                {
                    "name": "setupScreenFov",
                    "params": "fovDeg, nearDist, farDist",
                    "params_typed": "float fovDeg, float nearDist, float farDist",
                    "return_type": "void",
                    "desc": "Set up screen projection with specified FOV (0 = ortho, >0 = perspective)",
                    "snippet": "setupScreenFov(${1:45.0})"
                },
                {
                    "name": "setDefaultScreenFov",
                    "params": "fovDeg",
                    "params_typed": "float fovDeg",
                    "return_type": "void",
                    "desc": "Set default screen FOV (applied at frame start)",
                    "snippet": "setDefaultScreenFov(${1:45.0})"
                },
                {
                    "name": "getDefaultScreenFov",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current default screen FOV",
                    "snippet": "getDefaultScreenFov()"
                }
            ]
        },
        {
            "name": "3D Camera",
            "functions": [
                {
                    "name": "EasyCam",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create an easy-to-use 3D camera",
                    "snippet": "EasyCam()"
                },
                {
                    "name": "begin",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Apply camera transform",
                    "snippet": "begin()"
                },
                {
                    "name": "end",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Restore previous transform",
                    "snippet": "end()"
                }
            ]
        },
        {
            "name": "Math - 3D",
            "functions": [
                {
                    "name": "Mat4",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create a 4x4 matrix",
                    "snippet": "Mat4()"
                },
                {
                    "name": "Quaternion",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
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
                    "params_typed": "Mesh mesh",
                    "return_type": "void",
                    "desc": "Draw a mesh",
                    "snippet": "drawMesh(${1:mesh})"
                },
                {
                    "name": "drawPolyline",
                    "params": "polyline",
                    "params_typed": "Polyline polyline",
                    "return_type": "void",
                    "desc": "Draw a polyline",
                    "snippet": "drawPolyline(${1:polyline})"
                },
                {
                    "name": "createBox",
                    "params": "size",
                    "params_typed": "float size",
                    "return_type": "Mesh",
                    "desc": "Create a box mesh",
                    "snippet": "createBox(${1:size})"
                },
                {
                    "name": "createBox",
                    "params": "w, h, d",
                    "params_typed": "float w, float h, float d",
                    "return_type": "Mesh",
                    "desc": "Create a box mesh",
                    "snippet": "createBox(${1:size})"
                },
                {
                    "name": "createSphere",
                    "params": "radius, res",
                    "params_typed": "float radius, int res = 20",
                    "return_type": "Mesh",
                    "desc": "Create a sphere mesh",
                    "snippet": "createSphere(${1:radius})"
                }
            ]
        },
        {
            "name": "Types - Mesh",
            "functions": [
                {
                    "name": "Mesh",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create a new Mesh",
                    "snippet": "Mesh()"
                },
                {
                    "name": "setMode",
                    "params": "mode",
                    "params_typed": "int mode",
                    "return_type": "void",
                    "desc": "Set primitive mode (MESH_TRIANGLES, etc.)",
                    "snippet": "setMode(${1:MESH_TRIANGLES})"
                },
                {
                    "name": "addVertex",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "void",
                    "desc": "Add a vertex",
                    "snippet": "addVertex(${1:x}, ${2:y}, ${3:0})"
                },
                {
                    "name": "addVertex",
                    "params": "v",
                    "params_typed": "Vec3 v",
                    "return_type": "void",
                    "desc": "Add a vertex",
                    "snippet": "addVertex(${1:x}, ${2:y}, ${3:0})"
                },
                {
                    "name": "addColor",
                    "params": "r, g, b, a",
                    "params_typed": "float r, float g, float b, float a",
                    "return_type": "void",
                    "desc": "Add a color for the vertex",
                    "snippet": "addColor(${1:1}, ${2:1}, ${3:1}, ${4:1})"
                },
                {
                    "name": "addColor",
                    "params": "c",
                    "params_typed": "Color c",
                    "return_type": "void",
                    "desc": "Add a color for the vertex",
                    "snippet": "addColor(${1:1}, ${2:1}, ${3:1}, ${4:1})"
                },
                {
                    "name": "addTexCoord",
                    "params": "u, v",
                    "params_typed": "float u, float v",
                    "return_type": "void",
                    "desc": "Add a texture coordinate",
                    "snippet": "addTexCoord(${1:u}, ${2:v})"
                },
                {
                    "name": "addNormal",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "void",
                    "desc": "Add a normal vector",
                    "snippet": "addNormal(${1:x}, ${2:y}, ${3:z})"
                },
                {
                    "name": "addIndex",
                    "params": "index",
                    "params_typed": "int index",
                    "return_type": "void",
                    "desc": "Add an index",
                    "snippet": "addIndex(${1:index})"
                },
                {
                    "name": "addTriangle",
                    "params": "i1, i2, i3",
                    "params_typed": "int i1, int i2, int i3",
                    "return_type": "void",
                    "desc": "Add a triangle (3 indices)",
                    "snippet": "addTriangle(${1:i1}, ${2:i2}, ${3:i3})"
                },
                {
                    "name": "clear",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Clear all data",
                    "snippet": "clear()"
                },
                {
                    "name": "draw",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
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
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create a new Polyline (Path)",
                    "snippet": "Polyline()"
                },
                {
                    "name": "addVertex",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "void",
                    "desc": "Add a vertex",
                    "snippet": "addVertex(${1:x}, ${2:y})"
                },
                {
                    "name": "lineTo",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "void",
                    "desc": "Add a line segment to point",
                    "snippet": "lineTo(${1:x}, ${2:y})"
                },
                {
                    "name": "bezierTo",
                    "params": "cx1, cy1, cx2, cy2, x, y",
                    "params_typed": "float cx1, float cy1, float cx2, float cy2, float x, float y",
                    "return_type": "void",
                    "desc": "Add a cubic bezier curve",
                    "snippet": "bezierTo(${1:cx1}, ${2:cy1}, ${3:cx2}, ${4:cy2}, ${5:x}, ${6:y})"
                },
                {
                    "name": "quadBezierTo",
                    "params": "cx, cy, x, y",
                    "params_typed": "float cx, float cy, float x, float y",
                    "return_type": "void",
                    "desc": "Add a quadratic bezier curve",
                    "snippet": "quadBezierTo(${1:cx}, ${2:cy}, ${3:x}, ${4:y})"
                },
                {
                    "name": "curveTo",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "void",
                    "desc": "Add a Catmull-Rom curve segment",
                    "snippet": "curveTo(${1:x}, ${2:y})"
                },
                {
                    "name": "arc",
                    "params": "x, y, rX, rY, start, end",
                    "params_typed": "float x, float y, float rX, float rY, float angleBegin, float angleEnd",
                    "return_type": "void",
                    "desc": "Add an arc",
                    "snippet": "arc(${1:x}, ${2:y}, ${3:rX}, ${4:rY}, ${5:0}, ${6:360})"
                },
                {
                    "name": "close",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
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
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create a new StrokeMesh",
                    "snippet": "StrokeMesh()"
                },
                {
                    "name": "setWidth",
                    "params": "width",
                    "params_typed": "float width",
                    "return_type": "void",
                    "desc": "Set stroke width",
                    "snippet": "setWidth(${1:5.0})"
                },
                {
                    "name": "setColor",
                    "params": "color",
                    "params_typed": "Color color",
                    "return_type": "void",
                    "desc": "Set stroke color",
                    "snippet": "setColor(${1:color})"
                },
                {
                    "name": "setCapType",
                    "params": "type",
                    "params_typed": "int type",
                    "return_type": "void",
                    "desc": "Set cap type (CAP_BUTT, CAP_ROUND, CAP_SQUARE)",
                    "snippet": "setCapType(${1:CAP_ROUND})"
                },
                {
                    "name": "setJoinType",
                    "params": "type",
                    "params_typed": "int type",
                    "return_type": "void",
                    "desc": "Set join type (JOIN_MITER, JOIN_ROUND, JOIN_BEVEL)",
                    "snippet": "setJoinType(${1:JOIN_ROUND})"
                },
                {
                    "name": "addVertex",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "void",
                    "desc": "Add a vertex",
                    "snippet": "addVertex(${1:x}, ${2:y})"
                },
                {
                    "name": "update",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
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
        },
        {
            "name": "StrokeCap_Butt",
            "value": "0",
            "desc": "Flat line cap (no extension)"
        },
        {
            "name": "StrokeCap_Round",
            "value": "1",
            "desc": "Rounded line cap"
        },
        {
            "name": "StrokeCap_Square",
            "value": "2",
            "desc": "Square line cap (extends by half stroke width)"
        },
        {
            "name": "StrokeJoin_Miter",
            "value": "0",
            "desc": "Sharp corner join"
        },
        {
            "name": "StrokeJoin_Round",
            "value": "1",
            "desc": "Rounded corner join"
        },
        {
            "name": "StrokeJoin_Bevel",
            "value": "2",
            "desc": "Beveled corner join"
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
            