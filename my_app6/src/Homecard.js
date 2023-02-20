import React from "react"
import { useSelector, useDispatch } from 'react-redux'
const Homecard=()=>{
    const count = useSelector((state) => state.counter.value)
    return(
        <div>
            {count}
        </div>
    )
}
export default Homecard