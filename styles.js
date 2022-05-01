import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15

    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'stretch',
        color: '#1c1c1c'
    },
    optionsContainer: {
        flex: 1, 
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignContent: 'space-between'
    }
})

export default styles;