import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import Category from '../components/Category'
import CategoriesList from '../components/CategoriesList'


const Library = () => {
  return (
    <View>
        <Header/>

        <View style={{display:'flex',justifyContent:'flex-start', width:'95%',paddingLeft:10 }}>
            <Text style={styles.text}>
            Library
            </Text>
            <Text >
              Doctors nj sdjchwuechwei sdchwi  dhewbciww
            </Text>
        </View>

        <SearchBar/>
        <View  style={{flex:1, marginRight:'auto',marginLeft:'auto', justifyContent:'space-evenly'}}>
             <Category/>
        </View>
<CategoriesList/>
    </View>
  )
}

export default Library

const styles = StyleSheet.create({
    text:{
        fontSize:25,
        fontWeight:600
    },
})