import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>¡Hola Coder!</Text>
      <Text style={styles.text2}>Hubo que pelearlo un poco pero funcionó</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9CFFDE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    fontSize: 22,
    color: '#AF003F',
    fontWeight: '900',
    marginBottom: 10
  },
  text2: {
    fontSize: 16,
    color: '#AF003F',
    fontWeight: '400'
  },
});
