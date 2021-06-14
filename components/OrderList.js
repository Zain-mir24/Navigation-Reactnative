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

function OrderList({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Orderdetails")}>
          <Text style={{ flexDirection: "column", justifyContent: "center" }}>
            1# Order1
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Orderdetails")}>
          <Text style={{ flexDirection: "column", justifyContent: "center" }}>
            2# Order2
          </Text>
        </TouchableOpacity>
      </View>
      <Button
        title="Go to order details"
        onPress={() => {
          navigation.navigate("Orderdetails");
        }}
        style={{
          padding: 10,
          borderRadius: 20,
          marginTop: 20,
          backgroundColor: "Orange",
        }}
      />
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
export default OrderList