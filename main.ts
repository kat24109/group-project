namespace SpriteKind {
    export const item = SpriteKind.create()
    export const item2 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.item, function (sprite, otherSprite) {
    info.changeScoreBy(15)
    sprites.destroy(Cure)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.item2, function (sprite, otherSprite) {
    info.changeScoreBy(15)
    sprites.destroy(Cure_2)
})
let Cure_2: Sprite = null
let Cure: Sprite = null
let mySprite = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b c . . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    b d d d b b d 5 5 5 4 4 4 4 4 b 
    b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
    b d c 5 5 5 5 d 5 5 5 5 5 b . . 
    c d d c d 5 5 b 5 5 5 5 5 5 b . 
    c b d d c c b 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
mySprite.setPosition(24, 24)
info.setScore(0)
Cure = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . b d b . . . . . . 
    . . . . . . . b d b c . . . . . 
    . . . . b b c 5 5 5 c b b . . . 
    . . . . b 5 5 5 1 5 5 5 b . . . 
    . . . c c 5 5 5 1 5 5 5 c c . . 
    . . b b 5 5 5 1 1 1 5 5 5 b b . 
    . . d d 5 1 1 1 1 1 1 1 5 d d . 
    . . b b 5 5 5 1 1 1 5 5 5 b b . 
    . . . c c 5 5 5 1 5 5 5 c c . . 
    . . . . b 5 5 5 1 5 5 5 b . . . 
    . . . . b b c 5 5 5 c b b . . . 
    . . . . . . c b d b c . . . . . 
    . . . . . . . b d b . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.item)
Cure.x = 232
Cure.y = 24
Cure_2 = sprites.create(img`
    . . . . . b b b b b b . . . . . 
    . . . b b 9 9 9 9 9 9 b b . . . 
    . . b b 9 9 9 9 9 9 9 9 b b . . 
    . b b 9 d 9 9 9 9 9 9 9 9 b b . 
    . b 9 d 9 9 9 9 9 1 1 1 9 9 b . 
    b 9 d d 9 9 9 9 9 1 1 1 9 9 9 b 
    b 9 d 9 9 9 9 9 9 1 1 1 9 9 9 b 
    b 9 3 9 9 9 9 9 9 9 9 9 1 9 9 b 
    b 5 3 d 9 9 9 9 9 9 9 9 9 9 9 b 
    b 5 3 3 9 9 9 9 9 9 9 9 9 d 9 b 
    b 5 d 3 3 9 9 9 9 9 9 9 d d 9 b 
    . b 5 3 3 3 d 9 9 9 9 d d 5 b . 
    . b d 5 3 3 3 3 3 3 3 d 5 b b . 
    . . b d 5 d 3 3 3 3 5 5 b b . . 
    . . . b b 5 5 5 5 5 5 b b . . . 
    . . . . . b b b b b b . . . . . 
    `, SpriteKind.item2)
Cure_2.x = 24
Cure_2.y = 232
