import React, {useState}from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, Image } from 'react-native';
import {Item, Input, Text, Button } from "native-base";
import logoApp from "../assets/chatLogo.png";

export default function Login(props) {
    const {setUserName}= props;
    const [name, setName] = useState("");

    const onSubmit = () =>{
        setUserName(name);
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View>
                <image source={logoApp} resizeMode="contain" style={styles.logo}/>
            </View>
            <Item>
                <Input placeholder="Ingrese nombre de usuario"
                style={{color: "#fff"}} 
                placeholderTextColor="grey"
                value = {name}
                onChange ={(e) => setName(e.nativeEvent.text)}
                />
            </Item>

            <Button style={styles.btnLogin} onPress={onSubmit}>
                <Text>Entrar</Text>
            </Button>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 50,
        marginVertical: 100,
    },
    logo:{
        width:"100%",
        height: 200,
        marginBottom: 30,
    },
    btnLogin:{
        marginTop: 40,
        justifyContent:"center",
        backgroundColor: "#12CF8A"
    }
})