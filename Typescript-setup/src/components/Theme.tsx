
const Signup = () => {

    const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault
        console.log("clicked!")
    }

    return(
        <div>
            <form action="">
                <input type="text"  placeholder="..search for anything"/>
                <button onClick={handleClick}>Sign Up</button>
            </form>
        </div>
    )
}