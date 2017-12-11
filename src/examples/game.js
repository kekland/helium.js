let Engine

function Loaded() {
    Engine = new Helium()

    let images = [
        { id: 'logo', src: 'examples/assets/logo.png' }
    ]

    Engine.Init({
        frameRate: 60,
        canvasId: 'canvas',
        images: images
    }, {
        awake: Awake,
        start: Start,
        update: Update
    })
}

function Awake() {

}

let myObject
function Start() {
    myObject = new Object('logo', {x: 0, y: 0}, 0, {x: 100, y: 100})
    myObject.addComponent(new SpriteRenderer('logo'))
    
    Engine.addObject(myObject)
}

function Update() {
    myObject.position.x += 1
}