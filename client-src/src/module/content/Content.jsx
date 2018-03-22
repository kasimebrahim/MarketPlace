import React from 'react';
import {ItemSearch} from './search';
import {Items} from './items';

const Content = () => (
    <div className="container">
        <ItemSearch />
        <Items />
    </div>
);

export default Content;