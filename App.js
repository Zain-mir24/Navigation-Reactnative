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
function Orderdetails({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View>
        <Text style={{ flexDirection: "column", justifyContent: "center" }}>
          1# order1 Customer info:japan orderdate :12,2,21 shipping :california
        </Text>
      </View>
      <View>
        <Text style={{ flexDirection: "column", justifyContent: "center" }}>
          2# order1 Customer info:japan orderdate :12,2,21 shipping :california
        </Text>
      </View>
      <Button
        title="go back"
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
