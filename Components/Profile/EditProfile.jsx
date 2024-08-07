import { useLinkTo } from '@react-navigation/native';
import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Svg, { Path, Defs, LinearGradient, Stop, Line, Mask, G } from "react-native-svg";
import { Input } from '@rneui/base';
import LinearButton from '../Ui/LinearButton';

const EditProfile = () => {
    const linkTo = useLinkTo();
    const { height } = Dimensions.get('window');
    const [isFocused, setIsFocused] = useState('');
    return (
        <View className='bg-[#0F0F0F] h-[100%] px-5 '>
            <View className='flex flex-row items-center my-8 '>
                <TouchableOpacity className=' p-[5] ' onPressIn={() => linkTo('/Home')}>
                    <Svg
                        width={24}
                        height={24}
                        viewBox="0 0 1024 1024"
                        className="icon"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <Path fill="#fff" d="M224 480h640a32 32 0 110 64H224a32 32 0 010-64z" />
                        <Path
                            fill="#fff"
                            d="M237.248 512l265.408 265.344a32 32 0 01-45.312 45.312l-288-288a32 32 0 010-45.312l288-288a32 32 0 1145.312 45.312L237.248 512z"
                        />
                    </Svg>
                </TouchableOpacity>
                <View className='flex justify-center  w-[90%] '>
                    <Text style={styles.textFont} className='text-[Poppins] tracking-wider text-center text-[20px] text-white '>Edit Profile</Text>
                </View>
            </View>
            <View style={{ height: height - 230 }} className='mt-[25] w-[100%] ' >
                <Input value='Shamnad U P' style={[styles.inputBox,styles.textFont]} onPress={() => setIsFocused('link1')} inputContainerStyle={{ borderColor: isFocused == 'link1' ? '#fc435a' : '#2d2d2d', borderWidth: 0.8, borderRadius: 10, paddingHorizontal: 10, }} placeholder='Username' />
                <Input value='+91 6238988222' style={[styles.inputBox,styles.textFont]} onPress={() => setIsFocused('link2')} inputContainerStyle={{ borderColor: isFocused == 'link2' ? '#fc435a' : '#2d2d2d', borderWidth: 0.8, borderRadius: 10, paddingHorizontal: 10, }} placeholder='Phone Number' />
                <Input value='*******' style={[styles.inputBox,styles.textFont]} onPress={() => setIsFocused('link3')} inputContainerStyle={{ borderColor: isFocused == 'link3' ? '#fc435a' : '#2d2d2d', borderWidth: 0.8, borderRadius: 10, paddingHorizontal: 10, }} placeholder='Password' />
            </View>
            <View style={{ height: 100 }} className='mt-[25] w-[100%] ' >
                <LinearButton name='Update' w={100} h={13} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textFont: {
        fontFamily: 'Poppins'
    },
    inputBox: {
        color: '#fff',
        borderWidth: 0,
        height: 55,
        textAlignVertical: 'bottom'
    }
})

export default EditProfile