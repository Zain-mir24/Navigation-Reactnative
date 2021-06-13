import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput,AsyncStorage  } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Button from "./components/Button";

//MainPage screen
function HomeScreen({ navigation, route }) {
  const[RealEmail,Setrealemail]=useState(route.params?.email)
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput value={RealEmail}></TextInput>
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
          navigation.navigate('HomeScreen',{
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
