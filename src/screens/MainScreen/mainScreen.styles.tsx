import { StyleSheet } from "react-native";
import { AppColors } from "../../common/colors";

export const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 64,
    backgroundColor: AppColors.background,
  },
  cardWrapper: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
    borderRadius: 8,
    backgroundColor: "white",
    marginBottom: 24,
  },
  container: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 16,
  },
  title: {
    marginBottom: 64,
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginRight: 4,
  },
  simpleText: {
    fontSize: 16,
    fontWeight: "500",
  },
});
