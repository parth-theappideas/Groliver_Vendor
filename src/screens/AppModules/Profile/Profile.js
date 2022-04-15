import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Pressable, ToastAndroid, ActivityIndicator, TextInput } from 'react-native'
import { Fonts } from "../../../assets/fonts/fonts";
import Container from "../../../components/container";
import Label from "../../../components/Label";
import Images from "../../../const/Images";
import { fs, hs, screenWidth, vs } from "../../../utils/stylesUtils";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./Styles";
import LoadingIndicator from "../../../components/LoadingIndicator";

const Profile = ({ navigation }) => {

    const [Loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [data, setData] = useState("");

    const Logout = async () => {
        setLoading(true);
        try {
            const Data = await AsyncStorage.removeItem('@store1:User');
            if (Data) {
                navigation.replace("Signin");
                ToastAndroid.show("Logout Successfully", ToastAndroid.SHORT);
            } else {
                console.log("Unsuccessfull Delete", Data);
            }
            console.log("Successfully Delete", Data);
        }
        catch (e) {
            console.log("error", e);
        }
        navigation.reset({
            index: 0,
            routes: [{ name: 'Signin' }]
        })
        setLoading(false);
    }

    useEffect(() => {
        ProfileHandler();
    }, [])

    const ProfileHandler = async () => {
        let response = await fetch('https://chessmafia.com/php/Groliver/api/vendor/get-profile', {
            method: 'GET',
        })
        response = await response.json();
        console.log("responses", response);

        if (response.status == 'Success') {
            console.log("responses", response);
            const NameAccess = response.data[0].name
            setName(NameAccess);
            const EmailAccess = response.data[0].email
            setEmail(EmailAccess);
            const MobileNumAccess = response.data[0].mobileNo
            setMobileNo(MobileNumAccess);
        } else {
            alert(response.message);
        }
    }

    useEffect(() => {
        readData();
    }, [])

    const readData = async () => {
        AsyncStorage.getItem('@store1:User').then((value) => {
            const getData = JSON.parse(value);
            setData(getData.data);
        })
    }

    return (
        <Container containerStyle={styles.container}>
            <Container containerStyle={styles.mainContainer}>
                <Image
                    source={Images.profile}
                    style={styles.profileimg}
                />
                <Container>
                    <Container containerStyle={styles.container2}>
                        <Label style={styles.text}>{name}</Label>
                        <Pressable onPress={() => navigation.navigate("Editprofile", {
                            nameData: name,
                            emailData: email,
                            mobileNoData: mobileNo,
                        })}>
                            <Image
                                source={Images.edit}
                                style={styles.editimg}
                            />
                        </Pressable>
                    </Container>

                    <Container containerStyle={styles.container3}>
                        <Label style={styles.text2}>{email}</Label>
                    </Container>
                </Container>
            </Container>

            <Container containerStyle={styles.container4}>
                <Container onPress={() => navigation.navigate("Notification")}>
                    <Container containerStyle={styles.container5}>
                        <Container containerStyle={styles.container6}>
                            <Image
                                source={Images.notification}
                                style={styles.notificationimg}
                            />
                            <Label style={styles.text3} onPress={() => navigation.navigate("Notification")}>Notification</Label>
                        </Container>

                        <Image
                            source={Images.right}
                            style={styles.rightimg}
                        />
                    </Container>
                </Container>
            </Container>

            <Container containerStyle={styles.borderView} />

            <Container containerStyle={styles.container7}>
                <Container onPress={() => navigation.navigate("Help")}>
                    <Container containerStyle={styles.container8}>
                        <Container containerStyle={styles.container9}>
                            <Image
                                source={Images.help}
                                style={styles.helpimg}
                            />
                            <Label style={styles.text4} onPress={() => navigation.navigate("Help")}>Help</Label>
                        </Container>

                        <Image
                            source={Images.right}
                            style={styles.rightimg}
                        />
                    </Container>
                </Container>
            </Container>

            <Container containerStyle={styles.borderView} />

            <Container containerStyle={styles.container10}>
                <Container onPress={() => Logout()}>
                    <Container containerStyle={styles.container11}>
                        <Container containerStyle={styles.container12}>
                            <Image
                                source={Images.logout_pic}
                                style={styles.logoutimg}
                            />
                            <Label style={styles.text5}>Logout</Label>
                        </Container>

                        <Image
                            source={Images.right}
                            style={styles.rightimg}
                        />
                    </Container>
                </Container>
            </Container>
            {Loading ?
                <View style={styles.LoadingIndicator}>
                    <LoadingIndicator />
                </View>
                : null}
        </Container>
    )
}

export default Profile;