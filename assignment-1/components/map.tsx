import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Map = () => {
  return (
    <View>

        
      <Image source={require('./images/map.png')} style={styles.mapContainer}/>
        
      <Image style={styles.profileImage} source={{uri: "https://platform.eater.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/13278963/bagel_emoji_big.jpg?quality=90&strip=all&crop=0%2C3.3333333333333%2C100%2C93.333333333333&w=1080"}}/>

      <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Settings_%2889646%29_-_The_Noun_Project.svg/640px-Settings_%2889646%29_-_The_Noun_Project.svg.png"}} style={styles.profileSetting}/>

      

    </View>
  )
}

export default Map

const styles = StyleSheet.create({

  /*hex codes for transit app colors "#6b40b4" = search bar blue, "#f3eef8" search text white, "#18171d" = item list black,  
  "#8b90a4" = item text gray, "#a5212f" calgary transit red, "#fffeff" transit text white, "#e54051" ticket button red,
   "#fdfdfc" ticket button text, "#fdfefb" profile border, "#2f2e33" profile settings cog bg, "#f0f0f0" settings cog */

  mapContainer:{
    height:400,
    width:500,
  
  },
  profileImage:{
    marginTop:50,
    marginLeft: 15,
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
    borderWidth:5,
    borderColor:"#fdfefb",
    position:"absolute",
  },
  profileSetting:{
   position:"absolute",
   width:20,
   height:20,
   borderRadius: 10,
   borderWidth:1,
   borderColor:"#2f2e33",
   backgroundColor:"#f0f0f0",
    marginLeft:57,
    marginTop:89,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowColor: "#2f2e33",
    elevation:3,
  },
})