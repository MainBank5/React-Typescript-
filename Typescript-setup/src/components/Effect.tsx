import {useEffect, useState} from 'react'

const Effect = () => {
    const [number, setnumber] = useState<number>(0);
    const [name, setname] = useState<string>("");
    useEffect(()=>{
        console.count("useEffect rendered")
        document.title = `You clicked ${number} times`
    })
    console.count("component rendered")
  return (
    <div>
        <h1>you clicked {number} times</h1>
        <button onClick={()=>{setnumber((prev) => prev + 1)}}>Click me!</button>
        <input className='bg-yellow-400' type="text" value={name} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setname(e.target.value)}}/>
    </div>
  )
}

export default Effect;