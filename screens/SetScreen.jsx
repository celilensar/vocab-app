import { View, Text, SafeAreaView, Image, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Entypo, FontAwesome, MaterialIcons,AntDesign } from '@expo/vector-icons';
import { ProgressBar } from '.';

const SetScreen = () => {
	const [cards, setCards] = useState([1,2,3,4,5,6,7,8,9,10,11,12])
	const [isSelectedA1, setIsSelectedA1] = useState(false);
  const [isSelectedA2, setIsSelectedA2] = useState(false);
  const [isSelectedB1, setIsSelectedB1] = useState(false);
  const [isSelectedB2, setIsSelectedB2] = useState(false);
  const [isSelectedC1, setIsSelectedC1] = useState(false);
  const [isSelectedC2, setIsSelectedC2] = useState(false);
	const width = Dimensions.get("window").width 
	const height = Dimensions.get("window").height 

	return (
		<View className="flex-1 w-full h-full bg-[#d3d6db]">
		<View style={{height: height/3.2}} className="bg-[#532190] rounded-b-3xl" >
		<SafeAreaView>
		<View className="flex-row justify-between items-center mx-1">
			<Entypo name="chevron-left" size={32} color="white" />
			<View className="bg-slate-100 rounded-xl p-2 items-center justify-center" >
				<Text className="text-black text-xs" style={{fontFamily:"exoLight"}}>12/35</Text>
			</View>
		</View>
		</SafeAreaView>
		<View className="items-center justify-center h-6  top-0">
			<Text className="text-xl text-[#f1f1f1]" style={{fontFamily:"exoBold"}}>Your Set</Text>
		</View>

		
		<View className="flex-row">
		<View className=" flex-1 flex-row m-3 mx-12 bg-slate-300 rounded-lg ">
			<ProgressBar />
		</View>
			{/* <Text className="self-center mr-1">%80</Text> */}
		</View>

		<View className="h-9 w-[70%] flex-row mx-7 px-2 items-center z-10 self-center bg-slate-50 justify-between rounded-3xl">

			<TouchableOpacity onPress={() => setIsSelectedA1(!isSelectedA1)} style={{ backgroundColor: isSelectedA1 ? "#fda403" : "white" }} className="p-2 rounded-lg">
				<Text className="font-bold" style={{ color: isSelectedA1 ? "white" : "black" }}>A1</Text>
			</TouchableOpacity>
			<View className="border border-y border-black h-5 "></View>

			<TouchableOpacity onPress={() => setIsSelectedA2(!isSelectedA2)} style={{ backgroundColor: isSelectedA2 ? "#fda403" : "white" }} className="p-2 rounded-lg">
				<Text className="font-bold">A2</Text>
			</TouchableOpacity>
			<View className="border border-y border-black h-5 "></View>

			<TouchableOpacity onPress={() => setIsSelectedB1(!isSelectedB1)} style={{ backgroundColor: isSelectedB1 ? "#fda403" : "white" }} className="p-2 rounded-lg">
				<Text className="font-bold">B1</Text>
			</TouchableOpacity>
			<View className="border border-y border-black h-5 "></View>

			<TouchableOpacity onPress={() => setIsSelectedB2(!isSelectedB2)} style={{ backgroundColor: isSelectedB2 ? "#fda403" : "white" }} className="p-2 rounded-lg">
				<Text className="font-bold">B2</Text>
			</TouchableOpacity>
			<View className="border border-y border-black h-5 "></View>

			<TouchableOpacity onPress={() => setIsSelectedC1(!isSelectedC1)} style={{ backgroundColor: isSelectedC1 ? "#fda403" : "white" }} className="p-2 rounded-lg">
				<Text className="font-bold">C1</Text>
			</TouchableOpacity>
			<View className="border border-y border-black h-5 "></View>

			<TouchableOpacity onPress={() => setIsSelectedC2(!isSelectedC2)} style={{ backgroundColor: isSelectedC2 ? "#fda403" : "white" }} className="p-2 rounded-lg">
				<Text className="font-bold">C2</Text>
			</TouchableOpacity>
		</View>
		

		<View className="flex-row w-full relative content-center">
			<TouchableOpacity className="py-2 w-40 mx-6 px-5 absolute right-3 z-10 mt-3 flex-row rounded-2xl space-x-1 items-center bg-slate-950 opacity-90">
				<Text className="font-bold text-white ">Start practice!</Text>
				<Image className="h-7 w-7" source={require('../assets/brain-training.png')} resizeMode='contain'/>
			</TouchableOpacity>

		</View>
		</View>
	<FlatList
	contentContainerStyle={{paddingTop: 20, paddingBottom:32}}
	data={cards}
	renderItem={(item) => (
		<TouchableOpacity className="bg-[#FFF2EF] mx-4 mb-8  border border-gray-200 justify-center h-20 rounded-xl " >
			
			<View className=" flex-row  items-center justify-between w-full  rounded-xl bg-[#e7eaf6] px-4">

				<View className="overflow-scroll w-[38%] items-center">
				<Text style={{fontFamily:'exoBold'}} className='text-base'>cosdad</Text>
				</View>

				<View className="flex-row items-center justify-center space-x-3 px-3">
				<Image className=" w-5 h-5" source={require('../assets/united-kingdom.png')}/>
				<View className=" border-r border-orange-200 w-0  py-5"></View>
				<Image className=" w-5 h-5" source={require('../assets/turkey.png')}/>
				</View>

				<View className=" overflow-x-hidden justify-center w-[38%] items-centers ">
				<Text style={{fontFamily:'exoBold'}} className='text-base'>Tebriksfdf</Text>
				</View>
			</View>
			
			<View className='right-1 justify-between flex-row pt-4 pb-3 mx-3'>
			<AntDesign name="sound" size={24} color="black" />
			<View className="items-center justify-between space-x-5 flex-row">
			<AntDesign name="dislike2" size={24} color="black" />
			<AntDesign name="like1" size={24} color="green" />
			</View>
			<FontAwesome className="items-center" name="bookmark" size={20} color="orange" />
			</View>

		</TouchableOpacity>

	) }
	/>

		
	
			

		
		
	</View>
  )
}

export default SetScreen