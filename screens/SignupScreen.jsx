import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator, KeyboardAvoidingView } from 'react-native';
import { auth } from '../config/firebase';
import {getFirestore} from 'firebase/firestore'
import LottieView from 'lottie-react-native';


function SignupScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);


  
	const signUp= async ()=> {
		if(email && password ){
			try {
				await createUserWithEmailAndPassword(auth, email, password).then(cred => {
					return db.collection('users').doc(cred.user.uid).set({
						wordSets: { preWords : []},

					})
				})
			} catch (error) {
				console.log('got error: ', error.message)
			}
		}
	}

  return (
    <KeyboardAvoidingView behavior='padding' className="w-full relative flex-1 h-full justify-center space-y-5 items-center bg-white" >
      <LottieView source={require('../assets/H8CMblMlNw.json')} autoPlay loop className="w-full h-60 absolute top-5"/>
	 
	  <View className="w-full h-50 items-center absolute mt-15">
		<View className="bg-slate-300 p-1 my-4 rounded-2xl w-[75%]">
		<TextInput className="p-2"
			placeholder="Email"
			value={email}
			onChangeText={(text) => setEmail(text)}
		/>
		</View>
			
		<View className="bg-slate-300 p-1 rounded-2xl w-[75%]">
		<TextInput className="p-2"
			placeholder="Password"
			value={password}
			onChangeText={(text) => setPassword(text)}
			secureTextEntry
		/>
		</View>
	  </View>
    

	{loading ? (<ActivityIndicator size="large" color="#532190"/> ) :
		( 
		<>

		<View className="w-full items-center absolute bottom-10 py-10">
			<View className="py-2 rounded-3xl px-2 bg-slate-300">
				<Button title="Sign Up" onPress={()=>signUp()} />
			</View>
			<View className="py-1 rounded-3xl px-2 my-2 bg-slate-700">
				<Button className="text-white"
					title="Go to Login"
					onPress={() => navigation.navigate('Login')}
				/>
			</View>
					
			
		</View>
			
		</>
		)	
	}
	  
      
    </KeyboardAvoidingView>
  );
}

export default SignupScreen;
