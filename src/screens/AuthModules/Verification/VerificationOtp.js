import React, { useState } from 'react';
import { Text, View,StyleSheet } from 'react-native';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell, } from 'react-native-confirmation-code-field';
import { fs, hs, vs } from '../../../utils/stylesUtils';

const CELL_COUNT = 4;

const VerificationOtp = ({ value, setValue }) => {
    console.log(value)
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [rest, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (
        <View style={styles.root}>
            <CodeField
                ref={ref}
                {...rest}
                value={value}
                onChangeText={setValue}
                //onChange={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.rootStyle}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => (
                    <Text
                        key={index}
                        style={[styles.cell, isFocused && styles.focusCell]}
                        onLayout={getCellOnLayoutHandler(index)}>
                        {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                )}
            />
        </View>
    );
};

export default VerificationOtp;

const styles = StyleSheet.create({
    root:{
        padding: vs(20),
        margin: vs(10),
        bottom: vs(10)
    },
    rootStyle:{
        marginTop: vs(10)
    },
    cell: {
        width: hs(40),
        height:vs(40),
        lineHeight: 48,
        fontSize: fs(20),
        borderWidth: 1,
        borderColor: '#009345',
        textAlign: "center",
        marginRight: hs(5)
    },
    focusCell: {
        borderColor: '#000',
    },
})