import { ActivityIndicator, Button,  } from '@react-native-material/core';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Inbox from './screens/Inbox';
import { InboxStack } from './routes/InboxStack';

export default function App() {
  return (
    <>
      <StatusBar style='auto'/>
      <NavigationContainer>
        <InboxStack/>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
