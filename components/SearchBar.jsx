import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="search-outline" size={20} color="#666" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search for name, symptom or condition..."
        placeholderTextColor="#999"
      />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 6,
    height: 45,
    marginHorizontal: 16,
    marginVertical: 10,
    shadowColor: '#000',

    shadowRadius: 4,
    elevation: 2, 
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: '#333',
  },
})