function Helium() {
    this.objects = {}

    this.awakeOverride = () => {}
    this.startOverride = () => {}
    this.updateOverride = () => {}

    this.currentFrameRate = {}

    this.Init = (data, functions, scene) => {
        if(scene) {
            console.log('loaded scene from' + scene.name)
            this.objects = scene.objects
        }

        this.frameRate = data.frameRate

        window.helium = {}
        window.helium.canvas = {}
        window.helium.cachedImages = {}

        window.helium.canvas.object = document.getElementById(data.canvasId)

        window.helium.canvas.object.width = document.body.clientWidth; 
        window.helium.canvas.object.height = document.body.clientHeight;

        window.helium.camera = new Object('logo', {x: 0, y: 0}, 0, {x: 0, y: 0})
        //WebGL2D.enable(window.helium.canvas.object)

        window.helium.canvas.context = window.helium.canvas.object.getContext('2d')

        this.awakeOverride = functions.awake
        this.startOverride = functions.start
        this.updateOverride = functions.update

        Awake(data.images)
    }

    let Awake = (imageSrc) => {
        let loadedImageCount = 0
        let shouldLoadImages = imageSrc.length

        for(let img of imageSrc) {
            window.helium.cachedImages[img.id] = new Image()
            window.helium.cachedImages[img.id].src = img.src

            window.helium.cachedImages[img.id].onload = () => {
                loadedImageCount += 1
                if(loadedImageCount == shouldLoadImages) {
                    this.awakeOverride()
                    Start()
                }
            }
        }
    }

    let Start = () => {
        this.objects = new Object('root', {x: 0, y: 0}, 0, {x: 0, y: 0})
        this.objects.start()

        let cameraObject = new Object('camera', {x: 0, y: 0}, 0, {x: 0, y: 0})
        this.addObject(cameraObject)
        this.startOverride()

        window.requestAnimationFrame(Update)
    }

    let Update = () => {
        window.helium.canvas.context.clearRect(0, 0, canvas.width, canvas.height)
        this.updateOverride()

        this.objects.update()

        window.requestAnimationFrame(Update)
    }

    this.addObject = (object) => {
        object.parent = this.objects
        this.objects.addChild(object)
        object.start()
    }

    this.removeObject = (name) => {
        delete this.objects[name]
    }
}