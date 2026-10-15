import { ScrollView, StyleSheet} from 'react-native';
import ModuleItem from './ModuleItem';

const ModuleList = ({ modules, onSelect }) => {
  // Initialisations -------------
  // State ----------
  // Handlers ----------
  // View ----------
  return (
    <ScrollView style={styles.container}>
      {modules.map((module) => (
        <ModuleItem
          key={module.ModuleCode}
          module={module}
          onSelect={onSelect}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default ModuleList;