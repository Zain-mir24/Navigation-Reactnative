import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput,AsyncStorage  } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Button from "./Button";
//Signup page and from this page we will send routes back.

function productlist({ navigation,route }) {
    const [Email, setemail] = useState("");
    const [Password, SetPassword] = useState("");
    const saveData=()=>{
      console.log("saving")
      AsyncStorage.setItem('@store1:key',JSON.stringify({username:Email,password:Password}))
      setemail('')
      SetPassword('')
    }
    const LoadData= async()=>{
      console.log("loading")
      // var key= await AsyncStorage.getAllKeys()
      // console.log(key)
      var item= await AsyncStorage.getItem('@store1:key')
      var data=(JSON.parse(item))
      console.log(data.username)
      console.log(data.password)
  
      
      console.log('Loading Done!')
    }
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Productdetails")}>
            <Text style={{ flexDirection: "column", justifyContent: "center" }}>
              1# Enter your email
            </Text>
            <TextInput
              placeholder="Yourname"
              value={Email}
              onChangeText={(text) => {
                setemail(text);
              }}
            ></TextInput>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Productdetails")}>
            <Text style={{ flexDirection: "column", justifyContent: "center" }}>
              2# Enter you password
            </Text>
            <TextInput
              underlineColorAndroid="transparent"
              placeholder="Password"  
              value={Password}          
              onChangeText={(text) => {
                SetPassword(text);
              }}
            ></TextInput>
          </TouchableOpacity>
        </View>
        <Button  
        title="Savedata"
        onPress={saveData}
        />
         <Button  
        title="Load"
        onPress={LoadData}
        />
        <Button
          title="Go to productdetails"
          onPress={() => navigation.navigate("Productdetails")}
          style={{
            padding: 10,
            borderRadius: 20,
            marginTop: 20,
            backgroundColor: "Orange",
          }}
        />
        <Button
          title="Go back"
          onPress={() =>
            navigation.navigate('Home',{
              params: { email: Email ,password:Password},
            })
          }
          style={{
            padding: 10,
            borderRadius: 20,
            marginTop: 20,
            backgroundColor: "Orange",
          }}
        />
      </View>
    );
  }
  export default productlist