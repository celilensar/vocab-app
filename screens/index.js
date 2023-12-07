import { View } from "react-native"

export { Tarot, assets } from "./Tarot";

export const ProgressBar = () =>{
	return (
		<View>
			<View className="relative h-2 w-40 rounded-md bg-gray-50/5 "></View>
			<View className="absolute h-2 rounded-md bg-[#fda403] w-[80%]"></View>
		</View>
	)
}