import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import { v1 } from 'uuid';
import styles from './Greeting.module.css'
// types
export type UserType = {
    _id:  string// need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<UserType[]>([]) // need to fix any

    const addUserCallback = (name: string) => {
        let lol = {_id: v1(), name: name} // need to fix any
        setUsers(users => [...users, lol]) // need to fix
    }

    return (
        <div className={styles.hw3 }>
            <h3>Homeworks 3</h3>
            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

        </div>
    )
}

export default HW3
