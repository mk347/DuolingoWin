import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    optionContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '48%',
        height: '48%',
        borderWidth: 4,
        borderBottomWidth: 10,
        borderColor: '#c0c0c0',
        borderRadius: 15,
        padding: 15,
    },
    selectedContainer: {
        backgroundColor: '#DDF4FE',
        borderColor: '#81D5FE'
    },
    selectedText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#40BEF7'
    },
    optionsImage: {
        width: '100%',
        flex: 1
    },
    optionsText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1c1c1c'
    }
})

export default styles;