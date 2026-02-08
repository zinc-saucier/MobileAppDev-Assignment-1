import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'



const BuyTicketBar =()=> {
  return (
    //ticket bar
          <View style={styles.buttonContainer}>
            <View style={styles.textBox}>
              <Text style={styles.buttonContainerText}>Calgary Transit</Text>
            </View>
            {/* buy button */}
            <View style={styles.buttonBox}>
              <View style={styles.button}>
                <TouchableOpacity onPress={() => alert('Alert Button Pressed!')}>
                  
                  <Text style={styles.buttonText}>Alert</Text>
                </TouchableOpacity>
              </View>
          </View>
        </View>
  );
}

export default BuyTicketBar

const styles = StyleSheet.create({
  
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
    paddingVertical: 9,
    flexDirection: "row",
    width: '90%',
    height: 60,
    borderRadius: 15,
    backgroundColor:"#a5212f",
    marginBottom: 20
  },
  textBox: {
    flex: 7,
    marginLeft: 20,
  },
  buttonBox: {
    flex: 2,
    marginRight: 10,
  },
  buttonContainerText: {
    color: "#fdfdfc",
    fontSize: 25,
    fontWeight: "bold",
  },
  button: {  
    alignContent: "center",
    alignSelf: "flex-end",
    padding: 8,
    fontSize: 30,
    backgroundColor: "#e54051",
    borderRadius: 35,
    width: 115,
    height: 40,
    
  },
  buttonText:{
    fontWeight: "bold",
    fontSize: 15,
    color:"#fdfdfc",
    overflow:"hidden",
    paddingBottom: 15,
    textAlign: "center"
  }
 
})