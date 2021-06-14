import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput,AsyncStorage  } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
function Employeesdetails({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View>
          <Text style={{ flexDirection: "column", justifyContent: "center" }}>
            1# employee1 name: zain designation:engineer
          </Text>
        </View>
        <View>
          <Text style={{ flexDirection: "column", justifyContent: "center" }}>
            2# emloyee2 name:arsalan designation:marketing
          </Text>
        </View>
        <Button
          title="Go back"
          onPress={() => navigation.goBack()}
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
  export default Employeesdetails