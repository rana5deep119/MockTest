import { StyleSheet, Text, View,  TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import PlaylistSection from '../components/PlaylistSection'
import { Ionicons } from '@expo/vector-icons';
import MyFlatList from '../components/MyFlatList';


const Playlist = () => {
  return (
   
    <SafeAreaView style={{flex:1}}>
         <ScrollView>
      <Header/>
      <View style={{display:'flex',justifyContent:'flex-start', width:'95%',paddingLeft:10 }}>
      <Text style={styles.text}>
       Playlists
      </Text>
      <Text >
        Doctors nj sdjchwuechwei sdchwi  dhewbciww
      </Text>
      </View>
      
      <SearchBar/>
      <PlaylistSection/>

    <TouchableOpacity style={styles.card}>
      <Ionicons name="add-circle-outline" size={20} color="#007AFF" />
      <Text style={styles.texttt}>Create new custom playlist</Text>
    </TouchableOpacity>

   
   <View style={styles.headerRow}>
   <Text style={styles.headerText}>Doctor-Curated-Playlist (10)</Text>
   <TouchableOpacity>
     <Text style={styles.seeAll}>See all</Text>
   </TouchableOpacity>
  </View>
    

    <MyFlatList/>
</ScrollView>
    </SafeAreaView>
  )
}

export default Playlist

const styles = StyleSheet.create({
    text:{
        fontSize:25
    },
    card:{
     width:'95%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1.5,
    borderStyle:'dashed',
    borderColor:'#AFCBFF',
    borderRadius: 12,
    marginTop:12,
    marginLeft:'auto',
    marginRight:"auto",
    padding:15
  },
     texttt:{
    fontSize: 15,
    color:'#007AFF',
    marginLeft: 6,
    fontWeight:'500',
  },
  headerRow: {
    flexDirection:'row',
    justifyContent:'space-between',
    marginLeft:'auto',
    marginRight:'auto',
    paddingTop:15,
    alignItems:'center',
    marginBottom:10,
    width:"95%"
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

})