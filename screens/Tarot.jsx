import { View, StyleSheet, Text } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { Ionicons } from '@expo/vector-icons';
import { Card } from "./Card";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const cards = [
  {
    source: require("./assets/death.png"),
  },
  {
    source: require("./assets/chariot.png"),
  },
  {
    source: require("./assets/high-priestess.png"),
  },
  {
    source: require("./assets/justice.png"),
  },
  {
    source: require("./assets/lover.png"),
  },
  {
    source: require("./assets/pendu.png"),
  },
  {
    source: require("./assets/tower.png"),
  },
  {
    source: require("./assets/strength.png"),
  },
];

export const assets = cards.map((card) => card.source);

export const Tarot = () => {

  const shuffleBack = useSharedValue(false);
	const navigation= useNavigation();
  return (
	<>
    <View className="flex-1 bg-[#e7eaf6] relative justify-center items-center">
	
		<SafeAreaView className="flex-row h-16 w-full top-1 px-2 absolute justify-between items-center">
		<TouchableOpacity onPress={()=> navigation.goBack()}>
			<Ionicons name="chevron-back-circle" size={32} color="#532190" />

		</TouchableOpacity>

			
			<Text style={{fontFamily:"exoBold"}} className="text-lg">New Words!</Text>
			<View className="h-8 w-12 rounded-xl items-center p-2 justify-center bg-[#532190]">
				<Text style={{fontFamily:"exoRegular"}} className="text-white">7/25</Text>
			</View>

		</SafeAreaView>
      {cards.map((card, index) => (
        <Card card={card} key={index} index={index} shuffleBack={shuffleBack} />
      ))}
    </View>
	</>
  );
};

