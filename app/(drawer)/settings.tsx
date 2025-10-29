import { IconSymbol } from "@/components/ui/IconSymbol";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Settings() {
  const router = useRouter();
    return(
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.push("/(drawer)/(tabs)")} style={styles.menuButton}>
            <IconSymbol name="chevron.left" size={40} color="#000000" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Settings</Text>
        </View>
        <Text>Unit Details Page</Text>
      </View>
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#333",
    margin:20
  },
  menuButton: {
    height: 35,
    width: 35,
  },
});