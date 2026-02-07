import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const BuyTicketBar =()=> {
  return (
    //ticket bar
          <View style={styles.buttonContainer}>
            <div>
            <Text style={styles.buttonContainerText}>Calgary Transit</Text>
            </div>
            <View style={styles.button}>
            {/* buy button */}
              <TouchableOpacity >
              <Text style={styles.buttonText}>Alert</Text>
              </TouchableOpacity>
          </View>
        </View>
  );
}

export default BuyTicketBar


const styles = StyleSheet.create({
  
  
  icon:{
    width: 40,
    height: 40,
    resizeMode:"cover",
    marginLeft: 20,
    marginRight: 20,
  },
  buttonContainer: {
    paddingVertical: 9,
    flexDirection: "row",
    width: '90%',
    height: 60,
    borderRadius: 15,
    backgroundColor:"#a5212f",
    marginBottom: 20
  },
  buttonContainerText: {
    marginLeft: 20,
    color: "#fdfdfc",
    fontSize: 25,
    fontWeight: "bold",
  },
  button:{
    alignContent: "center",
    alignSelf: "flex-end",
    padding: 8,
    fontSize: 30,
    backgroundColor: "#e54051",
    borderRadius: 35,
    width: 90,
    height: 40,
    
  },
  buttonText:{
    fontWeight: "bold",
    fontSize: 15,
    color:"#fdfdfc",
    overflow:"hidden",
    paddingBottom: 15,
  }
})