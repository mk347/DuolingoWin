import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#58CC02',
        height: 50,
        marginVertical: 10,
        
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',

        // border
        borderRadius: 5,
        borderBottomWidth: 5,
        borderColor: '#57A600'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#f0f0f0',

        borderColor: '#f0f0f0',
        borderBottomWidth: 1.5
    }
})

export default styles;