import React from 'react'
import { Image, View } from 'react-native';
import icon from '../Icon.png'

const Loader = () => {
    return (
        <View className="flex-1 items-center mx-8 justify-center bg-[#0F0F0F] ">
            <Image source={icon} style={{ width: 160, height: 210 }} />
        </View>
    )
}

export default Loader