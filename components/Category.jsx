import React from 'react';
import { ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Category = () => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.listContainer}
    >
      
 <TouchableOpacity style={styles.chipp}>
        <Ionicons name="list-outline" size={18} color="#555" style={styles.icon} />
        <Text style={styles.chipTextt}>Categories</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.chipp}>
        <Ionicons name="medkit-outline" size={18} color="#555" style={styles.icon} />
        <Text style={styles.chipTextt}>Symptoms</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.chipp}>
        <Ionicons name="time-outline" size={18} color="#555" style={styles.icon} />
        <Text style={styles.chipTextt}>Duration</Text>
      </TouchableOpacity>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
   backgroundColor:'#f0f2f5',
    padding:10,
   
  },
  chipp: {
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#fff',
    borderRadius: 20,
    marginRight: 10,
  },
  icon:{
    marginRight: 6,
  },
  chipTextt:{
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
});

export default Category;