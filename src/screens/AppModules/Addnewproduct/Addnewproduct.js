import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Fonts } from "../../../assets/fonts/fonts";
import Images from "../../../const/Images";
import { fs, hs, screenWidth, vs } from "../../../utils/stylesUtils";
import InputBox from "../../../components/InputBox";
import {Picker} from '@react-native-picker/picker'
import Btn from "../../../components/Btn";
import Container from "../../../components/container";
import Label from "../../../components/Label";
import styles from "./Styles";

const Addnewproduct = ({ }) => {
    const [categoryValue, setCategoryValue] = useState("Select");
    const [weightValue, setWeightValue] = useState("12 Piece");

    return (
        <ScrollView style={{
            backgroundColor: 'white'
        }} contentContainerStyle={{
            paddingBottom: vs(50)
        }}>
            <Container containerStyle={styles.container}>
                <Container containerStyle={styles.container2}>
                    <Container containerStyle={styles.container3}>
                        <Image
                            source={Images.plus}
                            style={styles.plusimg}
                        />
                    </Container>

                    <Container containerStyle={styles.container31}>
                        <Image
                            source={Images.plus}
                            style={styles.plusimg}
                        />
                    </Container>

                    <Container containerStyle={styles.container32}>
                        <Image
                            source={Images.plus}
                            style={styles.plusimg}
                        />
                    </Container>
                </Container>

                <Container containerStyle={styles.container4}>
                    <Label style={styles.label}>Category</Label>
                    <Container containerStyle={styles.container5}>
                        <Picker
                            style={{
                                width: "99%",
                                height: vs(50),
                            }}
                            selectedValue={categoryValue}
                            onValueChange={(itemValue) => setCategoryValue(itemValue)}
                        >
                            <Picker.Item label="Fruits" style={{
                                fontSize:fs(14)
                            }} value="key0"/>
                            <Picker.Item label="Drinks" style={{
                                fontSize: fs(14)
                            }}  value="key1"/>
                            <Picker.Item label="Vegetables" style={{
                                fontSize: fs(14)
                            }}  value="key2"/>
                        </Picker>
                    </Container>
                </Container>

                <Container containerStyle={styles.container4}>
                    <Label style={styles.label}>Title</Label>

                    <InputBox
                        placeholder="Select"
                        inputStyle={{
                            maxWidth: '75%'
                        }}
                        containerStyle={{
                            width: '99%',
                            backgroundColor: '#fff',
                            borderColor: '#Fff',
                            // elevation: 1,
                            borderColor: '#F2f2f2',
                            marginTop: vs(10),
                            alignSelf: 'center'
                        }}
                        inputHeight={50}
                        textSize={14}
                    />
                </Container>

                <Container containerStyle={styles.container4}>
                    <Label style={styles.label}>Description</Label>

                    <InputBox
                        placeholder="Type here..."
                        inputStyle={{
                            maxWidth: '75%'
                        }}
                        containerStyle={{
                            width: '99%',
                            backgroundColor: '#fff',
                            borderColor: '#F2f2f2',
                            // elevation: 1,
                            marginTop: vs(10),
                            alignSelf: 'center'
                        }}
                        inputHeight={80}
                        textSize={14}
                    />
                </Container>

                <Container containerStyle={styles.container6}>
                    <Label style={styles.label2}>Price</Label>
                    <Label style={styles.label3}>Weight</Label>
                </Container>

                <Container containerStyle={styles.container7}>
                    <InputBox
                        placeholder="$ XX"
                        inputStyle={{
                            maxWidth: '75%'
                        }}
                        containerStyle={{
                            width: '45%',
                            // width:screenWidth * 0.40,
                            backgroundColor: '#fff',
                            borderColor: '#F2f2f2',
                            marginTop: vs(10),
                            // position: 'absolute',
                            // left: 0
                        }}
                        inputHeight={50}
                        textSize={14}
                    />

                    <Container containerStyle={styles.container8}>
                        <Picker
                            style={{
                                // width: hs(170),
                                width:screenWidth * 0.45,
                                height: vs(40),
                            }}
                            selectedValue={weightValue}
                            onValueChange={(itemValue) => setWeightValue(itemValue)}
                        >
                            <Picker.Item label="12 Piece" style={{
                                fontSize:fs(14)
                            }} value="key0"/>
                            <Picker.Item label="22 Piece" style={{
                                fontSize: fs(14)
                            }}  value="key1"/>
                            <Picker.Item label="32 Piece" style={{
                                fontSize: fs(14)
                            }} value="key2"/>
                        </Picker>
                    </Container>

                </Container>

                <Btn
                    title="Add"
                    btnStyle={{
                        backgroundColor: '#009345',
                        borderRadius: 5,
                        justifyContent: 'center',
                        width: '100%',
                        alignSelf: 'center',
                        marginTop: vs(20),
                    }}
                    btnHeight={50}
                    textColor={'white'}
                    textSize={14}
                />
            </Container>
        </ScrollView>
    )
}

export default Addnewproduct;