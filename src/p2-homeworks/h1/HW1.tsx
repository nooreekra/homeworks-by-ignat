import React from 'react'
import Message from './Message'
import styles from './Message.module.css'
const messageData = {
    avatar: 'https://avatars.githubusercontent.com/u/107566335?v=4',
    name: 'Nurik',
    message: 'Я знаю, что ничего не знаю!',
    time: '22:00',
    
}

function HW1() {
    return (
        <div className={styles.hw1}>
            <h3>Homeworks 1</h3>
            <Message
               avatar={messageData.avatar}
               name={messageData.name}
               message={messageData.message}
                time={messageData.time}
            />
        </div>
    )
}

export default HW1
