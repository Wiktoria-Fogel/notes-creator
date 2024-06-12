import { Image, TextInput, View } from "react-native";
import { StyleSheet } from "react-native";
import { AppColors } from "../../common/colors";
import { AppTexts } from "../../common/strings";

type SearchBarProps = {
  text: string;
  onTextChange: (e: string) => void;
};

const SearchBar = ({ text, onTextChange }: SearchBarProps) => {
  return (
    <View style={styles.mainWrapper}>
      <Image
        style={styles.image}
        source={require("../../../assets/search-icon.png")}
      />
      <TextInput
        value={text}
        placeholder={`${AppTexts.SEARCH}...`}
        placeholderTextColor={AppColors.darkGray}
        onChange={(txt) => onTextChange(txt.nativeEvent.text)}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  mainWrapper: {
    backgroundColor: AppColors.lightGray,
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    marginBottom: 16,
  },
  image: {
    height: 24,
    width: 24,
    marginRight: 8,
  },
});
