import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PlaylistSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerText}>My Playlists (10)</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>

<ScrollView horizontal showsHorizontalScrollIndicator={false}>

   <TouchableOpacity style={[styles.card, { backgroundColor: '#FFF3E0' }]}>
     <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc-ptxnyOC8ZP2Ml0J37mRucfarM3cZdyelg&s' }}
       style={styles.image} />
     <Text style={styles.title}>My Hypertension Daily Plan</Text>

     <View style={styles.details}>
       <Ionicons name="headset-outline" size={14} color="#555" />
       <Text style={styles.episodes}>6 Episodes</Text>
    </View>

     <Text style={styles.updated}>Updated: 03.06.2025</Text>
   </TouchableOpacity>

<TouchableOpacity style={[styles.card, { backgroundColor: '#E3F2FD' }]}>
    <Image
      source={{ uri: 'https://img.freepik.com/premium-vector/green-checkmark-icon-vector-illustration-white-background-green-tick-approved-icon-vector_1296964-254.jpg?semt=ais_hybrid&w=740&q=80' }}
      style={styles.image}
    />
    <Text style={styles.title}>My Post-Surgery Recovery</Text>

    <View style={styles.details}>
       <Ionicons name="headset-outline" size={14} color="#555" />
       <Text style={styles.episodes}>3 Episodes</Text>
     </View>

     <Text style={styles.updated}>Updated: 03.06.2025</Text>
  </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles =StyleSheet.create({
  container: {
    marginTop:20,
    paddingHorizontal:16,
  },
  headerRow: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:10,
  },
  headerText:{
    fontSize:18,
    fontWeight:'600',
    color:'#222',
  },
  seeAll:{
    fontSize:14,
    color:'blue',
   
  },
  card:{
    width:180,
    borderRadius:16,
    padding:12,
    marginRight:12,
  },
  image:{
    width:50,
    height:50,
    borderRadius:10,
    marginBottom:8,
  },
  title:{
    fontSize:15,
    fontWeight:'600',
    color:'brown',
    marginBottom:6,
  },
  details:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom:4,
  },
  episodes:{
    fontSize: 13,
    color: 'gray',
    marginLeft: 4,
  },
  updated:{
    fontSize:12,
    color:'gray',
  },
});

export default PlaylistSection;
