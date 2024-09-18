import React, { useState } from 'react'
import { Dimensions, ScrollView, Text, View, TouchableWithoutFeedback, Modal, TouchableHighlight, StyleSheet, } from 'react-native';

const HeadNums = ({ count, active, selected }) => {
    return (
        <View className={`rounded-full h-6 w-6 flex justify-center items-center ${selected && 'bg-[#9fff57] py-[2]'}`} >
            <Text style={styles.textFont} className={`text-[Poppins] tracking-wider text-[13.5px] text-white  ${selected && 'text-black'}`}>{count}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textFont: {
        fontFamily: 'Poppins'
    },
    activebg: {
        backgroundColor: '#fd4161'
    },
    bg: {
        backgroundColor: 'transparent',
    },
})

export default HeadNums