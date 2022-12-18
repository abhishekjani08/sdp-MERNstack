import { memo, useEffect } from "react";

function ItemName(props)
{
    const{data}=props
    useEffect(()=>{
        console.log(`Item at index  ${data} rendered `)
    })
    return <h4> { data.text}</h4>
}
export default memo(ItemName)