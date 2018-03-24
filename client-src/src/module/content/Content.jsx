import React from 'react';
import ContentShow from './content_show';
import {Items} from './items';
import Breadcrumb from './breadcrumb';

const Content = () => (
    <div className="container">
        <ContentShow />
        <hr />
        <Breadcrumb />
        <hr />
        <Items />
    </div>
);

export default Content;