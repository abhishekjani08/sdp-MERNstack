import React, {memo, useCallback, useEffect, useMemo, useRef, useState,} from 'react'
import Item from './Item.js'

const initialItems = Array(10).fill().map((x, i) => ({
index: `${i}`,
text:`item at index ${i}`
}))

const paginatedItems = Array(10).fill().map((x, i) => ({
  index: `${i}`,
  text:`item at index 1${i}`
  }) )
  


function App(){


  const[Items, setItems] = useState(initialItems) 
  function addNewItems() {
    setItems((prevItems) => [...prevItems,...paginatedItems])
   }
   return <div>
    <button onClick ={addNewItems}
    >Append new items</button>
    {Items.map((item) => <Item data={item} key={item.index} />)}
   </div>
}

export default App;
