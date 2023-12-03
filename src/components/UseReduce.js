import React from 'react';
import PropTypes from 'prop-types';

UseReduce.propTypes = {
    
};
// init state
const initState = 0;

// action
const DOWN_ACTION = 'down';
const UP_ACTION = 'up';

// reducer
function reducer(state, action) {
    switch (action) {
        case DOWN_ACTION:
            return state - 1;
        case UP_ACTION:
            return state + 1;
        default:
            throw new Error();
    }
}

// Dispatch


function UseReduce(props) {
    const [count, dispatch] = React.useReducer(reducer, initState);

    return (
        <div>
            <div className="title">{count}</div>
            <button onClick={() => dispatch(DOWN_ACTION)}>down</button>
            <button onClick={() => dispatch(UP_ACTION)}>up</button>
        </div>
    );
}

export default UseReduce;