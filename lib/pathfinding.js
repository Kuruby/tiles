const Pathfinding = {
    begin: (entity) => {
        entity.pendingMovement = Object.assign({}, entity.location)
    },
    release: (entity) => {
        target = "nowhere"
    },
    target: (entity,point)=>
    {
        entity.pendingMovement = Object.assign({}, point)
    },
    clamp: (entity) => {
        entity.location = Object.assign({}, entity.pendingMovement)
    },
    end: (entity) => {
        delete entity.pendingMovement
    },
    complete: (entity) => {
        entity.location = Object.assign({}, entity.pendingMovement)
        delete entity.pendingMovement
    },
    isInPath: (entity, comparisonEntity) => {
        throw "Not implemented"
    }
}

export default Pathfinding