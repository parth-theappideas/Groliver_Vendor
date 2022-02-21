import React from "react";
import { View, Text, ScrollView, Image, FlatList } from 'react-native'
import { Fonts } from "../../../assets/fonts/fonts";
import Productdetailitems from "../../../components/Flatlistitems/ProductDetailitems/Productdetailitems";
import Images from "../../../const/Images";
import { fs, hs, vs } from "../../../utils/stylesUtils";
import Btn from "../../../components/Btn";
import Container from "../../../components/container";
import Label from "../../../components/Label";
import styles from "./Styles";

const ProductDetail = ({ navigation }) => {

    const ProductData = [
        {
            id: 1,
            image: require('../../../assets/images/item1.png'),
            image2: require('../../../assets/images/item.png'),
        },
        {
            id: 2,
            title: 'Organic Bananas',
        },
        {
            id: 3,
            name: 'Category name :',
            categoryName: 'Fruit'
        },
        {
            id: 4,
            name2: 'Weight',
            weight: '12 piece'
        },
        {
            id: 5,
            name3: 'Offer discount',
            discount: '5%',
            image3: require('../../../assets/images/change.png'),
            image4: require('../../../assets/images/delete.png')
        },
        {
            id: 6,
            heading: 'Product description',
            text1: 'Lorem Ipsum is simply dummy text of the printing and',
            text2: 'typesetttig industry. Lorem Ipsum has been the',
            text3: 'industrys standard dummy text'
        }
    ];

    const renderProductdetail = ({ item }) => {
        return (
            <Productdetailitems
                item={item}
            />
        )
    }

    return (
        <ScrollView style={{
            backgroundColor:'white'
        }} contentContainerStyle={{
            paddingBottom:vs(50)
        }}>
            <Container containerStyle={styles.container}>
                <Container containerStyle={styles.container2}>
                    <Container containerStyle={styles.container3}>
                        <Container containerStyle={styles.container4}>
                            <Image
                                source={Images.item1}
                                style={styles.itemimg}
                            />
                        </Container>

                        <Container containerStyle={styles.container5}>
                            <Image
                                source={Images.item}
                                style={styles.itemimg}
                            />
                        </Container>
                    </Container>

                    <Container containerStyle={styles.container6}>
                        <Label style={styles.label}>Organic Bananas</Label>
                    </Container>

                    <Container containerStyle={styles.container7}>
                        <Label style={styles.label2}>Category name :</Label>
                        <Label style={styles.label3}>Fruit</Label>
                    </Container>

                    <Container containerStyle={styles.container8}>
                        <Label style={styles.label2}>Weight :</Label>
                        <Label style={styles.label3}>12 piece</Label>
                    </Container>

                    <Container containerStyle={styles.container8}>
                        <Label style={styles.label2}>Offer discount :</Label>
                        <Label style={styles.label3}>5 %</Label>

                        <Container containerStyle={styles.container9}>
                            <Image
                                source={Images.edit}
                                style={styles.editimg}
                            />
                            <Image
                                source={Images.del}
                                style={styles.delimg}
                            />
                        </Container>
                    </Container>

                    <Container containerStyle={styles.container10}>
                        <Label style={styles.label4}>Product description</Label>
                        <Label style={styles.label5}>Lorem Ipsum is simply dummy text of the printing and typesetttig industry. Lorem Ipsum has been the industrys standard dummy text</Label>
                        <Label style={styles.label5}>Lorem Ipsum is simply dummy text of the printing and typesetttig industry. Lorem Ipsum has been the industrys standard dummy text</Label>
                        <Label style={styles.label5}>Lorem Ipsum is simply dummy text of the printing and typesetttig industry. Lorem Ipsum has been the industrys standard dummy text</Label>
                        <Label style={styles.label5}>Lorem Ipsum is simply dummy text of the printing and typesetttig industry. Lorem Ipsum has been the industrys standard dummy text</Label>
                    </Container>

                    <Container containerStyle={styles.container11}>
                        <Btn
                            title="Delete"
                            btnStyle={{
                                backgroundColor: '#fff',
                                borderRadius: 5,
                                width: '48%',
                                borderColor: 'red',
                                borderWidth: 1,
                                // elevation: 2,
                                marginTop: vs(20),
                                justifyContent: 'center',
                                alignSelf: 'center',
                            }}
                            btnHeight={50}
                            textColor={'red'}
                            textSize={14}
                        />
                        <Btn
                            title="Edit"
                            btnStyle={{
                                backgroundColor: '#009345',
                                borderRadius: 5,
                                width: '48%',
                                marginTop: vs(20),
                                justifyContent: 'center',
                                alignSelf: 'center',
                            }}
                            btnHeight={50}
                            textColor={'white'}
                            textSize={14}
                            onPress={() => navigation.navigate("EditProduct")}
                        />
                    </Container>
                </Container>
            </Container>
        </ScrollView>
    )
}

export default ProductDetail;