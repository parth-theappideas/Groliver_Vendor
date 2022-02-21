import { StyleSheet } from 'react-native'
import { Fonts } from '../../../assets/fonts/fonts';
import { vs, hs, fs } from '../../../utils/stylesUtils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    borderView: {
        borderWidth: 1,
        height: vs(155),
        borderColor: '#f2f2f2',
        borderRadius: 10,
    },
    mainContainer: {
        marginHorizontal: hs(20),
        marginTop: vs(10)
    },
    text: {
        color: '#000',
        fontSize: fs(16),
        fontWeight: 'bold'
    },
    container2: {
        marginTop: vs(10),
        flexDirection: 'row'
    },
    text2: {
        fontSize: fs(14)
    },
    text3: {
        fontSize: fs(14),
        marginLeft: hs(10),
        color: '#000'
    },
    container3: {
        marginTop: vs(10),
        flexDirection: 'row'
    },
    text4: {
        fontSize: fs(14)
    },
    text5: {
        fontSize: fs(14),
        marginLeft: hs(10),
        color: '#000'
    },
    container4: {
        marginTop: vs(10),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    container5: {
        flexDirection: 'row'
    },
    text6: {
        fontSize: fs(14),
        fontFamily: Fonts.regular
    },
    text7: {
        fontSize: fs(14),
        color: '#3AB54A',
        marginLeft: hs(10)
    },
    borderView2: {
        borderWidth: 1,
        height: vs(115),
        borderColor: '#f2f2f2',
        borderRadius: 10,
        marginTop: vs(15)
    },
    container6: {
        marginHorizontal: hs(20),
        marginTop: vs(10)
    },
    text8: {
        color: '#000',
        fontSize: fs(16),
        fontWeight: 'bold'
    },
    borderView3: {
        borderWidth: 1,
        marginTop: vs(10),
        borderColor: '#f2f2f2'
    },
    container7: {
        marginHorizontal: hs(20),
        marginTop: vs(10),
        flexDirection: 'row'
    },
    locationimg: {
        width: hs(20),
        height: vs(20),
        resizeMode: 'contain'
    },
    text9: {
        fontSize: fs(15),
        marginLeft: hs(10),
        fontFamily: Fonts.regular
    },
    borderView4: {
        borderWidth: 1,
        height: vs(165),
        borderColor: '#f2f2f2',
        borderRadius: 10,
        marginTop: vs(15)
    },
    container8: {
        marginHorizontal: hs(20),
        marginTop: vs(10)
    },
    text10: {
        color: '#000',
        fontSize: fs(16),
        fontWeight: 'bold'
    },
    container9: {
        marginHorizontal: hs(20),
        marginTop: vs(10),
        // flexDirection: 'row'
    },
    text11: {
        fontSize: fs(14),
        color: '#000',
        fontFamily: Fonts.regular
    },
    text12: {
        fontSize: fs(14),
        marginLeft: hs(14),
        // alignItems:'center',
        color: '#000',
        fontFamily: Fonts.regular,
        marginTop: vs(5)
    },
    container10: {
        marginHorizontal: hs(20),
        marginTop: vs(10),
        // flexDirection: 'row'
    },
    text13:{
        fontSize: fs(14),
        color: '#000',
        fontFamily: Fonts.regular
    },
    text14:{
        fontSize: fs(14),
        marginLeft: hs(14),
        color: '#000',
        fontFamily: Fonts.regular,
        marginTop: vs(5)
    }, 
    borderView5:{
        borderWidth: 1,
        height: vs(190),
        borderColor: '#f2f2f2',
        borderRadius: 10,
        marginTop: vs(15)
    },
    container11:{
        marginHorizontal: hs(20),
        marginTop: vs(10)
    },
    text15:{
        color: '#000',
        fontSize: fs(16),
        fontWeight: 'bold'
    },
    container12:{
        marginHorizontal: hs(20),
        marginTop: vs(10),
    },
    container13:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text16:{
        fontSize: fs(14),
        color: '#000',
        fontFamily: Fonts.regular
    },
    text17:{
        fontSize: fs(16),
        fontFamily: Fonts.regular,
    },
    container14:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: vs(10)
    },
    text18:{
        fontSize: fs(14),
        color: '#000',
        fontFamily: Fonts.regular
    },
    text19:{
        fontSize: fs(14),
        fontFamily: Fonts.regular,
    },
    container15:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: vs(10)
    },
    text20:{
        fontSize: fs(14),
        color: '#000',
        fontFamily: Fonts.regular
    },
    text21:{
        fontSize: fs(14),
        fontFamily: Fonts.regular,
    },
    container16:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: vs(10),
        marginHorizontal: hs(20),
    },
    text22:{
        fontSize: fs(16),
        color: '#000',
        fontFamily: Fonts.regular,
        fontWeight: 'bold'
    },
    text23:{
        fontSize: fs(16),
        fontFamily: Fonts.regular,
        fontWeight: 'bold',
        color: '#000'
    }
})

export default styles;