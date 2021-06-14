import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Button from "./components/Button";
import HomeScreen from "./components/HomeScreen";
import productlist from "./components/productList";
import Productdetails from "./components/Productdetails";
import Employeesdetails from "./components/Emplyeedetails";
import Orderdetails from "./components/Orderdetails";
import OrderList from "./components/OrderList"
import Employeeslist from "./components/Employeeslist";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="productlist" component={productlist} />
      <Stack.Screen name="Productdetails" component={Productdetails} />
      <Stack.Screen name="Employeesdetails" component={Employeesdetails} />
      <Stack.Screen name="EmployeesList" component={Employeeslist} />
      <Stack.Screen name="OrderList" component={OrderList} />
      <Stack.Screen name="Orderdetails" component={Orderdetails} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
