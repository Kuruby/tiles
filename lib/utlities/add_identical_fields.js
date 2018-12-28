const AddIdenticalFields = (left,right)=>{
    var result = {}
    for(var field in left)
    {
        if(right[field])
        {
            result[field] = left[field]+right[field]
        }
    }
    return result
}

export default AddIdenticalFields