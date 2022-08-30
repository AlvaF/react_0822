import { useState, useEffect } from "react";
import { style } from "./AddMessageForm.module.css"

export const AddMessageForm = ({ messageList, setMessageList }) => {
    const [author, setAuthor] = useState('');
    const [message, setText] = useState('');
    const [botAnswer, setBotAnswer] = useState('')
    useEffect(() => {
        let id
        if (messageList.lenth !== 0) {
            id = setTimeout(() => {
                setBotAnswer(`The massage was sent by ${author}`);
                setTimeout(() => {
                    setBotAnswer();
                }, 1000);
            }, 1500)
        }
        return () => clearTimeout(id)
    }, [messageList]);
    const handleMessage = () => {
        let text = {
            author: author,
            text: message
        }
        messageList.push(text)
        setMessageList([...messageList]);
    }
    const handleAuthor = (e) => {
        setAuthor(e.target.value)
    }
    const handleText = (e) => {
        setText(e.target.value)
    }
    return <>
        <div className="messageForm">
            <input type="text" name={author} placeholder="Type your name" onChange={handleAuthor} />
            <input type="text" name={message} placeholder="Type your message" onChange={handleText} />
            <button onClick={handleMessage}>Send Message</button>
            <p>{botAnswer}</p>
        </div>
    </>
}