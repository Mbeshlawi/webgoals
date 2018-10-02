import React from 'react';
import List from '@material-ui/core/List'
import Goal from './Goal';
import GoalInput from './GoalInput';


const GoalList = () => {
    return (
    <List className='shadow-3'>
        <GoalInput/>
        <Goal/>
        <Goal/>
        <Goal/>
        <Goal/>
    </List>
    );
}

export default GoalList;