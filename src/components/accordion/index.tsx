import { ReactNode } from "react";
import { colors } from "@/styles/colors";
import { useWindowDimensions } from "react-native";
import SimpleAccordion from "react-native-simple-accordion";

interface AccordionItemViewProps {
  title: string;
  icon?: ReactNode;
  children: JSX.Element;
}

export function AccordionItemView({
  title,
  icon: Icon,
  children,
}: AccordionItemViewProps) {
  const { width: widthDevide } = useWindowDimensions();	
  
  return (
    <SimpleAccordion
      viewContainerStyle={{
        width: widthDevide,
        backgroundColor: colors.violet[800],
        flexDirection: "row-reverse",
      }}
      bannerStyle={{
        backgroundColor: colors.white,
        borderBottomWidth: 0.5,
        borderBottomColor: "#cecece",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
      }}
      showArrows={false}
      titleStyle={{
        color: "#808080",
        fontSize: 16,
        fontWeight: "bold",
      }}
      viewInside={children}
      title={title}
    />
  );
}
