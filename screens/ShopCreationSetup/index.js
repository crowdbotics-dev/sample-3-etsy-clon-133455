import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";

const ShopCreationSetupScreen = () => {
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Shop Creation & Setup</Text>
        </View>
        <Image source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} style={styles.image} />
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Set Policies</Text>
          <Text style={styles.sectionDescription}>
            Define your shop's policies for returns, exchanges, and custom
            orders to set clear expectations with your customers.
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Shipping</Text>
          <Text style={styles.sectionDescription}>
            Configure your shipping rates, carriers, and processing times to
            ensure timely delivery of your products.
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Payment Methods</Text>
          <Text style={styles.sectionDescription}>
            Select from a variety of payment methods to make transactions smooth
            and secure for both you and your customers.
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Shop Customization Tools</Text>
          <Text style={styles.sectionDescription}>
            Utilize our suite of customization tools to make your shop stand out
            and reflect your brand's unique style.
          </Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  scrollViewContent: {
    alignItems: "center",
    paddingBottom: 20
  },
  headerContainer: {
    marginTop: 20,
    marginBottom: 20
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333"
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 20
  },
  sectionContainer: {
    marginBottom: 20,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10
  },
  sectionDescription: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24
  },
  button: {
    backgroundColor: "#4a90e2",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  }
});
export default ShopCreationSetupScreen;