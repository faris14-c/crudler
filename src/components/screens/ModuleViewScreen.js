import Screen from '../layout/Screen';
import { StyleSheet } from 'react-native';
import ModuleView from '../entity/modules/ModuleView.js';


const ModuleModifyScreen = ({navigate, route}) => {
   // Initialisations -------------
   const { module, onDelete } = route.params;

   // State ----------
   // Handlers ----------
   // View ----------  
  return (
    <Screen>
     <ModuleView module={module} onDelete={onDelete} />
    </Screen>
  );
};

const styles = StyleSheet.create({
});

export default ModuleModifyScreen;

