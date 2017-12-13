let Engine
let Keyboard
let Mouse

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
    
    Keyboard = new HeliumKeyboard()
    Keyboard.Init()

    Mouse = new HeliumMouse()
    Mouse.Init()
}

function Awake() {

}

let myObject
let myObjectChild
function Start() {
    myObject = new Object('logo', {x: 0, y: 0}, 0, {x: 100, y: 100})
    myObject.addComponent(new SpriteRenderer('logo'))
    
    myObjectChild = new Object('logo', {x: 100, y: 100}, 0, {x: 50, y:50})
    myObjectChild.addComponent(new TextRenderer('cube', 'Arial', 12, '#000000'))

    Engine.addObject(myObject)
    myObject.addChild(myObjectChild)
}

function Update() {

    myObject.localPosition = window.helium.mouse.position

    console.log(window.helium.mouse.buttons[1])
    if(window.helium.mouse.buttons[1]) {
        myObject.removeComponent('sprite-renderer')
    }  
    if(Keyboard.isKeyPressed(window.helium.keyboard.keys['UpArrow'])) {
        window.helium.camera.localPosition.y -= 1
    }
    if(Keyboard.isKeyPressed(window.helium.keyboard.keys['DownArrow'])) {
        window.helium.camera.localPosition.y += 1
    }
    if(Keyboard.isKeyPressed(window.helium.keyboard.keys['LeftArrow'])) {
        window.helium.camera.localPosition.x -= 1
    }
    if(Keyboard.isKeyPressed(window.helium.keyboard.keys['RightArrow'])) {
        window.helium.camera.localPosition.x += 1
    }


}