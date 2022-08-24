import style from './Message.module.css'
export const Message = ({ message }) => {
    return <>
        <h3 className={style.h3}>{message}</h3>
    </>
}