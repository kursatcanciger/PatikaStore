import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        width: Dimensions.get('window').width / 2,
        flex: 1,
        margin: 5,
        borderRadius: 10,
        padding: 15
    },
    image: {
        height: Dimensions.get('window').height / 4,
        borderRadius: 15,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: 18,
        paddingBottom: 5
    },
    price: {

    }
});