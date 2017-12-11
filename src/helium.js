function Helium() {
    this.objects = {}

    this.awakeOverride = () => {}
    this.startOverride = () => {}
    this.updateOverride = () => {}

    this.Init = (data, functions) => {
        this.frameRate = data.frameRate

        window.helium = {}
        window.helium.canvas = {}
        window.helium.cachedImages = {}

        window.helium.canvas.object = document.getElementById(data.canvasId)
        
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
        this.startOverride()

        window.requestAnimationFrame(Update)
    }

    let Update = () => {
        window.helium.canvas.context.clearRect(0, 0, canvas.width, canvas.height)
        this.updateOverride()

        for(let objectKey in this.objects) {
            let object = this.objects[objectKey]
            object.update()
        }

        window.requestAnimationFrame(Update)
    }

    this.addObject = (object) => {
        this.objects[object.name] = object
    }

    this.removeObject = (name) => {
        delete this.objects[name]
    }
}