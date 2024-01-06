
const Form = () => {

    const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault
        console.log("clicked!")
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        console.log(e.target.value)
    }

    return(
        <div>
            <form action="">
                <input type="text"  placeholder="..search for anything" onChange={handleChange}/>
                <button onClick={handleClick}>Sign Up</button>
            </form>
        </div>
    )
}

export default Form;