import React from 'react';
import { StyleSheet, Text, View ,Image ,Linking ,Platform} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {Card, Title , Button} from 'react-native-paper'
import { MaterialIcons,Entypo } from '@expo/vector-icons';

const Profile = (props)=> {

    const{id,name,picture,phone,salary,email,position} = props.route.params.item

    const openDial=()=>{
        if(Platform.OS === "android"){
           Linking.openURL("tel:836719236")
        }else{
           Linking.openURL("telprompt:836719236")
        }
    }
    return (
        <View style={styles.root}>
         <LinearGradient 
         colors =  {["black","grey"]}
         style={{height:"20%"}}
         />
        <View style={{alignItems:"center"}}>
        <Image 
         style={{width:150,height:150,borderRadius:150/2,marginTop:-50}}
         source={{uri:picture}}
         />
        </View>
        <View style={{alignItems:"center",margin:15}}>
            <Title>
               {name}
            </Title>
            <Text style={{fontSize:16}}>
               {position}
            </Text>
        </View>
        <Card style={styles.mycard} onPress={() =>{Linking.openURL("mailto:neelakshi@gmail.com")}}>
            <View style={styles.cardContent}>
            <MaterialIcons name="email" size={32} color="#3498db" />
            <Text style={styles.mytext}>
                {email}
            </Text>
            </View>
        </Card>
        <Card style={styles.mycard} onPress={() =>{openDial("neelakshi@gmail.com")}}>
            <View style={styles.cardContent}>
            <Entypo name="phone" size={32} color="#3498db" />
            <Text style={styles.mytext}>
                {phone}
            </Text>
            </View>
        </Card>
        <Card style={styles.mycard}>
            <View style={styles.cardContent}>
            <MaterialIcons name="attach-money" size={32} color="#3498db" />
            <Text style={styles.mytext}>
              {salary}
            </Text>
            </View>
        </Card>
        <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                         <Button style={styles.inputStyle}
                            icon="account-edit"
                            mode="contained"
                            theme={theme}
                            onPress={() => console.log('Pressed')}>
                           Edit
                        </Button>
                        <Button style={styles.inputStyle}
                            icon="delete"
                            mode="contained"
                            theme={theme}
                            onPress={() => console.log('Pressed')}>
                           Fire Employee
                        </Button>
        </View>
        </View>
    )
}
const theme = {
    colors: {
        primary: "#3498db"
        
    }
}
const styles = StyleSheet.create({
    root:{
        flex:1
    },
    mycard:{
        margin:8,
        padding:5
    },
    cardContent:{
        flexDirection:"row"
    },
    mytext:{
        fontSize:18,
        marginTop:3,
        marginLeft:5
    }
})

export default Profile