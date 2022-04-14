import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Home, Note, Login } from '../screens'
import SideMenu from '../components/SideMenu'

const Drawer = createDrawerNavigator()

export default function Router() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            // backgroundColor: '#ddd'
            elevation: 0
          }
        }}
        drawerContent={props => <SideMenu {...props} />}
      >
        <Drawer.Screen name="Home" component={Home} options={{ title: '영단어 1000' }} />
        <Drawer.Screen name="Note" component={Note} options={{ title: '단어장' }} />
        <Drawer.Screen name="Login" component={Login} options={{ title: '로그인' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
