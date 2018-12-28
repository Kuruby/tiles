const Pathfinding = {
    begin: (source, target) => {
        target = source
    },
    release: (source, target) => {
        target = "nowhere"
    },
    clamp: (source, target) => {
        source = target
    },
    isInPath: (source, target, comparison) => {
        throw "Not implemented"
    }
}

export default Pathfinding