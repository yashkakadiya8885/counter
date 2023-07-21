const { useState, useEffect } = require("react")

const Counter =()=>{
    let[count,setcount]=useState(0)
    let[count2,setcount2]=useState(0)
    document.title=(count2)
    useEffect(()=>{
        setcount(count+1)
    },[count2])
    return(
        <div>
            <h1>count:{count}</h1>
            <h1>count2:{count2}</h1>
            <button onClick={()=> setcount2(count2+1)}>Add</button>
            <button onClick={()=> setcount2(count2-1)}>Remove</button>
        </div>
    )
}
export default Counter