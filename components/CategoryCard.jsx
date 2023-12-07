import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign} from '@expo/vector-icons';
import tempData from '../screens/tempData';
import { useNavigation } from '@react-navigation/native';

const CategoryCard = () => {

	const navigation= useNavigation();

  return (
	
	<FlatList className="pt-10"
	data={tempData}
	keyExtractor={(item) => item.name}
	horizontal
	showsHorizontalScrollIndicator={false}
	renderItem={({item}) => (
		<TouchableOpacity onPress={() => navigation.navigate('SetScreen')} className="left-3 bg-[#FFF2EF] rounded-xl flex-wrap self-center  space-y-1 w-40 h-28 justify-center px-3  bottom-7 mr-6">
			
			<AntDesign className="self-center" name="star" size={24} color="orange" />
			<Text className="text-lg font-semibold">{item.name}</Text>
			<Text className="text-xs text-gray-400">{item.count}</Text>
		</TouchableOpacity>
	)}
	/>
		
	
  )
}

export default CategoryCard