import propTypes from 'prop-types';
import { View, Text, Image, Pressable } from 'react-native';
import styles from "./styles";

const ImageItem = ({ image, text, isSelected, onPress }) => (
    <Pressable 
        style={[styles.optionContainer, isSelected ? styles.selectedContainer : {}]}
        onPress={onPress}    
    >
        <Image
            style={styles.optionsImage}
            source={{uri: image}}
            resizeMode='contain'
        />
        <Text style={isSelected ? styles.selectedText : styles.optionsText}>{text}</Text>
    </Pressable>
)

ImageItem.propTypes = {
    image: propTypes.string.isRequired,
    text: propTypes.string.isRequired,
    isSelected: propTypes.bool,
    onPress: propTypes.func
};

ImageItem.defaultProps = {
    text: 'Default',
    isSelected: false,
    onPress: () => {}
};

export default ImageItem