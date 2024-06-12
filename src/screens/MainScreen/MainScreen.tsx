import { View } from "react-native";
import AppButton from "../../components/AppButton/AppButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { FC, useCallback, useState } from "react";
import { NavigationProps } from "./mainScreen.types";
import { styles } from "./mainScreen.styles";
import { AppTexts } from "../../common/strings";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import { NoteItemProps } from "../../common/types";
import NotesList from "../../components/NotesList/NotesList";
import NoteEditor from "../../components/NoteEditor/NoteEditor";
import uuid from "react-native-uuid";
import moment from "moment";
import AppAlert from "../../components/AppAlert/AppAlert";

export const MainScreen: FC<NavigationProps> = ({ navigation }) => {
  const [searchText, setSearchText] = useState<string>("");
  const [notes, setNotes] = useState<NoteItemProps[]>([]);
  const [addNoteEditorVisible, setAddNoteEditorVisible] =
    useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedNoteId, setSelectedNoteId] = useState<string>("");

  const filterResult = useCallback(() => {
    const newList = notes.filter((item) => {
      const regex = new RegExp(`^${searchText}`, "i");
      return item.title.match(regex) || item.body.match(regex);
    });
    return newList;
  }, [searchText, notes]);

  const onAddNewNote = useCallback(
    (newTitle: string, newBody: string) => {
      const newNote: NoteItemProps = {
        id: uuid.v4().toString(),
        title: newTitle ? newTitle : AppTexts.UNTITLED,
        body: newBody ? newBody : AppTexts.EMPTY,
        date: moment().format("MMM DD"),
      };
      let newArray = [newNote, ...notes];
      setNotes(newArray);
      setAddNoteEditorVisible(false);
    },
    [notes]
  );

  const onShowDeleteModal = (itemId: string) => {
    setModalVisible(true);
    setSelectedNoteId(itemId);
  };

  const onDelete = () => {
    const filteredData = notes.filter((e) => e.id !== selectedNoteId);
    setModalVisible(false);
    setNotes(filteredData);
  };

  const onEdit = (newItem: NoteItemProps) => {
    const listCopy = [...notes];
    const index = listCopy.findIndex((e) => e.id === newItem.id);
    listCopy[index] = newItem;
    setNotes(listCopy);
  };

  return (
    <SafeAreaView style={styles.contentWrapper}>
      <View style={styles.mainWrapper}>
        <Header title={AppTexts.NOTES} />
        <SearchBar text={searchText} onTextChange={setSearchText} />
        {filterResult().length !== 0 && !addNoteEditorVisible && (
          <View style={styles.buttonWrapper}>
            <AppButton
              value={AppTexts.ADD_NEW}
              onClick={() => setAddNoteEditorVisible(true)}
            />
          </View>
        )}
        {addNoteEditorVisible && (
          <NoteEditor
            title={AppTexts.ADD_NEW_NOTE}
            buttonTitle={AppTexts.ADD}
            mode={"add"}
            onConfirm={onAddNewNote}
            onCancel={() => setAddNoteEditorVisible(false)}
          />
        )}
        {notes.length === 0 && addNoteEditorVisible ? (
          <></>
        ) : (
          <NotesList
            items={filterResult()}
            onAddModalVisible={() => setAddNoteEditorVisible(true)}
            onShowDeleteModal={onShowDeleteModal}
            onEdit={onEdit}
          />
        )}
        <AppAlert
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          onConfirm={onDelete}
        />
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;
