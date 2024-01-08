import { useEffect, useRef } from "react"



const Ref = () => {
    const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() =>{
    inputRef.current?.focus()
  }, [])
  return (
    <div>
        <input className="bg-yellow-300" ref={inputRef}  type="text"/>
        <input  type="email" />
        <button  >Send</button>
    </div>
  )
}

export default Ref