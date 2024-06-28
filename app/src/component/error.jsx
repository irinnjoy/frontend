import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Error() {
    return (
        <div class='all'>
        <div style={{
            backgroundImage: "url(gif.gif)",
            backgroundSize: "cover",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
        }}>
            <h1 style={{ textAlign: "center", color: "white" }}>ERROR PAGE</h1>
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                <a href="/Login"style={{color:"purple",justifyContent:"start"}}>Login</a>
            </div>
        </div>
        </div>
    );
}

export default Error;