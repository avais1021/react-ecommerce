import React,{useReducer} from 'react'

const PracticeUseReducer = () => {
    const initialState = 0;

    const reducer = (state, action) => {
        switch (action) {
            case 'decrement':
                return (
                    state - 1
                )

            case 'increment':
                return(
                    state + 1
                )


            default:
              return  state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <h1>{state}</h1>
            <button onClick={() => dispatch("decrement")}>Decrement</button>
            <button onClick={() => dispatch("increment")}>Increment</button>
        </>
    )
}

export default PracticeUseReducer
