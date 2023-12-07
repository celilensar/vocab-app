import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFonts } from 'expo-font'
import tempData from '../screens/tempData'

const AddSetModal = ({height}) => {

	const [nameInput, setNameInput] = useState("")

	useEffect(() => {
		console.log(nameInput);
	})
	const addSet =()=> {
		tempData.push({
			name: nameInput,
			words : []
		})
		
		
	}

  return (
	<KeyboardAvoidingView  className="justify-center h-full">
	<View className="bg-slate-200  h-12 flex-row mx-5 rounded-lg border border-slate-700 ">
		<TextInput className="text-black left-8 opacity-25 flex-1" placeholder='New word set name?' placeholderTextColor={"black"}
		onChangeText={text => setNameInput(text)}
		/>
	</View>

	<TouchableOpacity onPress={()=> addSet()} className="bg-[#532190] justify-center items-center h-12 mx-5 rounded-lg mt-8 border border-slate-400">
		<Text className="text-white" style={{fontFamily: 'exoBold'}}>
			Add Set
		</Text>
	</TouchableOpacity >
	</KeyboardAvoidingView>
  )
}

export default AddSetModal