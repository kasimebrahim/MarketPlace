import React from 'react';

export default (state, action) => {
    if(action.type == 'changeState'){
        return action.payload;
    }

    return {state:"initial state"};
};