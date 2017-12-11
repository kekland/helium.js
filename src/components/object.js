function Object(name, position, rotation, size) {
    this.name = name
    this.position = position
    this.rotation = rotation
    this.size = size
    
    this.components = {}

    this.addComponent = (component) => {
        this.components[component.name] = component
        component.start(this)
    }

    this.getComponent = (name) => {
        return this.components[name]
    }
    
    this.removeComponent = (name) => {
        delete this.components[name]
    }

    this.update = () => {
        for(let key in this.components) {
            let component = this.components[key]
            component.update(this)
        }
    }
}