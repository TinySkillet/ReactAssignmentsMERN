import { useState } from "react";
import Child from "./Child";

export default function Parent(){
    const [message, setMessage] = useState("");

    function updateMessage(msg){
        setMessage(msg)
    }

    return(
        <Child message={message} updateMessage={updateMessage} />
    )
}