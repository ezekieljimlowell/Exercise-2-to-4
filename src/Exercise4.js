import React from "react";
import PropTypes from 'prop-types';
import { className } from "postcss-selector-parser";

function Exercise4() {
    const Message = ({ subject, greetings }) => {
        return (
            <div className="message">
                {subject}, {greetings}
            </div>
        )
        //return <div className="message">{children}</div>
    }
    Message.protoTypes = {
        subject: PropTypes.string.isRequired,
        greetings: PropTypes.string.isRequired
    }
    
    return (
        <React.Fragment className="container">
            <Message subject="Maths" greetings="interesting"></Message>
            <Message subject="History" greetings="negative"></Message>
            {/*<Message>Hello World</Message>
            <Message>Goodbye</Message>*/}
            {/*{React.createElement(Message, {children: "Hello World"})}
            {React.createElement(Message, {children: "Goodbye"})}*/}
            {/*<div className="container">
            {Message({ children: "Hello World" })}
            {Message({ children: "Goodbye" })}
    </div>*/}
        </React.Fragment>
    )
}

export default Exercise4;
