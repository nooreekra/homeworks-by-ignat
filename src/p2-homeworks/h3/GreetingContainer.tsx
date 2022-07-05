import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'
type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('Nurik') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any
    const [totalUsers, setTotalUsers] = useState(0)
    
    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value)
    }
    const addUser = () => {
        if (name === '') return
        else { 
            alert(`Hello ${name} !`)
            setTotalUsers(totalUsers + 1) // need to fix
        }
    }


    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
