import { ReactNode } from "react"

type CounterProps = {
    setCount: React.Dispatch<React.SetStateAction<number>>,
    children: ReactNode,
}


const Counter = ({setCount, children} :CounterProps) => {
    

  return (
    <div>
        <h1> {children}</h1>
        <button onClick={()=>{setCount((prev) => prev +  1)}} className="border-solid border-x-2 border-y-2">Increment</button>
        <button onClick={()=>{setCount((prev) => prev -1)}} className="border-2">Decrement</button>
    </div>
  )
}

export default Counter