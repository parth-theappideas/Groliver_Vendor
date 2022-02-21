import React from "react";
import { View, Text, Image } from 'react-native'
import { Fonts } from "../../../assets/fonts/fonts";
import Images from "../../../const/Images";
import { fs, hs, vs } from "../../../utils/stylesUtils";
import Container from "../../container";
import Label from "../../Label";
import styles from "./Styles";

const Productdetailitems = ({ item }) => {
    return (
        <Container containerStyle={styles.container}>
            <Label style={styles.label}>{item.title}</Label>
            <Container>
                <Label>{item.name}</Label>
                <Label>{item.name}</Label>
            </Container>
        </Container>
    )
}

export default Productdetailitems;