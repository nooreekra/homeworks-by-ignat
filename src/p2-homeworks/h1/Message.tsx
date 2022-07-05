import React from 'react'
import styles from './Message.module.css'
type MessageType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}


function Message(props: MessageType) {
    return (
        <div className={styles.wrapper}>
            <div>
                <img className={ styles.img }src={props.avatar}></img>
            </div>
            <div className={styles.message}>
                <div className={styles.nametext}>
                <p>{props.name}</p>
                <p>{props.message}</p>
                </div>
                <div className={styles.time}>
                    <p>{props.time}</p>
                </div>
            </div>    
        </div>
        
    )
}

export default Message
