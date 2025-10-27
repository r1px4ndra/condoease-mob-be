import * as Linking from "expo-linking";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

export default function SettlePaymentScreen() {
  const { invoiceId, amount, description } = useLocalSearchParams<{
    invoiceId: string;
    amount: string;
    description: string;
  }>();

  const [loading, setLoading] = useState(false);

  const handlePay = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://condoease.me/api/payments/create-invoice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          externalId: `invoice-${invoiceId}`,
          amount: Number(amount),
          description: description,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        if (data.invoice_url) {
          Linking.openURL(data.invoice_url);
        } else {
          Alert.alert("Error", "No invoice URL received");
        }
      } else { 
        Alert.alert("Error", data.error || "Payment failed");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Invoice ID: {invoiceId}</Text>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Amount: ₱{amount}</Text>
      <Text style={{ fontSize: 16, marginBottom: 20 }}>{description}</Text>

      <Button title={loading ? "Processing..." : "Pay with Xendit"} onPress={handlePay} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 10,
  },
  amount: {
    fontSize: 20,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    marginBottom: 20,
    color: "#555",
  },
});
