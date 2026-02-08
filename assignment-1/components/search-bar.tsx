import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.leadingIcon}>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/b/bd/VisualEditor_-_Icon_-_Search-big_-_white.svg",
          }}
          style={styles.icon}
        />
      </View>
      <TouchableOpacity style={styles.searchText}>
        <Text style={styles.searchText}>Where to?</Text>
      </TouchableOpacity>
      {/* insert vertical separator and location image */}
      <View style={styles.trailingIcon}>
        <Image
          //source={require("../assets/images/react-logo.png")}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Blender_tracking.svg",
          }}
          style={styles.icon}
        />
        <Text style={styles.tripTime}>51 min</Text>
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  leadingIcon: {
    flex: 1,
    width: 40,
    height: 40,
    marginTop: 6,
    resizeMode: "cover",
    marginLeft: 10,
    marginRight: 10,
  },
  trailingIcon: {
    flexDirection: "column",
    borderLeftWidth: 1,
    borderLeftColor: "#f3eef8",
    paddingLeft: 10,
    flex: 1,
    width: 40,
    height: 50,
    resizeMode: "cover",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  icon: {
    width: 40,
    height: 40,
  },
  searchContainer: {
    position: "absolute",
    zIndex: 1,
    top: 375,
    alignContent: "space-evenly",
    flexDirection: "row",
    textAlign: "center",
    width: "90%",
    height: 65,
    padding: 5,
    backgroundColor: "#6b40b4",
    borderRadius: 15,
  },
  tripTime: {
    flex: 1,
    color: "#f3eef8",
    textAlign: "center",
    fontSize: 10,
    marginBottom: 10,
  },
  searchText: {
    flex: 7,
    marginTop: 5,
    marginLeft: 0,
    color: "#f3eef8",
    fontSize: 25,
  },
});
