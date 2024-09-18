import React, { useState } from 'react'
import { Dimensions, ScrollView, Text, View, TouchableWithoutFeedback, Modal, TouchableHighlight, StyleSheet, } from 'react-native';
import HeadNums from './HeadNums';

const HeadBanner = () => {
    const [active, setActive] = useState('1');
    return (
        <View style={styles.container} className='w-[100%] px-[10] bg-[#191919] h-[50] mb-[20] flex-row justify-between flex items-center rounded-xl '>
            <View className=' rounded-lg h-[100%] w-[18%] flex justify-center items-center' style={active == '1' ? styles.activebg : styles.bg}>
                <HeadNums count="1" active={active} selected />
            </View>
            <View className=' rounded-lg h-[100%] w-[18%] flex justify-center items-center' style={active == '2' ? styles.activebg : styles.bg}>
                <HeadNums count="2" active={active} />
            </View>
            <View className=' rounded-lg h-[100%] w-[18%] flex justify-center items-center' style={active == '3' ? styles.activebg : styles.bg}>
                <HeadNums count="3" active={active} />
            </View>
            <View className=' rounded-lg h-[100%] w-[18%] flex justify-center items-center' style={active == '4' ? styles.activebg : styles.bg}>
                <HeadNums count="4" active={active} />
            </View>
            <View className=' rounded-lg h-[100%] w-[18%] flex justify-center items-center' style={active == '5' ? styles.activebg : styles.bg}>
                <HeadNums count="5" active={active} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        shadowOpacity: 1,
        elevation: 1,
        borderStartWidth: 0.5,
        borderEndWidth: 0.5,
        borderTopWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.15)',
        paddingHorizontal: 10,
        paddingVertical: 7,
        paddingBottom: 7
    },
    activebg: {
        backgroundColor: '#fd4161'
    },
    bg: {
        backgroundColor: 'transparent',
    },
})

export default HeadBanner