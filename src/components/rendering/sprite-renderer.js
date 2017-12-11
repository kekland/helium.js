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
        if (object.position.x > window.helium.canvas.object.width ||
            object.position.y > window.helium.canvas.object.height) {
            return
        }

        window.helium.canvas.context.save()

        window.helium.canvas.context.translate(window.helium.canvas.object.width / 2,
            window.helium.canvas.object.height / 2)

        window.helium.canvas.context.rotate(object.rotation * Math.PI / 180.0)

        window.helium.canvas.context.translate(-window.helium.canvas.object.width / 2,
            -window.helium.canvas.object.height / 2)

        window.helium.canvas.context.drawImage(this.image,
            object.position.x, object.position.y,
            object.size.x, object.size.y)

        window.helium.canvas.context.restore()
    }
}