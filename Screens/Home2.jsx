import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { useNavigation } from '@react-navigation/native';
import BottomTab from '../navigation/BottomTab';


const Home2 = () => {
  

  return (
    <View style={{ flex: 1 }}>
   
      
      <BottomTab />
    </View>
  );
};

export default Home2;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
});