import React, { useRef } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import Images from "../../../const/Images";
import { fs, hs, vs } from "../../../utils/stylesUtils";
import Btn from '../../../components/Btn'
import Addnewaccount from "../../../modals/Addnewaccount";
import Withdraw from "../../../modals/Withdraw";
import Selectaccount from "../../../modals/Selectaccount";
import Success from "../../../modals/Success";
import Container from "../../../components/container";
import Label from "../../../components/Label";
import styles from "./Styles";

const Wallet = ({ }) => {
    const AddaccountRef = useRef(null);
    const WithdrawRef = useRef(null);
    const SelectaccountRef = useRef(null);


    const onClose = () => {
        AddaccountRef.current?.close();
        WithdrawRef.current?.close();
        SelectaccountRef.current?.close();
    };

    return (
        <Container containerStyle={styles.container}>
            <Container containerStyle={styles.container2}>
                <Container containerStyle={styles.container3}>
                    <Label style={styles.label}>Total Balance</Label>
                </Container>

                <Container containerStyle={styles.container4}>
                    <Image
                        source={Images.coin}
                        style={styles.coinimg}
                    />
                    <Label style={styles.label2}>2643</Label>
                </Container>

                <Btn
                    title="Withdraw"
                    btnStyle={{
                        backgroundColor: '#FF7900',
                        borderRadius: 5,
                        justifyContent: 'center',
                        width: '40%',
                        // elevation: 2,
                        alignSelf: 'center',
                        marginTop: vs(20),
                    }}
                    btnHeight={40}
                    textColor={'white'}
                    textSize={16}
                    onPress={() => WithdrawRef.current.open()}
                />
            </Container>

            <Container containerStyle={styles.container5}>
                <Label style={styles.label3}>My Bank Accounts</Label>

                <Btn
                    title="Add new Account"
                    btnStyle={{
                        backgroundColor: '#009345',
                        borderRadius: 5,
                        justifyContent: 'center',
                        width: '40%',
                        // elevation: 2,
                        alignSelf: 'center',
                    }}
                    btnHeight={35}
                    textColor={'white'}
                    textSize={14}
                    onPress={() => AddaccountRef.current.open()}
                />
            </Container>

            <Container containerStyle={styles.container6}>
                <Container containerStyle={styles.container7}>
                    <Label style={styles.label4}>David John</Label>
                    <Container containerStyle={styles.container8}>
                        <TouchableOpacity>
                            <Image
                                source={Images.edit2}
                                style={styles.editimg}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image
                                source={Images.del3}
                                style={styles.delimg}
                            />
                        </TouchableOpacity>
                    </Container>
                </Container>

                <Container containerStyle={styles.container9}>
                    <Container onPress={() => SelectaccountRef.current.open()}>
                        <Label style={styles.label5} >**** **** **** 1245</Label>
                        <Label style={styles.label6}>12/2025</Label>
                    </Container>
                </Container>
            </Container>

            <Container containerStyle={styles.container6}>
                <Container containerStyle={styles.container7}>
                    <Label style={styles.label4}>David John</Label>
                    <Container containerStyle={styles.container8}>
                        <TouchableOpacity>
                            <Image
                                source={Images.edit2}
                                style={styles.editimg}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image
                                source={Images.del3}
                                style={styles.delimg}
                            />
                        </TouchableOpacity>
                    </Container>
                </Container>

                <Container containerStyle={styles.container9}>
                    <Label style={styles.label5} onPress={() => SelectaccountRef.current.open()}>**** **** **** 2465</Label>
                    <Label style={styles.label6}>12/2028</Label>
                </Container>
            </Container>
            <Withdraw
                WithdrawRef={WithdrawRef}
                onClose={onClose}
            />

            <Addnewaccount
                AddaccountRef={AddaccountRef}
                onClose={onClose}
            />

            <Selectaccount
                SelectaccountRef={SelectaccountRef}
                onClose={onClose}
            />
        </Container>
    )
}

export default Wallet;