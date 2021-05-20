import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Button from "./components/Button";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="manage products"
        onPress={() => navigation.navigate("productlist")}
        style={{
          padding: 10,
          borderRadius: 20,
          marginTop: 20,
          backgroundColor: "Orange",
        }}
      />
      <Button
        title="manage employees"
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

function Productdetails({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
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

function productlist({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View>
        <Text>1# product1 2# product2</Text>
      </View>
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

function Employeesdetails({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
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
function OrderList({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
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
