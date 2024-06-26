import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomTextInput from '../components/atoms/CustomTextInput';
import CustomButton from '../components/atoms/CustomButton';

const EditNote = ({ noteToEdit, setCurrentPage, updateNote }) => {
  const [title, setTitle] = useState(noteToEdit.title);
  const [desc, setDesc] = useState(noteToEdit.desc);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Note</Text>
      <CustomTextInput
        label="Title"
        text={title}
        onChange={setTitle}
      />
      <CustomTextInput
        label="Description"
        text={desc}
        onChange={setDesc}
        multiline
        numberOfLines={4}
      />
      <CustomButton
        backgroundColor="#DDDDDD"
        color="#39494F"
        text="Save"
        width="100%"
        onPress={() => {
          updateNote(noteToEdit.id, title, desc);
          setCurrentPage('home');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default EditNote;
