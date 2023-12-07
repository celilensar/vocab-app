import { View, Text, SafeAreaView, Dimensions, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import CategoryCard from './CategoryCard';
import { AntDesign} from '@expo/vector-icons';
import AddSetModal from './AddSetModal';



const width = Dimensions.get("window").width 
const height = Dimensions.get("window").height 


const CategoriesSection = () => {
	const [visible, setVisible] = useState(false)
	
	const show = () => setVisible(true);
	const hide = () => setVisible(false);
	

	return (
	  <View className="rounded-b-3xl bg-[#532190]" style={{height: height/2.8}}>
		<View className="flex-row justify-between">
		<View className="px-4 space-y-1 mt-3">
			<Text className="text-white text-2xl" style={{fontFamily:'exoBold'}}>Categories</Text>
			<Text className="text-gray-400" style={{fontFamily:'exoRegular'}}>Pick a set to practice</Text>
		</View>

		</View>


	<Modal  presentationStyle='pageSheet' animationType='slide' visible={visible} onRequestClose={() => hide()} >
		<AddSetModal height= {height} closeModal={()=> hide()}/>
	</Modal>	

		<View className="  w-full relative items-center flex-row ">
							
			<CategoryCard/>
		<TouchableOpacity onPress={() => show()} className=" bg-[#222831] opacity-90 px-2 flex-row  absolute right-3 space-x-1 p-2 rounded-xl self-center space-y-1  bottom-0">
			<AntDesign className name="pluscircle" size={24} color="orange" />
			<Text className="text-s text-[#eeeeee]   font-semibold">New Set</Text>
		</TouchableOpacity>
		</View>
		
	

	  </View>
			
				

		
  
	)
  }





export default CategoriesSection