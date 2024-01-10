import { useReducer } from "react";

type Action = {
    type : "Increase" | "Decrease";
}

type State = {
    bars: number;
    error: string | null;
}

const reducer = (state:State, action:Action) => {
    switch(action.type){
        case "Increase":{
            const newbars = state.bars + 1;
            const iserror = state.bars >= 10;
            return{...state, bars: iserror ? state.bars : newbars,
            error:iserror ? 'Cannot Increase above 10' :null}
        }
        case "Decrease":{
            const newbars = state.bars -1;
            const isError = state.bars <= 1;
            return{...state, bars: isError ? state.bars : newbars, 
            error: isError ? 'Cannot decrease below 1' :null}
        }
        default:
            return state;
    }
}



const Myreducer = () => {
    const [state, dispatch] = useReducer(reducer, {bars:1, error:null})
  return (
    <div>
        <h1>{state.bars}</h1>
        <button onClick={()=>{dispatch({type:"Increase"})}}>Increase</button>
       
        <button onClick={()=>{dispatch({type:"Decrease"})}}>Decrease</button><br />
         {state.error && <span>{state.error}</span>}
    </div>
  )
}

export default Myreducer;