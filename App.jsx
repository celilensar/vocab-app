import { View, Text, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SetScreen from './screens/SetScreen';
import BottomTabs from './components/BottomTabs';
import { useNavigation } from '@react-navigation/native';
import { Tarot } from './screens';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import useAuth from './hooks/useAuth';



const Stack = createNativeStackNavigator();

const MyComponent = ({setActiveScreen}) => {
	const navigation= useNavigation();

	useEffect(() => {
		const unsubscribe = navigation.addListener("state", () => {
			const currentScreen = navigation.getCurrentRoute().name;
			setActiveScreen(currentScreen);
			console.log("Active Screen : ", currentScreen)
		})
		return unsubscribe;
	}, [navigation])
} 

const width = Dimensions.get("window").width 
const height = Dimensions.get("window").height 


const App = () => {
	const {user} = useAuth();

	

	const [fontsLoaded] = useFonts({
		exoBold: require('./Fonts/Exo2-Bold.ttf'),
		exoRegular: require('./Fonts/Exo2-Regular.ttf'),
		exoLight: require('./Fonts/Exo2-Light.ttf'),
		exoExtraLight: require('./Fonts/Exo2-ExtraLight.ttf')
	})
	const [activeScreen, setActiveScreen] = useState("")



	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
		  await SplashScreen.hideAsync();
		}
	  }, [fontsLoaded]);
	
	  if (!fontsLoaded) {
		return null;
	  }

	  const InsideStack = createNativeStackNavigator();

	  function InsideLayout() {
		return (
			<NavigationContainer>
				<InsideStack.Navigator screenOptions={{headerShown:false}}>
					<InsideStack.Screen name='Home' component={HomeScreen} />
					<InsideStack.Screen name='Tarot' component={Tarot} />
					<InsideStack.Screen name='SetScreen' component={SetScreen} />
			
				</InsideStack.Navigator>

			{activeScreen==="Tarot" ? <></> : <BottomTabs activeScreen={activeScreen}/> }

			</NavigationContainer>
		)
	  }

	  if (user){

		  return (
			<InsideLayout/>
		  )
	  } else {
		return (
			<NavigationContainer>
				<MyComponent setActiveScreen={setActiveScreen}/>
			<Stack.Navigator screenOptions={{headerShown: false}}  initialRouteName="Signup">
				<Stack.Screen name="Login" component={LoginScreen} />
				<Stack.Screen name="Signup" component={SignupScreen} />
				
			</Stack.Navigator>
			
			</NavigationContainer>

		)
	  }

}

export default App