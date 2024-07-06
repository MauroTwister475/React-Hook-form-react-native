import { View } from "react-native";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { DrawerButton } from "./drawer-button";
import { CustonDrawerType } from "@/types/navigation";
import { colors } from "@/styles/colors";
import { Flag } from "lucide-react-native";

export function DrawerContent(props: DrawerContentComponentProps) {
  return (
    <View
      className="w-full h-full flex-1 items-center mt-8 py-4 flex-col"
      style={{
        backgroundColor: "#fff",
        rowGap: 8,
      }}
    >
      <Flag
        color={colors.violet[800]}
        size={40}
        className="text-slate-900 text-xl"
      />
      {props.state.routes.map((route, index) => {
        const options = props.descriptors[route.key]
          .options as CustonDrawerType;

        if (route.name === "(stack)") return;

        const isFocused = props.state.index === index;

        const onPress = () => {
          const event = props.navigation.emit({
            type: "drawerItemPress",
            canPreventDefault: true,
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            props.navigation.navigate(route.name, route.params);
          }
        };

        return (
          <DrawerButton
            key={index}
            icon={options.iconName}
            isFocused={isFocused}
            title={String(options.drawerLabel)}
            onPress={onPress}
            style={{width: "100%", marginTop: index === 0 ? 40 : 0 }}
          />
        );
      })}
    </View>
  );
}
