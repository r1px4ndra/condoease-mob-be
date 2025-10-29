import { IconSymbol } from "@/components/ui/IconSymbol";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Settings() {
  const router = useRouter();
    const handleBack = () => {
      if (router.canGoBack()) {
        router.push("/(drawer)/(tabs)");
      } else {
        router.back();
      }
    };
  
      return(
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => handleBack()} style={styles.menuButton}>
              <IconSymbol name="chevron.left" size={40} color="#000000" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Settings</Text>
          </View>
          {/* Scrollable Content */}
            <ScrollView contentContainerStyle={styles.scrollContent}>
              <View style={styles.section}>
            <Text style={styles.sectionTitle}>App Settings</Text>
            <View style={styles.sectionBody}>
              <View style={[styles.rowWrapper, styles.rowFirst]}>
                <TouchableOpacity
                  onPress={() => {
                    router.push("/");
                  }}
                  style={styles.row}>
                  <Text style={styles.rowLabel}>User Manual</Text>
                  <View style={styles.rowSpacer} />
                  <IconSymbol
                    color="#bcbcbc"
                    name="chevron.right"
                    size={19} />
                </TouchableOpacity>
              </View>
              <View style={[styles.rowWrapper, styles.rowLast]}>
                <TouchableOpacity
                  onPress={() => {
                    router.push("/settings/delete");
                  }}
                  style={styles.row}>
                  <Text style={styles.rowLabel}>Delete Account</Text>
                  <View style={styles.rowSpacer} />
                  <IconSymbol
                    color="#bcbcbc"
                    name="chevron.right"
                    size={19} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
            </ScrollView>
  
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
  scrollContent: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  section: {
    paddingVertical: 12,
  },
  sectionTitle: {
    margin: 8,
    marginLeft: 12,
    fontSize: 13,
    letterSpacing: 0.33,
    fontWeight: '500',
    color: '#a69f9f',
    textTransform: 'uppercase',
  },
  sectionBody: {
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  rowWrapper: {
    paddingLeft: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#f0f0f0',
  },
  rowFirst: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  rowLabel: {
    fontSize: 16,
    letterSpacing: 0.24,
    color: '#000',
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  rowValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ababab',
    marginRight: 4,
  },
  rowLast: {
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  row: {
    height: 44,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: 12,
  },
});