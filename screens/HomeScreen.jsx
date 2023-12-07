import { View, Text, SafeAreaView, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CategoriesSection from '../components/CategoriesSection'
import { Ionicons, Entypo } from '@expo/vector-icons';
import { ProgressBar } from '.';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';


const HomeScreen = () => {

	const [count, setCount] = useState([1,2,3,4,5])


	const logout = async() => {
		await signOut(auth);
	}


  return (

	
	<View className=" flex-1 w-full h-full">
		<View className=" bg-[#532190] ">
			<SafeAreaView className="justify- flex-row items-center justify-between mx-2 ">
			<Ionicons name="menu-outline" size={30} color="white" />

			<View className="py-1 px-2 bg-slate-300 rounded-2xl flex-row justify-center items-center space-x-1">
				
				<Image className='h-5 w-5' source={require('../assets/united-kingdom.png')} resizeMode='contain'/>
				<Text>English</Text>
				<Entypo name="chevron-small-down" size={24} color="black" />
			</View>
			<TouchableOpacity onPress={()=>logout()} className="w-8 h-5 p-4 rounded-2xl bg-slate-400">

			</TouchableOpacity>
			</SafeAreaView>
			

		</View>
	  
	  <CategoriesSection/>

			<FlatList 
			showsVerticalScrollIndicator={false}
			contentContainerStyle={{paddingBottom:32}}
			data={count}
			renderItem={() => (
				<TouchableOpacity className="flex-row justify-between mx-2 rounded-xl mt-4 bg-white py-6 border-2 border-gray-200 border-opacity-50">
				<View className="justify-center space-y-2 px-6">
					<Text className="font-semibold">Nouns</Text>
					<View className=" bg-gray-100 rounded-lg">
					<ProgressBar/>
					</View>

				</View>
				<View className="items-center justify-center px-6">
					<Text>15/150</Text>
				</View>
			</TouchableOpacity>
			)}
			/>	
		
			
	</View>
  )
}

export default HomeScreen