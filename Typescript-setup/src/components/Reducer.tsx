import {useReducer} from 'react'

//useReducer is similar to usestate in that you destructure the actual state object and a function to manipulate
//that state
//the useReducer accepts three arguments but 2 are mandatory while the last one is optional 
//the two args are reducer function and the initial state value
//reducer fn takes in an action and a copy of the state. based on the action it makes changes to the copy state and returns it
interface State {
    count: number;
    error: string | null;
}

interface Action {
    type: "INCREMENT" | "DECREMENT";
}

function reducer (state:State, action:Action) {
    switch(action.type){
        case 'INCREMENT':{
            const newCount = state.count + 1;
            const hasError = state.count >= 10;
            return {...state, count : hasError ? state.count : newCount,
                error:hasError ? `Cannot increment above 10`: null,
            }
        }
        case 'DECREMENT':{
            const newCount = state.count -1;
            const hasError = state.count <= 0;
            return {...state , count : hasError ? state.count : newCount, 
                error : hasError ? `Cannot decrement below zero` : null,
            }
        }
        default:
            return state;
    }
}

const Reducer = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0, error:null})
  return (
    <div>
        <h1>{state.count}</h1>
        <button className='mb-2 bg-green-500' onClick={()=>dispatch({type:"INCREMENT"} as Action)}>INCREMENT</button>
        {state.error && <div className='mb-2 text-red-600'> {state.error}</div>}
        <button className='mb-2 bg-blue-600' onClick={()=>dispatch({type:"DECREMENT"} as Action)}>DECREMENT</button>
       
    </div> 
  )
}

export default Reducer