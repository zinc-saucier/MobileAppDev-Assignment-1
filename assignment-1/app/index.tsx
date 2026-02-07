import { Text, View, StyleSheet, StatusBar, ScrollView, FlatList } from "react-native";

// Bones for route tiles
const routes = [
  {
    id: "1",
    name: "User1",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  }
]

// map goes here
const map = [
  {
    id: "1",
    name: "User1",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  }
]

// button goes here
const button = [
  {
    id: "1",
    name: "User1",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  }
]

//main page stuff here
const Index = ()=> {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

// Bones for stylesheet
export default Index

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:StatusBar.currentHeight,
    backgroundColor:"#fff"
  },
  logo:{
    width: 50,
    height: 50,
    borderRadius: 35,
    borderWidth: 2,
    borderColor:"#d6249f",
    resizeMode:"cover",
    marginRight: 20,
  },
  header:{
    flexDirection:"row",
    alignItems:"center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  headerText:{
    fontSize: 18,
    fontWeight: "bold",
  }, 
  tileContainer:{
    flexDirection:"row",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  tile: {
    alignItems: "center",
    marginRight: 15,
    width: 90
  },
  search: {
    width: 50,
    height: 50,
    borderRadius: 35,
    borderWidth: 2,
    borderColor:"#d6249f",
    resizeMode:"cover",
  },
  button:{
    marginTop: 5,
    fontSize: 12,
    textAlign:"center",
    color:"#333",
    width: 85,
    overflow:"hidden",
    paddingBottom: 15,
  },
  mapContainer:{
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 10,
  },
  profileImage:{
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName:{
    fontWeight:"bold",
    fontSize: 16,
  },
  userInfo: {
    flexDirection:"row",
    alignItems:"center",
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  mapImage:{
    width: "100%",
    height: 300,
    borderRadius: 10,
    resizeMode:"cover",
  },
  bold:{
    fontWeight:"bold",
    marginRight: 5
  }
})