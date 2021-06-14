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
  export default Orderdetails