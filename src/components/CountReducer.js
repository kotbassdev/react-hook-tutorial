import React, { useReducer } from 'react';

const initialState = { count: 0};

const reducer = (state,action) => {
    switch(action.type){
        case "COUNT_INCREMENT":
            return {count: state.count + 1};
        case "COUNT_DECREMENT":
            return {count: state.count - 1};
        default: return state;
    }
}

export function CountReducer() {

    const [state,dispatch] = useReducer(reducer,initialState);
    // console.log(dispatch({type:"COUNT_INCREMENT"}))
    return (
        <React.Fragment>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({type:"COUNT_INCREMENT"})}>add</button>
        </React.Fragment>
    );
}