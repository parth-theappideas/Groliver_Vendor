import React, { useRef } from "react";
import { View, Image, Text, Dimensions, TouchableOpacity, StyleSheet } from 'react-native'
import Btn from "../components/Btn";
import InputBox from '../components/InputBox'
import { Modalize } from 'react-native-modalize'
import { fs, hs, vs } from "../utils/stylesUtils";
import Images from "../const/Images";
import Success from "./Success";
import Container from "../components/container";
import Label from "../components/Label";

const Selectaccount = ({ SelectaccountRef, onClose }) => {
    const SuccessRef = useRef(null);

    const onCloseModal = () => {
        SuccessRef.current?.close();
    }
    const RenderSelectAcc = () => {
        return (
            <Container containerStyle={styles.container}>
                <Container containerStyle={styles.container2}>
                    <Label style={styles.label}>Select account</Label>

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
                            <Container containerStyle={styles.container7}>
                                <Image
                                    source={Images.master_card}
                                    style={styles.master_cardimg}
                                />
                                <Label style={styles.label2}>**** **** **** 1234</Label>
                            </Container>

                            <Image
                                source={Images.tick}
                                style={styles.tickimg}
                            />
                        </Container>
                    </Container>

                    <Container containerStyle={styles.container8}>
                        <Container containerStyle={styles.container9}>
                            <Image
                                source={Images.master_card}
                                style={styles.master_cardimg}
                            />

                            <Label style={styles.label2}>**** **** **** 5742</Label>
                        </Container>
                    </Container>

                    <Container containerStyle={styles.container8}>
                        <Container containerStyle={styles.container9}>
                            <Image
                                source={Images.visa}
                                style={styles.master_cardimg}
                            />
                            <Label style={styles.label2}>**** **** **** 1234</Label>
                        </Container>
                    </Container>
                </Container>

                <Btn
                    title="Processed"
                    btnStyle={{
                        backgroundColor: '#009345',
                        borderRadius: 5,
                        justifyContent: 'center',
                        width: '90%',
                        // elevation: 2,
                        alignSelf: 'center',
                        marginTop: vs(20),
                    }}
                    btnHeight={50}
                    textColor={'white'}
                    textSize={14}
                    onPress={() => SuccessRef.current.open()}
                />
            </Container>
        )
    }
    return (
        <Modalize ref={SelectaccountRef}
            adjustToContentHeight={true}
            withHandle={false}
            handlePosition="inside"
            modalStyle={{
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
            }}
            panGestureEnabled={true}
            closeOnOverlayTap={true}
        >

            {RenderSelectAcc()}
           
            <Success
                SuccessRef={SuccessRef}
                onCloseModal={onCloseModal}
            />

        </Modalize>
    )
}

export default Selectaccount;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: hs(20),
        marginTop: vs(20),
    },
    label: {
        fontSize: fs(16),
        color: '#000',
        fontWeight: 'bold'
    },
    cancelimg: {
        width: hs(20),
        height: vs(20)
    },
    container3: {
        borderWidth: 1,
        marginTop: vs(15),
        borderColor: '#f2f2f2'
    },
    container4: {
        marginHorizontal: hs(20),
        marginTop: vs(15)
    },
    container5: {
        borderWidth: 1,
        height: vs(45),
        borderColor: '#f2f2f2',
        borderRadius: 5
    },
    container6: {
        marginHorizontal: hs(10),
        marginTop: vs(5),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    container7: {
        flexDirection: 'row'
    },
    master_cardimg: {
        width: hs(30),
        height: vs(30),
        resizeMode: 'contain'
    },
    label2: {
        alignSelf: 'center',
        marginLeft: hs(20),
        fontSize: fs(16),
        color: '#000'
    },
    tickimg: {
        width: hs(20),
        height: vs(20),
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    container8: {
        borderWidth: 1,
        height: vs(45),
        borderColor: '#f2f2f2',
        borderRadius: 5,
        marginTop: vs(15)
    },
    container9: {
        marginHorizontal: hs(10),
        marginTop: vs(5),
        flexDirection: 'row'
    }
})