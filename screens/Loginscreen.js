import { StatusBar } from 'expo-status-bar';
import { FirebaseError, initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
import { useNavigation } from '@react-navigation/native';
import ButtonGradient from '../ButtonGradient';
import { firebaseConfig } from '../config/fb';

const { width, height } = Dimensions.get('window')

export default function LoginScreen() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const navigation = useNavigation();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('cuenta creada')
        const user = userCredential.user;
        console.log(user)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('cuenta creada')
        const user = userCredential.user;
        console.log(user)
        navigation.navigate('Home');
      })
      .catch(error => {
        console.log(error)
        Alert.alert('Error', 'Contraseña incorrecta o email');
      })
  }

  function SvgTop() {
    return (
      <Svg
        width={500}
        height={324}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M297.871 315.826c73.405 13.896 165.338-13.964 202.129-29.63V230H1.326v63.5c69.15-42.913 204.789 4.957 296.545 22.326z"
          fill="url(#prefix__paint0_linear_103:6)"
          fillOpacity={0.5}
        />
        <Path
          d="M237.716 308.627C110.226 338.066 30.987 318.618 0 304.77V0h500v304.77c-43.161-12.266-134.794-25.581-262.284 3.857z"
          fill="url(#prefix__paint1_linear_103:6)"
        />
        <Defs>
          <LinearGradient
            id="prefix__paint0_linear_103:6"
            x1={492.715}
            y1={231.205}
            x2={480.057}
            y2={364.215}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#FFB677" />
            <Stop offset={1} stopColor="#FF3CBD" />
          </LinearGradient>
          <LinearGradient
            id="prefix__paint1_linear_103:6"
            x1={7.304}
            y1={4.155}
            x2={144.016}
            y2={422.041}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#FFB677" />
            <Stop offset={1} stopColor="#FF3CBD" />
          </LinearGradient>
        </Defs>
      </Svg>
    )
  }

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={{ width: width, height: height }} contentContainerStyle={{ minHeight: height }}>
        <View style={styles.containerSVG}>
          <SvgTop />
        </View>

        <View style={styles.container}>
          <Text style={styles.titulo}>!Welcome!</Text>
          <Text style={styles.tituloo}> 🤪Emogi Store🤪</Text>
          <Text style={styles.subTitle}>Sign In to your account</Text>
          <TextInput
            onChangeText={(text) => setEmail(text)}
            placeholder="jhon@email.com"
            style={styles.textInput}
            ref={emailInputRef}
          />
          <TextInput
            onChangeText={(text) => setPassword(text)}
            placeholder="password"
            style={styles.textInput}
            secureTextEntry={true}
            ref={passwordInputRef}
          />
          <Text style={styles.forgotPassword}>Forgot your password?</Text>
          <TouchableOpacity
            onPress={handleSignIn}
            style={styles.buttonn}
          >
            <Text style={{ color: 'white', fontSize: 16 }}>Sign Up</Text>
          </TouchableOpacity>
          <Text style={styles.forgotPassword}>Don't have an account?</Text>
          <StatusBar style="auto" />
          <ButtonGradient />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonn: {
    backgroundColor: '#FF3CBD',
    padding: 15,
    borderRadius: 30,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
  },
  mainContainer: {
    backgroundColor: '#f1f1f1',
    flex: 1,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerSVG: {
    width: width,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 80,
    color: '#34434D',
    fontWeight: 'bold',
  },
  tituloo: {
    fontSize: 50,
    color: '#34434D',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 20,
    color: 'gray',
  },
  textInput: {
    padding: 10,
    paddingStart: 30,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  forgotPassword: {
    fontSize: 14,
    color: 'gray',
    marginTop: 20
  },
});
