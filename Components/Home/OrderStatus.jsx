import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Divider } from 'react-native-paper';
import Svg, { Path, Defs, LinearGradient, Stop, Line } from "react-native-svg";
import StepIndicatorPage from '../Ui/StepIndicatorPage';

const OrderStatus = ({ show, setShow,progress }) => {
    return (
        <View className='bg-[#191919] h-[fit] mt-[10] px-[12]' style={{ borderRadius: 15 }}>
            <View className='bg-[#392323] my-[15] px-[8] h-[fit] rounded-lg flex flex-row h-[40] justify-between items-center '>
                <View className=' rounded-lg flex flex-row items-center flex-row h-[40]   '>
                    <Svg
                        width={18}
                        height={21}
                        viewBox="0 0 18 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <Path
                            d="M17.49 6.51996C17.4843 6.49359 17.4843 6.46632 17.49 6.43996C17.4852 6.41688 17.4852 6.39304 17.49 6.36996V6.27996L17.43 6.12996C17.4056 6.08903 17.3753 6.05196 17.34 6.01996L17.25 5.93996H17.2L13.26 3.44996L9.54001 1.14996C9.45394 1.08169 9.35546 1.03075 9.25001 0.999959H9.17001C9.08062 0.98504 8.98939 0.98504 8.90001 0.999959H8.80001C8.68385 1.02565 8.57248 1.06952 8.47001 1.12996L1.00001 5.77996L0.910007 5.84996L0.820007 5.92996L0.720007 5.99996L0.670007 6.05996L0.610007 6.20996V6.35996C0.600294 6.42627 0.600294 6.49365 0.610007 6.55996V15.29C0.609667 15.4599 0.652643 15.6271 0.734878 15.7759C0.817113 15.9246 0.935894 16.0499 1.08001 16.14L8.58001 20.78L8.73001 20.84H8.81001C8.97919 20.8936 9.16083 20.8936 9.33001 20.84H9.41001L9.56001 20.78L17 16.21C17.1441 16.1199 17.2629 15.9946 17.3451 15.8459C17.4274 15.6971 17.4703 15.5299 17.47 15.36V6.62996C17.47 6.62996 17.49 6.55996 17.49 6.51996ZM9.00001 3.16996L10.78 4.26996L5.19001 7.72996L3.40001 6.62996L9.00001 3.16996ZM8.00001 18.17L2.50001 14.81V8.41996L8.00001 11.82V18.17ZM9.00001 10.06L7.09001 8.90996L12.68 5.43996L14.6 6.62996L9.00001 10.06ZM15.5 14.78L10 18.2V11.82L15.5 8.41996V14.78Z"
                            fill="#878787"
                        />
                    </Svg>
                    <Text style={styles.textFont} className='text-[#D9D9D9] pt-[2.5] px-[8] text-[16px] tracking-wider '>Order Status</Text>
                </View>
                <Svg onPress={setShow}
                    fill="#D9D9D9"
                    width={18}
                    height={18}
                    viewBox="-1 0 19 19"
                    xmlns="http://www.w3.org/2000/svg"
                    className="cf-icon-svg"
                >
                    <Path d="M8.5 15.313a1.026 1.026 0 0 1-.728-.302l-6.8-6.8a1.03 1.03 0 0 1 1.455-1.456L8.5 12.828l6.073-6.073a1.03 1.03 0 0 1 1.455 1.456l-6.8 6.8a1.026 1.026 0 0 1-.728.302z" />
                </Svg>
            </View>
            {show && <>
                <View className='px-[10] py-[10] rounded-lg mb-[15] '>
                    <StepIndicatorPage progress={progress} />
                    <View className='bg-[#9FFF57] rounded-lg mt-[20] px-[10] w-[100%] h-[50] flex flex-row items-center justify-start'>
                        <View className=' '><Svg
                            width={20}
                            height={20}
                            viewBox="0 0 16 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <Path
                                d="M8.96147 5.5525L10.071 1.8405L14.826 10.8255C14.8966 10.9549 14.9205 11.1046 14.8937 11.2496C14.867 11.3945 14.7911 11.5259 14.679 11.6215L4.59697 20.75L6.03897 15.785M11.4005 10.255C11.4711 10.3844 11.495 10.5341 11.4682 10.6791C11.4415 10.824 11.3656 10.9554 11.2535 11.051L1.09497 20.173L6.58547 1.25L11.4005 10.255Z"
                                stroke="black"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </Svg></View>
                        <View className='mt-[5] ml-[10] '>
                            <Text style={styles.textFont} className='text-[#0F0F0F] text-[14px] tracking-wider '>Amount Paid through UPI</Text>
                        </View>
                    </View>
                </View></>}
        </View>
    )
}

const styles = StyleSheet.create({
    textFont: {
        fontFamily: 'Poppins'
    },
})

export default OrderStatus