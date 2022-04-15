import React, { useRef, useState } from "react";
import { View, Text, Image, Dimensions, TouchableOpacity, StyleSheet, Pressable } from 'react-native'
import Btn from "../components/Btn";
import Images from "../const/Images";
import { fs, hs, vs } from "../utils/stylesUtils";
import { Modalize } from 'react-native-modalize'
import Container from "../components/container";
import Label from "../components/Label";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'

const AddressProofModal = ({ modalizeRef, onClose, picture, setPicture }) => {

    const Camerafile = () => {
        let Options = {
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };
        launchCamera(Options, (response) => {
            console.log('Response', response);
            if (response.didCancel) {
                console.log("Cancelled");
            } else if (response.errorCode) {
                console.log('Image error', response.errorCode);
            } else {
                const ImageAccess = response.assets[0].uri
                setPicture(ImageAccess);
                console.log(response);
            }
        })
    }

    const Choosefile = () => {
        let Options = {
            meadiaType: 'photo',
            maxWidth: 300,
            maxHeight: 550,
            quality: 1
        };
        launchImageLibrary(Options, (response) => {
            if (response.assets) {
                const ImageAccess = response.assets[0].uri
                setPicture(ImageAccess);
                console.log(response);
            }
        })
    }


    const RenderAddressProof = () => {
        return (
            <Container containerStyle={styles.container}>
                <Container containerStyle={styles.container2}>
                    <Label style={styles.label}>Select Your Choise</Label>

                    <Pressable onPress={() => onClose()}>
                        <Image
                            source={{
                                uri: "https://icons.iconarchive.com/icons/icons8/ios7/256/Very-Basic-Cancel-icon.png"
                            }}
                            style={styles.cancelimg}
                        />
                    </Pressable>
                </Container>

                <Container containerStyle={styles.container3} />

                <Container onPress={() => Camerafile()}>
                    <Container containerStyle={{
                        borderWidth: 1,
                        marginHorizontal: hs(15),
                        marginTop: vs(10),
                        height: vs(50),
                        borderColor: "#f2f2f2"
                    }}>
                        <Container containerStyle={{
                            flexDirection: 'row',
                            marginHorizontal: hs(15),
                            marginTop: vs(10)
                        }}>
                            <Pressable onPress={() => Camerafile()}>
                                <Text style={{
                                    fontSize: fs(13),
                                    marginTop: vs(7)
                                }}>Take photo</Text>
                            </Pressable>
                        </Container>
                    </Container>
                </Container>

                <Container containerStyle={styles.containerBorder} />

                <Container onPress={() => Choosefile()}>
                    <Container containerStyle={{
                        borderWidth: 1,
                        marginHorizontal: hs(15),
                        marginTop: vs(15),
                        height: vs(50),
                        borderColor: "#f2f2f2"
                    }}>
                        <Container containerStyle={{
                            flexDirection: 'row',
                            marginHorizontal: hs(15),
                            marginTop: vs(10)
                        }}>
                            <Pressable onPress={() => Choosefile()}>
                                <Label style={{
                                    fontSize: fs(13),
                                    marginTop: vs(7)
                                }}>Choose image</Label>
                            </Pressable>
                        </Container>
                    </Container>
                </Container>
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
            {RenderAddressProof()}
        </Modalize>
    )
}
export default AddressProofModal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: vs(10)
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
    containerBorder: {
        borderWidth: 1,
        marginTop: vs(15),
        marginHorizontal: hs(15),
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
    }
})