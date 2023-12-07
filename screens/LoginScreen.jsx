import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator } from 'react-native';
import { auth } from '../config/firebase';

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const login= async ()=> {
	if(email && password ){
		try {
			await signInWithEmailAndPassword(auth, email, password)
		} catch (error) {
			console.log('got error: ', error.message)
		}
	}
}

  return (
    <View style={{width:"100%", flex:1, height:"100%", justifyContent:"center", alignItems:"center"}}>
      
	 
		<Text>Login</Text>
		<View style={{backgroundColor:"#e7eaf6", padding: 1, borderRadius: 10, width:"50%", marginTop: 20}}>
			<TextInput className="p-2"
				placeholder="Email"
				value={email}
				onChangeText={(text) => setEmail(text)}
			/>
			
		</View>
		<View style={{backgroundColor:"#e7eaf6", padding: 1, borderRadius: 10, width:"50%", marginTop: 20}} >
			
			<TextInput className="p-2"
				placeholder="Password"
				value={password}
				onChangeText={(text) => setPassword(text)}
				secureTextEntry={true}
			/>
		</View>
		
		{loading ? (<ActivityIndicator size="large" color="#532190"/> ) :
		( 
		<>

			<Button title="Login" onPress={()=> login()} />
			<Button
			title="Sign Up"
			onPress={() => navigation.navigate('Signup')}
			/>
		</>
		)	
	}
	  
	  
    </View>
  );
}

export default LoginScreen;
