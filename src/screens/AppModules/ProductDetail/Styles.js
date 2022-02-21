import {StyleSheet} from 'react-native'
import { Fonts } from '../../../assets/fonts/fonts';
import { hs, vs,fs } from '../../../utils/stylesUtils';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    container2:{
        marginTop: vs(10),
        marginHorizontal: hs(20)
    },
    container3:{
        flexDirection: 'row',
    },
    container4:{
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#f2f2f2',
        height: vs(120),
        width: "31%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemimg:{
        width: hs(60),
        height: hs(60),
        resizeMode: 'contain',
    },
    container5:{
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#f2f2f2',
        height: vs(120),
        width: "31%",
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: hs(10)
    },
    container6:{
        marginTop: vs(20)
    },
    label:{
        fontFamily: Fonts.regular,
        fontWeight: 'bold',
        color: '#000',
        fontSize: fs(16)
    },
    container7:{
        marginTop: vs(20),
        flexDirection: 'row'
    },
    label2:{
        fontFamily: Fonts.regular,
        fontWeight: 'bold',
        color: '#000',
        fontSize: fs(16)
    },
    label3:{
        fontFamily: Fonts.regular,
        fontSize: fs(16),
        marginLeft: hs(5)
    },
    container8:{
        marginTop: vs(10),
        flexDirection: 'row'
    },
    container9:{
        flexDirection: 'row',
        marginHorizontal: hs(10)
    },
    editimg:{
        resizeMode: 'contain',
        width: hs(15),
        height: vs(15),
        alignSelf: 'center',
        alignItems: 'center'
    },
    delimg:{
        resizeMode: 'contain',
        width: hs(18),
        height: vs(18),
        position: 'absolute',
        bottom: 0,
        // right:hs(15)
        left: hs(20),
    },
    container10:{
        marginTop: vs(30),
    },
    label4:{
        fontFamily: Fonts.regular,
        fontWeight: 'bold',
        color: '#000',
        fontSize: fs(16)
    },
    label5:{
        marginTop: vs(5),
        fontSize: fs(15)
    },
    container11:{
        flexDirection: 'row',
        // marginRight:hs(10)
        marginTop: vs(10),
        justifyContent: 'space-around',
    }
})

export default styles;