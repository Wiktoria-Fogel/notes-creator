import { StyleSheet } from "react-native";
import { AppColors } from "../../common/colors";

export const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: AppColors.background,
  },
  buttonWrapper: {
    height: 46,
  },
});
