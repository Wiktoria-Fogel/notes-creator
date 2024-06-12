import { Image, TouchableOpacity } from "react-native";
import { Text, StyleSheet } from "react-native";
import { AppColors } from "../../common/colors";

type AppButtonWithImageProps = {
  title: string;
  onClick: () => void;
};

const AppButtonWithImage = ({ title, onClick }: AppButtonWithImageProps) => {
  return (
    <TouchableOpacity style={styles.mainWrapper} onPress={onClick}>
      <Image
        style={styles.image}
        source={require("../../../assets/add-note-icon.png")}
      />
      <Text style={styles.label}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButtonWithImage;

const styles = StyleSheet.create({
  mainWrapper: {
    marginTop: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderColor: AppColors.lightGray,
    borderWidth: 1,
  },
  label: {
    fontSize: 16,
    color: AppColors.dark,
    fontWeight: "500",
  },
  image: {
    height: 24,
    width: 24,
    marginRight: 8,
  },
});
