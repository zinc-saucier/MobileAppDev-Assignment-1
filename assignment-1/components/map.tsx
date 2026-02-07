import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Map = () => {
  return (
    <View>
      <Image
      style={styles.mapImage}
      source={require("../assets/images/icon.png")}
      
      />

    </View>
  )
}

export default Map

const styles = StyleSheet.create({
    mapImage:{
    width: "100%",
    height: 300,
    resizeMode:"cover",
  },
})