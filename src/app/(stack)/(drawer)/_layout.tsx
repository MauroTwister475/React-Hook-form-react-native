
import { Drawer } from "expo-router/drawer";
import { DrawerContent } from "@/components/drawer-content";
import { CustonDrawerType } from "@/types/navigation";
import { Loading } from "@/components/loading";
import { useState } from "react";

export default function DrawerLayout() {
  const [loading, setisLoading] = useState(true);

  setTimeout(() => setisLoading(false), 3500);

  if (loading) {
    return <Loading />;
  }

  return (
    <Drawer
      screenOptions={{
        drawerStyle: {
          width: "66%",
        },
        headerShown: false,
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "Início",
          iconName: "home",
        } as CustonDrawerType}
      />
      <Drawer.Screen
        name="profile"
        options={{
          drawerLabel: "Perfil",
          iconName: "person",
        } as CustonDrawerType}
      />
      <Drawer.Screen
        name="about"
        options={{
          drawerLabel: "Sobre o app",
          iconName: "info",
        } as CustonDrawerType}
      />
    </Drawer>
  );
}
