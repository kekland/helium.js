function SpriteRenderer(sprite) {
    this.name = 'sprite-renderer'

    this.sprite = sprite

    this.start = (object) => {
        this.image = window.helium.cachedImages[sprite]
    }

    this.changeImage = (sprite) => {
        this.sprite = sprite
        this.image = window.helium.cachedImages[sprite]
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

        window.helium.canvas.context.drawImage(this.image,
            relativePosition.x, relativePosition.y,
            object.size.x, object.size.y)

        window.helium.canvas.context.restore()
    }
}