import { Modal, StyleSheet, View, Text, Pressable, Alert } from "react-native";
import { useState } from "react";
import { RoundedButton } from "./RoundedButton";

interface IProps {
  openGallery: () => void;
  openCamera: () => void;
  modalUseState: boolean;
  setModalUseState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalPickImage = ({
  openGallery,
  openCamera,
  modalUseState,
  setModalUseState,
}: IProps) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalUseState}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalUseState(!modalUseState);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>Selecciona una opcion</Text>
            <View style={styles.buttonContainer}>
              <RoundedButton
                title="Galeria"
                onPress={() => {
                  openGallery();
                  setModalUseState(!modalUseState);
                }}
              />
            </View>
            <View style={styles.buttonContainer}>
              <RoundedButton
                title="Camara"
                onPress={() => {
                  openCamera();
                  setModalUseState(!modalUseState);
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: 250,
    height: 220,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    //padding: 25,
    paddingTop: 35,
    paddingHorizontal: 25,
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
  buttonContainer: {
    width: "100%",
    marginTop: 8,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
