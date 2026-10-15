import { Alert, StyleSheet, Text, View } from 'react-native';
import FullWidthImage from 'react-native-fullwidth-image';
import {Button, ButtonTray} from '../../UI/Button.js';

const ModuleView = ({ module, onDelete }) => {
  // Initialisations -------------
  // State ----------
  // Handlers ----------
  const handleDelete = () => onDelete(module);

  const requestDelete= () => Alert.alert(
    "Delete warning",
    `Are you sure you want to delete ${module.ModuleName} ${module.ModuleCode}?`,
    [
      {text: "Cancel"},
      {text: "Delete", onPress: handleDelete}
    ]
  );
  // View ----------
    return (
       <View style={styles.container}>
      <FullWidthImage source={{uri: module.ModuleImageURL}} style={styles.image} />

      <View style={styles.infoTray}>
      <Text style={styles.boldText}>
        {module.ModuleCode} {module.ModuleName}
      </Text>
      <Text style={styles.text}>
        Level {module.ModuleLevel}
      </Text>
      <Text style={styles.dimText}>
        {module.ModuleLeaderName}<Text style={styles.dimText}> (Module Leader)</Text>
      </Text>
      </View>

        <ButtonTray>
     <Button icon={<Text>✏️</Text>} label = "Modify" />
     <Button icon={<Text>🗑️</Text>} label = "Delete" onClick={requestDelete} styleButton = {{ backgroundColor: 'red' }} styleLabel = {{ color: 'white' }} />
      </ButtonTray>

      </View>
          );
}

const styles = StyleSheet.create({  container: {
    gap: 15,
  },
  image : {
    borderRadius: 3,
  },
  infoTray: {
    gap: 5,
  },
  text: {
    fontSize: 16,
  },
  boldText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dimText: {
    color: 'gray',
  },
});

export default ModuleView;