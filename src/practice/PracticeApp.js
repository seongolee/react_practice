import React, {useState} from "react";
import Header from "./Header";
import Nav from "./Nav";
import Article from "./Article";
import Create from './Create';

const PracticeApp = () => {
    const [mode, setMode] = useState('WELCOME');
    const [id, setId] = useState(null);
    const [nextId, setNextId] = useState(4);

    const [topics, setTopics] = useState([
        {id:1, title:'html', body:'html is ....'},
        {id:2, title:'css', body:'css is ....'},
        {id:3, title:'javascript', body:'javascript is ....'},
    ]);

    let content = null;
    if(mode === 'WELCOME'){
        content = <Article title="Welcome" body="Hello, WEB"></Article>
    } else if(mode === 'READ'){
        let title, body = null;
        for(let i=0; i<topics.length; i++){
            if(topics[i].id === id){
                title = topics[i].title;
                body = topics[i].body;
                break;
            }
        }
        content = <Article title={title} body={body}></Article>
    } else if(mode === 'CREATE'){
        content = <Create onCreate={(_title, _body) => {
            const newTopic = {id: nextId, title:_title, body:_body};
            const newTopics = [...topics];
            newTopics.push(newTopic);
            setTopics(newTopics);
            setId(nextId);
            setNextId(nextId + 1);
            setMode('READ')

        }}/>
    }

    return (
        <div>
            <Header title="WEB" onChangeMode={() => {
                setMode('WELCOME');
            }}></Header>
            <Nav topics={topics} onChangeMode={(id) => {
                setMode('READ');
                setId(id);
            }}></Nav>
            {content}
            <a href="/create" onClick={(e) => {
                e.preventDefault();
                setMode('CREATE');
            }}>Create</a>
        </div>
    );
}

export default PracticeApp;