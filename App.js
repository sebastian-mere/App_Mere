import {
  Button,
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

export default function App() {
  const [itemText, setItemText] = useState("");
  const [items, setItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const onChangeText = (text) => {
    setItemText(text);
  };

  const addItemToState = () => {
    if (itemText.trim() === "") {
      setShowModal(true);
      return;
    }
    setItems((oldArry) => [...oldArry, { id: Date.now(), value: itemText }]);
    setItemText("");
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const [showModal, setShowModal] = useState(false);

  const onCancelModal = () => {
    setModalVisible(!modalVisible);
  };

  const onDeleteModal = (id) => {
    setModalVisible(!modalVisible);
    setItems((oldArry) => oldArry.filter((item) => item.id !== id));
    setSelectedItem(null);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.addItemInputContainer}>
        <TextInput
          placeholder="Ingresa un item"
          style={styles.input}
          onChangeText={onChangeText}
          value={itemText}
        />
        <Button title="Agregar" onPress={addItemToState} />
      </View>

      <FlatList
        data={items}
        renderItem={(itemData) => (
          <Pressable
            style={styles.itemContainer}
            onPress={() => {
              openModal(itemData.item);
            }}
          >
            <Text style={styles.item}>{itemData.item.value}</Text>
          </Pressable>
        )}
        keyExtractor={(item) => item.id.toString()}
      />

      <Modal animationType="fade" transparent={true} visible={showModal}>
        <View style={styles.modalMainView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Ingrese un valor válido</Text>
            <Button title="Aceptar" onPress={() => setShowModal(false)} />
          </View>
        </View>
      </Modal>

      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.modalMainView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Eliminar Item</Text>
            <Text style={styles.modalText}>
              ¿Está seguro que desea eliminar el item{" "}
              <Text style={styles.modalBoldText}>{selectedItem?.value}</Text>?
            </Text>
            <View style={styles.modalActions}>
              <Pressable
                style={[styles.button, styles.buttonCancel]}
                onPress={onCancelModal}
              >
                <Text style={styles.buttonText}>Cancelar</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonDelete]}
                onPress={() => {
                  onDeleteModal(selectedItem.id);
                }}
              >
                <Text style={styles.buttonText}>Eliminar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingVertical: 50,
    paddingHorizontal: 30,
    flex: 1,
  },
  addItemInputContainer: {
    marginTop: 30,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "70%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  item: {
    padding: 10,
    textAlign: "center",
  },
  modalMainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    padding: 10,
    borderRadius: 5,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalBoldText: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginHorizontal: 10,
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
  },
  buttonCancel: {
    backgroundColor: "#2196F3",
  },
  buttonDelete: {
    backgroundColor: "#f44336",
  },
});
