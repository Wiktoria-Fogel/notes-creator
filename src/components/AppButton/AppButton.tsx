import { TouchableOpacity } from "react-native";
import { Text, StyleSheet } from "react-native";
import { AppColors } from "../../common/colors";

type AppButtonProps = {
  value: string;
  disabled?: boolean;
  onClick: () => void;
};

const AppButton = ({ value, onClick, disabled = false }: AppButtonProps) => {
  return (
    <>
      <TouchableOpacity
        style={[
          styles.mainWrapper,
          {
            backgroundColor: disabled ? AppColors.gray : AppColors.button,
          },
        ]}
        disabled={disabled}
        onPress={onClick}
      >
        <Text style={styles.label}>{value}</Text>
      </TouchableOpacity>
    </>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  mainWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppColors.button,
  },
  label: {
    fontSize: 16,
    color: AppColors.white,
    fontWeight: "bold",
  },
});
