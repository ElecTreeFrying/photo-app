import {
  StyleSheet,
} from "react-native";


export const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "green",
    padding: 10,
  },
  inputBox: {
    marginBottom: 15
  },
  textStyle: {
    color: "white",
    textAlign: "center",
  },
  input: { 
    height: 40,
    width: 300, 
    borderColor: 'gray', 
    borderWidth: 1 
  }
});