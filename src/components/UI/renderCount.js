import {useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const RenderCount = ({ BackgroundColor = 'lightblue', TextColor = 'black' }) => {
    // Initialisations -------------
    // State ----------
    const renderCount = useRef(0);
    renderCount.current += 1;
    // Handlers ----------
    // View ----------
    return (
        <Text style={[styles.count, { backgroundColor: BackgroundColor, color: TextColor }]}>
            Number of renders: {renderCount.current}
        </Text>
    );
}

const styles = StyleSheet.create({
    count: {
        padding: 10,
    },
});
export default RenderCount;