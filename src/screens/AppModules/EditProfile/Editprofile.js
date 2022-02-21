import React, { useState } from "react";
import { View, Text, Image, ScrollView } from 'react-native'
import Images from "../../../const/Images";
import { fs, hs, vs } from "../../../utils/stylesUtils";
import InputBox from "../../../components/InputBox";
import Btn from "../../../components/Btn";
import { Fonts } from "../../../assets/fonts/fonts";
import { Picker } from '@react-native-picker/picker'
import Container from "../../../components/container";
import styles from "./Styles";
import Label from "../../../components/Label";
import { Formik } from 'formik'
import * as yup from 'yup'

const Editprofile = () => {
    const [pickerValue, setPickerValue] = useState("+91 (India)");

    const EditprofileSchema = yup.object({
        name: yup.string()
            .required("Required *"),
        email: yup.string()
            .required("Required")
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
                <Container containerStyle={styles.container2}>
                    <Image
                        source={Images.profile}
                        style={styles.profileimg}
                    />

                    <Image
                        source={Images.change}
                        style={styles.changeimg}
                    />
                </Container>

                <Formik 
                    initialValues={{name:'' , email:'' , phoneNo:''}}
                    validationSchema={EditprofileSchema}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
                        <>
                            <Container containerStyle={styles.container3}>
                                <Label style={styles.label}>Company name</Label>

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

                                <Label style={styles.label}>Enter email address</Label>

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

                                <Label style={styles.label}>Country</Label>

                                <Container containerStyle={styles.container4}>
                                    <Picker
                                        style={{
                                            width: "99%",
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

                                <Label style={styles.label}>Mobile number</Label>

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
                                    alignSelf: 'center',
                                    marginTop: vs(20),
                                }}
                                btnHeight={50}
                                textColor={'white'}
                                textSize={14}
                            />
                        </>
                    )}
                </Formik>
            </Container>
        </ScrollView>
    )
}

export default Editprofile;