import { Text, View } from "react-native";
import { StatusBar } from "react-native";

import RouteTimes from "@/components/route-times";
import BuyTicketBar from "@/components/ticket-bar";
import SearchBar from "@/components/search-bar";
import Map from "@/components/map";

export default function Index() {
  return (
    <View>
      
      <Map/>
      <SearchBar/>
      <RouteTimes/>
      <BuyTicketBar/>
  </View>
  );
}
