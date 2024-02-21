import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";

const AuthScreen = () => {
  const [isLogin, setIsLogin] = useState(true);
  return <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} style={styles.logo} />
        <Text style={styles.headerText}>{isLogin ? "Login" : "Register"}</Text>
      </View>
      <View style={styles.inputContainer}>
        {!isLogin && <TextInput placeholder="Name" style={styles.input} />}
        <TextInput placeholder="Email" keyboardType="email-address" style={styles.input} />
        <TextInput placeholder="Password" secureTextEntry={true} style={styles.input} />
        {isLogin ? <TouchableOpacity style={styles.button} onPress={() => setIsLogin(false)}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity> : <TouchableOpacity style={styles.button} onPress={() => setIsLogin(true)}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>}
      </View>
      <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
        <Text style={styles.switchText}>
          {isLogin ? "New here? Register" : "Already have an account? Login"}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5"
  },
  headerContainer: {
    marginBottom: 40,
    alignItems: "center"
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold"
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 5,
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 18
  },
  switchText: {
    marginTop: 20,
    color: "#007bff"
  }
});
export default AuthScreen;