import { View } from "react-native";
import { Link } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { Logo } from "@/components/logo";
import { AccordionItemField } from "@/components/accordion/accordion-field";
import { AdditionalButtonIcon } from "@/components/buttons/additional-button-icon";
import { AccordionItemView } from "@/components/accordion";
import { TopSheetUI } from "@/components/top-sheet";
import { BottomSheetUI } from "@/components/bottom-sheet";
import { ButtonMenu } from "@/components/buttons/button-menu";
import { colors } from "@/styles/colors";

export default function About() {
  return (
    <View className="w-full flex-1 items-center bg-violet-800">
      <TopSheetUI flex={1}>
        <ButtonMenu />
        <Logo className="items-center" sizeIcon={50} color={colors.white} />
      </TopSheetUI>
      <BottomSheetUI
        flex={3}
        style={{
          flex: 3,
          width: "100%",
          backgroundColor: "#fff",
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          paddingHorizontal: 0,
        }}
      >
        <AccordionItemView
          title="Versão Actual"
          children={<AccordionItemField title="1.0.0 beta A87H6" />}
        />
        <AccordionItemView
          title="Objectivo"
          children={
            <AccordionItemField title="Esse aplicativo foi desenvolvido com o objectivo testar os teus conhecimentos sobre o IPIL - Makarenco. Composto por perguntas e respostas sobre essa escola maravilhosa." />
          }
        />
        <AccordionItemView
          title="<Desenvolvedor />"
          children={<AccordionItemField title="Mauro Dinis Raimundo" />}
        />
        <AccordionItemView
          title="Créditos"
          children={
            <AccordionItemField title="SmadCode, ImaCode, IItech, ABFLine, Hélio Sucker, Fillareto, Nelson Lemos, IPIL, Afonso da Silva, Miguel Deep, Java Simon, Abílio Bota Félix, Heliandro, Kelson Noah, Eddy Power, JOsé Levi, John Cardoso, Gaspar Lemos etc. " />
          }
        />
        <AccordionItemView
          title="Contactos"
          children={
            <AccordionItemField className="w-full h-20 px-4 flex-row gap-8 items-center justify-center">
              <AdditionalButtonIcon>
                <Link href="https://www.instagram.com/mauro_twister/">
                  <Feather name="instagram" size={30} color={"#fff"} />
                </Link>
              </AdditionalButtonIcon>
              <AdditionalButtonIcon>
                <Link href="https://github.com/MauroTwister475">
                  <Feather name="github" size={30} color={"#fff"} />
                </Link>
              </AdditionalButtonIcon>
              <AdditionalButtonIcon>
                <Link href="https://www.linkedin.com/in/mauro-raimundo-dinis-00475526a/">
                  <Feather name="linkedin" size={30} color={"#fff"} />
                </Link>
              </AdditionalButtonIcon>
            </AccordionItemField>
          }
        />
      </BottomSheetUI>
    </View>
  );
}