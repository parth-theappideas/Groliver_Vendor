import React, { useRef, useState } from "react";
import { View, Text, Image, Dimensions, TouchableOpacity,StyleSheet } from 'react-native'
import Btn from "../components/Btn";
import Images from "../const/Images";
import { fs, hs, vs } from "../utils/stylesUtils";
import { Modalize } from 'react-native-modalize'
import Container from "../components/container";
import Label from "../components/Label";

const OrderDetailModal = ({ modalizeRef, onClose }) => {

    const RenderOrderDetail = () => {
        return(
            <Container containerStyle={styles.container}>
                <Container containerStyle={styles.container2}>
                    <Label style={styles.label}>Action</Label>

                    <TouchableOpacity onPress={() => onClose()}>
                        <Image
                            source={{
                                uri: "https://icons.iconarchive.com/icons/icons8/ios7/256/Very-Basic-Cancel-icon.png"
                            }}
                            style={styles.cancelimg}
                        />
                    </TouchableOpacity>
                </Container>

                <Container containerStyle={styles.container3} />

                <Container containerStyle={styles.container4}>
                    <Container containerStyle={styles.container5}>
                        <Container containerStyle={styles.container6}>
                            <Image
                                source={Images.unselect}
                                style={styles.unselectimg}
                            />
                            <Label style={styles.label2}>Processing</Label>
                        </Container>
                    </Container>

                    <Container containerStyle={styles.container7}>
                        <Container containerStyle={styles.container8}>
                            <Image
                                source={Images.select}
                                style={styles.selectimg}
                            />

                            <Label style={styles.label2}>On the way</Label>
                        </Container>
                    </Container>

                    <Container containerStyle={styles.container7}>
                        <Container containerStyle={styles.container8}>
                            <Image
                                source={Images.unselect}
                                style={styles.unselectimg}
                            />

                            <Label style={styles.label2}>Completed</Label>
                        </Container>
                    </Container>
                </Container>

                <Btn
                    title="Apply"
                    btnStyle={{
                        backgroundColor: '#009345',
                        borderRadius: 5,
                        justifyContent: 'center',
                        width: '90%',
                        alignSelf: 'center',
                        marginTop: vs(20),
                        bottom:vs(5)
                    }}
                    btnHeight={50}
                    textColor={'white'}
                    textSize={14}
                // onPress={onOpen}
                />
            </Container>
        )
    }
    return (
        <Modalize ref={modalizeRef}
            adjustToContentHeight={true}
            withHandle={false}
            handlePosition="inside"
            modalStyle={{
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10
            }}
            panGestureEnabled={true}
            closeOnOverlayTap={true}
        >
            {RenderOrderDetail()}
        </Modalize>
    )
}
export default OrderDetailModal;

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    container2:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: hs(20),
        marginTop: vs(20),
    },
    label:{
        fontSize: fs(16),
        color: '#000',
        fontWeight: 'bold'
    },
    cancelimg:{
        width: hs(20),
        height: vs(20)
    },
    container3:{
        borderWidth: 1,
        marginTop: vs(15),
        borderColor: '#f2f2f2'
    },
    container4:{
        marginHorizontal: hs(20),
        marginTop: vs(20)
    },
    container5:{
        borderWidth: 1,
        borderRadius: 5,
        height: vs(45),
        borderColor: '#f2f2f2'
    },
    container6:{
        flexDirection: 'row',
        marginHorizontal: hs(10),
        marginTop: vs(10)
    },
    unselectimg:{
        width: hs(20),
        height: vs(20),
        resizeMode: 'contain',
    },
    label2:{
        fontSize: fs(16),
        color: '#000',
        marginLeft: hs(10),
        alignSelf: 'center'
    },
    container7:{
        borderWidth: 1,
        borderRadius: 5,
        height: vs(45),
        marginTop: vs(10),
        borderColor: '#f2f2f2'
    },
    container8:{
        flexDirection: 'row',
        marginHorizontal: hs(10),
        marginTop: vs(10)
    },
    selectimg:{
        width: hs(20),
        height: vs(20),
        resizeMode: 'contain',
    }
})