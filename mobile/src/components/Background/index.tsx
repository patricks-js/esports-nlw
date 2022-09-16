import { ImageBackground } from "react-native";

import backgroundImage from "../../assets/background-galaxy.png";

import { styles } from "./styles";

type Props = {
  children: React.ReactNode;
};

export function Background({ children }: Props) {
  return (
    <ImageBackground
      style={styles.container}
      source={backgroundImage}
      defaultSource={backgroundImage}
    >
      {children}
    </ImageBackground>
  );
}
