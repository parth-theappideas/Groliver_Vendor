import React from "react";
import { View, Text, Image, ScrollView, StatusBar } from 'react-native'
import { Fonts } from "../../../assets/fonts/fonts";
import Images from "../../../const/Images";
import { fs, hs, screenWidth, vs } from "../../../utils/stylesUtils";
import InputBox from "../../../components/InputBox";
import Btn from "../../../components/Btn";
import styles from "./Styles";
import Container from "../../../components/container";
import { Formik } from 'formik'
import * as yup from 'yup'
import Label from "../../../components/Label";

const ResetPassword = ({ navigation }) => {
    const ResetPasswordSchema = yup.object({
        Newpassword: yup.string()
            .required("Required *")
            .min(6, 'Password must be at least 6 characters'),
        Confirmpassword: yup.string()
            .required("Required *")
            .min(6, 'Password must be at least 6 characters')
            .oneOf([yup.ref('password'), null], 'Passwords must match')
    })
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>       
            <Container containerStyle={styles.container}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <Image
                    source={Images.reset}
                    style={styles.resetpswimg}
                />

                <Text style={styles.text1}>Reset your password</Text>

                <Formik 
                    initialValues={{ Newpassword:'', Confirmpassword:'' }}
                    validationSchema={ResetPasswordSchema}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
                        <>
                            <InputBox
                                placeholder="New password"
                                inputStyle={{
                                    maxWidth: '75%'
                                }}
                                containerStyle={{
                                    width: '92%',
                                    backgroundColor: '#fff',
                                    borderColor: '#F2F2F2',
                                    marginTop: vs(20)
                                }}
                                onChangeText={handleChange('Newpassword')}
                                onBlur={handleBlur('Newpassword')}
                                value={values.Newpassword}
                                inputHeight={50}
                                textSize={14}
                            />
                            {errors.Newpassword && <Label style={{
                                color:'red',
                                alignSelf:'flex-start',
                                marginLeft:hs(20)
                            }}>{errors.Newpassword}</Label>}

                            <InputBox
                                placeholder="Confirm password"
                                inputStyle={{
                                    maxWidth: '75%'
                                }}
                                containerStyle={{
                                    width: '92%',
                                    backgroundColor: '#fff',
                                    borderColor: '#F2F2F2',
                                    marginTop: vs(10)
                                }}
                                inputHeight={50}
                                textSize={14}
                            />
                            {errors.Confirmpassword && <Label style={{
                                color:'red',
                                alignSelf: 'flex-start',
                                marginLeft: hs(20)
                            }}>{errors.Confirmpassword}</Label>}

                            <Btn
                                title="Reset"
                                btnStyle={{
                                    backgroundColor: '#009345',
                                    borderRadius: 5,
                                    justifyContent: 'center',
                                    width: '92%',
                                    alignSelf: 'center',
                                    marginTop: vs(20),
                                }}
                                btnHeight={50}
                                textColor={'white'}
                                textSize={14}
                                onPress={() => navigation.navigate("Verification")}
                            />
                        </>
                    )}
                </Formik>

                <Btn
                    title="Back to login"
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
        </ScrollView>
    )
}

export default ResetPassword;