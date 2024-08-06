import React from 'react'
import { Text, View } from 'react-native';
import Svg, { Path, Defs, Stop } from "react-native-svg";
import ActionSheet from 'react-native-actions-sheet';
import { Button } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

const ActionSheetUi = React.forwardRef((props, ref) => {
    return (
        <ActionSheet ref={ref} containerStyle={{ backgroundColor: '#392323', height: 318, }}>
            <View style={{ display: 'flex', alignItems: 'center', paddingVertical: 17, height: 260, }}>
                <Svg
                    width={80}
                    height={5}
                    viewBox="0 0 80 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    {...props}
                >
                    <Path
                        d="M76.8353 2.44336H2.37036"
                        stroke="#363636"
                        strokeWidth={4.47917}
                        strokeLinecap="round"
                    />
                </Svg>
                <Text style={{ fontFamily: 'Poppins' }} className='text-[#D9D9D9] text-[16px] tracking-wider pt-[30] '>#MTID00013</Text>
                <View style={{ marginTop: 45 }}>
                    {props.icon}
                </View>
                <Text style={{ fontFamily: 'Poppins' }} className='text-[#D9D9D9] text-[12px] tracking-wider pt-[20] '>{props.title}</Text>
            </View>
            <View className='flex flex-row  ' style={{ height: 58 }}>
                <Button mode="contained" className='bg-[#191919] rounded-none w-[50%] flex flex-row items-center justify-center'>
                    <Text style={{ fontFamily: 'Poppins' }} className='text-[#D9D9D9] text-[14px] tracking-wider '>Go to Orders</Text>
                </Button>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} className='w-[50%] flex flex-row justify-center items-center h-[100%] ' colors={['#F84C38', '#FD4161']}>
                    <Svg
                        fill="#fff"
                        width="15px"
                        height="20px"
                        viewBox="0 0 50 50"
                        baseProfile="tiny"
                        xmlns="http://www.w3.org/2000/svg"
                        overflow="inherit"
                    >
                        <Path d="M32.517 48.107l-7.072-21.107h-22.983l44.198-24.804z" />
                    </Svg><Text style={{ fontFamily: 'Poppins' }} className='text-[#D9D9D9] text-[14px] pt-[3] px-[5] tracking-wider '>Locate Shop</Text>
                </LinearGradient>
            </View>
        </ActionSheet>
    )
});

export default ActionSheetUi