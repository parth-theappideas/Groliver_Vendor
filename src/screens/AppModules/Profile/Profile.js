import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Fonts } from "../../../assets/fonts/fonts";
import Container from "../../../components/container";
import Label from "../../../components/Label";
import Images from "../../../const/Images";
import { fs, hs, vs } from "../../../utils/stylesUtils";
import styles from "./Styles";

const Profile = ({ navigation }) => {
    return (
        <Container containerStyle={styles.container}>
            <Container containerStyle={styles.mainContainer}>
                <Image
                    source={Images.profile}
                    style={styles.profileimg}
                />
                <Container>
                    <Container containerStyle={styles.container2}>
                        <Label style={styles.text}>SuperComNet</Label>
                        <TouchableOpacity onPress={() => navigation.navigate("Editprofile")}>
                            <Image
                                source={Images.edit}
                                style={styles.editimg}
                            />
                        </TouchableOpacity>
                    </Container>

                    <Container containerStyle={styles.container3}>
                        <Label style={styles.text2}>supercomnet@mail.com</Label>
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
                <Container>
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
        </Container>
    )
}

export default Profile;