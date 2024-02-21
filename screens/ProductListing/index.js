import React from "react";
import { SafeAreaView, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";

const ProductListingsManagementScreen = () => {
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.header}>Product Listings Management</Text>
        <Image source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} style={styles.image} />
        <TextInput style={styles.input} placeholder="Product Name" />
        <TextInput style={styles.input} placeholder="Price" keyboardType="numeric" />
        <TextInput style={styles.input} placeholder="Category" />
        <TextInput style={styles.input} placeholder="Tags (comma separated)" />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add Product</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.editButton]}>
          <Text style={styles.buttonText}>Edit Product</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  scrollView: {
    alignItems: "center",
    padding: 20
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20
  },
  input: {
    width: "90%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
    fontSize: 16
  },
  button: {
    width: "90%",
    height: 50,
    backgroundColor: "#007BFF",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  editButton: {
    backgroundColor: "#FFC107"
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  }
});
export default ProductListingsManagementScreen;