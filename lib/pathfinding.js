const Pathfinding = {
    begin: (entity) => {
        entity.pendingMovement = Object.assign({}, entity.location)
    },
    release: (entity) => {
        entity.pendingMovement = "nowhere"
    },
    target: (entity, point) => {
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
        if (entity.pendingMovement) {
            if (entity.location.x === comparisonEntity.location.x) {
                //initial checks required
                if (comparisonEntity.location.y >= entity.location.y
                    && comparisonEntity.location.y <= entity.pendingMovement.y) {
                    return true;
                }
                if (comparisonEntity.location.y <= entity.location.y
                    && comparisonEntity.location.y >= entity.pendingMovement.y) {
                    return true;
                }
            }
            if (entity.pendingMovement.y === comparisonEntity.location.y) {
                if (comparisonEntity.location.x >= entity.location.x
                    && comparisonEntity.location.x <= entity.pendingMovement.x) {
                    return true;
                }
                if (comparisonEntity.location.x <= entity.location.x
                    && comparisonEntity.location.x >= entity.pendingMovement.x) {
                    return true;
                }
            }
            return false;
        }
    }
}

export default Pathfinding