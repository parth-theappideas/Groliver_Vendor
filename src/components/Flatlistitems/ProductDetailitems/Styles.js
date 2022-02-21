import {StyleSheet} from 'react-native'
import { Fonts } from '../../../assets/fonts/fonts';
import { fs } from '../../../utils/stylesUtils';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    label:{
        fontSize: fs(18),
        color: '#000',
        fontWeight: 'bold',
        fontFamily: Fonts.regular
    }
})

export default styles;