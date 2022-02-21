import React, { useState } from "react";
import { View, Text, Image, ScrollView } from 'react-native'
import { Fonts } from "../../../assets/fonts/fonts";
import Images from "../../../const/Images";
import { fs, hs, screenWidth, vs } from "../../../utils/stylesUtils";
import InputBox from "../../../components/InputBox";
import {Picker} from '@react-native-picker/picker'
import Btn from "../../../components/Btn";
import Container from "../../../components/container";
import Label from "../../../components/Label";
import styles from "./Styles";

const EditProduct = ({ }) => {
    const [categoryValue, setCategoryValue] = useState("Select");
    const [weightValue, setWeightValue] = useState("Select");

    return (
        <ScrollView style={{
            backgroundColor: 'white'
        }} contentContainerStyle={{
            paddingBottom: vs(50)
        }}>
            <Container containerStyle={styles.container}>
                <Container containerStyle={styles.container2}>
                    <Container containerStyle={styles.container3}>
                        <Container containerStyle={styles.container4}>
                            <Image
                                source={Images.item1}
                                style={styles.item1}
                            />

                            <Image
                                source={Images.del2}
                                style={styles.delimg}
                            />
                        </Container>

                        <Container containerStyle={styles.container5}>
                            <Image
                                source={Images.item}
                                style={styles.item1}
                            />

                            <Image
                                source={Images.del2}
                                style={styles.delimg}
                            />
                        </Container>

                        <Container containerStyle={styles.container11}>
                            <Image
                                source={Images.plus}
                                style={{
                                    width: hs(20),
                                    height: hs(20),
                                    resizeMode: 'contain',
                                }}
                            />
                        </Container>
                    </Container>

                    <Container containerStyle={styles.container6}>
                        <Label style={styles.label}>Category</Label>

                        <Container containerStyle={styles.container7}>
                            <Picker
                                style={{
                                    width: "99%",
                                    height: vs(45),
                                }}
                                selectedValue={categoryValue}
                                onValueChange={(itemValue) => setCategoryValue(itemValue)}
                            >
                                <Picker.Item label="Fruits" style={{
                                    fontSize: fs(14)
                                }} value="key0"/>
                                <Picker.Item label="Drinks" style={{
                                    fontSize: fs(14)
                                }} value="key1"/>
                                <Picker.Item label="Vegetables" style={{
                                    fontSize: fs(14),
                                }} value="key2"/>
                            </Picker>
                        </Container>
                    </Container>

                    <Container containerStyle={styles.container6}>
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

                    <Container containerStyle={styles.container6}>
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
                                marginTop: vs(10),
                                alignSelf: 'center'
                            }}
                            inputHeight={80}
                            textSize={14}
                        />
                    </Container>

                    <Container containerStyle={styles.container8}>
                        <Label style={styles.label2}>Price</Label>
                        <Label style={styles.label3}>Weight</Label>
                    </Container>

                    <Container containerStyle={styles.container9}>
                        <InputBox
                            placeholder="$ XX"
                            inputStyle={{
                                maxWidth: '75%'
                            }}
                            containerStyle={{
                                width: '45%',
                                backgroundColor: '#fff',
                                borderColor: '#F2f2f2',
                                marginTop: vs(10),
                                // position: 'absolute',
                                // left: 0
                            }}
                            inputHeight={50}
                            textSize={14}
                        />

                        <Container containerStyle={styles.container10}>
                            <Picker
                                style={{
                                    width: screenWidth * 0.45,
                                    height: vs(40),
                                }}
                                selectedValue={weightValue}
                                onValueChange={(itemValues) => setWeightValue(itemValues)}
                            >
                                <Picker.Item label="12 Piece"  style={{
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
                        title="Save"
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
            </Container>
        </ScrollView>
    )
}

export default EditProduct;