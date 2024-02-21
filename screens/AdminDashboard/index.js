import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Image, ScrollView } from "react-native";

const AdministratorDashboard = () => {
  const features = [{
    key: "1",
    title: "Platform Customization",
    description: "Customize the look and feel of your platform."
  }, {
    key: "2",
    title: "Content Oversight",
    description: "Manage and oversee the content uploaded by users."
  }, {
    key: "3",
    title: "Analytics",
    description: "Access detailed analytics about user engagement and activity."
  }, {
    key: "4",
    title: "User Management",
    description: "Manage user accounts, permissions, and roles."
  }];
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.header}>Administrator Dashboard</Text>
        {features.map(feature => <View key={feature.key} style={styles.featureCard}>
            <Image source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} style={styles.featureImage} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{feature.title}</Text>
              <Text style={styles.description}>{feature.description}</Text>
            </View>
          </View>)}
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f5"
  },
  scrollView: {
    padding: 20
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20
  },
  featureCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  featureImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10
  },
  textContainer: {
    flex: 1,
    justifyContent: "center"
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333"
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginTop: 5
  }
});
export default AdministratorDashboard;