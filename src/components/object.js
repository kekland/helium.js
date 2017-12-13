function Object(name, position, rotation, size) {
    
    this.name = name
    this.localPosition = position
    this.absolutePosition = position
    this.rotation = rotation
    this.size = size
    
    this.components = {}
    this.children = {}
    this.parent = null

    this.calculateAbsolutePosition = () => {
        if(this.parent === null) {
            return this.localPosition
        }
        let parentAbsolutePosition = this.parent.calculateAbsolutePosition()

        return {
            x: parentAbsolutePosition.x + this.localPosition.x, 
            y: parentAbsolutePosition.y + this.localPosition.y
        }
    }

    this.start  = () => {
        this.absolutePosition = this.calculateAbsolutePosition()
    }

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

    this.addChild = (object) => {
        this.children[object.name] = object
        this.children[object.name].parent = this
        this.children[object.name].start()
    }

    this.getChild = (name) => {
        return this.children[name]
    }

    this.removeChild = (name) => {
        delete this.children[name]
    }

    this.destroy = () => {
        delete this
    }
    this.update = () => {
        this.absolutePosition = this.calculateAbsolutePosition()
        for(let key in this.children) {
            let child = this.children[key]
            child.update()
        }
        for(let key in this.components) {
            let component = this.components[key]
            component.update(this)
        }
    }
}