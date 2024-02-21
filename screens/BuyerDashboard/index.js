import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";

const BuyerDashboard = () => {
  const recommendations = [{
    id: 1,
    name: "Handmade Vase",
    price: "$25.99"
  }, {
    id: 2,
    name: "Vintage Necklace",
    price: "$45.50"
  }, {
    id: 3,
    name: "Wooden Desk Organizer",
    price: "$34.00"
  }];
  const favorites = [{
    id: 1,
    name: "Bohemian Earrings",
    price: "$15.99"
  }, {
    id: 2,
    name: "Leather Wallet",
    price: "$29.99"
  }];
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Product Recommendations</Text>
          <View style={styles.itemsList}>
            {recommendations.map(item => <View key={item.id} style={styles.item}>
                <Image source={{
              uri: "https://tinyurl.com/42evm3m3"
            }} style={styles.itemImage} />
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
              </View>)}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Favorites</Text>
          <View style={styles.itemsList}>
            {favorites.map(item => <View key={item.id} style={styles.item}>
                <Image source={{
              uri: "https://tinyurl.com/42evm3m3"
            }} style={styles.itemImage} />
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
              </View>)}
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Account Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Order History</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  section: {
    margin: 10
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  },
  itemsList: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  item: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    width: "30%"
  },
  itemImage: {
    width: 100,
    height: 100,
    marginBottom: 5
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold"
  },
  itemPrice: {
    fontSize: 14,
    color: "#666"
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    margin: 10,
    borderRadius: 5,
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  }
});
export default BuyerDashboard;