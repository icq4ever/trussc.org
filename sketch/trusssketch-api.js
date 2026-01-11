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
                    "snippet": "void setup() {\n\t$0\n}"
                },
                {
                    "name": "update",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Called every frame before draw",
                    "snippet": "void update() {\n\t$0\n}"
                },
                {
                    "name": "draw",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Called every frame after update",
                    "snippet": "void draw() {\n\t$0\n}"
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
                    "snippet": "void mousePressed(float x, float y, int button) {\n\t$0\n}"
                },
                {
                    "name": "mouseReleased",
                    "params": "x, y, button",
                    "params_typed": "float x, float y, int button",
                    "return_type": "void",
                    "desc": "Mouse button released",
                    "snippet": "void mouseReleased(float x, float y, int button) {\n\t$0\n}"
                },
                {
                    "name": "mouseMoved",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "void",
                    "desc": "Mouse moved",
                    "snippet": "void mouseMoved(float x, float y) {\n\t$0\n}"
                },
                {
                    "name": "mouseDragged",
                    "params": "x, y, button",
                    "params_typed": "float x, float y, int button",
                    "return_type": "void",
                    "desc": "Mouse dragged",
                    "snippet": "void mouseDragged(float x, float y, int button) {\n\t$0\n}"
                },
                {
                    "name": "keyPressed",
                    "params": "key",
                    "params_typed": "int key",
                    "return_type": "void",
                    "desc": "Key pressed",
                    "snippet": "void keyPressed(int key) {\n\t$0\n}"
                },
                {
                    "name": "keyReleased",
                    "params": "key",
                    "params_typed": "int key",
                    "return_type": "void",
                    "desc": "Key released",
                    "snippet": "void keyReleased(int key) {\n\t$0\n}"
                },
                {
                    "name": "windowResized",
                    "params": "width, height",
                    "params_typed": "int width, int height",
                    "return_type": "void",
                    "desc": "Window resized",
                    "snippet": "void windowResized(int width, int height) {\n\t$0\n}"
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
                },
                {
                    "name": "setTextAlign",
                    "params": "horizontal",
                    "params_typed": "TextAlign horizontal",
                    "return_type": "void",
                    "desc": "Set text alignment",
                    "snippet": "setTextAlign(TextAlign::${1:Left})"
                },
                {
                    "name": "setTextAlign",
                    "params": "horizontal, vertical",
                    "params_typed": "TextAlign horizontal, TextAlign vertical",
                    "return_type": "void",
                    "desc": "Set text alignment",
                    "snippet": "setTextAlign(TextAlign::${1:Left})"
                },
                {
                    "name": "getTextAlignH",
                    "params": "",
                    "params_typed": "",
                    "return_type": "TextAlign",
                    "desc": "Get horizontal text alignment",
                    "snippet": "getTextAlignH()"
                },
                {
                    "name": "getTextAlignV",
                    "params": "",
                    "params_typed": "",
                    "return_type": "TextAlign",
                    "desc": "Get vertical text alignment",
                    "snippet": "getTextAlignV()"
                },
                {
                    "name": "getBitmapFontHeight",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get bitmap font height",
                    "snippet": "getBitmapFontHeight()"
                },
                {
                    "name": "getBitmapStringWidth",
                    "params": "text",
                    "params_typed": "const string& text",
                    "return_type": "float",
                    "desc": "Get text width",
                    "snippet": "getBitmapStringWidth(${1:\"text\"})"
                },
                {
                    "name": "getBitmapStringHeight",
                    "params": "text",
                    "params_typed": "const string& text",
                    "return_type": "float",
                    "desc": "Get text height",
                    "snippet": "getBitmapStringHeight(${1:\"text\"})"
                },
                {
                    "name": "getBitmapStringBBox",
                    "params": "text, x, y",
                    "params_typed": "const string& text, float x, float y",
                    "return_type": "Rect",
                    "desc": "Get text bounding box",
                    "snippet": "getBitmapStringBBox(${1:\"text\"}, ${2:x}, ${3:y})"
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
                },
                {
                    "name": "isFillEnabled",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if fill mode is enabled",
                    "snippet": "isFillEnabled()"
                },
                {
                    "name": "isStrokeEnabled",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if stroke mode is enabled",
                    "snippet": "isStrokeEnabled()"
                },
                {
                    "name": "setCircleResolution",
                    "params": "resolution",
                    "params_typed": "int resolution",
                    "return_type": "void",
                    "desc": "Set circle segment count",
                    "snippet": "setCircleResolution(${1:32})"
                },
                {
                    "name": "getCircleResolution",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get circle segment count",
                    "snippet": "getCircleResolution()"
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
                    "name": "setWindowTitle",
                    "params": "title",
                    "params_typed": "const string& title",
                    "return_type": "void",
                    "desc": "Set window title",
                    "snippet": "setWindowTitle(${1:\"title\"})"
                },
                {
                    "name": "setWindowSize",
                    "params": "width, height",
                    "params_typed": "int width, int height",
                    "return_type": "void",
                    "desc": "Set window size",
                    "snippet": "setWindowSize(${1:800}, ${2:600})"
                },
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
                    "name": "toString",
                    "params": "value",
                    "params_typed": "value",
                    "return_type": "string",
                    "desc": "Convert to string",
                    "snippet": "toString(${1:value})"
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
                    "name": "load",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "bool",
                    "desc": "Load sound file",
                    "snippet": "load(${1:\"sound.wav\"})"
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
            "name": "Font",
            "functions": [
                {
                    "name": "createFont",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Font@",
                    "desc": "Create a TrueType font",
                    "snippet": "Font@ font = createFont();"
                },
                {
                    "name": "load",
                    "params": "path, size",
                    "params_typed": "const string& path, int size",
                    "return_type": "bool",
                    "desc": "Load TTF font file",
                    "snippet": "load(FONT_SANS, ${1:24})"
                },
                {
                    "name": "isLoaded",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if font is loaded",
                    "snippet": "isLoaded()"
                },
                {
                    "name": "drawString",
                    "params": "text, x, y",
                    "params_typed": "const string& text, float x, float y",
                    "return_type": "void",
                    "desc": "Draw text at position",
                    "snippet": "drawString(${1:\"Hello\"}, ${2:100}, ${3:100})"
                },
                {
                    "name": "getWidth",
                    "params": "text",
                    "params_typed": "const string& text",
                    "return_type": "float",
                    "desc": "Get text width in pixels",
                    "snippet": "getWidth(${1:\"text\"})"
                },
                {
                    "name": "getHeight",
                    "params": "text",
                    "params_typed": "const string& text",
                    "return_type": "float",
                    "desc": "Get text height in pixels",
                    "snippet": "getHeight(${1:\"text\"})"
                },
                {
                    "name": "getLineHeight",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get line height",
                    "snippet": "getLineHeight()"
                },
                {
                    "name": "getSize",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get font size",
                    "snippet": "getSize()"
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
                },
                {
                    "name": "drawTexture",
                    "params": "tex, x, y",
                    "params_typed": "const Texture& tex, float x, float y",
                    "return_type": "void",
                    "desc": "Draw a texture",
                    "snippet": "drawTexture(${1:tex}, ${2:x}, ${3:y})"
                },
                {
                    "name": "drawTexture",
                    "params": "tex, x, y, w, h",
                    "params_typed": "const Texture& tex, float x, float y, float w, float h",
                    "return_type": "void",
                    "desc": "Draw a texture",
                    "snippet": "drawTexture(${1:tex}, ${2:x}, ${3:y})"
                }
            ]
        },
        {
            "name": "Graphics - Texture & GPU",
            "functions": [
                {
                    "name": "Texture",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create a texture",
                    "snippet": "Texture()"
                },
                {
                    "name": "load",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "bool",
                    "desc": "Load image from file",
                    "snippet": "load(${1:\"image.png\"})"
                },
                {
                    "name": "loadFromPixels",
                    "params": "pixels",
                    "params_typed": "const Pixels& pixels",
                    "return_type": "bool",
                    "desc": "Load from pixel data",
                    "snippet": "loadFromPixels(${1:pixels})"
                },
                {
                    "name": "bind",
                    "params": "slot",
                    "params_typed": "int slot = 0",
                    "return_type": "void",
                    "desc": "Bind texture",
                    "snippet": "bind(${1:0})"
                },
                {
                    "name": "unbind",
                    "params": "slot",
                    "params_typed": "int slot = 0",
                    "return_type": "void",
                    "desc": "Unbind texture",
                    "snippet": "unbind(${1:0})"
                },
                {
                    "name": "getWidth",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get width",
                    "snippet": "getWidth()"
                },
                {
                    "name": "getHeight",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get height",
                    "snippet": "getHeight()"
                }
            ]
        },
        {
            "name": "Graphics - FBO",
            "functions": [
                {
                    "name": "Fbo",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create an FBO",
                    "snippet": "Fbo()"
                },
                {
                    "name": "allocate",
                    "params": "w, h",
                    "params_typed": "int w, int h",
                    "return_type": "void",
                    "desc": "Allocate buffer",
                    "snippet": "allocate(${1:800}, ${2:600})"
                },
                {
                    "name": "begin",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Begin drawing to FBO",
                    "snippet": "begin()"
                },
                {
                    "name": "end",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "End drawing to FBO",
                    "snippet": "end()"
                },
                {
                    "name": "getTexture",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Texture&",
                    "desc": "Get internal texture",
                    "snippet": "getTexture()"
                },
                {
                    "name": "readToPixels",
                    "params": "pixels",
                    "params_typed": "Pixels& pixels",
                    "return_type": "void",
                    "desc": "Read pixels to CPU memory",
                    "snippet": "readToPixels(${1:pixels})"
                }
            ]
        },
        {
            "name": "Types - Pixels",
            "functions": [
                {
                    "name": "Pixels",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create pixel buffer",
                    "snippet": "Pixels()"
                },
                {
                    "name": "allocate",
                    "params": "w, h, channels",
                    "params_typed": "int w, int h, int channels",
                    "return_type": "void",
                    "desc": "Allocate memory",
                    "snippet": "allocate(${1:800}, ${2:600}, ${3:4})"
                },
                {
                    "name": "getColor",
                    "params": "x, y",
                    "params_typed": "int x, int y",
                    "return_type": "Color",
                    "desc": "Get color at pixel",
                    "snippet": "getColor(${1:x}, ${2:y})"
                },
                {
                    "name": "setColor",
                    "params": "x, y, c",
                    "params_typed": "int x, int y, const Color& c",
                    "return_type": "void",
                    "desc": "Set color at pixel",
                    "snippet": "setColor(${1:x}, ${2:y}, ${3:color})"
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
            "name": "StrokeCap::Butt",
            "value": "0",
            "desc": "Flat line cap (no extension)"
        },
        {
            "name": "StrokeCap::Round",
            "value": "1",
            "desc": "Rounded line cap"
        },
        {
            "name": "StrokeCap::Square",
            "value": "2",
            "desc": "Square line cap (extends by half stroke width)"
        },
        {
            "name": "StrokeJoin::Miter",
            "value": "0",
            "desc": "Sharp corner join"
        },
        {
            "name": "StrokeJoin::Round",
            "value": "1",
            "desc": "Rounded corner join"
        },
        {
            "name": "StrokeJoin::Bevel",
            "value": "2",
            "desc": "Beveled corner join"
        },
        {
            "name": "FONT_SANS",
            "value": "string",
            "desc": "System sans-serif font path (CDN URL on Web)"
        },
        {
            "name": "FONT_SERIF",
            "value": "string",
            "desc": "System serif font path (CDN URL on Web)"
        },
        {
            "name": "FONT_MONO",
            "value": "string",
            "desc": "System monospace font path (CDN URL on Web)"
        }
    ],
    "keywords": [
        "void",
        "int",
        "float",
        "bool",
        "string",
        "if",
        "else",
        "for",
        "while",
        "return",
        "break",
        "continue",
        "true",
        "false",
        "null",
        "const"
    ],
    "types": [
        {
            "name": "Vec2",
            "desc": "2D vector",
            "constructor": {
                "signatures": [
                    "",
                    "float x, float y",
                    "float v"
                ],
                "snippet": "Vec2(${1:x}, ${2:y})"
            },
            "properties": [
                {
                    "name": "x",
                    "type": "float",
                    "desc": "X component"
                },
                {
                    "name": "y",
                    "type": "float",
                    "desc": "Y component"
                }
            ],
            "methods": [
                {
                    "name": "set",
                    "return": "Vec2&",
                    "signatures": [
                        "float x, float y",
                        "Vec2 v"
                    ],
                    "desc": "Set vector components",
                    "snippet": "set(${1:x}, ${2:y})"
                },
                {
                    "name": "length",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get vector length",
                    "snippet": "length()"
                },
                {
                    "name": "lengthSquared",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get squared length (faster, no sqrt)",
                    "snippet": "lengthSquared()"
                },
                {
                    "name": "normalized",
                    "return": "Vec2",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get normalized copy",
                    "snippet": "normalized()"
                },
                {
                    "name": "normalize",
                    "return": "Vec2&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Normalize in place",
                    "snippet": "normalize()"
                },
                {
                    "name": "limit",
                    "return": "Vec2&",
                    "signatures": [
                        "float max"
                    ],
                    "desc": "Limit length to max",
                    "snippet": "limit(${1:max})"
                },
                {
                    "name": "dot",
                    "return": "float",
                    "signatures": [
                        "Vec2 v"
                    ],
                    "desc": "Dot product",
                    "snippet": "dot(${1:v})"
                },
                {
                    "name": "cross",
                    "return": "float",
                    "signatures": [
                        "Vec2 v"
                    ],
                    "desc": "Cross product (z component)",
                    "snippet": "cross(${1:v})"
                },
                {
                    "name": "distance",
                    "return": "float",
                    "signatures": [
                        "Vec2 v"
                    ],
                    "desc": "Distance to another vector",
                    "snippet": "distance(${1:v})"
                },
                {
                    "name": "distanceSquared",
                    "return": "float",
                    "signatures": [
                        "Vec2 v"
                    ],
                    "desc": "Squared distance (faster)",
                    "snippet": "distanceSquared(${1:v})"
                },
                {
                    "name": "angle",
                    "return": "float",
                    "signatures": [
                        "",
                        "Vec2 v"
                    ],
                    "desc": "Angle in radians",
                    "snippet": "angle()"
                },
                {
                    "name": "rotated",
                    "return": "Vec2",
                    "signatures": [
                        "float radians"
                    ],
                    "desc": "Get rotated copy",
                    "snippet": "rotated(${1:radians})"
                },
                {
                    "name": "rotate",
                    "return": "Vec2&",
                    "signatures": [
                        "float radians"
                    ],
                    "desc": "Rotate in place",
                    "snippet": "rotate(${1:radians})"
                },
                {
                    "name": "lerp",
                    "return": "Vec2",
                    "signatures": [
                        "Vec2 target, float t"
                    ],
                    "desc": "Linear interpolation",
                    "snippet": "lerp(${1:target}, ${2:t})"
                },
                {
                    "name": "perpendicular",
                    "return": "Vec2",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get perpendicular vector",
                    "snippet": "perpendicular()"
                },
                {
                    "name": "reflected",
                    "return": "Vec2",
                    "signatures": [
                        "Vec2 normal"
                    ],
                    "desc": "Get reflected vector",
                    "snippet": "reflected(${1:normal})"
                }
            ],
            "static_methods": [
                {
                    "name": "fromAngle",
                    "return": "Vec2",
                    "signatures": [
                        "float radians",
                        "float radians, float length"
                    ],
                    "desc": "Create Vec2 from angle",
                    "snippet": "Vec2::fromAngle(${1:radians})"
                }
            ]
        },
        {
            "name": "Vec3",
            "desc": "3D vector",
            "constructor": {
                "signatures": [
                    "",
                    "float x, float y, float z",
                    "float v"
                ],
                "snippet": "Vec3(${1:x}, ${2:y}, ${3:z})"
            },
            "properties": [
                {
                    "name": "x",
                    "type": "float",
                    "desc": "X component"
                },
                {
                    "name": "y",
                    "type": "float",
                    "desc": "Y component"
                },
                {
                    "name": "z",
                    "type": "float",
                    "desc": "Z component"
                }
            ],
            "methods": [
                {
                    "name": "set",
                    "return": "Vec3&",
                    "signatures": [
                        "float x, float y, float z",
                        "Vec3 v"
                    ],
                    "desc": "Set vector components",
                    "snippet": "set(${1:x}, ${2:y}, ${3:z})"
                },
                {
                    "name": "length",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get vector length",
                    "snippet": "length()"
                },
                {
                    "name": "lengthSquared",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get squared length",
                    "snippet": "lengthSquared()"
                },
                {
                    "name": "normalized",
                    "return": "Vec3",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get normalized copy",
                    "snippet": "normalized()"
                },
                {
                    "name": "normalize",
                    "return": "Vec3&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Normalize in place",
                    "snippet": "normalize()"
                },
                {
                    "name": "limit",
                    "return": "Vec3&",
                    "signatures": [
                        "float max"
                    ],
                    "desc": "Limit length to max",
                    "snippet": "limit(${1:max})"
                },
                {
                    "name": "dot",
                    "return": "float",
                    "signatures": [
                        "Vec3 v"
                    ],
                    "desc": "Dot product",
                    "snippet": "dot(${1:v})"
                },
                {
                    "name": "cross",
                    "return": "Vec3",
                    "signatures": [
                        "Vec3 v"
                    ],
                    "desc": "Cross product",
                    "snippet": "cross(${1:v})"
                },
                {
                    "name": "distance",
                    "return": "float",
                    "signatures": [
                        "Vec3 v"
                    ],
                    "desc": "Distance to another vector",
                    "snippet": "distance(${1:v})"
                },
                {
                    "name": "distanceSquared",
                    "return": "float",
                    "signatures": [
                        "Vec3 v"
                    ],
                    "desc": "Squared distance",
                    "snippet": "distanceSquared(${1:v})"
                },
                {
                    "name": "lerp",
                    "return": "Vec3",
                    "signatures": [
                        "Vec3 target, float t"
                    ],
                    "desc": "Linear interpolation",
                    "snippet": "lerp(${1:target}, ${2:t})"
                },
                {
                    "name": "reflected",
                    "return": "Vec3",
                    "signatures": [
                        "Vec3 normal"
                    ],
                    "desc": "Get reflected vector",
                    "snippet": "reflected(${1:normal})"
                },
                {
                    "name": "xy",
                    "return": "Vec2",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get XY components as Vec2",
                    "snippet": "xy()"
                }
            ]
        },
        {
            "name": "Color",
            "desc": "RGBA color (0.0-1.0)",
            "constructor": {
                "signatures": [
                    "",
                    "float r, float g, float b",
                    "float r, float g, float b, float a",
                    "float gray",
                    "float gray, float a"
                ],
                "snippet": "Color(${1:r}, ${2:g}, ${3:b})"
            },
            "properties": [
                {
                    "name": "r",
                    "type": "float",
                    "desc": "Red component (0.0-1.0)"
                },
                {
                    "name": "g",
                    "type": "float",
                    "desc": "Green component (0.0-1.0)"
                },
                {
                    "name": "b",
                    "type": "float",
                    "desc": "Blue component (0.0-1.0)"
                },
                {
                    "name": "a",
                    "type": "float",
                    "desc": "Alpha component (0.0-1.0)"
                }
            ],
            "methods": [
                {
                    "name": "set",
                    "return": "Color&",
                    "signatures": [
                        "float r, float g, float b",
                        "float r, float g, float b, float a",
                        "float gray"
                    ],
                    "desc": "Set color components",
                    "snippet": "set(${1:r}, ${2:g}, ${3:b})"
                },
                {
                    "name": "toHex",
                    "return": "uint32_t",
                    "signatures": [
                        "",
                        "bool includeAlpha"
                    ],
                    "desc": "Convert to hex value",
                    "snippet": "toHex()"
                },
                {
                    "name": "lerp",
                    "return": "Color",
                    "signatures": [
                        "Color target, float t"
                    ],
                    "desc": "Interpolate in OKLab space",
                    "snippet": "lerp(${1:target}, ${2:t})"
                },
                {
                    "name": "lerpRGB",
                    "return": "Color",
                    "signatures": [
                        "Color target, float t"
                    ],
                    "desc": "Interpolate in RGB space",
                    "snippet": "lerpRGB(${1:target}, ${2:t})"
                },
                {
                    "name": "clamped",
                    "return": "Color",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get clamped copy (0.0-1.0)",
                    "snippet": "clamped()"
                }
            ],
            "static_methods": [
                {
                    "name": "fromHex",
                    "return": "Color",
                    "signatures": [
                        "uint32_t hex",
                        "uint32_t hex, bool hasAlpha"
                    ],
                    "desc": "Create from hex value",
                    "snippet": "Color::fromHex(${1:0xRRGGBB})"
                },
                {
                    "name": "fromHSB",
                    "return": "Color",
                    "signatures": [
                        "float h, float s, float b",
                        "float h, float s, float b, float a"
                    ],
                    "desc": "Create from HSB (H: 0-TAU)",
                    "snippet": "Color::fromHSB(${1:h}, ${2:s}, ${3:b})"
                },
                {
                    "name": "fromBytes",
                    "return": "Color",
                    "signatures": [
                        "int r, int g, int b",
                        "int r, int g, int b, int a"
                    ],
                    "desc": "Create from 0-255 values",
                    "snippet": "Color::fromBytes(${1:r}, ${2:g}, ${3:b})"
                }
            ]
        },
        {
            "name": "Rect",
            "desc": "Rectangle (x, y, width, height)",
            "constructor": {
                "signatures": [
                    "",
                    "float x, float y, float width, float height"
                ],
                "snippet": "Rect(${1:x}, ${2:y}, ${3:width}, ${4:height})"
            },
            "properties": [
                {
                    "name": "x",
                    "type": "float",
                    "desc": "X position"
                },
                {
                    "name": "y",
                    "type": "float",
                    "desc": "Y position"
                },
                {
                    "name": "width",
                    "type": "float",
                    "desc": "Width"
                },
                {
                    "name": "height",
                    "type": "float",
                    "desc": "Height"
                }
            ],
            "methods": [
                {
                    "name": "set",
                    "return": "Rect&",
                    "signatures": [
                        "float x, float y, float w, float h"
                    ],
                    "desc": "Set rectangle bounds",
                    "snippet": "set(${1:x}, ${2:y}, ${3:w}, ${4:h})"
                },
                {
                    "name": "getRight",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get right edge (x + width)",
                    "snippet": "getRight()"
                },
                {
                    "name": "getBottom",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get bottom edge (y + height)",
                    "snippet": "getBottom()"
                },
                {
                    "name": "getCenterX",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get center X",
                    "snippet": "getCenterX()"
                },
                {
                    "name": "getCenterY",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get center Y",
                    "snippet": "getCenterY()"
                },
                {
                    "name": "contains",
                    "return": "bool",
                    "signatures": [
                        "float px, float py"
                    ],
                    "desc": "Check if point is inside",
                    "snippet": "contains(${1:px}, ${2:py})"
                },
                {
                    "name": "intersects",
                    "return": "bool",
                    "signatures": [
                        "Rect other"
                    ],
                    "desc": "Check if intersects with another rect",
                    "snippet": "intersects(${1:other})"
                }
            ]
        },
        {
            "name": "Pixels",
            "desc": "Pixel buffer for image manipulation",
            "constructor": {
                "signatures": [
                    ""
                ],
                "snippet": "Pixels()"
            },
            "methods": [
                {
                    "name": "allocate",
                    "return": "void",
                    "signatures": [
                        "int width, int height",
                        "int width, int height, int channels"
                    ],
                    "desc": "Allocate pixel buffer",
                    "snippet": "allocate(${1:width}, ${2:height})"
                },
                {
                    "name": "getColor",
                    "return": "Color",
                    "signatures": [
                        "int x, int y"
                    ],
                    "desc": "Get pixel color at position",
                    "snippet": "getColor(${1:x}, ${2:y})"
                },
                {
                    "name": "setColor",
                    "return": "void",
                    "signatures": [
                        "int x, int y, Color color"
                    ],
                    "desc": "Set pixel color at position",
                    "snippet": "setColor(${1:x}, ${2:y}, ${3:color})"
                },
                {
                    "name": "load",
                    "return": "bool",
                    "signatures": [
                        "string path"
                    ],
                    "desc": "Load image from file",
                    "snippet": "load(${1:\"path\"})"
                },
                {
                    "name": "save",
                    "return": "bool",
                    "signatures": [
                        "string path"
                    ],
                    "desc": "Save image to file",
                    "snippet": "save(${1:\"path\"})"
                },
                {
                    "name": "getWidth",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get width",
                    "snippet": "getWidth()"
                },
                {
                    "name": "getHeight",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get height",
                    "snippet": "getHeight()"
                },
                {
                    "name": "isAllocated",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if allocated",
                    "snippet": "isAllocated()"
                }
            ]
        },
        {
            "name": "Texture",
            "desc": "GPU texture for rendering",
            "constructor": {
                "signatures": [
                    ""
                ],
                "snippet": "Texture()"
            },
            "methods": [
                {
                    "name": "allocate",
                    "return": "void",
                    "signatures": [
                        "int width, int height",
                        "Pixels pixels"
                    ],
                    "desc": "Allocate texture",
                    "snippet": "allocate(${1:width}, ${2:height})"
                },
                {
                    "name": "loadData",
                    "return": "void",
                    "signatures": [
                        "Pixels pixels"
                    ],
                    "desc": "Load pixel data to texture",
                    "snippet": "loadData(${1:pixels})"
                },
                {
                    "name": "bind",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Bind texture for rendering",
                    "snippet": "bind()"
                },
                {
                    "name": "unbind",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Unbind texture",
                    "snippet": "unbind()"
                },
                {
                    "name": "getWidth",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get width",
                    "snippet": "getWidth()"
                },
                {
                    "name": "getHeight",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get height",
                    "snippet": "getHeight()"
                },
                {
                    "name": "isAllocated",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if allocated",
                    "snippet": "isAllocated()"
                },
                {
                    "name": "draw",
                    "return": "void",
                    "signatures": [
                        "float x, float y",
                        "float x, float y, float w, float h"
                    ],
                    "desc": "Draw texture",
                    "snippet": "draw(${1:x}, ${2:y})"
                }
            ]
        },
        {
            "name": "Fbo",
            "desc": "Framebuffer object for offscreen rendering",
            "constructor": {
                "signatures": [
                    ""
                ],
                "snippet": "Fbo()"
            },
            "methods": [
                {
                    "name": "allocate",
                    "return": "void",
                    "signatures": [
                        "int width, int height"
                    ],
                    "desc": "Allocate framebuffer",
                    "snippet": "allocate(${1:width}, ${2:height})"
                },
                {
                    "name": "begin",
                    "return": "void",
                    "signatures": [
                        "",
                        "float r, float g, float b, float a"
                    ],
                    "desc": "Begin rendering to FBO",
                    "snippet": "begin()"
                },
                {
                    "name": "end",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "End rendering to FBO",
                    "snippet": "end()"
                },
                {
                    "name": "getTexture",
                    "return": "Texture",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get FBO texture",
                    "snippet": "getTexture()"
                },
                {
                    "name": "getWidth",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get width",
                    "snippet": "getWidth()"
                },
                {
                    "name": "getHeight",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get height",
                    "snippet": "getHeight()"
                },
                {
                    "name": "isAllocated",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if allocated",
                    "snippet": "isAllocated()"
                },
                {
                    "name": "draw",
                    "return": "void",
                    "signatures": [
                        "float x, float y",
                        "float x, float y, float w, float h"
                    ],
                    "desc": "Draw FBO contents",
                    "snippet": "draw(${1:x}, ${2:y})"
                }
            ]
        },
        {
            "name": "Sound",
            "desc": "Audio playback",
            "constructor": {
                "signatures": [
                    ""
                ],
                "snippet": "Sound()"
            },
            "methods": [
                {
                    "name": "load",
                    "return": "bool",
                    "signatures": [
                        "string path"
                    ],
                    "desc": "Load audio file",
                    "snippet": "load(${1:\"path\"})"
                },
                {
                    "name": "play",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Play audio",
                    "snippet": "play()"
                },
                {
                    "name": "stop",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Stop audio",
                    "snippet": "stop()"
                },
                {
                    "name": "isLoaded",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if loaded",
                    "snippet": "isLoaded()"
                },
                {
                    "name": "isPlaying",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if playing",
                    "snippet": "isPlaying()"
                },
                {
                    "name": "setVolume",
                    "return": "void",
                    "signatures": [
                        "float volume"
                    ],
                    "desc": "Set volume (0.0-1.0)",
                    "snippet": "setVolume(${1:1.0})"
                },
                {
                    "name": "setLoop",
                    "return": "void",
                    "signatures": [
                        "bool loop"
                    ],
                    "desc": "Set loop mode",
                    "snippet": "setLoop(${1:true})"
                }
            ]
        },
        {
            "name": "Font",
            "desc": "TrueType font for text rendering",
            "constructor": {
                "signatures": [
                    ""
                ],
                "snippet": "Font()"
            },
            "methods": [
                {
                    "name": "load",
                    "return": "bool",
                    "signatures": [
                        "string path, int size"
                    ],
                    "desc": "Load font file",
                    "snippet": "load(${1:\"path\"}, ${2:24})"
                },
                {
                    "name": "isLoaded",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if loaded",
                    "snippet": "isLoaded()"
                },
                {
                    "name": "drawString",
                    "return": "void",
                    "signatures": [
                        "string text, float x, float y"
                    ],
                    "desc": "Draw text",
                    "snippet": "drawString(${1:\"text\"}, ${2:x}, ${3:y})"
                },
                {
                    "name": "getWidth",
                    "return": "float",
                    "signatures": [
                        "string text"
                    ],
                    "desc": "Get text width",
                    "snippet": "getWidth(${1:\"text\"})"
                },
                {
                    "name": "getHeight",
                    "return": "float",
                    "signatures": [
                        "string text"
                    ],
                    "desc": "Get text height",
                    "snippet": "getHeight(${1:\"text\"})"
                },
                {
                    "name": "getLineHeight",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get line height",
                    "snippet": "getLineHeight()"
                },
                {
                    "name": "getSize",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get font size",
                    "snippet": "getSize()"
                }
            ]
        }
    ]
};
            
            // Export for different environments
            if (typeof module !== 'undefined' && module.exports) {
                module.exports = TrussSketchAPI;
            }
            