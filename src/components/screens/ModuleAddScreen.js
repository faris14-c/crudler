import Screen from '../layout/Screen';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Button, ButtonTray } from '../UI/Button.js';
import { useState } from 'react';

const defaultModule = {
  ModuleID: Math.floor(Math.random() * 1000),
  ModuleName: '',
  ModuleCode: '',
  ModuleLevel: '',
  ModuleLeaderName: '',
  ModuleLeaderID: 'JD001',
  ModuleImageURL: 'https://assets.codepen.io/2510825/courseImageCI4105.jpg',
};

const ModuleAddScreen = ({navigation, route}) => {
   // Initialisations -------------
   const { onAdd } = route.params;
   
   // State ----------
   const [module, setModule] = useState(defaultModule);
   // Handlers ----------
   const handleAdd = () => onAdd(module);
   const handleCancel = () => navigation.goBack();
   const handleChange = (field, value) => setModule({...module, [field]: value});
     // View ----------  
  return (
    <Screen>
      <View style={styles.item}>  
        <Text style={styles.itemLabel}>Module code</Text>
        <TextInput value={module.ModuleCode} onChangeText={(value) => handleChange("ModuleCode", value)} style={styles.itemTextInput} />
      </View>

       <View style={styles.item}>  
        <Text style={styles.itemLabel}>Module name</Text>
        <TextInput value={module.ModuleName} onChangeText={(value) => handleChange("ModuleName", value)} style={styles.itemTextInput} />
      </View>

      <View style={styles.item}>  
        <Text style={styles.itemLabel}>Module level</Text>
        <TextInput value={module.ModuleLevel} onChangeText={(value) => handleChange("ModuleLevel", value)} style={styles.itemTextInput} />
      </View>

      <View style={styles.item}>  
        <Text style={styles.itemLabel}>Module leader</Text>
        <TextInput value={module.ModuleLeaderName} onChangeText={(value) => handleChange("ModuleLeaderName", value)} style={styles.itemTextInput} />
      </View>

      <View style={styles.item}>  
        <Text style={styles.itemLabel}>Module image URL</Text>
        <TextInput value={module.ModuleImageURL} onChangeText={(value) => handleChange("ModuleImageURL", value)} style={styles.itemTextInput} />
      </View>

      <ButtonTray>
        <Button label="Add" icon={<Text>➕</Text>} onClick={handleAdd } />
        <Button label="Cancel" icon={<Text>❌</Text>} onClick={handleCancel} />
      </ButtonTray>
    </Screen>
  );
};

const styles = StyleSheet.create({
  itemLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  itemTextInput: {
    height: 50,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'grey',
  },
});

export default ModuleAddScreen;

