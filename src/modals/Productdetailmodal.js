
import React, { useState, useEffect } from 'react'
import { Image, Text, View, Pressable, FlatList } from 'react-native'
import { Modalize } from 'react-native-modalize'
import { fs, hs, vs } from '../utils/stylesUtils'
import Btn from '../components/Btn'
import ProductDetailModalitems from '../components/Flatlistitems/ProductDetailModalitems.js/ProductDetailModalitems'

const ProductdetailModal = ({ modalizeRef, onClose }) => {

    const ProductRender = () => {

        const DummyData = [
            {
                id: 1,
                text: '5%',
                img: require('../assets/images/unselect.png'),
                img2: require('../assets/images/select.png'),
                isSelected: false
            },
            {
                id: 2,
                text: '10%',
                img: require('../assets/images/unselect.png'),
                img2: require('../assets/images/select.png'),
                isSelected: false
            },
            {
                id: 3,
                text: '15%',
                img: require('../assets/images/unselect.png'),
                img2: require('../assets/images/select.png'),
                isSelected: false
            },
            {
                id: 4,
                text: 'Type here...',
                img: require('../assets/images/unselect.png'),
                img2: require('../assets/images/select.png'),
                isSelected: false
            }
        ]

        const [data, setData] = useState(DummyData);

        const renderItem = ({ item, index }) => {
            return (
                <ProductDetailModalitems
                    item={item}
                    onSelected={() => {
                        const newArray = [...data]
                        if (newArray[index]['isSelected'] === true) {
                            console.log(newArray);
                        }
                        newArray[index]['isSelected'] = !newArray[index]['isSelected']
                        // console.log(!newArray);
                        console.log(index);
                        setData(newArray);
                    }}
                />
            )
        }

        return (
            <FlatList
                data={data}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingBottom: vs(10)
                }}
                keyExtractor={(item, index) => {
                    index.toString()
                }}
            />
        );
    }
    return (
        <Modalize ref={modalizeRef}
            adjustToContentHeight={true}
            withHandle={false}
            handlePosition="inside"
            modalStyle={{
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                paddingBottom: 10
            }}
            panGestureEnabled={true}
            closeOnOverlayTap={true}
            HeaderComponent={
                <View>
                    <View style={{
                        marginTop: vs(20),
                        marginHorizontal: hs(20),
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <Text style={{
                            fontSize: fs(16),
                            color: '#000',
                            fontWeight: 'bold'
                        }}>Add offer discount</Text>

                        <Pressable onPress={() => onClose()}>
                            <Image
                                source={{
                                    uri: "https://icons.iconarchive.com/icons/icons8/ios7/256/Very-Basic-Cancel-icon.png"
                                }}
                                style={{
                                    width: hs(20),
                                    height: vs(20),
                                    resizeMode: 'contain',
                                    tintColor: '#000'
                                }}
                            />
                        </Pressable>
                    </View>

                    <View style={{
                        borderWidth: 1,
                        marginTop: vs(15),
                        borderColor: '#f2f2f2'
                    }} />
                </View>
            }
            FooterComponent={
                <Btn
                    title="Add"
                    btnStyle={{
                        backgroundColor: '#009345',
                        borderRadius: 5,
                        justifyContent: 'center',
                        width: '90%',
                        alignSelf: 'center',
                        marginTop: vs(22),
                        bottom: vs(5)
                    }}
                    btnHeight={50}
                    textColor={'white'}
                    textSize={14}
                />
            }

        >
            {ProductRender()}
        </Modalize>
    )
}
export default ProductdetailModal;