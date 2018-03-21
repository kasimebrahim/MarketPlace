import React from 'react';
import {ItemSearch} from './search';
import {Items} from './items';

const Content = () => (
    <div className="content">
        <ItemSearch className='content'/>
        <Items />
    </div>
);

export default Content;