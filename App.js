import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={[styles.inputContainer, styles.centrado] }>
        <TextInput placeholder='Agrega un item' style={styles.input} />
        <Button title='Add' />
      </View>

      <View>
          <ScrollView>
            <View style={[styles.item, styles.centrado]}>
              <Text>Elemento 1</Text>
              <Button title='X' />
            </View>
            <View style={[styles.item, styles.centrado]}>
              <Text>Elemento 2</Text>
              <Button title='X' />
            </View>
            <View style={[styles.item, styles.centrado]}>
              <Text>Elemento 3</Text>
              <Button title='X' />
            </View>
            <View style={[styles.item, styles.centrado]}>
              <Text>Elemento 4</Text>
              <Button title='X' />
            </View>
          </ScrollView> 
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30
  },
  centrado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputContainer: {
    marginTop: 30
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: '80%'
  },
  item: {
    paddingTop: 10,
  },
  color: {
    backgroundColor: 'red'
  }
});
