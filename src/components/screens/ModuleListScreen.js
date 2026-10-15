import Screen from '../layout/Screen';
import { LogBox, StyleSheet, Text } from 'react-native';
import ModuleList from '../entity/modules/ModuleList.js';
import { useState } from 'react';
import RenderCount from '../UI/renderCount.js';
import { Button, ButtonTray } from '../UI/Button.js';

import initialModules from '../../data/modules.js';

const ModuleListScreen = ({navigation}) => {
  // Initialisations -------------
  LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);
  // State ----------
  const [modules, setModules] = useState(initialModules);

  // Handlers ------------------------------
const handleDelete = (module) =>
  setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));

const onDelete = (module) => {
  handleDelete(module);
  navigation.goBack();
};

const gotoViewScreen = (module) =>
  navigation.navigate('ModuleViewScreen', { module, onDelete });

const handleAdd = (module) => setModules([...modules, module]);

const onAdd = (module) => {
  handleAdd(module);
  navigation.goBack();
};

const gotoAddScreen = () => navigation.navigate('ModuleAddScreen', { onAdd });
   
  // View ----------
  return (
    <Screen>
      <ButtonTray>
        <Button label="Add" icon={<Text>➕</Text>} onClick={gotoAddScreen} />
      </ButtonTray>
      <RenderCount />
      <ModuleList modules={modules} onSelect={gotoViewScreen} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleListScreen;



