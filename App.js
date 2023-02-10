import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.img}
          source={{ uri: "https://i.pinimg.com/originals/9d/03/11/9d0311cd37e8f02cc89c47e5d75a8cad.gif" }}
      />
      <Text style={styles.text1}>¡Hola Coder!</Text>
      <Text style={styles.text2}>Hubo que pelearlo un poco pero funcionó</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03072D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 200, 
    height: 200,
    marginBottom: 10
  },
  text1: {
    fontSize: 22,
    color: '#FF516A',
    fontWeight: '900',
    marginBottom: 10
  },
  text2: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: '400'
  },
});
