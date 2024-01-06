import { useState } from "react";

type UserType = {
    name:string;
    id:number;
}


const States = () => {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState<UserType | null>(null);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }

    const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setUser({
            name: username,
            id:Math.random()
        })
    }
  return (
    <div>
        <form>
            <input type="text" onChange={handleChange}/>
            <button onClick={handleClick}>Log in </button>
        </form>
    </div>
  )
}

export default States;