import style from './Message.module.css'
export const MessageList = ({ messageList }) => {
    return <>
        {messageList.map((message, index) =>
            <p key={index}> {message.author}:{message.text}</p>
        )}
    </>
}