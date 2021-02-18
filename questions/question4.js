import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import {Header} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import db from '../config';
import firebase from 'firebase';
import questionDb from '../localdb';

export default class Question2 extends React.Component{

    constructor(){
        super();
        this.state={
         userId: firebase.auth().currentUser.email,
         ans4: ""
        }
    }

    updateAns=()=>{
        db.collection("answers").add({
            "answer4":this.state.ans4,
            "emailId": this.state.userId
        })   
    }

    componentDidMount(){
        console.log(this.state.userId)
    }

    render(){
        return(
          <SafeAreaProvider>
            <View style={styles.container}>
 
              <Header
               centerComponent={{text: "Questions", style:{fontSize: 30, fontFamily: 'Bahnschrift', fontWeight: "bold", color: "#68D693"}}}
              />

               <TextInput
                placeholder={questionDb["question4"].text}
                style={styles.textInputStyle}
                multiline={true}
                onChangeText={
                    (text)=>{this.setState({
                        ans4: text
                    })}
                }
               />

               {/* <TouchableOpacity
               style={[styles.fbButton, {marginTop: -40,marginLeft: 1040}]}
                onPress={
                    ()=>{
                        console.log("Pressed")
                    }
                }
               >
                   <Text style={styles.textStyle}>
                       {">>"}
                   </Text>
               </TouchableOpacity> */}

               <TouchableOpacity
               style={[styles.fbButton, {marginTop: -40, marginLeft: 520}]}
                onPress={
                    ()=>{
                        this.props.navigation.navigate("Question3")
                    }
                }
               >
                   <Text style={styles.textStyle}>
                       {"<<"}
                   </Text>
               </TouchableOpacity>

               <TouchableOpacity
                onPress={
                    ()=>{this.updateAns()}
                }
                style={styles.buttonStyle}
               >
                   <Text style={{fontFamily: "Bahnschrift", fontSize: 20, fontWeight: "bold"}}>Submit</Text>
               </TouchableOpacity>
            </View>
         </SafeAreaProvider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D9D9D9"
    },
    textStyle: {
        fontSize: 30,
        fontFamily: "Bahnschrift"
    },
    buttonStyle: {
        width: 200,
        height: 50,
        marginTop: 25,
        marginLeft: 700,
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8,
        },
        shadowOpacity: 0.30,
        shadowRadius: 10.32,
        elevation: 16,
        backgroundColor: "#F25C05"
       },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "Bahnschrift"
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        borderWidth: 2,
        marginLeft: 700
    },
    textInputStyle:{
        width: 400,
        height: 150,
        borderWidth: 2,
        borderRadius: 5,
        fontSize: 20,
        fontFamily: "Bahnschrift",
        marginLeft: 600,
        marginTop: 250,
        shadowColor: "#000",
        shadowOffset: {
            width: 8,
            height: 4
        },
        shadowOpacity: 0.30,
        shadowRadius: 10.32,
        elevation: 16
    },
    fbButton: {
      backgroundColor: "#27B7F5",
      width: 40,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      shadowColor: "#000",
      shadowOffset: {
          width: 8,
          height: 4
      },
      elevation: 16,
      shadowRadius: 10.32,
      shadowOpacity: 0.30
    }
})