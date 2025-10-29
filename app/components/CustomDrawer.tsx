import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Text, View } from 'react-native';

export default function CustomDrawer(props: any) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
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