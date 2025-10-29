import { Drawer } from 'expo-router/drawer';
import CustomDrawer from '../components/CustomDrawer';

export default function DrawerLayout() {
  return (
    <Drawer drawerContent={(props) => <CustomDrawer {...props} />} screenOptions={{headerShown: false}}>
      <Drawer.Screen name="account" options={{ drawerLabel: 'Unit Information', title: 'Unit Information' }} />
      <Drawer.Screen name="settings" options={{ drawerLabel: 'Settings', title: 'Settings' }} />
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: 'Home',
          drawerItemStyle: { display: 'none' },
        }}
      />
      <Drawer.Screen
        name="details/name"
        options={{
          drawerLabel: 'Name Details',
          drawerItemStyle: { display: 'none' },
        }}
      />
      <Drawer.Screen
        name="details/email"
        options={{
          drawerLabel: 'Email Details',
          drawerItemStyle: { display: 'none' },
        }}
      />
      <Drawer.Screen
        name="details/birthday"
        options={{
          drawerLabel: 'Birthday Details',
          drawerItemStyle: { display: 'none' },
        }}
      />
    </Drawer>
  );
}