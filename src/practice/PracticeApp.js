import React, {useState} from "react";
import Header from "./Header";
import Nav from "./Nav";
import Article from "./Article";

const PracticeApp = () => {
    const mode = 'WELCOME';
    const topics = [
        {id:1, title:'html', body:'html is ....'},
        {id:2, title:'css', body:'css is ....'},
        {id:3, title:'javascript', body:'javascript is ....'},
    ]

    let content = null;
    if(mode === 'WELCOME'){
        content = <Article title="Welcome" body="Hello, WEB"></Article>
    } else if (mode === 'READ'){
        content = <Article title="Read" body="Hello, Read"></Article>
    }

    return (
        <div>
            <Header title="WEB" onChangeMode={() => {
                alert('Header');
            }}></Header>
            <Nav topics={topics} onChangeMode={(id) => {
                alert(id);
            }}></Nav>
            {content}
        </div>
    );
}

export default PracticeApp;