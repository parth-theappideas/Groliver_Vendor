import React from "react";
import { View, Text, Image, ScrollView, StatusBar } from 'react-native'
import { Fonts } from "../../../assets/fonts/fonts";
import Images from "../../../const/Images";
import InputBox from "../../../components/InputBox";
import Btn from "../../../components/Btn";
import { fs, hs, vs } from "../../../utils/stylesUtils";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./Styles";
import Container from "../../../components/container";
import Label from "../../../components/Label";
import { Formik } from 'formik'
import * as yup from 'yup'

const Signin = ({ navigation }) => {
    const SigninSchema = yup.object({
        email: yup.string()
            .required("Required *")
            .email("Email is invalid"),
        password: yup.string()
            .required("Required *")
            .min(6, "Password must be at least 6 characters")
            .oneOf([yup.ref('password'), null, "password must match"])
    })
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <Container containerStyle={styles.container}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <Image
                    source={Images.logo}
                    style={styles.logo}
                />
                <Label style={styles.text1}>Sign In to Your Vendor Account</Label>

                <Formik
                    initialValues={{email:'' , password:''}}
                    validationSchema={SigninSchema}
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
                                    marginTop: vs(20),
                                }}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                inputHeight={50}
                                textSize={14}
                            />
                            {errors.email && <Label style={{
                                color:'red',
                                alignSelf:'flex-start',
                                marginLeft:hs(20)
                            }}>{errors.email}</Label>}

                            <InputBox
                                placeholder="Password"
                                inputStyle={{
                                    maxWidth: '75%'
                                }}
                                containerStyle={{
                                    width: '92%',
                                    backgroundColor: '#fff',
                                    borderColor: '#F2F2F2',
                                    marginTop: vs(10)
                                }}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                inputHeight={50}
                                textSize={14}
                            />
                            {errors.password && <Label style={{
                                color:'red',
                                alignSelf: 'flex-start',
                                marginLeft: hs(20)
                            }}>{errors.password}</Label>}

                            <Btn
                                title="Sign in"
                                btnStyle={{
                                    backgroundColor: '#009345',
                                    borderRadius: 5,
                                    justifyContent: 'center',
                                    width: '92%',
                                    // elevation: 2,
                                    alignSelf: 'center',
                                    marginTop: vs(20),
                                }}
                                btnHeight={50}
                                textColor={'white'}
                                textSize={14}
                                onPress={() => navigation.navigate("Dashboard")}
                                // onPress={()=> console.log(handleSubmit)}
                            />
                        </>
                    )}
                </Formik>

                <Container containerStyle={styles.container2}>
                    <Label style={styles.text2} onPress={() => navigation.navigate("ForgotPassword")}>Forgot Password?</Label>
                </Container>


                <Container containerStyle={styles.container3}>
                    <Label style={styles.text3}>Don't have an account?</Label>
                    <Label style={styles.text4} onPress={() => navigation.navigate("Signup")}>Sign up</Label>
                </Container>

                <Container containerStyle={styles.container4}>
                    <Container containerStyle={styles.container5}>
                        <TouchableOpacity>
                            <Image
                                source={Images.google}
                                style={styles.googleimg}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image
                                source={Images.fb}
                                style={styles.fbimg}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image
                                source={Images.twitter}
                                style={styles.twitterimg}
                            />
                        </TouchableOpacity>
                    </Container>
                </Container>
            </Container>
        </ScrollView>
    )
}

export default Signin;