import { View } from "react-native";
import { Text } from "react-native";
import AppButton from "../../components/AppButton/AppButton";
import { FC, useState } from "react";
import { NavigationProps } from "./mainScreen.types";
import { styles } from "./mainScreen.styles";
import { AppTexts } from "../../common/strings";

export const MainScreen: FC<NavigationProps> = ({ navigation }) => {
  return (
    <View style={styles.mainWrapper}>
      <View style={styles.cardWrapper}>
        <Text style={styles.title}>{AppTexts.HOME_TITLE}</Text>
        <View style={styles.container}>
          <Text style={styles.label}>{`${AppTexts.FILE_NAME}: `}</Text>
        </View>
        <AppButton value={AppTexts.ADD_FILE} onClick={() => {}} />
      </View>
      <AppButton value={AppTexts.EDIT} onClick={() => {}} />
    </View>
  );
};

export default MainScreen;
