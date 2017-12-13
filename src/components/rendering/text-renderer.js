function TextRenderer(text, font, size, color) {
    this.name = 'sprite-renderer'

    this.text = text
    this.font = font
    this.textSize = size
    this.color = color

    this.start = (object) => {
        
    }

    this.changeText = (text) => {
        this.text = text
    }
    this.changeFont = (font) => {
        this.font = font
    }
    this.changeSize = (size) => {
        this.textSize = size
    }
    this.changeColor = (color) => {
        this.color = color
    }

    this.update = (object) => {
        let relativePosition = {
            x: -window.helium.camera.absolutePosition.x + object.absolutePosition.x,
            y: -window.helium.camera.absolutePosition.y + object.absolutePosition.y
        }
        if (relativePosition.x > window.helium.canvas.object.width ||
            relativePosition.y > window.helium.canvas.object.height ||
            relativePosition.x + object.size.x < 0 ||
            relativePosition.y + object.size.y < 0) {
            return
        }

        window.helium.canvas.context.save()

        window.helium.canvas.context.translate(window.helium.canvas.object.width / 2,
            window.helium.canvas.object.height / 2)

        window.helium.canvas.context.rotate(object.rotation * Math.PI / 180.0)

        window.helium.canvas.context.translate(-window.helium.canvas.object.width / 2,
            -window.helium.canvas.object.height / 2)

        window.helium.canvas.context.fillStyle = color
        window.helium.canvas.context.font = this.textSize + 'px ' + this.font
        
        window.helium.canvas.context.fillText(this.text,
            relativePosition.x, relativePosition.y)

        window.helium.canvas.context.restore()
    }
}