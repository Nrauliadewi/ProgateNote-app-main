import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './components/atoms/CustomButton';
import CustomTextInput from './components/atoms/CustomTextInput';
import Home from './screen/Home';
import AddNote from './screen/addNote';
import EditNote from './screen/editNote';

const CurrentPageWidget = ({
  currentPage,
  noteList,
  setCurrentPage,
  addNote,
  deleteNote,
  updateNote,
  noteToEdit,
  setNoteToEdit,
}) => {
  switch (currentPage) {
    case 'home':
      return (
        <Home
          noteList={noteList}
          setCurrentPage={setCurrentPage}
          deleteNote={deleteNote}
          setNoteToEdit={setNoteToEdit}
        />
      );
    case 'add':
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />;
    case 'edit':
      return (
        <EditNote
          noteToEdit={noteToEdit}
          setCurrentPage={setCurrentPage}
          updateNote={updateNote}
        />
      );
    default:
      return <Home />;
  }
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [noteToEdit, setNoteToEdit] = useState(null);

  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: 'Note pertama',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },
  ]);

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;

    setNoteList([
      ...noteList,
      {
        id,
        title,
        desc,
      },
    ]);
  };

  const deleteNote = (id) => {
    setNoteList(noteList.filter((note) => note.id !== id));
  };

  const updateNote = (id, title, desc) => {
    setNoteList(noteList.map(note => (note.id === id ? { id, title, desc } : note)));
  };

  return (
    <View style={styles.container}>
      <CustomButton
        backgroundColor="#DDDDDD"
        color="#39494F"
        text="Add Note"
        width="100%"
        onPress={() => setCurrentPage('add')}
      />
      <CurrentPageWidget
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        noteList={noteList}
        addNote={addNote}
        deleteNote={deleteNote}
        updateNote={updateNote}
        noteToEdit={noteToEdit}
        setNoteToEdit={setNoteToEdit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 40,
  },
});