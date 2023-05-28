'use client'
function Todo(probs) {
    function deleteHandler(){}

    return(
        <div className='Card'>
            <h2> {probs.text} </h2>
            <div className='actions'>
                <button className='btn' onClick={deleteHandler()}>Delete</button>
            </div>
        </div>

   
    )
}

export default Todo;