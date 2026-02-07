
import { Text, View, StyleSheet, StatusBar, FlatList, Image, TouchableOpacity } from "react-native";
import button from "./ticket-bar";

// Bones for route tiles
const routes = [
  {
    id: "1",
    routeNumber: "138",
    routeDestination: "Tuscany Station",
    currentLocation: "WB somewhere",
    timeToPickup: "30",
  }
]

const RouteTimes = ()=> {
  return (
    <View style={styles.container}>
          
     {/* routes Section */}
    <FlatList 
     data ={routes}
      keyExtractor={(route) => route.id}
      renderItem={({item})=>(
        <View style={styles.tileContainer}>
          
          {/* route Info */}
          <View style={styles.routeInfo}>
            <Text style={styles.routeNumber}>{item.routeNumber}</Text>
          </View>
          <View style={styles.routeInfo}>
            <Text style={styles.bold}>{item.routeDestination}</Text>
          </View>
          <View>
            <Text style={styles.routeInfo}>{item.currentLocation}</Text>
          </View>
          <View>
            <Text style={styles.routeTime}>{item.timeToPickup}</Text>
            <Text style={styles.routeInfo}>minutes</Text>
          </View>
        </View>       
      )} 
    />
      
    </View>
     
  );
}

// Bones for stylesheet
export default RouteTimes

/*hex codes for transit app colors "#6b40b4" = search bar blue, "#f3eef8" search text white, "#18171d" = item list black,  
  "#8b90a4" = item text gray, "#a5212f" calgary transit red, "#fffeff" transit text white, "#e54051" ticket button red,
   "#fdfdfc" ticket button text, "#fdfefb" profile border, "#2f2e33" profile settings cog bg, "#f0f0f0" settings cog */

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: "center",
    paddingTop:StatusBar.currentHeight,
    backgroundColor:"#000"
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
  icon:{
    width: 40,
    height: 40,
    resizeMode:"cover",
    marginLeft: 20,
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
    color:"#FFF"
  }, 
  tileContainer:{
    
    flexDirection:"column",
    alignItems: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  tile: {
    alignItems: "center",
    marginRight: 15,
    width: 90,
  },
   routeNumber:{
    fontWeight:"bold",
    fontSize: 50,
    color: "#8b90a4",
  },
  routeTime: {
    fontWeight:"bold",
    fontSize: 40,
    color: "#8b90a4",
  },
  routeInfo: {
    flexDirection:"row",
    alignItems:"center",
   
    marginBottom: 10,
    color: "#8b90a4",
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
    alignSelf: "flex-end",
    padding: 8,
    fontSize: 30,
    textAlign:"center",
    backgroundColor: "#e54051",
    borderRadius: 35,
    width: 60,
    height: 40,
    
  },
  buttonText:{
    color:"#fdfdfc",
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
 
  mapImage:{
    width: "100%",
    height: 300,
    borderRadius: 10,
    resizeMode:"cover",
  },
  bold:{
    fontWeight:"bold",
    marginRight: 5,
    color: "#8b90a4",
  }
})