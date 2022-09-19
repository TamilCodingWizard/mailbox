import { ActivityIndicator, Button } from "@react-native-material/core";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Inbox from "./screens/Inbox";
import { InboxStack } from "./routes/InboxStack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DraftsStack } from "./routes/DraftsStack";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{headerShown:false}}>
          <Drawer.Screen name="Inbox" component={InboxStack} />
          <Drawer.Screen name="Drafts" component={DraftsStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
