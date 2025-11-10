import React from 'react';
import { FlatList, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const data = [
  {
    id:'1',
    title: 'Chronic Pain',
    episodes:'8 episodes',
    imageUri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAMGOMk8fihwWTdfkCMPoaJFDHyouc7o48kg&s', 
  },
  {
    id:'2',
    title:'Mindfulness for Sleep',
    episodes:'8 episodes',
    imageUri:'https://www.takingcharge.csh.umn.edu/sites/default/files/1%20-%20header%20illustrations/Sleep.png',
  },
  {
    id:'3',
    title:'Health Heart Basics',
    episodes:'12 episodes',
    imageUri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm3Y2EAAP5-zjoI_bBpiFZx92dvjz2bKov-w&s',
  },
   {
    id:'4',
    title:'Mindfulness for Sleep',
    episodes:'8 episodes',
    imageUri:'https://www.takingcharge.csh.umn.edu/sites/default/files/1%20-%20header%20illustrations/Sleep.png',
  },
  {
    id:'5',
    title:'Health Heart Basics',
    episodes:'12 episodes',
    imageUri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm3Y2EAAP5-zjoI_bBpiFZx92dvjz2bKov-w&s',
  },
   {
    id:'6',
    title:'Mindfulness for Sleep',
    episodes:'8 episodes',
    imageUri:'https://www.takingcharge.csh.umn.edu/sites/default/files/1%20-%20header%20illustrations/Sleep.png',
  },
  {
    id:'7',
    title:'Health Heart Basics',
    episodes:'12 episodes',
    imageUri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm3Y2EAAP5-zjoI_bBpiFZx92dvjz2bKov-w&s',
  },
];
const ListItem = ({ item }) => (
  <TouchableOpacity style={styles.itemContainer}>
    <Image source={{ uri: item.imageUri }} style={styles.itemImage} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.episodes}>{item.episodes}</Text>
    </View>
    <Text style={styles.arrow}>&gt;</Text>
  </TouchableOpacity>
);

const MyFlatList=()=>{
  return(
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) =><ListItem item={item}/>}
        keyExtractor={item =>item.id}
        showsVerticalScrollIndicator={false}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    paddingTop: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  itemImage: {
    width:50,
    height:50,
    borderRadius:10,
    marginRight:15,
    backgroundColor:'#e0e0e0',
  },
  textContainer: {
    flex:1,
  },
  title:{
    fontSize:17,
    fontWeight:'600',
    color:'#333',
  },
  episodes:{
    fontSize:13,
    color:'#666',
    marginTop:2,
  },
  arrow:{
    fontSize:20,
    color:'#ccc',
    marginLeft:10,
  },
});

export default MyFlatList;