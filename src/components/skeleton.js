function Skeleton(parameter) {
    this.name = 'skeleton'

    this.parameter = parameter

    this.update = (object) => {
        parameter = object.position
    }
}