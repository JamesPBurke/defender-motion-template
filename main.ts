controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    ship.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . d d . . . 
        . . . . . . . . . . d d d d 5 . 
        . . . . . . . . . d d d d d 4 5 
        . . . 5 8 8 d d d d d 3 3 d 5 . 
        7 1 d d d d d d d 3 3 3 3 d 4 5 
        . . . . . . . 7 1 7 3 3 3 . 5 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    ship.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . d d . . . . . . . . . . . 
        . . d d d d . . . . . . . . . . 
        . 2 d d d d d . . . . . . . . . 
        . . d 3 3 d d d d d 8 8 5 . . . 
        . 2 d 3 3 3 3 d d d d d d d 1 7 
        . . . 3 3 3 7 1 7 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    ship.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . d d . . . 
        . . . . . . . . . . d d d d . . 
        . . . . . . . . . d d d d d 2 . 
        . . . 5 8 8 d d d d d 3 3 d . . 
        7 1 d d d d d d d 3 3 3 3 d 2 . 
        . . . . . . . 7 1 7 3 3 3 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    ship.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . d d . . . . . . . . . . . 
        . 5 d d d d . . . . . . . . . . 
        5 4 d d d d d . . . . . . . . . 
        . 5 d 3 3 d d d d d 8 8 5 . . . 
        5 4 d 3 3 3 3 d d d d d d d 1 7 
        . 5 . 3 3 3 7 1 7 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
let ship: Sprite = null
ship = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . d d . . . . . . . . . . . 
    . . d d d d . . . . . . . . . . 
    . 2 d d d d d . . . . . . . . . 
    . . d 3 3 d d d d d 8 8 5 . . . 
    . 2 d 3 3 3 3 d d d d d d d 1 7 
    . . . 3 3 3 7 1 7 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(ship)
controller.moveSprite(ship)
game.onUpdate(function () {
    if (ship.x < 15) {
        ship.x = 1580
    }
    if (ship.x > 1585) {
        ship.x = 20
    }
})
