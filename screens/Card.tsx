import React, { useEffect } from "react";
import { View, StyleSheet, Dimensions, Image, SafeAreaView, Text } from "react-native";
import { GestureHandlerRootView, PanGestureHandler, State } from "react-native-gesture-handler";
import Animated, {
  Easing,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
} from "react-native-reanimated";
import { snapPoint } from "react-native-redash";
import { AntDesign, FontAwesome } from '@expo/vector-icons';

const { width: wWidth, height } = Dimensions.get("window");

const SNAP_POINTS = [-wWidth, 0, wWidth];
const aspectRatio = 722 / 368;
const CARD_WIDTH = wWidth - 128;
const CARD_HEIGHT = CARD_WIDTH * aspectRatio;
const IMAGE_WIDTH = CARD_WIDTH * 0.9;
const DURATION = 250;

interface CardProps {
  card: {
    source: ReturnType<typeof require>;
  };
  shuffleBack: Animated.SharedValue<boolean>;
  index: number;
}

export const Card = ({ card: { source }, shuffleBack, index }: CardProps) => {
  const offset = useSharedValue({ x: 0, y: 0 });
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(-height);
  const scale = useSharedValue(1);
  const rotateZ = useSharedValue(0);
  const delay = index * DURATION;
  const theta = -10 + Math.random() * 20;

  useEffect(() => {
    translateY.value = withDelay(
      delay,
      withTiming(0, { duration: DURATION, easing: Easing.inOut(Easing.ease) })
    );
    rotateZ.value = withDelay(delay, withSpring(theta));
  }, [delay, index, rotateZ, theta, translateY]);

  useDerivedValue(() => {
    if (shuffleBack.value) {
      const duration = 150 * index;
      translateX.value = withDelay(
        duration,
        withSpring(0, {}, () => {
          shuffleBack.value = false;
        })
      );
      rotateZ.value = withDelay(duration, withSpring(theta));
    }
  });

  const gestureHandler = useAnimatedGestureHandler({
    onStart: () => {
      offset.value = { x: translateX.value, y: translateY.value };
      rotateZ.value = withTiming(0);
      scale.value = withTiming(1.1);
    },
    onActive: ({ translationX, translationY }) => {
      translateX.value = offset.value.x + translationX;
      translateY.value = offset.value.y + translationY;
    },
    onEnd: ({ velocityX, velocityY }) => {
      const dest = snapPoint(translateX.value, velocityX, SNAP_POINTS);
      translateX.value = withSpring(dest, { velocity: velocityX });
      translateY.value = withSpring(0, { velocity: velocityY });
      scale.value = withTiming(1, {}, () => {
        const isLast = index === 0;
        const isSwipedLeftOrRight = dest !== 0;
        if (isLast && isSwipedLeftOrRight) {
          shuffleBack.value = true;
        }
      });
    },
  });

  const cardStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { perspective: 1500 },
        { rotateX: "30deg" },
        { translateX: translateX.value },
        { translateY: translateY.value },
        { rotateY: `${rotateZ.value / 10}deg` },
        { rotateZ: `${rotateZ.value}deg` },
        { scale: scale.value },
      ],
    };
  });

  return (

	
	<GestureHandlerRootView >
	  <View style={styles.container} pointerEvents="box-none" >
	<PanGestureHandler onGestureEvent={gestureHandler}>
	  <Animated.View style={[styles.card, cardStyle]} >
		{/* <Image
		  source={source}
		  style={{
			width: IMAGE_WIDTH,
			height: IMAGE_WIDTH * aspectRatio,
		  }}
		  resizeMode="contain"
		/> */}
		<View style={{ top:0,justifyContent:"space-between" ,height:"100%", alignItems:"center", borderRadius:10,...StyleSheet.absoluteFillObject, backgroundColor:"#FFF2EF"}}>
			<View style={{position:"absolute",width:CARD_WIDTH/5, height: 40, padding:6, backgroundColor:"#fafafa", top:15, borderRadius:15, justifyContent:"center", 
		alignItems:"center"
		}}>
				<Text style={{fontFamily:"exoRegular"}}>B2</Text>
			</View>

			<View style={{alignItems:"center", justifyContent:"center",width: CARD_WIDTH ,height: CARD_HEIGHT/2 ,borderTopEndRadius:80, borderBottomLeftRadius:80}}>
				<Text style={{fontWeight:"bold", fontFamily:"exoBold", fontSize:18,}}>congratz</Text>
				<Image style={{width:16,height:16, marginTop: 5, position:"absolute", top:5, left:5, opacity:0.2}} source={require('../assets/united-kingdom.png')}/>
				<View style={{position:"absolute", top:18, right:16,padding:5, borderRadius:40, backgroundColor:"#532190"}}>
					<AntDesign style={{}} name="sound" size={24} color="white" />
				</View>
			</View>
				<View style={{position:"absolute", bottom: CARD_HEIGHT/2.5,padding:5,marginTop:5,alignSelf:"center", backgroundColor:"#ececec", marginHorizontal:20, borderRadius:30}}>
					<Text style={{ fontFamily:"exoLight", fontSize:12, marginHorizontal:10, paddingHorizontal:10, paddingVertical:8, flexWrap:"wrap",}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</Text>

				</View>
			
			<View style={{borderBottomWidth: 1, borderColor:"black"}}>

			</View>
				
			<View style={{alignItems:"center",justifyContent:"center",width: CARD_WIDTH, height: CARD_HEIGHT/2, borderBottomStartRadius:80, borderTopRightRadius:80}}>
				<Text style={{fontWeight:"bold", fontFamily:"exoBold", fontSize:18}}>Aferin</Text>
				<Image style={{width:16,height:16, marginTop: 5, position:"absolute", bottom:5, left:5, opacity:0.2}} source={require('../assets/turkey.png')}/>
					<View style={{position:"absolute", right:18, bottom:18,padding:5, borderRadius:40, backgroundColor:"#532190"}}>
						<FontAwesome name="bookmark" size={24} color="orange" />
					</View>
			</View>


		</View>
	  </Animated.View>
	</PanGestureHandler>
  </View>
	</GestureHandlerRootView>
	
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
	zIndex:0
  },
});
