import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>

     <View>
        <Text>HealthCast</Text>
     </View>

      <Image 
        source={{uri:"https://t4.ftcdn.net/jpg/04/31/64/75/360_F_431647519_usrbQ8Z983hTYe8zgA7t1XVc5fEtqcpa.jpg"}} 
        style={styles.profileImage} />
    
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
       alignItems:'center',
       padding:10
    },
    profileImage:{
    width: 40,
    height: 40,
    borderRadius: 20,      
  },
})