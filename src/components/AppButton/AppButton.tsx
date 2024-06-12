import { TouchableOpacity } from "react-native";
import { Text, StyleSheet } from "react-native";
import { AppColors } from "../../common/colors";

type AppButtonProps = {
  value: string;
  type?: "primary" | "cancel";
  onClick: () => void;
};

const AppButton = ({ value, onClick, type = "primary" }: AppButtonProps) => {
  return (
    <>
      <TouchableOpacity
        style={[
          styles.mainWrapper,
          {
            backgroundColor:
              type === "primary" ? AppColors.primary : AppColors.white,
            borderWidth: type === "primary" ? 0 : 1,
          },
        ]}
        onPress={onClick}
      >
        <Text
          style={[
            styles.label,
            {
              color: type === "primary" ? AppColors.white : AppColors.dark,
            },
          ]}
        >
          {value}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    height: 40,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 8,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    borderColor: AppColors.gray,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
  },
});
