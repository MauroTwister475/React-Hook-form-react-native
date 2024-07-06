import { View, Text } from "react-native";
import { BadgeSkill } from "./badge-skill";
import { SKILLS } from "@/constants/skill";

export function Skills() {
  return (
    <View className="w-full items-center justify-center mt-4 ">
      <Text className="font-semibold w-full text-slate-900 text-xl">
        Skills
      </Text>
      <View className="w-full flex-row justify-betwee gap-2.5 py-3 flex-wrap">
        {SKILLS.map((skill) => (
          <BadgeSkill key={skill.id} skill={skill.skill} icon={skill.icon} />
        ))}
      </View>
    </View>
  );
}
