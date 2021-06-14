import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
  StyleSheet
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Button from "./Button";

function Employeeslist({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Employeesdetails")}
          >
            <Text style={{ flexDirection: "column", justifyContent: "center" }}>
              1# employee
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Employeesdetails")}
          >
            <Text style={{ flexDirection: "column", justifyContent: "center" }}>
              2# employee
            </Text>
          </TouchableOpacity>
        </View>
        <Button
          title="go to employees details"
          onPress={() => {
            navigation.navigate("Employeesdetails");
          }}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }
  export default Employeeslist