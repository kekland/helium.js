function Scene(name, objects) {
    this.name = name
    this.objects = objects

    this.exportString = () => {
        return JSON.stringify(this)
    }
}