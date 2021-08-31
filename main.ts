namespace SpriteKind {
    export const BG = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    xcur += 0
    ycur += -1
    Update()
})
function Update () {
    if (true) {
        xpos = 0
        ypos = 0
        xindex = 0
        yindex = 0
        for (let index = 0; index < width; index++) {
            for (let index = 0; index < height; index++) {
                bg.image.fillRect(xpos, ypos, sia, sia, 11)
                if (xcur == xindex && ycur == yindex) {
                    bg.image.drawRect(xpos, ypos, sia, sia, 5)
                } else {
                    bg.image.drawRect(xpos, ypos, sia, sia, 15)
                }
                ypos += sia
                yindex += 1
            }
            xpos += sia
            xindex += 1
            ypos = 0
            yindex = 0
        }
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    xcur += -1
    ycur += 0
    Update()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    xcur += 1
    ycur += 0
    Update()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    xcur += 0
    ycur += 1
    Update()
})
function render (size: number, xs: number, ys: number) {
    if (bg) {
        bg.destroy()
    }
    bg = sprites.create(image.create(size * xs, size * ys), SpriteKind.BG)
    sia = size
    width = xs
    height = ys
    Update()
}
let sia = 0
let bg: Sprite = null
let height = 0
let width = 0
let yindex = 0
let xindex = 0
let ycur = 0
let xcur = 0
let ypos = 0
let xpos = 0
let map = [
[
0,
1,
2,
3
],
[
4,
5,
6,
7
],
[
8,
9,
10,
11
],
[
12,
13,
14,
15
]
]
xpos = 0
ypos = 0
xcur = 0
ycur = 0
render(10, 16, 12)
