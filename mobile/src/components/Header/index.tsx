import { View, Text, ViewProps } from "react-native";

import { styles } from "./styles";

type Props = {
  title: string;
  subtitle: string;
} & ViewProps;

export function Header({ title, subtitle, ...rest }: Props) {
  return (
    <View style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}
