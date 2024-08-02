import React, { useState } from 'react'
import { Image, Text, View } from 'react-native';
import icon from '../Icon.png'
import { Input } from '@rneui/base';
import LinearGradient from 'react-native-linear-gradient';
import LinearButton from './../Ui/LinearButton';

const Login = () => {
    const [isFocused, setIsFocused] = useState('');
    return (
        <View className="flex-1 items-center px-6 justify-center bg-[#0F0F0F] ">
            <View className='mt-[-20]' >
                <Image source={icon} style={{ width: 110, height: 150 }} />
            </View>
            <View className='mt-[25] w-[100%] ' >
                <Input style={{ fontFamily: 'Poppins', color: '#fff', borderWidth: 0, height: 55, textAlignVertical: 'center', paddingTop: 20 }} onPress={() => setIsFocused('link1')} inputContainerStyle={{ borderColor: isFocused == 'link1' ? '#fc435a' : '#2d2d2d', borderWidth: 0.8, borderRadius: 10, paddingHorizontal: 10, }} placeholder='Username' />
                <Input style={{ fontFamily: 'Poppins', color: '#fff', borderWidth: 0, height: 55, textAlignVertical: 'center', paddingTop: 20 }} onPress={() => setIsFocused('link2')} inputContainerStyle={{ borderColor: isFocused == 'link2' ? '#fc435a' : '#2d2d2d', borderWidth: 0.8, borderRadius: 10, paddingHorizontal: 10, }} placeholder='Password' />
            </View>
            <LinearButton name='Login' w={95} h={13} />
        </View>
    )
}

export default Login