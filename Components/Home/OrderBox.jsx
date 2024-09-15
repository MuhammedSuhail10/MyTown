import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop, Line } from "react-native-svg";
import LinearButton from './../Ui/LinearButton';
import { useLinkTo } from '@react-navigation/native';

const OrderBox = () => {
    const linkTo = useLinkTo();
    return (
        <TouchableOpacity onPress={() => { linkTo('/OrderPage') }} className='bg-[#191919] h-[fit] mt-[30] px-[15] rounded-lg'>
            <View className='bg-[#282828] my-[15] px-[8] h-[fit] rounded-lg flex justify-between items-center flex-row '>
                <Text style={styles.textFont} className='text-[#D9D9D9] text-[16px] tracking-wider '>#MTID00013</Text>
                <View className='bg-[#9FFF57] flex flex-row justify-center items-center h-[30] py-[5] w-[50] my-[5] rounded-md '>
                    <Text style={styles.textFont} className='text-[#0f0f0f] text-[14px] font-[600] tracking-wider '>₹ 29</Text>
                </View>
            </View>
            <View className=' flex gap-[20] flex-row' >
                <View className='bg-[#282828] w-[40] h-[40] flex items-center justify-center rounded-md ' >
                    <Svg
                        width={25}
                        height={25}
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <Path
                            d="M2 9.98682V14.4928C2 17.3238 2 18.7398 2.879 19.6198C3.757 20.4998 5.172 20.4998 8 20.4998H14C16.828 20.4998 18.243 20.4998 19.121 19.6198C19.999 18.7398 20 17.3238 20 14.4918V9.98682"
                            stroke="url(#paint0_linear_1_4032)"
                            strokeWidth={1.5}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <Path
                            d="M14 15.9771C13.316 16.5841 12.227 16.9771 11 16.9771C9.77297 16.9771 8.68397 16.5841 7.99997 15.9771M16.796 1.50306L5.14997 1.53206C3.41197 1.44206 2.96597 2.78206 2.96597 3.43806C2.96597 4.02406 2.89097 4.87806 1.82597 6.48306C0.75997 8.08806 0.83997 8.56506 1.44097 9.67706C1.93897 10.5991 3.20697 10.9591 3.86897 11.0201C5.96897 11.0681 6.99097 9.25206 6.99097 7.97506C8.03297 11.1821 10.996 11.1821 12.316 10.8151C13.638 10.4481 14.772 9.13306 15.039 7.97506C15.195 9.41506 15.669 10.2541 17.066 10.8311C18.515 11.4281 19.76 10.5151 20.385 9.92906C21.01 9.34406 21.411 8.04406 20.297 6.61506C19.529 5.63006 19.208 4.70206 19.103 3.74006C19.043 3.18206 18.989 2.58306 18.597 2.20206C18.025 1.64506 17.203 1.47706 16.796 1.50306Z"
                            stroke="url(#paint1_linear_1_4032)"
                            strokeWidth={1.5}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <Defs>
                            <LinearGradient
                                id="paint0_linear_1_4032"
                                x1={11}
                                y1={20.4998}
                                x2={11}
                                y2={9.98682}
                                gradientUnits="userSpaceOnUse"
                            >
                                <Stop stopColor="#FD4161" />
                                <Stop offset={1} stopColor="#F84C38" />
                            </LinearGradient>
                            <LinearGradient
                                id="paint1_linear_1_4032"
                                x1={11.0007}
                                y1={16.9771}
                                x2={11.0007}
                                y2={1.49951}
                                gradientUnits="userSpaceOnUse"
                            >
                                <Stop stopColor="#FD4161" />
                                <Stop offset={1} stopColor="#F84C38" />
                            </LinearGradient>
                        </Defs>
                    </Svg>
                </View>
                <View>
                    <View className='flex flex-row ' style={styles.columnG} >
                        <Text style={styles.textFont} className='text-[14px] text-white tracking-[1px] font-[600] ' >Chaliyar Mall</Text>
                        <View className='opacity-60 bg-[#E33028] px-[7] h-[22] flex flex-row justify-center items-center rounded-lg '>
                            <Text style={styles.textFont} className='text-[11px] text-[#fff] ' >1 km</Text>
                        </View>
                        <View className='opacity-60 bg-[#E33028] px-[7] flex flex-row justify-center items-center py-[2] h-[22] rounded-lg '>
                            <Text style={styles.textFont} className='text-[11px] text-[#fff] ' >15 min</Text>
                        </View>
                    </View>
                    <Text style={styles.textFont} className='text-[14px] text-[#9C9C9C] tracking-wide ' >Akampadam</Text>
                </View>
            </View>
            <View className=' flex gap-[20] w-[100%] flex-row my-[10] ' >
                <View className='bg-[#282828] w-[40] h-[40] flex items-center justify-center rounded-md ' >
                    <Svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <Path
                            d="M22 22H2M2 11L10.126 4.5C10.6579 4.07449 11.3188 3.84267 12 3.84267C12.6812 3.84267 13.3421 4.07449 13.874 4.5L22 11M15.5 5.5V3.5C15.5 3.36739 15.5527 3.24021 15.6464 3.14645C15.7402 3.05268 15.8674 3 16 3H18.5C18.6326 3 18.7598 3.05268 18.8536 3.14645C18.9473 3.24021 19 3.36739 19 3.5V8.5M4 22V9.5M20 22V9.5"
                            stroke="url(#paint0_linear_1_4260)"
                            strokeWidth={1.5}
                            strokeLinecap="round"
                        />
                        <Path
                            d="M15 22V17C15 15.586 15 14.879 14.56 14.44C14.122 14 13.415 14 12 14C10.586 14 9.879 14 9.44 14.44C9 14.878 9 15.585 9 17V22M14 9.5C14 10.0304 13.7893 10.5391 13.4142 10.9142C13.0391 11.2893 12.5304 11.5 12 11.5C11.4696 11.5 10.9609 11.2893 10.5858 10.9142C10.2107 10.5391 10 10.0304 10 9.5C10 8.96957 10.2107 8.46086 10.5858 8.08579C10.9609 7.71071 11.4696 7.5 12 7.5C12.5304 7.5 13.0391 7.71071 13.4142 8.08579C13.7893 8.46086 14 8.96957 14 9.5Z"
                            stroke="url(#paint1_linear_1_4260)"
                            strokeWidth={1.5}
                        />
                        <Defs>
                            <LinearGradient
                                id="paint0_linear_1_4260"
                                x1={12}
                                y1={22}
                                x2={12}
                                y2={3}
                                gradientUnits="userSpaceOnUse"
                            >
                                <Stop stopColor="#FD4161" />
                                <Stop offset={1} stopColor="#F84C38" />
                            </LinearGradient>
                            <LinearGradient
                                id="paint1_linear_1_4260"
                                x1={12}
                                y1={22}
                                x2={12}
                                y2={7.5}
                                gradientUnits="userSpaceOnUse"
                            >
                                <Stop stopColor="#FD4161" />
                                <Stop offset={1} stopColor="#F84C38" />
                            </LinearGradient>
                        </Defs>
                    </Svg>
                </View>
                <View>
                    <View className='flex flex-row ' style={styles.columnG} >
                        <Text style={styles.textFont} className='text-[14px] text-white tracking-[1px] font-[600] ' >Jamsheedali</Text>
                        <View className='opacity-60 bg-[#E33028] px-[7] h-[22] flex flex-row justify-center items-center rounded-lg '>
                            <Text style={styles.textFont} className='text-[11px] text-[#fff] ' >2 km</Text>
                        </View>
                        <View className='opacity-60 bg-[#E33028] px-[7] flex flex-row justify-center items-center py-[2] h-[22] rounded-lg '>
                            <Text style={styles.textFont} className='text-[11px] text-[#fff] ' >30 min</Text>
                        </View>
                    </View>
                    <Text style={styles.textFont} className='text-[14px] text-[#9C9C9C] tracking-wide ' >KV house, Anappara, Society road..</Text>
                </View>
            </View>
            <View className='absolute left-[35] top-[80] z-[-1] '>
                <Svg
                    width={1}
                    height={74}
                    viewBox="0 0 1 74"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <Line
                        x1={0.5}
                        y1={0.5}
                        x2={0.500003}
                        y2={73.5}
                        stroke="#FA474A"
                        strokeLinecap="round"
                        strokeDasharray="3.2 4.48"
                    />
                </Svg>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textFont: {
        fontFamily: 'Poppins'
    },
    columnG: {
        columnGap: 10
    }
})

export default OrderBox