import { DrawerNavigationOptions } from "@react-navigation/drawer";
import { IconType } from "@/components/drawer-content/drawer-button";

export interface CustonDrawerType extends DrawerNavigationOptions {
  iconName: IconType
}