import {React,  useContext} from 'react'
import { Text, Button } from 'react-native'
import { AuthContext } from '../context/AuthContext'

const ProfileScreen = () => {

    const { logout } = useContext(AuthContext)

  return (
    <>
    <Text>
        ProfileScreen
      </Text>
       <Button title="Logout" onPress={ () => logout()} color="red" />
    </>
  )
}

export default ProfileScreen