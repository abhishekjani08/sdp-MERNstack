import './App.css';
import { useState, useRef, useEffect, useMemo,memo } from 'react';
const jsx = <h1> Jani</h1>
function App() {
  //1. const [inputHolder, setInputText] = useState("")

  //2. const [counter, setCounter] = useState("")
  // function incrementCount() {
  //   setCounter(counter + 1)
  // }
  // function decrementCount() {
  //   setCounter(counter - 1)
  // }


  // function incrementCount() {
  //     setCounter(counter + 1)
  //   }
  //   function decrementCount() {
  //     setCounter(counter - 1)
  //   }

  //3.  function incrementCountRef() {
  //   console.log("Counter:", counterRef)
  //   counterRef.current=counter.current+1

  // }
  // function decrementCountRef() {
  //   console.log("Counter:", counterRef)
  //   counterRef.current=counter.current-1


  // }

  // function inputButton(){
  //   console.log(inputRef)
  // }

  // const [counter, setCounter] = useState(0)
  // const counterRef=useRef(200);
  // const inputRef=useRef(201);


  // 4. const [dummyvalue,dummy]=useState(true)
  // const [count,setCount]=useState(true)
  // const countRef=useRef(200)
  // useEffect(()=>{
  //   console.log("UseEffect is called with empty tag")
  // },[])

  // useEffect(()=>{
  //   console.log("UseEffect is called without dependency array ")
  // })


  // useEffect(()=>{
  //   console.log("UseEffect is called with one dependency array ")
  // },[count])

  // useEffect(()=>{
  //   console.log("UseEffect is called with ref dependency array ")
  // },[countRef.current])

  //  5. const [count,setCount]=useState(0)

  //   const memoizedCount =useMemo(()=> count ,[count])
  // function updateCount(){
  // setCount((x)=> x+1)
  // }
  //    console.log("Memoized Count ",memoizedCount)
  
  //-------------------------------------------------------------------------
  
  // 6. const [count,setCount]=useState(true)
  // function updateCount(){
  //   setCount((x)=> x+1)
  //   }
  // const CounterPresentor = memo((props) => {
  //   const { count } = props
  //   useEffect(() => {
  //     console.log("Component Rendered ")
  //   })
  //   return <div>
  //     {count}

  //   </div>
  //   },(prev, next) => {
  //     if (prev == next)
  //       return true
  //   })
//prev === next agr false hua toh render hoga 
//agr true hoga toh render nai hoga


//---------------------------------------------------------
//memo component
//usememo variables values
//callback functions

//--------------------------------------------------------------
//7. const [count, setCount] = useState(0)
// const [d, setD] = useState(false)

// function updateCount() {
//   setCount((x) => x+1)
// }

// const updateCountArrow = () => {
//   console.log("Callback function called...")
// }

// console.log("Count: ", count)
// const UseCallbackExample = memo((props) => {
//   console.log("Redndered becase of reference change of arrow function...")
//   return null
// })

// const CouterPresentor = memo((props) => {
//   const {count} = props

//   useEffect(() => {
//     console.log("CounterPresentor Rendered...")
//   })

//   return <div>
//     {count}
//   </div>
// }, (prev, next) => {
//   return prev === next
// })

const initialState = [
  {id: 1, country: 'Austria'},
  {id: 2, country: 'Belgium'},
  {id: 3, country: 'Canada'},
];
const [data, setData] = useState(initialState);

const updateState = () => {
  // 👇️ passing function to setData method
  setData(prevState => {
    const newState = prevState.map(obj => {
      // 👇️ if id equals 2, update country property
      if (obj.id === 2) {
        return {...obj, country: 'Denmark'};
      }

      // 👇️ otherwise return object as is
      return obj;
    });

    return newState;
  });
};



  return (
    <div className="App">

      {/* 1. 
       <div className='input'>
          <input value={inputHolder} onChange={(event)=>{
            setInputText(event.target.value)
          }}/>
          <p>{inputHolder}</p>
      </div> */}

      {/*    2.
      <button onClick={incrementCount}>Increment</button>
      <p>{counter}</p>
      <button onClick={decrementCount}>Decrement</button> */}


      {/* 3.
      <button onClick={incrementCountRef}>Increment</button>
      <p>{counterRef.current}</p>
      <button onClick={decrementCountRef}>Decrement</button>
<br></br>
<br></br>
      <input ref={inputRef} value="Click the button" />
              <button onClick={inputButton}>Click me</button> */}

      {/* 4. <button onClick={()=>dummy((x)=> !x )}>Click me</button>
      <button onClick={()=>setCount((x)=> !x+1 )}>Update me</button>
      <button onClick={()=>{
countRef.current ={}
      }}>Update Ref Count</button>
  <p>Dummy State - {dummyvalue} CountState- {count} </p> */}

      {/* 5. <button onClick={updateCount}>USE MEMO Count</button>{count} */}
      
{/*      6.  
      <button onClick={updateCount}> MEMO Count</button> 
      <CounterPresentor count={count} />
 */}


 
    {/* 7. <button onClick={updateCount}>Update Count</button>
    <button onClick={() => setD((x) => !x)}>Render Callback Component</button>
    <CouterPresentor count={count} customObject={{
      "name": "swapnil"
    }}/>
    <UseCallbackExample updateCountArrow={updateCountArrow} /> */}

<button onClick={updateState}>Update state</button>

      {data.map(obj => {
        return (
          <div key={obj.id}>
            <h2>id: {obj.id}</h2>
            <h2>country: {obj.country}</h2>
            <hr />
          </div>
        );
      })}

      <h1> Abhishek </h1>
      {jsx}
    </div>
  );
}

export default App;
