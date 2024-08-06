import React, { useCallback, useRef, useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Icon, MD3Colors, ProgressBar } from 'react-native-paper';
import StepIndicator from 'react-native-step-indicator';
import Svg, { Path, Defs, LinearGradient, Stop, Line } from "react-native-svg";
import LinearButton from './LinearButton';

const StepIndicatorPage = ({ progress }) => {
    return (
        <>
            <View className='flex flex-row justify-between'>
                <View className='flex flex-row justify-start w-[45%]'>
                    {progress >= 0.12 ? <Svg
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <Path
                            d="M8.95833 17.9584C13.9059 17.9584 17.9167 13.9476 17.9167 9.00008C17.9167 4.05253 13.9059 0.041748 8.95833 0.041748C4.01078 0.041748 0 4.05253 0 9.00008C0 13.9476 4.01078 17.9584 8.95833 17.9584Z"
                            fill="url(#paint0_linear_216_901)"
                        />
                        <Path
                            d="M6.07837 9.1984L8.13687 11.3017L12.68 6.75854"
                            stroke="white"
                            strokeWidth={1.27976}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <Defs>
                            <LinearGradient
                                id="paint0_linear_216_901"
                                x1={2.58}
                                y1={3.06966}
                                x2={21.6254}
                                y2={17.9584}
                                gradientUnits="userSpaceOnUse"
                            >
                                <Stop stopColor="#459B2C" />
                                <Stop offset={1} stopColor="#7EE85E" />
                            </LinearGradient>
                        </Defs>
                    </Svg> : <Svg
                        width={18}
                        height={18}
                        viewBox="0 0 20 20"
                        fill="#191919"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <Path
                            d="M9.95833 18.9584C14.9059 18.9584 18.9167 14.9476 18.9167 10.0001C18.9167 5.05253 14.9059 1.04175 9.95833 1.04175C5.01078 1.04175 1 5.05253 1 10.0001C1 14.9476 5.01078 18.9584 9.95833 18.9584Z"
                            stroke="white"
                            strokeOpacity={0.12}
                        />
                    </Svg>}
                    <Text style={{ fontFamily: 'Poppins' }} className='text-[#D9D9D9] px-[15] text-[14px] tracking-wider '>Confirmed</Text>
                </View>
                <View className=' mt-[-15] w-[100%] '><LinearButton name='Locate Shop' w={55} h={3} m={10} icon='locate' /></View>
            </View>
            <View className='mt-[35] flex flex-row'>
                {progress >= 0.24 ? <Svg
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <Path
                        d="M8.95833 17.9584C13.9059 17.9584 17.9167 13.9476 17.9167 9.00008C17.9167 4.05253 13.9059 0.041748 8.95833 0.041748C4.01078 0.041748 0 4.05253 0 9.00008C0 13.9476 4.01078 17.9584 8.95833 17.9584Z"
                        fill="url(#paint0_linear_216_901)"
                    />
                    <Path
                        d="M6.07837 9.1984L8.13687 11.3017L12.68 6.75854"
                        stroke="white"
                        strokeWidth={1.27976}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_216_901"
                            x1={2.58}
                            y1={3.06966}
                            x2={21.6254}
                            y2={17.9584}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#459B2C" />
                            <Stop offset={1} stopColor="#7EE85E" />
                        </LinearGradient>
                    </Defs>
                </Svg> : <Svg
                    width={18}
                    height={18}
                    viewBox="0 0 20 20"
                    fill="#191919"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <Path
                        d="M9.95833 18.9584C14.9059 18.9584 18.9167 14.9476 18.9167 10.0001C18.9167 5.05253 14.9059 1.04175 9.95833 1.04175C5.01078 1.04175 1 5.05253 1 10.0001C1 14.9476 5.01078 18.9584 9.95833 18.9584Z"
                        stroke="white"
                        strokeOpacity={0.12}
                    />
                </Svg>}
                <Text style={{ fontFamily: 'Poppins' }} className='text-[#D9D9D9] px-[15] text-[14px] tracking-wider '>Picked</Text>
            </View>
            <View className='mt-[35]  flex flex-row'>
                <View className='flex flex-row justify-start w-[45%]'>
                    {progress >= 0.36 ? <Svg
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <Path
                            d="M8.95833 17.9584C13.9059 17.9584 17.9167 13.9476 17.9167 9.00008C17.9167 4.05253 13.9059 0.041748 8.95833 0.041748C4.01078 0.041748 0 4.05253 0 9.00008C0 13.9476 4.01078 17.9584 8.95833 17.9584Z"
                            fill="url(#paint0_linear_216_901)"
                        />
                        <Path
                            d="M6.07837 9.1984L8.13687 11.3017L12.68 6.75854"
                            stroke="white"
                            strokeWidth={1.27976}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <Defs>
                            <LinearGradient
                                id="paint0_linear_216_901"
                                x1={2.58}
                                y1={3.06966}
                                x2={21.6254}
                                y2={17.9584}
                                gradientUnits="userSpaceOnUse"
                            >
                                <Stop stopColor="#459B2C" />
                                <Stop offset={1} stopColor="#7EE85E" />
                            </LinearGradient>
                        </Defs>
                    </Svg> : <Svg
                        width={18}
                        height={18}
                        viewBox="0 0 20 20"
                        fill="#191919"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <Path
                            d="M9.95833 18.9584C14.9059 18.9584 18.9167 14.9476 18.9167 10.0001C18.9167 5.05253 14.9059 1.04175 9.95833 1.04175C5.01078 1.04175 1 5.05253 1 10.0001C1 14.9476 5.01078 18.9584 9.95833 18.9584Z"
                            stroke="white"
                            strokeOpacity={0.12}
                        />
                    </Svg>}
                    <Text style={{ fontFamily: 'Poppins' }} className='text-[#D9D9D9] px-[15] text-[14px] tracking-wider '>On the Way</Text>
                </View>
                <View className='w-[100%] mt-[-15] '><LinearButton name='Locate Customer' w={55} h={3} m={10} icon='locate' /></View>
            </View>
            <View className='mt-[35]  flex flex-row'>
                <View className='flex flex-row justify-start w-[45%]'>
                    {progress >= 0.48 ? <Svg
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <Path
                            d="M8.95833 17.9584C13.9059 17.9584 17.9167 13.9476 17.9167 9.00008C17.9167 4.05253 13.9059 0.041748 8.95833 0.041748C4.01078 0.041748 0 4.05253 0 9.00008C0 13.9476 4.01078 17.9584 8.95833 17.9584Z"
                            fill="url(#paint0_linear_216_901)"
                        />
                        <Path
                            d="M6.07837 9.1984L8.13687 11.3017L12.68 6.75854"
                            stroke="white"
                            strokeWidth={1.27976}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <Defs>
                            <LinearGradient
                                id="paint0_linear_216_901"
                                x1={2.58}
                                y1={3.06966}
                                x2={21.6254}
                                y2={17.9584}
                                gradientUnits="userSpaceOnUse"
                            >
                                <Stop stopColor="#459B2C" />
                                <Stop offset={1} stopColor="#7EE85E" />
                            </LinearGradient>
                        </Defs>
                    </Svg> : <Svg
                        width={18}
                        height={18}
                        viewBox="0 0 20 20"
                        fill="#191919"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <Path
                            d="M9.95833 18.9584C14.9059 18.9584 18.9167 14.9476 18.9167 10.0001C18.9167 5.05253 14.9059 1.04175 9.95833 1.04175C5.01078 1.04175 1 5.05253 1 10.0001C1 14.9476 5.01078 18.9584 9.95833 18.9584Z"
                            stroke="white"
                            strokeOpacity={0.12}
                        />
                    </Svg>}
                    <Text style={{ fontFamily: 'Poppins' }} className='text-[#D9D9D9] px-[15] text-[14px] tracking-wider '>At Door-Step</Text>
                </View>
                <View className='w-[100%] mt-[-15] '><LinearButton name='Call Customer' w={55} h={3} m={10} icon='phone' /></View>
            </View>
            <View className='mt-[35]  flex flex-row'>
                {progress >= 0.60 ? <Svg
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <Path
                        d="M8.95833 17.9584C13.9059 17.9584 17.9167 13.9476 17.9167 9.00008C17.9167 4.05253 13.9059 0.041748 8.95833 0.041748C4.01078 0.041748 0 4.05253 0 9.00008C0 13.9476 4.01078 17.9584 8.95833 17.9584Z"
                        fill="url(#paint0_linear_216_901)"
                    />
                    <Path
                        d="M6.07837 9.1984L8.13687 11.3017L12.68 6.75854"
                        stroke="white"
                        strokeWidth={1.27976}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_216_901"
                            x1={2.58}
                            y1={3.06966}
                            x2={21.6254}
                            y2={17.9584}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#459B2C" />
                            <Stop offset={1} stopColor="#7EE85E" />
                        </LinearGradient>
                    </Defs>
                </Svg> : <Svg
                    width={18}
                    height={18}
                    viewBox="0 0 20 20"
                    fill="#191919"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <Path
                        d="M9.95833 18.9584C14.9059 18.9584 18.9167 14.9476 18.9167 10.0001C18.9167 5.05253 14.9059 1.04175 9.95833 1.04175C5.01078 1.04175 1 5.05253 1 10.0001C1 14.9476 5.01078 18.9584 9.95833 18.9584Z"
                        stroke="white"
                        strokeOpacity={0.12}
                    />
                </Svg>}
                <Text style={{ fontFamily: 'Poppins' }} className='text-[#D9D9D9] px-[15] text-[14px] tracking-wider '>Delivered</Text>
            </View>
            <View className='rotate-90 absolute top-[140] left-[-106] z-[-1] '>
                <ProgressBar style={{ width: 250, backgroundColor: '#353535' }} progress={progress*2} theme={{ colors: { primary: '#53AE38' } }} />
            </View>
        </>
    );
};


export default StepIndicatorPage;