import { TextInput, TouchableOpacity, View } from "react-native";
import { Text, StyleSheet } from "react-native";
import { AppColors } from "../../common/colors";
import { AppTexts } from "../../common/strings";
import { useState } from "react";
import AppButton from "../AppButton/AppButton";

type NoteEditorProps = {
  title: string;
  buttonTitle: string;
  mode: "add" | "edit";
  onConfirm: (title: string, body: string) => void;
  onCancel: () => void;
  initialTitle?: string;
  initialBody?: string;
};

const NoteEditor = ({
  title,
  buttonTitle,
  mode,
  onConfirm,
  onCancel,
  initialBody = "",
  initialTitle = "",
}: NoteEditorProps) => {
  const [noteTitle, setNoteTitle] = useState<string>(initialTitle);
  const [noteBody, setNoteBody] = useState<string>(initialBody);
  return (
    <View style={styles.mainWrapper}>
      <View style={styles.row}>
        <Text style={styles.label}>{title}</Text>
        <TouchableOpacity onPress={onCancel}>
          <Text style={styles.buttonLabel}>{AppTexts.CANCEL}</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        value={noteTitle}
        onChange={(txt) => setNoteTitle(txt.nativeEvent.text)}
        style={styles.inputWrapper}
        placeholder={AppTexts.UNTITLED}
      />
      <TextInput
        value={noteBody}
        onChange={(txt) => setNoteBody(txt.nativeEvent.text)}
        style={[styles.inputWrapper, { flex: 1 }]}
        multiline
      />
      <View style={styles.buttonWrapper}>
        <AppButton
          value={buttonTitle}
          onClick={() => onConfirm(noteTitle, noteBody)}
        />
      </View>
    </View>
  );
};

export default NoteEditor;

const styles = StyleSheet.create({
  mainWrapper: {
    height: 350,
    marginBottom: 8,
    paddingTop: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
  },
  buttonLabel: {
    fontSize: 14,
    fontWeight: "400",
    color: AppColors.blue,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  inputWrapper: {
    backgroundColor: AppColors.white,
    borderColor: AppColors.dark,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 16,
    marginBottom: 16,
  },
  buttonWrapper: {
    position: "absolute",
    bottom: "7%",
    right: "5%",
  },
});
