import { Image, View } from "react-native";
import { Text, StyleSheet } from "react-native";
import { AppTexts } from "../../common/strings";
import AppButtonWithImage from "../AppButtonWithImage/AppButtonWithImage";

type EmptyComponentProps = {
  onAddModalVisible: () => void;
};

const EmptyComponent = ({ onAddModalVisible }: EmptyComponentProps) => {
  return (
    <View style={styles.mainWrapper}>
      <Image
        style={styles.image}
        source={require("../../../assets/empty-placeholder.png")}
      />
      <View style={styles.spacer} />
      <Text style={styles.title}>{AppTexts.NO_NOTES}</Text>
      <View style={styles.spacer} />
      <Text style={styles.text}>{AppTexts.PLACEHOLDER_TITLE}</Text>
      <View style={styles.spacer} />
      <AppButtonWithImage
        title={AppTexts.ADD_NOTE}
        onClick={onAddModalVisible}
      />
    </View>
  );
};

export default EmptyComponent;

const styles = StyleSheet.create({
  mainWrapper: {
    flexDirection: "column",
    marginTop: 32,
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  image: {
    height: 64,
    width: 64,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
  spacer: {
    height: 16,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "400",
  },
});
