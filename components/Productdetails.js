import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput,AsyncStorage  } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Button from "./Button";
function Productdetails({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View>
          <Text>1#product price is 100$ 2# product price is 500$</Text>
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
  export default Productdetails