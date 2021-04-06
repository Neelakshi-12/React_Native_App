import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { Card, FAB } from 'react-native-paper';


const Home = (props) => {
    //incase if data won't scroll we can use scrollview in reactnative
    const data = [
        { id: 1, name: "Neelakshi ",email:"Neelakshi@gmail.com",salary:"4lpa",phone:"2323123",picture:"https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",position: "Software Developer" },
        { id: 2, name: "Shreya ",email:"Shreya@gmail.com",salary:"4lpa",phone:"2323123",picture:"https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",position: "Software Developer" },
        { id: 3, name: "Rochna ",email:"Rochna@gmail.com",salary:"4lpa",phone:"2323123",picture:"https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",position: "Software Developer" },
        { id: 4, name: "Shweta ",email:"Shweta@gmail.com",salary:"4lpa",phone:"2323123",picture:"https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",position: "Software Developer" },
        { id: 5, name: "Devi ",email:"Devi@gmail.com",salary:"4lpa",phone:"2323123",picture:"https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",position: "Software Developer" },
        { id: 6, name: "Priya ",email:"Priya@gmail.com",salary:"4lpa",phone:"2323123",picture:"https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",position: "Software Developer" },
        { id: 7, name: "Lakshmi ",email:"Neelakshi@gmail.com",salary:"4lpa",phone:"2323123",picture:"https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",position: "Software Developer" },
   

    ]
    // instead of map in react js we can use flatlist in react native
    // for large data set we can use flatlist to iterate the array

    // using map in reactjs 
    const renderList = ((item) => {
        return (
            <Card style={styles.mycard}
                onPress={()=>props.navigation.navigate("Profile",{item})}>
                <View style={styles.cardView}>
                    <Image
                        style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
                        source={{ uri: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" }}
                    />
                    <View style={{ marginLeft: 10 }} >
                        <Text style={styles.text}>{item.name}</Text>
                        <Text style={styles.text}>{item.position}</Text>

                    </View>
                </View>
            </Card>
        )
    })

    return (
        <View style={{flex:1}}>
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return renderList(item)
                }}
                keyExtractor={item =>{item.id}} //dynamic keys
            />
            <FAB onPress={()=>props.navigation.navigate("Create")}
                style={styles.fab}
                small={false}
                icon="plus"
                theme={{colors:{primary: '#3498db'}}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mycard: {
        margin: 5,

     },
    cardView: {
        flexDirection: "row",
        padding: 6
    },
    text: {
        fontSize: 18,

    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
})
export default Home