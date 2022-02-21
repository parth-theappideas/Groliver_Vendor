import React, { useRef, useState } from "react";
import { View, Text, Image, ScrollView, StyleSheet, Modal, Pressable, TouchableOpacity, Dimensions } from 'react-native'
import { Fonts } from "../../../assets/fonts/fonts";
import Btn from "../../../components/Btn";
import Images from "../../../const/Images";
import { fs, hs, vs } from "../../../utils/stylesUtils";
import { Modalize } from 'react-native-modalize'
import OrderDetailModal from "../../../modals/OrderdetailModal";
import styles from "./Styles";
import Container from "../../../components/container";
import Label from "../../../components/Label";

const OrderDetail = ({  }) => {
    const modalizeRef = useRef(null);

    const onClose = () => {
        modalizeRef.current?.close();
    };
    return (
        <ScrollView style={{
            backgroundColor: 'white'
        }} contentContainerStyle={{
            paddingBottom: vs(20)
        }}>
            <Container containerStyle={styles.container}>
                <Container containerStyle={styles.mainContainer}>
                    <Container containerStyle={styles.borderView}>
                        <Container containerStyle={styles.mainContainer}>
                            <Label style={styles.text}>John wade</Label>
                            
                            <Container containerStyle={styles.container2}>
                                <Label style={styles.text2}>Order ID :</Label>
                                <Label style={styles.text3}>ORD000087</Label>
                            </Container>

                            <Container containerStyle={styles.container3}>
                                <Label style={styles.text4}>Order Date :</Label>
                                <Label style={styles.text5}>6 Oct, 2021</Label>
                            </Container>

                            <Container containerStyle={styles.container4}>
                                <Container containerStyle={styles.container5}>
                                    <Label style={styles.text6}>Status :</Label>
                                    <Label style={styles.text7}>On the way</Label>
                                </Container>

                                <Btn
                                    title="Action"
                                    btnStyle={{
                                        backgroundColor: '#009345',
                                        borderRadius: 5,
                                        justifyContent: 'center',
                                        width: '32%',
                                        // elevation: 2,
                                    }}
                                    btnHeight={35}
                                    textColor={'white'}
                                    textSize={14}
                                    onPress={() => modalizeRef.current.open()}
                                />
                            </Container>
                        </Container>
                    </Container>

                    <Container containerStyle={styles.borderView2}>
                        <Container containerStyle={styles.container6}>
                            <Text style={styles.text8}>Shipping Address</Text>
                        </Container>

                        <Container containerStyle={styles.borderView3}/>

                        <Container containerStyle={styles.container7}>
                            <Image
                                source={Images.location}
                                style={styles.locationimg}
                            />
                            <Label style={styles.text9}>490 Lauren Drive, Madison, Wisconsin, United States</Label>
                        </Container>
                    </Container>

                    <Container containerStyle={styles.borderView4}>
                        <Container containerStyle={styles.container8}>
                            <Label style={styles.text10}>Items</Label>
                        </Container>

                        <Container containerStyle={styles.borderView3}/>

                        <Container containerStyle={styles.container9}>
                            <Label style={styles.text11}>1  Organic Bananas (12 piece)</Label>
                            <Label style={styles.text12}>$4.99</Label>
                        </Container>

                        <View style={styles.container10}>
                            <Text style={styles.text13}>2  Red Apple (1 kg)</Text>
                            <Text style={styles.text14}>$4.99</Text>
                        </View>
                    </Container>

                    <Container containerStyle={styles.borderView5}>
                        <Container containerStyle={styles.container11}>
                            <Text style={styles.text15}>Order summary</Text>
                        </Container>

                        <Container containerStyle={styles.borderView3}/>

                        <Container containerStyle={styles.container12}>
                            <Container containerStyle={styles.container13}>
                                <Label style={styles.text16}>Price</Label>
                                <Label style={styles.text17}>$4.99</Label>
                            </Container>

                            <Container containerStyle={styles.container14}>
                                <Label style={styles.text18}>Discount</Label>
                                <Label style={styles.text19}>$0.00</Label>
                            </Container>

                            <Container containerStyle={styles.container15}>
                                <Label style={styles.text20}>Delivery charges</Label>
                                <Label style={styles.text21}>$1.00</Label>
                            </Container>
                        </Container>

                        <Container containerStyle={styles.borderView3}/>

                        <Container containerStyle={styles.container16}>
                            <Label style={styles.text22}>Total Amount</Label>
                            <Label style={styles.text23}>$10.98</Label>
                        </Container>
                    </Container>

                    <Btn
                        title="Print"
                        btnStyle={{
                            backgroundColor: '#009345',
                            borderRadius: 5,
                            justifyContent: 'center',
                            width: '99%',
                            // elevation: 2,
                            alignSelf: 'center',
                            marginTop: vs(20),
                        }}
                        btnHeight={50}
                        textColor={'white'}
                        textSize={14}
                        // onPress={onOpen}
                        // onPress={() => modalizeRef.current.open()}
                    />
                </Container>
            </Container>

            <OrderDetailModal
                modalizeRef={modalizeRef}
                onClose={onClose}
            />
        </ScrollView>
    )
}

export default OrderDetail;

