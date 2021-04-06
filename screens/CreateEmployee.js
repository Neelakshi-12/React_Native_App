import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal , Alert} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
// import * as ImagePicker from 'expo-image-picker';
// import * as Permissions from 'expo-permissions'; 

const CreateEmployee = () => {
    const [Name, setName] = useState("") //responsible for the dynamic behvior of our components :it automatically rerenders
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [salary, setSalary] = useState("")
    const [picture, setPicture] = useState("")
    const [modal, setModal] = useState(false)

// const pickFromGallery = async ()=>{
//     const {granted} = await Permissions.askAsync(Permissions.MEDIA_LIBRARY)
//     if(granted){
//         await ImagePicker.launchImageLibraryAsync({
//             mediaTypes:ImagePicker.MediaTypeOptions.Images,
//             allowsEditing:true,
//             aspect:[1,1],
//             quality:0.5
//         })
//         if(data.cancelled){
//             let newfile={uri :data.uri,
//                 type:`test/${data.uri.split(".")[1]}`,
//                 name:`test.${data.uri.split(".")[1]}`
//             }
//             handleUpload(newfile)
//         }
//     }else{
//         Alert.alert("Allow Permissions.")
//     }
// }
// const pickFromCamera = async ()=>{
//     const {granted} = await Permissions.askAsync(Permissions.CAMERA)
//     if(granted){
//         await ImagePicker.launchCameraAsync({
//             mediaTypes:ImagePicker.MediaTypeOptions.Images,
//             allowsEditing:true,
//             aspect:[1,1],
//             quality:0.5
//         })
//         if(data.cancelled){
//             let newfile={uri :data.uri,
//                 type:`test/${data.uri.split(".")[1]}`,
//                 name:`test.${data.uri.split(".")[1]}`
//             }
//             handleUpload(newfile)
//         }
//     }else{
//         Alert.alert("Allow Permissions.")
//     }
// }

// const handleUpload = (image) =>{
//     const data = new FormData()
//     data.append('file',image)
//     data.append('upload_present','employeeApp')
//     data.append("cloud_name","neelakshit")

//     fetch("https://api.cloudinary.com/v1_1/neelakshit/image/upload",{
//         method:"post",
//         body:data
//     }).then(res=>res.json()).
//     then(data=>{
//         console.log(data)
//     })

// }

    return (
        <View style={styles.root}>
            <TextInput
                label="Name"
                style={styles.inputStyle}
                value={Name}
                theme={theme}
                mode="outlined"
                onChangeText={text => setName(text)}
            />
            <TextInput
                label="Email"
                style={styles.inputStyle}
                value={email}
                theme={theme}
                mode="outlined"
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                label="Phone"
                style={styles.inputStyle}
                value={phone}
                keyboardType="number-pad"
                theme={theme}
                mode="outlined"
                onChangeText={text => setPhone(text)}
            />
            <TextInput
                label="Salary"
                style={styles.inputStyle}
                value={salary}
                theme={theme}
                mode="outlined"
                onChangeText={text => setSalary(text)}
            />
            <Button style={styles.inputStyle}
                icon="upload"
                mode="contained"
                theme={theme}
                onPress={() => setModal(true)}>
                Upload Image
            </Button>
            <Button style={styles.inputStyle}
                icon="content-save"
                mode="contained"
                theme={theme}
                onPress={() => console.log("saved")}>
                Save
            </Button>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modal}
                onRequestClose={() => {
                    setModal(false)
                }}
            >
                <View style={styles.modalView}>
                    <View style={styles.modalButtonView}>
                        <Button style={styles.inputStyle}
                            icon="camera"
                            mode="contained"
                            theme={theme}
                            onPress={() => pickFromCamera()}>
                            Camera
                        </Button>
                        <Button style={styles.inputStyle}
                            icon="image-area"
                            mode="contained"
                            theme={theme}
                            onPress={() => pickFromGallery()}>
                            Gallery
                        </Button>
                    </View>
                    <Button style={styles.inputStyle}
                            icon="cancel"
                            theme={theme}
                            onPress={() => setModal(false)}>
                            Cancel
                        </Button>
                </View>
            </Modal>
        </View>

    )
}
const theme = {
    colors: {
        primary: "#3498db"
        
    }
}
const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    inputStyle: {
        margin: 5,
    },
    modalView: {
        position: "absolute",
        bottom: 2,
        width: "100%",
        backgroundColor: "lightblue"
    },
    modalButtonView: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    },
})

export default CreateEmployee