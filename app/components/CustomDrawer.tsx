import AsyncStorage from '@react-native-async-storage/async-storage';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Text, TouchableOpacity, View } from 'react-native';

export default function CustomDrawer(props: any) {
  
  const handleLogout = async () => {
    await AsyncStorage.clear(); // change this
    props.navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      {/* Navigation Items */}
      <View style={{ flex: 1, paddingTop: 10 }}>
        <DrawerItemList {...props} />
      </View>

      {/* Footer */}
      <TouchableOpacity
        style={{
          padding: 16,
          marginTop: 20,
        }}
        onPress={handleLogout}
      >
        <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 15 }}>Logout</Text>
      </TouchableOpacity>

      <View style={{ padding: 20, borderTopWidth: 1, borderColor: '#ccc' }}>
        <Text style={{ fontSize: 12, color: '#999' }}>© 2025 CondoEase</Text>
      </View>
    </DrawerContentScrollView>
  );
}