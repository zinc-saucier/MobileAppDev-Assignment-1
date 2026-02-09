import { Text, View, StyleSheet, StatusBar, FlatList, Image } from "react-native";


// Bones for route tiles
const routes = [
  {
    id: "1",
    routeNumber: "138",
    routeDestination: "Tuscany Station",
    currentLocation: "WB somewhere",
    timeToPickup: "30",
  },
  {
    id: "2",
    routeNumber: "299",
    routeDestination: "Crowfoot LRT Station",
    currentLocation: "WB somewhere",
    timeToPickup: "10",
  },
  {
    id: "3",
    routeNumber: "115",
    routeDestination: "North Pointe",
    currentLocation: "WB somewhere",
    timeToPickup: "1",
  },
];

const RouteTimes = () => {
  return (
    <View style={styles.container}>
      {/* routes Section */}
      <FlatList
        data={routes}
        keyExtractor={(route) => route.id}
        renderItem={({ item }) => (
          <View style={styles.tileContainer}>
            <View style={styles.dots}>
              <View style={styles.dotLight} />
              <View style={styles.dotDark} />
            </View>
            <View style={styles.tile}>
              {/* route Info */}
              <View style={styles.routeInfo}>
                <Text style={styles.routeNumber}>{item.routeNumber}</Text>
                <View style={styles.arrowContainer}>
                  <View style={styles.dotArrow}>
                    <Text>→</Text>
                  </View>
                  <Text style={styles.bold}>{item.routeDestination}</Text>
                </View>
                <Text style={styles.routeInfo}>{item.currentLocation}</Text>
              </View>

              <View style={styles.timeContainer}>
                <Image
                  source={require("./images/wifi.png")}
                  style={styles.wifi}
                  />
                <Text style={styles.routeTime}>{item.timeToPickup}</Text>
                <Text style={styles.routeInfo}>minutes</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

// Bones for stylesheet
export default RouteTimes;

/*hex codes for transit app colors "#6b40b4" = search bar blue, "#f3eef8" search text white, "#18171d" = item list black,  
  "#8b90a4" = item text gray, "#a5212f" calgary transit red, "#fffeff" transit text white, "#e54051" ticket button red,
   "#fdfdfc" ticket button text, "#fdfefb" profile border, "#2f2e33" profile settings cog bg, "#f0f0f0" settings cog */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#000",
    width: "100%",
  },
  
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
  },
  tileContainer: {
    flexDirection: "column",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderTopColor: "#232429",
    borderBottomColor: "#121318",
    borderWidth: 1,
    backgroundColor: "#18171d",
  },
  tile: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  routeNumber: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#8b90a4",
  },
  routeTime: {
    fontWeight: "bold",
    fontSize: 40,
    color: "#8b90a4",
  },
  timeContainer: {
    alignItems: "center",
  },
  routeInfo: {
    flexDirection: "column",
    marginBottom: 10,
    color: "#8b90a4",
  },
  dots: {
    flexDirection: "row",
    alignSelf: "center",
    columnGap: "40%",
  },
  dotLight: {
    backgroundColor: "#838699",
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  dotDark: {
    backgroundColor: "#33333d",
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  arrowContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 5,
  },
  dotArrow: {
    justifyContent: "center",
    backgroundColor: "#838699",
    width: 15,
    height: 15,
    paddingBottom: 2,
    paddingLeft: 1,
    borderRadius: 6,
  },
  wifi: {
    width: 23,
    height: 12,
    position: 'absolute',
    transform: [{rotate: '40deg'}],
    marginLeft: 50,
  },
  bold: {
    fontWeight: "bold",
    marginRight: 5,
    color: "#8b90a4",
  }
});
