import { IconSymbol } from "@/components/ui/IconSymbol";
import * as Crypto from 'expo-crypto';
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Payment() {
  const getFormattedTimestamp = () => {
    const now = new Date();
    const pad = (n: number) => n.toString().padStart(2, "0");
    const timestamp = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())} ${pad(now.getDate())}/${pad(now.getMonth() + 1)}/${now.getFullYear()}`;
    return { timestamp };
  };

  const generateTransaction = async () => {
    const { timestamp } = getFormattedTimestamp();
    const rawTx = `TX-${timestamp}`;
    const rawToken = `TOKEN-${timestamp}`;

    try {
      const txId = await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA1, rawTx);
      const tokenId = await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, rawToken);
      const transactionId = `CE-${txId.slice(0, 10)}`;

      console.log("Timestamp:", timestamp);
      console.log("Transaction ID:", transactionId);
      console.log("Token ID:", tokenId);
    } catch (error) {
      console.error("Hashing failed:", error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <IconSymbol size={40} color="#808080" name="chevron.left" />
        </TouchableOpacity>
        <Image
          source={require("../../assets/images/icon.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <TouchableOpacity style={styles.payButton} onPress={generateTransaction}>
        <Text style={styles.payButtonText}>Proceed to Pay</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingBottom: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  menuButton: {
    padding: 10,
  },
  logo: {
    width: 200,
    height: 50,
  },
  scrollContent: {
    paddingBottom: 50,
  },
    payButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    alignContent: "center",
    textAlign: "center",
  },
  payButton: {
    backgroundColor: "#F28D35",
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 40,
    margin: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333333",
  },
  button: {
    backgroundColor: '#F28D35',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
  label: { fontWeight: 'bold', marginTop: 10 },
  value: { fontFamily: 'monospace', fontSize: 12 },

});
