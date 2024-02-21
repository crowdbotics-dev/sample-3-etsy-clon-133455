import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Image, ScrollView } from "react-native";

const DashboardScreen = () => {
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Maker/Seller Dashboard</Text>
        </View>
        <View style={styles.section}>
          <Image style={styles.image} source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} />
          <Text style={styles.sectionTitle}>Shop Performance</Text>
          <Text style={styles.sectionDescription}>
            View your shop's recent performance metrics.
          </Text>
        </View>
        <View style={styles.section}>
          <Image style={styles.image} source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} />
          <Text style={styles.sectionTitle}>Order Fulfillment</Text>
          <Text style={styles.sectionDescription}>
            Manage and track your order fulfillment process.
          </Text>
        </View>
        <View style={styles.section}>
          <Image style={styles.image} source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} />
          <Text style={styles.sectionTitle}>Analytics</Text>
          <Text style={styles.sectionDescription}>
            Deep dive into your shop's analytics and trends.
          </Text>
        </View>
        <View style={styles.section}>
          <Image style={styles.image} source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} />
          <Text style={styles.sectionTitle}>Product Management</Text>
          <Text style={styles.sectionDescription}>
            Add, edit, and manage your products.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5"
  },
  scrollContainer: {
    padding: 20
  },
  header: {
    marginBottom: 20
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333"
  },
  section: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    alignItems: "center"
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333"
  },
  sectionDescription: {
    fontSize: 14,
    color: "#666",
    textAlign: "center"
  }
});
export default DashboardScreen;