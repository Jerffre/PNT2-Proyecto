import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterLoginScreen from './screens/RegisterLoginScreen';
import { HomeScreen } from './screens/HomeScreen';
import { ProductDetailScreen } from './screens/ProductDetailScreen';
import { useContext } from 'react';
import { AuthContext, AuthProvider } from './context/AuthContext';
import { MovieProvider } from './context/MovieContext';
import { MovieDetailScreen } from './screens/MovieDetailScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Navbar } from './components/Navbar';
import { MoviesFavoritesScreen } from './screens/MoviesFavoritesScreen';
import { SideTab } from './components/SideTab';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AppTabs() { 
  return ( 
  <Tab.Navigator> 
    <Tab.Screen name="SideTab" component={SideTab} /> 
    <Tab.Screen name="HomeScreen" component={HomeScreen} /> 
    <Tab.Screen name="MovieFavorites" component={MoviesFavoritesScreen} /> 
  </Tab.Navigator> ); 
}


function AppNavigator(){
  const { status } = useContext(AuthContext)

  // if( status === 'checking') return ()

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      {
        status !== 'authenticated' ? (
          
           <Stack.Screen name="RegisterLogin" component={RegisterLoginScreen} />
          
        ) : 
        (
          <>
            <Stack.Screen name="HomeTabs" component={AppTabs} options={{ headerShown: false }} />            
            <Stack.Screen name="MovieDetail" component={MovieDetailScreen}></Stack.Screen>
          </>
        )
      }

    </Stack.Navigator>
  )
  
}


export default function App() {
  return (
    <AuthProvider>
      <MovieProvider>
      <NavigationContainer>
          <AppNavigator />            
      </NavigationContainer>
      </MovieProvider>
    </AuthProvider>
  );
}




// export default function App() {
//   return (
//     <ProductProvider>
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='Home'>
//         <Stack.Screen name="RegisterLogin" component={RegisterLoginScreen} />
//         <Stack.Screen name="Home" component={HomeScreen}/>
//         <Stack.Screen name="AddProducto" component={AddProductScreen} />
//         <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//     </ProductProvider>
//   );
// }

