import React, { useState } from "react";
import { View, Text, ScrollView, Image, StatusBar, Modal } from 'react-native'
import { Fonts } from "../../../assets/fonts/fonts";
import Images from "../../../const/Images";
import { fs, hs, screenWidth, vs } from "../../../utils/stylesUtils";
import Btn from "../../../components/Btn";
import styles from "./Styles";
import Container from "../../../components/container";
import Label from "../../../components/Label";
import VerificationOtp from "./VerificationOtp";

const Verification = ({ navigation }) => {
    const [value, setValue] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <Container containerStyle={styles.container}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <Image
                    source={Images.email}
                    style={styles.emaillogo}
                />

                <Label style={styles.text1}>Verify your email</Label>

                <Container containerStyle={styles.container2}>
                    <Label style={styles.text2}>Check your email for an OTP</Label>
                    <Label style={styles.text3}>michaelclark68@mail.com</Label>
                </Container>

                {/* <Container containerStyle={{
                    marginTop:vs(50),
                    flexDirection:'row',
                    justifyContent:'space-evenly'
                }}>
                    <Container containerStyle={{
                        borderWidth: 1,
                        width:hs(30),
                        borderColor:'#009345'
                    }}
                    />

                    <Container containerStyle={{
                        borderWidth: 1,
                        width: hs(30),
                        borderColor: '#009345',
                        marginLeft:hs(20)
                    }}
                    />

                    <Container containerStyle={{
                        borderWidth: 1,
                        width: hs(30),
                        borderColor: '#009345',
                        marginLeft: hs(20)
                    }}
                    />

                    <Container containerStyle={{
                        borderWidth: 1,
                        width: hs(30),
                        borderColor: '#009345',
                        marginLeft: hs(20)
                    }}
                    />
                </Container> */}

                <VerificationOtp
                    value={value}
                    setValue={setValue}
                />

                <Btn
                    title="Verify"
                    btnStyle={{
                        backgroundColor: '#009345',
                        borderRadius: 5,
                        justifyContent: 'center',
                        width: '92%',
                        // elevation: 2,
                        alignSelf: 'center',
                        // marginTop: vs(40),
                    }}
                    btnHeight={50}
                    textColor={'white'}
                    textSize={14}
                    // onPress={() => navigation.navigate("ResetPassword")}
                    onPress={() => setModalVisible(true)}
                />
        
                <Btn
                    title="Resend OTP"
                    btnStyle={{
                        backgroundColor: '#fff',
                        borderRadius: 5,
                        justifyContent: 'center',
                        width: '92%',
                        borderColor: '#fff',
                        alignSelf: 'center',
                        marginTop: vs(20),
                    }}
                    btnHeight={50}
                    textColor={'#000'}
                    labelStyle={{
                        fontWeight: 'bold'
                    }}
                    textSize={14}
                />
            </Container>

            <Container containerStyle={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                    statusBarTranslucent={true}
                >
                    <Container containerStyle={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: 'rgba(0,0,0,0.6)',
                    }}>
                        <Container containerStyle={{
                            borderRadius: 20,
                            alignItems: "center",
                            backgroundColor:'white',
                            shadowColor: '#000',
                            // shadowOffset: {
                            //     width: 0,
                            //     height: 2,
                            // },
                            shadowOpacity: 0.25,
                            shadowRadius: 4,
                            elevation: 5,
                            height: vs(320),
                            width: '92%',
                        }}>
                            <Image
                                source={Images.success}
                                style={{
                                    width: hs(100),
                                    height: vs(100),
                                    resizeMode: 'contain',
                                    marginTop: vs(30)
                                }}
                            />

                            <Container containerStyle={{
                                marginTop:vs(25),
                                alignItems:'center'
                            }}>
                                <Label onPress={() => setModalVisible(!modalVisible)} style={{
                                    fontSize:fs(18),
                                    color:'#000',
                                    fontWeight:'bold'
                                }}>Welcome!!!</Label>

                                <Label onPress={() => setModalVisible(!modalVisible)} style={{
                                    fontSize: fs(16),
                                    marginTop:vs(10)
                                }}>Your account has been verified</Label>
                            </Container>

                            <Btn
                                title="Go to dashboard"
                                btnStyle={{
                                    backgroundColor: '#009345',
                                    borderRadius: 5,
                                    justifyContent: 'center',
                                    width: '92%',
                                    borderColor: '#fff',
                                    alignSelf: 'center',
                                    marginTop: vs(20),
                                }}
                                btnHeight={50}
                                textColor={'#fff'}
                                labelStyle={{
                                    fontWeight: 'bold'
                                }}
                                textSize={14}
                                onPress={() => navigation.navigate("Dashboard")}
                            />
                        </Container>
                    </Container>
                </Modal>
            </Container>
        </ScrollView>
    )
}

export default Verification;