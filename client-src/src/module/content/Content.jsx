import React from 'react';
import ContentShow from './content_show';
import {Items} from './items';
import Breadcrumb from './breadcrumb';

const Content = () => (
    <div>
        <ContentShow />
        <hr />
        <Breadcrumb />
        <hr className="nomargin"/>
        <Items />
    </div>
);

export default Content;