import React, { useRef } from "react";
import { View, Image, Text, Dimensions, TouchableOpacity, StyleSheet } from 'react-native'
import Btn from "../components/Btn";
import InputBox from '../components/InputBox'
import { Modalize } from 'react-native-modalize'
import { fs, hs, vs } from "../utils/stylesUtils";
import Images from "../const/Images";
import Container from "../components/container";
import Label from "../components/Label";

const ProductdetailModal = ({ modalizeRef, onClose }) => {

    const RenderProductModal = () => {
        return (
            <Container containerStyle={styles.container}>
                <Container containerStyle={styles.container2}>
                    <Label style={styles.label}>Add offer discount</Label>

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
                            <Label style={styles.label2}>5 %</Label>
                        </Container>
                    </Container>

                    <Container containerStyle={styles.container7}>
                        <Container containerStyle={styles.container8}>
                            <Image
                                source={Images.select}
                                style={styles.selectimg}
                            />
                            <Label style={styles.label3}>10 %</Label>
                        </Container>
                    </Container>

                    <Container containerStyle={styles.container7}>
                        <Container containerStyle={styles.container8}>
                            <Image
                                source={Images.unselect}
                                style={styles.unselectimg}
                            />
                            <Label style={styles.label3}>15 %</Label>
                        </Container>
                    </Container>

                    <InputBox
                        placeholder="Type here..."
                        inputStyle={{
                            maxWidth: '99%'
                        }}
                        containerStyle={{
                            width: '99%',
                            backgroundColor: '#fff',
                            borderColor: '#F2F2F2',
                            alignSelf: 'center',
                            marginTop: vs(10),
                            marginHorizontal: hs(10),
                        }}
                        inputHeight={50}
                        textSize={14}
                        leftIcon={() => <Image
                            source={Images.unselect}
                            style={{
                                width: hs(20),
                                height: vs(20),
                                resizeMode: 'contain',
                                marginHorizontal: hs(10),
                            }}
                        />}
                    />

                </Container>

                <Btn
                    title="Add"
                    btnStyle={{
                        backgroundColor: '#009345',
                        borderRadius: 5,
                        justifyContent: 'center',
                        width: '90%',
                        // elevation: 2,
                        alignSelf: 'center',
                        marginTop: vs(22),
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
                borderTopRightRadius: 10,
                paddingBottom: 10
            }}
            panGestureEnabled={true}
            closeOnOverlayTap={true}
        >
            {RenderProductModal()}
        </Modalize>
    )
}

export default ProductdetailModal;

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
        marginTop: vs(20)
    },
    container5: {
        borderWidth: 1,
        borderRadius: 5,
        height: vs(45),
        borderColor: '#f2f2f2'
    },
    container6: {
        flexDirection: 'row',
        marginHorizontal: hs(10),
        marginTop: vs(10)
    },
    unselectimg: {
        width: hs(20),
        height: vs(20),
        resizeMode: 'contain',
    },
    label2: {
        fontSize: fs(16),
        color: '#000',
        marginLeft: hs(10),
        alignSelf: 'center'
    },
    container7: {
        borderWidth: 1,
        borderRadius: 5,
        height: vs(45),
        marginTop: vs(10),
        borderColor: '#f2f2f2'
    },
    container8: {
        flexDirection: 'row',
        marginHorizontal: hs(10),
        marginTop: vs(10)
    },
    selectimg: {
        width: hs(20),
        height: vs(20),
        resizeMode: 'contain',
    },
    label3: {
        fontSize: fs(16),
        color: '#000',
        marginLeft: hs(10),
        alignSelf: 'center'
    }
})