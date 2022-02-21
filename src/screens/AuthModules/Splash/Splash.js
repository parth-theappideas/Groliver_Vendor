import React, { useEffect } from "react";
import {View,Text,Image,StatusBar} from 'react-native'
import {useNavigation} from '@react-navigation/core'
import { styles } from "./Styles";
import Images from "../../../const/Images";
import Container from "../../../components/container";

const Splash = () => {
    const navigation = useNavigation();

    const getUserData = () => {
        setTimeout(()=>{
            navigation.navigate('MyPager')
        },1000)
    }

    useEffect(()=>{
        getUserData();
    },[])

    return(
        <Container containerStyle={styles.container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Image
                source={Images.splash}
                style={styles.splashImage}
            />
        </Container>
    )
}

export default Splash;