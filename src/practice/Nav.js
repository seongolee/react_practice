import React from "react";

const Nav = (props) => {
    const lis = []
    for (let i = 0; i < props.topics.length; i++) {
        let t = props.topics[i]
        lis.push(<li key={t.id}>
            <a href={'/read/' + t.id} onClick={(e) => {
                e.preventDefault();
                props.onChangeMode(t.id);
            }}>
                {t.title}</a></li>)
    }
    return (
        <nav>
            <ol>
                {lis}
            </ol>
        </nav>
    );
}

export default Nav;