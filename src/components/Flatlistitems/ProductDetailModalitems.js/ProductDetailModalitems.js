import React from 'react'
import { View, Pressable, Text, Image } from 'react-native'
import { fs, hs, vs } from '../../../utils/stylesUtils';
import Container from '../../container';

const ProductDetailModalitems = ({ item, onSelected }) => {
    return (
        <Container containerStyle={{
            flex: 1
        }}>
            <Container containerStyle={{
                marginTop: vs(20),
                marginHorizontal: hs(20)
            }}>
                <Container onPress={onSelected}>
                    <Container containerStyle={{
                        borderWidth: 1,
                        height: vs(45),
                        borderRadius: 5,
                        borderColor: '#f2f2f2'
                    }}>
                        <Container containerStyle={{
                            marginHorizontal: hs(10),
                            flexDirection: 'row',
                            marginTop: vs(10),
                        }}>
                            {item.isSelected ?
                                <Image
                                    source={item.img2}
                                    style={{
                                        width: hs(20),
                                        height: vs(20),
                                        resizeMode: 'contain',
                                    }}
                                />
                                :
                                <Image
                                    source={item.img}
                                    style={{
                                        width: hs(20),
                                        height: vs(20),
                                        resizeMode: 'contain',
                                    }}
                                />
                            }

                            <Text style={{
                                fontSize: fs(16),
                                color: '#000',
                                marginTop: vs(2),
                                marginLeft: hs(10)
                            }}>{item.text}</Text>
                        </Container>
                    </Container>
                </Container>
            </Container>
        </Container>
    )
}

export default ProductDetailModalitems;