import React from 'react';

import Subject from "./Subject";
import TOC from "./TOC";
import Content from "./Content";

const Practice = () => {
    const topics =[
        {id:1, title:'html', body:'html is ...'},
        {id:2, title:'css', body:'css is ...'},
        {id:3, title:'javascript', body:'javascript is ...'}
    ]

    return (
        <div className="Practice">
            <Subject title="WEB" onChangeMode={() => {
                alert('Header');
            }}></Subject>
            <TOC topics={topics} onCahngeMode={(id) => {
                alert(id);
            }}></TOC>
            <Content title="Welcome" body="Hello, WEB"></Content>
        </div>
    );
}

export default Practice;