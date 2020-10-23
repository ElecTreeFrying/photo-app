import React, { useState } from "react";
import {
  Alert,
  Modal,
  Text,
  TouchableHighlight,
  View,
  TextInput
} from "react-native";

import { styles } from './modal-styles'
import { addContent } from '../../common/api';


const textInput = (option: boolean) => {
  const [value, onChangeText] = useState('');

  return {
    value,
    view: (
      <TextInput
        placeholder={option ? 'Insert caption' : 'Enter a number (1-7)'}
        style={styles.input}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
    )
  };
}

export const modal = () => {
  const [ modalVisible, setModalVisible ] = useState(false);

  const captionInput = textInput(true);
  const imageInput = textInput(false);

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

            <View style={styles.inputBox}>
              {captionInput.view}
            </View>
            <View style={styles.inputBox}>
              {imageInput.view}
            </View>

            <TouchableHighlight
              style={{ ...styles.openButton, marginTop: 15 }}
              onPress={() => {
                addContent(captionInput.value, imageInput.value).then(() => {});
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>SUBMIT</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>ADD CONTENT</Text>
      </TouchableHighlight>
    </View>
  );
};
