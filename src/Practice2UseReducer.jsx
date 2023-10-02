import React, { useReducer } from 'react'

const Practice2UseReducer = () => {

    const initialState = {
        E : "",
        // name : "", 
        // O : 'Owes',
        // B : 'Bilal',
        // N : 'Nauman',
        // H : 'Huzaifa',
    }
    
    const reducer = (state , action) => {
        switch (action) {
            case "O":
                return{       
                  E : 'Owes Ansari',
                //   name : 'Owes Ansari', 
                }
                case "B" :
                    return{
                    E : 'Bilal Ansari'
                    }
                case 'N' :
                    return{
                        E : "Nouman Ansari", 
                    }
                case 'H' : 
                return{
                    E : "Huzaifa Ansari",
                }
                case 'clear' : 
                return{
                    E : ''
                }
                
        
            default:
               return state
        }
    }

    const [state , dispatch] = useReducer(reducer , initialState);

  return (
    <>
      <h1>Your Name {state.E} </h1>
      <button onClick={()=> dispatch("O") }>Owes</button>
      <button onClick={()=>dispatch("B")}>Bilal</button>
      <button onClick={()=>dispatch("N")}>Nauman</button>
      <button onClick={()=> dispatch("H")}>Huzaifa</button>
      <button onClick={()=> dispatch("clear")}>Clear</button>
    </>
  )
}

export default Practice2UseReducer
