import React from 'react';
import { Text, View } from 'react-native';
import { Divider } from 'react-native-paper';
import Svg, { Path, Defs, LinearGradient, Stop, Line } from "react-native-svg";

const OrderDetailsBox = ({ show, setShow }) => {
    return (
        <View className='bg-[#191919] h-[fit] mt-[10] px-[12]' style={{ borderRadius: 15 }}>
            <View className='bg-[#392323] my-[15] px-[8] h-[fit] rounded-lg flex flex-row h-[40] justify-between items-center '>
                <View className=' rounded-lg flex flex-row items-center flex-row h-[40]   '>
                    <Svg
                        width={16}
                        height={16}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <Path
                            fill="#707070"
                            d="M3.49700541,15.6016867 C3.88362709,15.6016867 4.19704589,15.9147098 4.19704589,16.3008433 C4.19704589,16.6869769 3.88362709,17 3.49700541,17 L0.700449443,17 C0.31382776,17 0.000408959195,16.6869769 0.000408959195,16.3008433 C0.000408959195,15.9147098 0.31382776,15.6016867 0.700449443,15.6016867 L3.49700541,15.6016867 Z M19.2999595,15.6016867 C19.6865812,15.6016867 20,15.9147098 20,16.3008433 C20,16.6869769 19.6865812,17 19.2999595,17 L5.52869781,17 C5.14207613,17 4.82865733,16.6869769 4.82865733,16.3008433 C4.82865733,15.9147098 5.14207613,15.6016867 5.52869781,15.6016867 L19.2999595,15.6016867 Z M3.49659645,9.3343084 C3.88321813,9.3343084 4.19663693,9.64733151 4.19663693,10.0334651 C4.19663693,10.4195986 3.88321813,10.7326218 3.49659645,10.7326218 L0.700040484,10.7326218 C0.3134188,10.7326218 -1.79412041e-12,10.4195986 -1.79412041e-12,10.0334651 C-1.79412041e-12,9.64733151 0.3134188,9.3343084 0.700040484,9.3343084 L3.49659645,9.3343084 Z M19.2995506,9.3343084 C19.6861722,9.3343084 19.999591,9.64733151 19.999591,10.0334651 C19.999591,10.4195986 19.6861722,10.7326218 19.2995506,10.7326218 L5.52828885,10.7326218 C5.14166717,10.7326218 4.82824837,10.4195986 4.82824837,10.0334651 C4.82824837,9.64733151 5.14166717,9.3343084 5.52828885,9.3343084 L19.2995506,9.3343084 Z M3.49659645,3 C3.88321813,3 4.19663693,3.31302311 4.19663693,3.69915667 C4.19663693,4.08529024 3.88321813,4.39831335 3.49659645,4.39831335 L0.700040484,4.39831335 C0.3134188,4.39831335 -1.79412041e-12,4.08529024 -1.79412041e-12,3.69915667 C-1.79412041e-12,3.31302311 0.3134188,3 0.700040484,3 L3.49659645,3 Z M19.2995506,3 C19.6861722,3 19.999591,3.31302311 19.999591,3.69915667 C19.999591,4.08529024 19.6861722,4.39831335 19.2995506,4.39831335 L5.52828885,4.39831335 C5.14166717,4.39831335 4.82824837,4.08529024 4.82824837,3.69915667 C4.82824837,3.31302311 5.14166717,3 5.52828885,3 L19.2995506,3 Z"
                        />
                    </Svg>
                    <Text style={{ fontFamily: 'Poppins' }} className='text-[#D9D9D9] pt-[2.5] px-[8] text-[16px] tracking-wider '>Order Details</Text>
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
            {show && <><View className='px-[10] '>
                <View className='flex flex-row justify-between h-[60] items-center ' style={{ borderBottomColor: '#787880', borderBottomWidth: 0.5 }}>
                    <View className='flex flex-row justify-between '>
                        <View className='rounded-lg px-[8] ' style={{ borderColor: '#787880', borderWidth: 0.5 }}>
                            <Text style={{ fontFamily: 'Poppins' }} className='text-[#D9D9D9] pt-[2.5] px-[8] text-[14px] tracking-wider '>2x</Text>
                        </View>
                        <Text style={{ fontFamily: 'Poppins' }} className='text-[#D9D9D9] pt-[2.5] px-[15] text-[14px] tracking-wider '>Carrot, 500g</Text>
                    </View>
                    <Text style={{ fontFamily: 'Poppins' }} className='text-[#D9D9D9] pt-[2.5] px-[8] text-[14px] tracking-wider '>Rs 150</Text>
                </View>
                <View className='flex flex-row justify-between h-[60] items-center ' style={{ borderBottomColor: '#787880', borderBottomWidth: 0.5 }}>
                    <View className='flex flex-row justify-between '>
                        <View className='rounded-lg px-[8] ' style={{ borderColor: '#787880', borderWidth: 0.5 }}>
                            <Text style={{ fontFamily: 'Poppins' }} className='text-[#D9D9D9] pt-[2.5] px-[8] text-[14px] tracking-wider '>2x</Text>
                        </View>
                        <Text style={{ fontFamily: 'Poppins' }} className='text-[#D9D9D9] pt-[2.5] px-[15] text-[14px] tracking-wider '>Carrot, 500g</Text>
                    </View>
                    <Text style={{ fontFamily: 'Poppins' }} className='text-[#D9D9D9] pt-[2.5] px-[8] text-[14px] tracking-wider '>Rs 150</Text>
                </View>
                <View className='flex flex-row justify-between h-[60] items-center ' style={{ borderBottomColor: '#787880', borderBottomWidth: 0.5 }}>
                    <View className='flex flex-row justify-between '>
                        <View className='rounded-lg px-[8] ' style={{ borderColor: '#787880', borderWidth: 0.5 }}>
                            <Text style={{ fontFamily: 'Poppins' }} className='text-[#D9D9D9] pt-[2.5] px-[8] text-[14px] tracking-wider '>2x</Text>
                        </View>
                        <Text style={{ fontFamily: 'Poppins' }} className='text-[#D9D9D9] pt-[2.5] px-[15] text-[14px] tracking-wider '>Carrot, 500g</Text>
                    </View>
                    <Text style={{ fontFamily: 'Poppins' }} className='text-[#D9D9D9] pt-[2.5] px-[8] text-[14px] tracking-wider '>Rs 150</Text>
                </View>
            </View>
                <View className='bg-[#392323] px-[10] py-[15] rounded-lg my-[20] '>
                    <View className='flex justify-between flex-row '>
                        <Text style={{ fontFamily: 'Poppins' }} className='text-[#D9D9D9] pt-[2.5] px-[8] text-[16px] tracking-wider '>Delivery Charge</Text>
                        <Text style={{ fontFamily: 'Poppins' }} className='text-[#D9D9D9] pt-[2.5] px-[8] text-[16px] tracking-wider '>Rs 49</Text>
                    </View>
                    <View className='flex justify-between flex-row mt-[10] mb-[20] '>
                        <Text style={{ fontFamily: 'Poppins' }} className='text-[#D9D9D9] pt-[2.5] px-[8] text-[16px] tracking-wider '>Your Commission</Text>
                        <Text style={{ fontFamily: 'Poppins' }} className='text-[#D9D9D9] pt-[2.5] px-[8] text-[16px] tracking-wider '>Rs 29</Text>
                    </View>
                    <Divider style={{ backgroundColor: '#787880' }} />
                    <View className='flex justify-between flex-row mt-[20] '>
                        <Text style={{ fontFamily: 'Poppins' }} className='text-[#D9D9D9] pt-[2.5] px-[8] text-[16px] tracking-wider '>Total Amount</Text>
                        <Text style={{ fontFamily: 'Poppins' }} className='text-[#D9D9D9] pt-[2.5] px-[8] text-[16px] tracking-wider '>Rs 78</Text>
                    </View>
                </View></>}
        </View>
    )
}

export default OrderDetailsBox
