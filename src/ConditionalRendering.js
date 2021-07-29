import React, { useState } from 'react';

export default function ConditionalRendering() {
    let [isLoggedIn, setLogIn] = useState(false);
    let setTrue = () => {
        setLogIn(true);
    }
    let setFalse = () => {
        setLogIn(false);
    }
    return (
        <div>
            {!isLoggedIn ? <button type="button" onClick={setTrue}>Login</button>:null}
            {isLoggedIn && <p>Welcome user</p>}
            {isLoggedIn && <button type="button" onClick={setFalse}>Logout</button>}
            {!isLoggedIn && <p>Login please</p>}

        </div>
    )
}