import { StyleSheet, View, FlatList } from "react-native";
import { FC, useCallback } from "react";
import EmptyComponent from "../EmptyComponent/EmptyComponent";
import { NoteItemProps } from "../../common/types";
import NoteItemList from "./components/NoteItemList";

type NotesListProps = {
  items: NoteItemProps[];
  onAddModalVisible: () => void;
  onShowDeleteModal: (itemId: string) => void;
  onEdit: (item: NoteItemProps) => void;
};

const NotesList: FC<NotesListProps> = ({
  items,
  onAddModalVisible,
  onShowDeleteModal,
  onEdit,
}) => {
  const listEmptyComponent = () => {
    return <EmptyComponent onAddModalVisible={onAddModalVisible} />;
  };

  const renderItem = useCallback(
    (item: NoteItemProps) => {
      return (
        <NoteItemList
          item={item}
          onDelete={onShowDeleteModal}
          onEdit={onEdit}
        />
      );
    },
    [items]
  );

  return (
    <View style={styles.mainWrapper}>
      <FlatList
        keyExtractor={(item) => `${item.id}`}
        data={items}
        renderItem={({ item }) => renderItem(item)}
        ListEmptyComponent={listEmptyComponent}
      />
    </View>
  );
};

export default NotesList;

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    marginTop: 8,
  },
  itemWrapper: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginBottom: 8,
    borderRadius: 8,
  },
  itemTitle: {
    fontWeight: "500",
  },
});
