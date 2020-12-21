import {StyleSheet} from 'react-native' ;

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#202035"
    },
    display: {
      flex: 1,
      alignItems: "flex-end",
      justifyContent: "flex-end",
      backgroundColor: "#202020",
      margin: 2
    },
    buttons: {
      flex: 5,
      flexDirection: "row",
    },
    clrButton: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      margin: 2
    },
    delBtnBack: {
      flex: 1,
      backgroundColor: "#205020",
      borderRadius: 50,
      alignSelf: "stretch",
      alignItems: "center",
      justifyContent: "center",
      margin: 1
    },
    clrBtnBack: {
      flex: 2,
      backgroundColor: "#205020",
      borderRadius: 50,
      alignSelf: "stretch",
      alignItems: "center",
      justifyContent: "center",
      margin: 1
    },
    numbers: {
      flex: 4,
      flexDirection: "column",
      margin: 2
    },
    numbersRow: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      
    },
    buttonsBack: {
      flex: 1,
      backgroundColor: "#202020",
      borderRadius: 50,
      alignSelf: "stretch",
      alignItems: "center",
      justifyContent: "center",
      margin: 1
    },
    zeroBack: {
      flex: 2,
      backgroundColor: "#202020",
      borderRadius: 50,
      alignSelf: "stretch",
      alignItems: "center",
      justifyContent: "center",
      margin: 1
    },
    operators: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      margin: 2
    },
    operatorsBack: {
      flex: 1,
      backgroundColor: "#205020",
      borderRadius: 50,
      alignSelf: "stretch",
      alignItems: "center",
      justifyContent: "center",
      margin: 1
    },
    text: {
      fontSize: 30,
      color: "white",
      fontWeight: "bold"
    },
    
  });