import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, Pressable } from 'react-native'
import Container from "../../../components/container";
import InputBox from '../../../components/InputBox'
import Label from "../../../components/Label";
import Images from "../../../const/Images";
import { fs, hs, vs } from "../../../utils/stylesUtils";
import styles from "./Styles";

const OrderManage = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={{
            paddingBottom: vs(10),
        }} style={{
            backgroundColor: 'white'
        }}>
            <Container containerStyle={styles.container}>
                <InputBox
                    placeholder="Search"
                    inputStyle={{
                        maxWidth: '75%'
                    }}
                    containerStyle={{
                        width: '95%',
                        backgroundColor: '#F2F2F2',
                        borderColor: '#F2F2F2',
                        elevation: 1,
                        marginTop: vs(10),
                        alignSelf: 'center'
                    }}
                    inputHeight={50}
                    textSize={14}
                    leftIcon={() => <Image source={Images.search_2} style={{
                        width: hs(20),
                        height: vs(20),
                        marginHorizontal: hs(10)
                    }} />}
                />

                <Container containerStyle={styles.rowContainer}>
                    <Container containerStyle={styles.container2}>
                        <Container onPress={() => navigation.navigate("OrdermanageDetail")}>
                            <Container containerStyle={styles.borderView}>
                                <Pressable onPress={() => navigation.navigate("OrdermanageDetail")}>
                                    <Image
                                        source={Images.order_manage}
                                        style={styles.orderManageimg}
                                    />
                                </Pressable>

                                <Container containerStyle={styles.textView}>
                                    <Label style={styles.text}>Order manage</Label>
                                </Container>
                            </Container>
                        </Container>
                    </Container>

                    <Container containerStyle={styles.container3}>
                        <Container onPress={() => navigation.navigate("Myproducts")}>
                            <Container containerStyle={styles.borderView2}>
                                <Pressable onPress={() => navigation.navigate("Myproducts")}>
                                    <Image
                                        source={Images.product}
                                        style={styles.myProductimg}
                                    />
                                </Pressable>

                                <Container containerStyle={styles.textView2}>
                                    <Label style={styles.text2}>My Products</Label>
                                </Container>
                            </Container>
                        </Container>
                    </Container>
                </Container>

                <Container containerStyle={styles.rowContainer2}>
                    <Container containerStyle={styles.container4}>
                        <Container onPress={() => navigation.navigate("Wallet")}>
                            <Container containerStyle={styles.borderView3}>
                                <Pressable onPress={() => navigation.navigate("Wallet")}>
                                    <Image
                                        source={Images.wallet}
                                        style={styles.walletimg}
                                    />
                                </Pressable>

                                <Container containerStyle={styles.textView3}>
                                    <Label style={styles.text3}>Wallet</Label>
                                </Container>
                            </Container>
                        </Container>
                    </Container>

                    <Container containerStyle={styles.container5}>
                        <Container onPress={() => navigation.navigate("Transactions")}>
                            <Container containerStyle={styles.borderView4}>
                                <Pressable onPress={() => navigation.navigate("Transactions")}>
                                    <Image
                                        source={Images.transaction}
                                        style={styles.transationsimg}
                                    />
                                </Pressable>

                                <Container containerStyle={styles.textView4}>
                                    <Label style={styles.text4}>Transactions</Label>
                                </Container>
                            </Container>
                        </Container>
                    </Container>
                </Container>

                <Container containerStyle={styles.rowContainer3}>
                    <Container containerStyle={styles.container6}>
                        <Container onPress={() => navigation.navigate("Profile")}>
                            <Container containerStyle={styles.borderView5}>
                                <Pressable onPress={() => navigation.navigate("Profile")}>
                                    <Image
                                        source={Images.profile_pic}
                                        style={styles.profileimg}
                                    />
                                </Pressable>

                                <Container containerStyle={styles.textView5}>
                                    <Label style={styles.text5}>My Profile</Label>
                                </Container>
                            </Container>
                        </Container>
                    </Container>

                    <Container containerStyle={styles.container7}>
                        <Container>
                            <Container containerStyle={styles.borderView6}>
                                <Pressable>
                                    <Image
                                        source={Images.logout}
                                        style={styles.logoutimg}
                                    />
                                </Pressable>

                                <Container containerStyle={styles.textview6}>
                                    <Label style={styles.text6}>Logout</Label>
                                </Container>
                            </Container>
                        </Container>
                    </Container>
                </Container>
            </Container>
        </ScrollView>
    )
}

export default OrderManage;