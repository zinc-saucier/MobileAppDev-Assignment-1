import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
        
        <Image
        source={{uri:"https://upload.wikimedia.org/wikipedia/commons/b/bd/VisualEditor_-_Icon_-_Search-big_-_white.svg"}}
        style={styles.icon}
        />
        <TouchableOpacity style={styles.searchText}>
        <Text style={styles.searchText}>Where to?</Text>
        </TouchableOpacity>
        {/* insert vertical separator and location image */}
        <Image
        source={require("../assets/images/react-logo.png")}
        style={styles.icon}
        />

    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
      icon:{
        width: 40,
        height: 40,
        resizeMode:"cover",
        marginLeft: 20,
        marginRight: 20,
      },
      searchContainer: {
        paddingVertical: 9,
        
        flexDirection: "row",
        textAlign: "center",
        width: '90%',
        height: 60,
        padding: 5,
        backgroundColor: "#6b40b4",
        borderRadius: 15,  
        resizeMode:"cover",
      },
      searchText: {
        marginLeft: 0,
        color: "#f3eef8",
        fontSize: 25,
      }
})