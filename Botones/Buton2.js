import React from "react";
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';


export default function  Buton2() {
    const navigation = useNavigation();
    
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("Regis")}>
            <LinearGradient
                // Button Linear Gradient
                colors={['#FFB677', '#FF3CBD']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}    
                style={styles.button}
            >
                <Text style={styles.text}>Registrarse</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: 400,
        marginTop: 60,
    },

    text: {
      fontSize: 14,
      color: '#fff',
      fontWeight: 'bold',
    },
    button: {
        marginTop: -25
        ,
        width: '80%',
        height: 80,
        borderRadius: 40,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
  });