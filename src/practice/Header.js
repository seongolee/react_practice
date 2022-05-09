import React from "react";

const Header = (props) => {
    return (
        <header>
            <h1><a href="/" onClick={(e) => {
                e.preventDefault();
                props.onChangeMode();
            }}>{props.title}</a></h1>
        </header>
    );
}

export default Header;