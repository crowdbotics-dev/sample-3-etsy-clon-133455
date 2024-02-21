import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Image, FlatList } from "react-native";
const ordersData = [{
  id: "1",
  orderNumber: "Order #1234",
  status: "Processing",
  date: "April 10, 2023",
  total: "$129.99"
}, {
  id: "2",
  orderNumber: "Order #1235",
  status: "Shipped",
  date: "April 8, 2023",
  total: "$89.99"
}, {
  id: "3",
  orderNumber: "Order #1236",
  status: "Delivered",
  date: "April 5, 2023",
  total: "$49.99"
}];

const OrderItem = ({
  order
}) => <View style={styles.orderItem}>
    <Image source={{
    uri: "https://tinyurl.com/42evm3m3"
  }} style={styles.image} />
    <View style={styles.orderDetails}>
      <Text style={styles.orderNumber}>{order.orderNumber}</Text>
      <Text>{order.status}</Text>
      <Text>{order.date}</Text>
      <Text style={styles.total}>{order.total}</Text>
    </View>
  </View>;

const OrderManagementScreen = () => {
  return <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Order Management</Text>
      <FlatList data={ordersData} renderItem={({
      item
    }) => <OrderItem order={item} />} keyExtractor={item => item.id} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
    marginLeft: 20
  },
  orderItem: {
    flexDirection: "row",
    padding: 20,
    backgroundColor: "#fff",
    marginBottom: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    elevation: 3
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20
  },
  orderDetails: {
    justifyContent: "space-around"
  },
  orderNumber: {
    fontWeight: "bold"
  },
  total: {
    fontWeight: "bold",
    color: "#333"
  }
});
export default OrderManagementScreen;