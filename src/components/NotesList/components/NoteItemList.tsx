import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { FC, useState } from "react";
import { NoteItemProps } from "../../../common/types";
import { AppColors } from "../../../common/colors";
import NoteEditor from "../../NoteEditor/NoteEditor";
import { AppTexts } from "../../../common/strings";

type NoteItemListProps = {
  item: NoteItemProps;
  onDelete: (itemId: string) => void;
  onEdit: (item: NoteItemProps) => void;
};

const NoteItemList: FC<NoteItemListProps> = ({ item, onDelete, onEdit }) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  return (
    <>
      {!isEditMode ? (
        <View style={styles.itemWrapper}>
          <View style={styles.titleRowWrapper}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <View style={styles.row}>
              <TouchableOpacity onPress={() => setIsEditMode(true)}>
                <Image
                  style={styles.image}
                  source={require("../../../../assets/edit-icon.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onDelete(item.id)}>
                <Image
                  style={styles.image}
                  source={require("../../../../assets/delete-icon.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.spacer} />
          <Text style={styles.text}>{item.body}</Text>
          <View style={styles.spacer} />
          <Text style={styles.footerText}>{item.date}</Text>
        </View>
      ) : (
        <NoteEditor
          title={AppTexts.EDIT_NOTE}
          buttonTitle={AppTexts.EDIT}
          mode={"edit"}
          onCancel={() => setIsEditMode(false)}
          onConfirm={(newTitle, newBody) => {
            onEdit({
              id: item.id,
              title: newTitle,
              body: newBody,
              date: item.date,
            });
            setIsEditMode(false);
          }}
          initialBody={item.body}
          initialTitle={item.title}
        />
      )}
    </>
  );
};

export default NoteItemList;

const styles = StyleSheet.create({
  itemWrapper: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 12,
    borderRadius: 12,
    backgroundColor: AppColors.white,
    shadowColor: AppColors.dark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  titleRowWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    height: 20,
    width: 20,
    marginLeft: 8,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: "500",
  },
  text: {
    fontSize: 14,
    fontWeight: "400",
  },
  footerText: {
    fontSize: 12,
    fontWeight: "400",
  },
  spacer: {
    height: 12,
  },
  row: {
    flexDirection: "row",
  },
});
