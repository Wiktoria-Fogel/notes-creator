import { Modal, Platform, TouchableOpacity, View } from "react-native";
import { Text, StyleSheet } from "react-native";
import AppButton from "../AppButton/AppButton";
import { AppTexts } from "../../common/strings";
import { AppColors } from "../../common/colors";

type AppAlertProps = {
  modalVisible: boolean;
  setModalVisible: (e: boolean) => void;
  onConfirm: () => void;
};

const AppAlert = ({
  modalVisible,
  setModalVisible,
  onConfirm,
}: AppAlertProps) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}
    >
      <TouchableOpacity
        style={[
          Platform.OS === "ios" ? styles.iOSBackdrop : styles.androidBackdrop,
          styles.backdrop,
        ]}
        onPress={() => setModalVisible(false)}
      />
      <View style={styles.mainWrapper}>
        <Text style={styles.title}>{AppTexts.DELETE_NOTE}</Text>
        <Text style={styles.text}>{AppTexts.SURE_TO_DELETE}</Text>
        <View style={styles.buttonWrapper}>
          <AppButton
            value={AppTexts.CANCEL}
            onClick={() => setModalVisible(false)}
            type={"cancel"}
          />
          <AppButton value={AppTexts.DELETE} onClick={onConfirm} />
        </View>
      </View>
    </Modal>
  );
};

export default AppAlert;

const styles = StyleSheet.create({
  mainWrapper: {
    backgroundColor: AppColors.white,
    height: 218,
    width: 344,
    position: "absolute",
    left: "50%",
    marginLeft: -172,
    top: "50%",
    marginTop: -109,
    borderRadius: 16,
    paddingHorizontal: 24,
    paddingVertical: 24,
    flexDirection: "column",
    flex: 1,
  },
  buttonWrapper: {
    flex: 1,
    gap: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 32,
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    marginBottom: 32,
  },
  iOSBackdrop: {
    backgroundColor: AppColors.black,
    opacity: 0.3,
  },
  androidBackdrop: {
    backgroundColor: AppColors.fade,
    opacity: 0.32,
  },
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
