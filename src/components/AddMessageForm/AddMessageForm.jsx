import { useState, useEffect } from "react";
import { style } from "./AddMessageForm.module.css"
import { AUTHOR } from '../constants';

export const AddMessageForm = ({ messageList, addMessage }) => {
    const [text, setText] = useState('');
    useEffect(() => {
        let id
        if (messageList.length > 0 &&
            messageList[messageList.length - 1].author === AUTHOR.user) {
            id = setTimeout(() => {
                addMessage({
                    author: AUTHOR.bot,
                    text: "I'm bot"
                });
            }, 1500)
        }
        return () => clearTimeout(id)
    }, [messageList]);
    const setMessage = (e) => {
        e.preventDefault();
        addMessage({
            author: AUTHOR.user,
            text,
        });

    }
    const handleText = (e) => {
        setText(e.target.value)
    }
    return <>
        <form className="messageForm" data-testid="messageForm" onSubmit={setMessage}>
            <input type="text" data-testid="input" name={text} placeholder="Type your message" onChange={handleText} />
            <button >Send Message</button>
        </form>
    </>
}