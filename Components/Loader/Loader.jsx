import React, { useEffect } from 'react'
import { Button, Image, View } from 'react-native';
import icon from '../Icon.png'
import { useNavigation } from '@react-navigation/native';

const Loader = () => {
    const navigation = useNavigation();
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Home'); 
        }, 3000);
        return () => clearTimeout(timer);
    }, [navigation]);
    return (
        <View className="flex-1 items-center px-8 justify-center bg-[#0F0F0F] ">
            <Image source={icon} style={{ width: 160, height: 210 }} />
        </View>
    )
}

export default Loader