import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Image, Text, View } from 'react-native';

export default function CustomDrawer(props: any) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      {/* Header / Profile Section */}
      <View style={{ padding: 20, backgroundColor: '#1D2B57' }}>
        <Image
          style={{ width: 80, height: 80, borderRadius: 40 }}
        />
        <Text style={{ color: '#fff', fontSize: 18, marginTop: 10 }}>Welcome, Xandra!</Text>
      </View>

      {/* Navigation Items */}
      <View style={{ flex: 1, paddingTop: 10 }}>
        <DrawerItemList {...props} />
      </View>

      {/* Footer */}
      <View style={{ padding: 20, borderTopWidth: 1, borderColor: '#ccc' }}>
        <Text style={{ fontSize: 12, color: '#999' }}>© 2025 Your App Name</Text>
      </View>
    </DrawerContentScrollView>
  );
}