import { useState } from "react";

export default function Child({message, updateMessage}){

    const [text, setText] = useState('');


    return (

        <>
        <h3>Your Message</h3>
        {message == '' && "No Messages"}
        <p>{message}</p>
        <br />
        <h4>Enter new message</h4>
        <textarea style={{width: '15rem', height: '5rem'}} name="" id="" value={text} onChange={(e) => setText(e.target.value)}></textarea>
        <br />
        <button onClick={() => updateMessage(text)}>Update Message</button>
        </>
    )
}