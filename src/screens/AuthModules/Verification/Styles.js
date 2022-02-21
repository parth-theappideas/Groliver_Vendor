import {StyleSheet} from 'react-native'
import { Fonts } from '../../../assets/fonts/fonts';
import { fs, hs, screenWidth, vs } from '../../../utils/stylesUtils';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    emaillogo:{
        // width: screenWidth * 0.50,
        width: hs(140),
        height: vs(140),
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    text1:{
        fontSize: fs(18),
        color: '#000',
        // marginTop: vs(10),
        fontFamily: Fonts.regular
    },
    container2:{
        marginTop: vs(20),
        marginHorizontal: hs(10)
    },
    text2:{
        fontSize: fs(16),
        color: '#000',
        fontWeight: 'bold',
        fontFamily: Fonts.regular
    },
    text3:{
        fontSize: fs(16),
        fontFamily: Fonts.regular,
        alignSelf: 'center',
        marginTop: vs(10),
        color: '#000'
    }
})

export default styles;