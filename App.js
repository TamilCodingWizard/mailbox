import {  IconComponentProvider } from "@react-native-material/core";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { InboxStack } from "./routes/InboxStack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DraftsStack } from "./routes/DraftsStack";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import CustomDrawerContent from "./components/CustomDrawerComponent";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <IconComponentProvider IconComponent={MaterialCommunityIcons}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{headerShown:false}}
            drawerContent={(props) => <CustomDrawerContent {...props}/>}>
          <Drawer.Screen name="Inbox" component={InboxStack} options={{
            title:'Inbox',
            drawerIcon: () => (
              <>
                <Icon name="inbox" size={24}/>
              </>
            )
          }}/>
          <Drawer.Screen name="Drafts" component={DraftsStack} options={{
            title:'Drafts',
            drawerIcon: () => (
              <>
                <Icon name="email-open" size={24}/>
              </>
            )
          }}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </IconComponentProvider>
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
