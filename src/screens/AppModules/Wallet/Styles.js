import { StyleSheet } from 'react-native'
import { vs, hs, fs } from '../../../utils/stylesUtils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    container2: {
        borderWidth: 1,
        height: vs(200),
        marginTop: vs(10),
        borderRadius: 10,
        marginHorizontal: hs(20),
        backgroundColor: '#f0974f',
        borderColor: '#f0974f'
    },
    container3: {
        alignItems: 'center',
        marginTop: vs(20)
    },
    label: {
        fontSize: fs(16),
        color: 'white'
    },
    container4: {
        alignItems: 'center',
        marginTop: vs(20),
        flexDirection: 'row',
        alignSelf: 'center'
    },
    coinimg: {
        width: hs(25),
        height: vs(25),
        resizeMode: 'contain'
    },
    label2: {
        fontSize: fs(20),
        color: 'white',
        marginLeft: hs(10)
    },
    container5: {
        marginTop: vs(20),
        marginHorizontal: hs(20),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    label3: {
        fontSize: fs(16),
        color: '#000',
        fontWeight: 'bold',
        // marginTop: vs(5)
        alignSelf: 'center'
    },
    container6: {
        borderWidth: 1,
        height: vs(120),
        marginHorizontal: hs(20),
        borderRadius: 10,
        marginTop: vs(15),
        borderColor: '#f0f0f0',
    },
    container7: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    label4: {
        fontSize: fs(16),
        color: '#000',
        fontWeight: 'bold',
        marginTop: vs(10),
        marginHorizontal: hs(10)
    },
    container8: {
        flexDirection: 'row',
        marginHorizontal: hs(10),
        marginTop: vs(5)
        // alignItems:'center'
    },
    editimg:{
        width: hs(30),
        height: vs(30),
        resizeMode: 'contain',
        marginRight: hs(5)
    },
    delimg:{
        width: hs(30),
        height: vs(30),
        resizeMode: 'contain'
    },
    container9:{
        marginTop: vs(10),
        marginHorizontal: hs(10)
    },
    label5:{
        fontSize: fs(16),
        color: '#000'
    },
    label6:{
        fontSize: fs(16),
        color: '#000',
        marginTop: vs(5)
    }
})

export default styles;