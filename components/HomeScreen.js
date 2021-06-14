import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput,AsyncStorage ,StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Button from "./Button"
import productlist from "./productList";

function HomeScreen({ navigation, route }) {
    const[RealEmail,Setrealemail]=useState(route.params?.email)
    const[password,setPassword]=useState(route.params?.password)
    const [checkEmail,setcheckEmail]=useState("")
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TextInput style={styles.Text} placeholder="Email"></TextInput>
        <TextInput placeholder="Password"></TextInput>
        <Text>{route.params?.email}</Text>
        <Text>{route.params?.password}</Text>
        <Button
          title="Signup"
          onPress={() => navigation.navigate("productlist")}
          style={{
            padding: 10,
            borderRadius: 20,
            marginTop: 20,
            backgroundColor: "Orange",  
          }}
        />
        <Button
          title="Login"
          onPress={() => navigation.navigate("EmployeesList")}
          style={{
            padding: 10,
            borderRadius: 20,
            marginTop: 20,
            backgroundColor: "Orange",
          }}
        />
        <Button
          title="manageorders"
          onPress={() => navigation.navigate("OrderList")}
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
  const styles=StyleSheet.create({
    Text:{
    padding:10,borderRadius:20,marginTop:20
    ,borderBottomColor:"red"
    }
  })
  export default HomeScreen