import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const BottomTabs = ({activeScreen}) => {

	const navigation = useNavigation(); 
	

	
	return (
	<View className="absolute bottom-0 w-full">
		<View className="bg-slate-100 rounded-t-xl px-4  w-full flex-row items-center justify-around">
			<TouchableOpacity onPress={()=> navigation.navigate('Home') }  className="p-4 items-center justify-center ">
				<MaterialIcons name="category" size={24} color={activeScreen=== "Home" ? '#532190' : '#393e46' } />
			</TouchableOpacity>
			<TouchableOpacity onPress={()=> navigation.navigate('Tarot')} className="p-4 items-center justify-center">
			<MaterialCommunityIcons name="cards" size={24} color={activeScreen=== "Cards" ? '#532190' : '#393e46' } />
			</TouchableOpacity>

		</View>
	  
	</View>
  )
}

export default BottomTabs