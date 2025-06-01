/*---
useReducer is an alternative of useState hook for complex state management

const [state, dispatch] = useReducer(reducer, initialState)

it takes two arguments (reducer function and initialState)
useReducer hook returns a array with two elements (state and dispatch function)

Dispatch function:  is used to send the actions to the reducer, which in turn updates 
the state based on the action's type and any associated data(payload)

reducer Function: A function that takes the current state and the action as the argument and returns a new state. 

initial state: The initial state value
---*/

// Example:
import React {useReducer} from 'react';

const initialState = {count: 0}

function reducer(state, action){
    switch(action.type){
        case "increment" : return { count: state.count + 1};
        case "decrement" : return { count: state.count - 1};
        default return state;
    }
}

function Counter(){
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={()=> dispatch({type: 'increment'})}>+</button>
            <button onClick={()=> dispatch({type: 'decrement'})}>-</button>
        </div>
    )
}

/*---
 "useReducer is a React Hook that helps manage complex state in a component. 
 Instead of updating the state directly like useState, it uses a special function called a reducer, 
 which takes the current state and an action, and returns the new state. You then update the state by 'dispatching' actions. 
 It's very useful when the state has multiple values or when the update logic is more complicated."
---*/