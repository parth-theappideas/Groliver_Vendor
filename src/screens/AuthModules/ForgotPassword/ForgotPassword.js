import React from "react";
import { View, Text, Image, ScrollView, StatusBar } from 'react-native'
import { Fonts } from "../../../assets/fonts/fonts";
import Images from "../../../const/Images";
import { fs, hs, screenWidth, vs } from "../../../utils/stylesUtils";
import Btn from "../../../components/Btn";
import InputBox from "../../../components/InputBox";
import styles from "./Styles";
import Container from "../../../components/container";
import Label from "../../../components/Label";
import { Formik } from 'formik'
import * as yup from 'yup'

const ForgotPassword = ({ navigation }) => {

    const ForgotPasswordSchema = yup.object({
        email: yup.string()
            .required("Required *")
            .email("Email is invalid"),
    })
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <Container containerStyle={styles.container}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <Image
                    source={Images.vector}
                    style={styles.forgotpswimg}
                />

                <Label style={styles.text1}>Forgot your password</Label>

                <Container containerStyle={styles.container2}>
                    <Label style={styles.text2}>Enter your email address below and we will</Label>
                    <Label style={styles.text3}>send you a verification code</Label>
                </Container>

                <Formik
                    initialValues={{ email: '' }}
                    validationSchema={ForgotPasswordSchema}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
                        <>
                            <InputBox
                                placeholder="Email"
                                inputStyle={{
                                    maxWidth: '75%'
                                }}
                                containerStyle={{
                                    width: '92%',
                                    backgroundColor: '#fff',
                                    borderColor: '#F2F2F2',
                                    marginTop: vs(20)
                                }}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                inputHeight={50}
                                textSize={14}
                            />
                            {errors.email && <Label style={{
                                color: 'red',
                                alignSelf: 'flex-start',
                                marginLeft: hs(20)
                            }}>{errors.email}</Label>}

                            <Btn
                                title="Send"
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
                                onPress={() => navigation.navigate("ResetPassword")}
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
                    textSize={14}
                    labelStyle={{
                        fontWeight: 'bold'
                    }}
                />
            </Container>
        </ScrollView>
    )
}

export default ForgotPassword;