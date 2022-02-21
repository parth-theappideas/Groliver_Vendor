import React, { useState } from "react";
import { View, Text, Image, StatusBar, ScrollView } from 'react-native'
import { Fonts } from "../../../assets/fonts/fonts";
import Images from "../../../const/Images";
import { fs, hs, screenWidth, vs } from "../../../utils/stylesUtils";
import InputBox from "../../../components/InputBox";
import Btn from "../../../components/Btn";
import styles from "./Styles";
import { Picker } from '@react-native-picker/picker'
import Container from "../../../components/container";
import Label from "../../../components/Label";
import { Formik } from 'formik'
import * as yup from 'yup'

const Signup = ({ navigation }) => {
    const [pickerValue, setPickerValue] = useState("+91 (India)");

    const SignupSchema = yup.object({
        name: yup.string()
            .required("Required *"),
        email: yup.string()
            .required("Required *")
            .email("Email is invalid"),
        phoneNo: yup.string()
            .required("Required *")
            .min(10, 'Must be 10 digit')
            .max(10, 'Must be 10 digit or less')
    })

    return (
        <ScrollView style={{ backgroundColor: 'white' }} contentContainerStyle={{
            paddingBottom: vs(50)
        }}>
            <Container containerStyle={styles.container}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <Container>
                    <Image
                        source={Images.placeholder}
                        style={styles.img1}
                    />
                    <Image
                        source={Images.change}
                        style={styles.img2}
                    />
                </Container>

                <Formik
                    initialValues={{name:'', email:'', phoneNo:''}}
                    validationSchema={SignupSchema}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
                        <>
                            <Container containerStyle={styles.container2}>
                                <Label style={styles.text1}>Company name</Label>

                                <InputBox
                                    placeholder="Type here..."
                                    inputStyle={{
                                        maxWidth: '99%'
                                    }}
                                    containerStyle={{
                                        width: '110%',
                                        backgroundColor: '#fff',
                                        borderColor: '#F2F2F2',
                                        marginTop: vs(10)
                                    }}
                                    onChangeText={handleChange('name')}
                                    onBlur={handleBlur('name')}
                                    value={values.name}
                                    inputHeight={50}
                                    textSize={14}
                                />
                                {errors.name && <Label style={{
                                    color:'red'
                                }}>{errors.name}</Label>}

                                <Label style={styles.text2}>Enter email address</Label>

                                <InputBox
                                    placeholder="Type here..."
                                    inputStyle={{
                                        maxWidth: '99%'
                                    }}
                                    containerStyle={{
                                        width: '110%',
                                        backgroundColor: '#fff',
                                        borderColor: '#F2F2F2',
                                        marginTop: vs(10)
                                    }}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    inputHeight={50}
                                    textSize={14}
                                />
                                {errors.email && <Label style={{
                                    color:'red'
                                }}>{errors.email}</Label>}

                                <Label style={styles.text3}>Country</Label>

                                <Container containerStyle={{
                                    borderWidth: 1,
                                    marginTop: vs(10),
                                    borderRadius: 5,
                                    borderColor: '#f2f2f2',
                                }}>
                                    <Picker
                                        style={{
                                            width:"99%",
                                            height: vs(45),
                                        }}
                                        selectedValue={pickerValue}
                                        onValueChange={(itemValue) => setPickerValue(itemValue)}
                                    >
                                        <Picker.Item label="+1 (United states)" style={{
                                            fontSize: fs(14)
                                        }} value="key0"/>
                                        <Picker.Item label="+91 (India)" style={{
                                            fontSize: fs(14)
                                        }} value="key1"/>
                                    </Picker>
                                </Container>

                                <Label style={styles.text4}>Mobile number</Label>

                                <InputBox
                                    placeholder="Type here..."
                                    inputStyle={{
                                        maxWidth: '99%'
                                    }}
                                    containerStyle={{
                                        width: '110%',
                                        backgroundColor: '#fff',
                                        borderColor: '#F2F2F2',
                                        marginTop: vs(10)
                                    }}
                                    onChangeText={handleChange('phoneNo')}
                                    onBlur={handleBlur('phoneNo')}
                                    value={values.phoneNo}
                                    inputHeight={50}
                                    textSize={14}
                                />
                                {errors.phoneNo && <Label style={{
                                    color:'red'
                                }}>{errors.phoneNo}</Label>}
                            </Container>

                            <Btn
                                title="Continue"
                                btnStyle={{
                                    backgroundColor: '#009345',
                                    borderRadius: 5,
                                    justifyContent: 'center',
                                    width: '89%',
                                    // elevation: 2,
                                    alignSelf: 'center',
                                    marginTop: vs(20),
                                }}
                                btnHeight={50}
                                textColor={'white'}
                                textSize={14}
                                // onPress={console.log()}
                                onPress={()=> navigation.navigate("Verification")}
                            />
                        </>
                    )}
                </Formik>

                <Container containerStyle={styles.container3}>
                    <Container containerStyle={styles.container4}>
                        <Label style={styles.text5}>By continuing, you agree to our</Label>
                        <Label style={styles.text6} onPress={() => navigation.navigate("Terms")}>Terms and Conditions</Label>
                    </Container>

                    <Container containerStyle={styles.container5}>
                        <Label style={styles.text7}>and</Label>
                        <Label style={styles.text8} onPress={() => navigation.navigate("Privacy")}>Privacy Policy</Label>
                    </Container>
                </Container>
            </Container>
        </ScrollView>
    )
}

export default Signup;