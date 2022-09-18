import { ActivityIndicator, Button,  } from '@react-native-material/core';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Inbox from './screens/Inbox';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style='auto'/>
      <Inbox/>
    </SafeAreaView>
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
