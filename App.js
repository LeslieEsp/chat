import React, {useState} from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import{Container} from "native-base";
import Login from "./src/screens/Login";
import Chat from "./src/screens/Chat";

export default function App() {
  const [userName, setUserName] = useState(null);
  return (
    <Container style={styles.container}>
      {!userName ?(
        <Login setUserName={setUserName}/>
      ):(
        <Chat userName={setUserName}/>
      )}
    </Container>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#3B7F66"
  }
})

