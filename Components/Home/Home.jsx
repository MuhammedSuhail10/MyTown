import React, { useState } from 'react'
import icon from '../Icon.png'
import { Alert, Image, ScrollView, Text, View } from 'react-native'
import SwipeButton from 'rn-swipe-button';
import Svg, { Path, Defs, Stop } from "react-native-svg";
import LinearGradient from 'react-native-linear-gradient';
import OrderBox from './OrderBox';

const CheckoutButton = ({ swipe }) => {
    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} className='w-[100%] h-[fit] py-[16] px-[20] ' colors={['#fc435a', '#fc435a', '#f84c39']}>
            <Svg
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <Path
                    d="M17.3333 22.6668L24 16.0002L17.3333 9.3335M8 22.6668L14.6667 16.0002L8 9.3335"
                    stroke="white"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </LinearGradient>
    );
}

const CheckoutButton2 = ({ swipe }) => {
    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} className='w-[100%] h-[fit] py-[18] px-[20] ' colors={['#37B737', '#37B737', '#37B737']}>
            <Svg
                width="30px"
                height="30px"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#fff"
            >
                <Path
                    d="M5 13L9 17L19 7"
                    stroke="#fff"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </LinearGradient>
    );
}

const Home = () => {
    const [swipe, setSwipe] = useState(false);
    return (
        <View className='bg-[#0F0F0F] h-[100%] px-5 '>
            {swipe ? <><View className='flex flex-row h-[30] items-center my-8 '>
                <Svg
                    width="20px"
                    height="20px"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="#fff"
                >
                    <Path
                        d="M3 5H21"
                        stroke="#fff"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <Path
                        d="M3 12H21"
                        stroke="#fff"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <Path
                        d="M3 19H21"
                        stroke="#fff"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </Svg>
                <View className='flex justify-center  w-[90%] '>
                    <Text style={{ fontFamily: 'Poppins' }} className='text-[Poppins] text-center text-[20px] text-white '>New Orders</Text>
                </View></View>
                <View className='mt-[-20] '>
                    <OrderBox />
                    <OrderBox />
                </View>
            </> : <View className=' flex items-center justify-center h-[100%] '><View className='' >
                <Image source={icon} style={{ width: 130, height: 170 }} />
            </View>
                <View className='mt-[130]' >
                    <Text className='text-center text-white ' style={{ fontFamily: 'Poppins', fontSize: 25 }}>{swipe ? 'Welcome Again' : 'Turn On'}</Text>
                    <Text className='text-center ' style={{ fontFamily: 'Poppins', fontSize: 13.5, color: '#adb5bd' }}>{swipe ? "Starting your day in 3s" : 'Slide to Start Delivery'}</Text>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[swipe ? '#fc435a' : '#6c757d', swipe ? '#f84c39' : '#121416',]} style={{ borderStartWidth: 1.5, borderEndWidth: 1, borderTopWidth: 1, borderColor: 'rgba(255, 255, 255, 0.15)', borderRadius: 35, marginTop: 30, height: 70, width: 340, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <SwipeButton
                            containerStyles={{ borderRadius: 30, display: 'flex', marginLeft: 6, borderWidth: 0, justifyContent: 'center', alignItems: 'center' }}
                            height={60}
                            width={330}
                            // onSwipeFail={() => updateSwipeStatusMessage('Incomplete swipe!')}
                            onSwipeStart={() => setSwipe(false)}
                            onSwipeSuccess={() => setSwipe(true)}
                            railBackgroundColor="transparent"
                            railFillBackgroundColor='transparent'
                            railStyles={{ borderRadius: 30, borderWidth: 0 }}
                            thumbIconComponent={swipe ? CheckoutButton2 : CheckoutButton}
                            thumbIconStyles={{ borderRadius: 30, borderWidth: 0 }}
                            thumbIconWidth={60}
                            title={swipe ? "Starting your day in 3s" : 'Slide to Start Delivery'}
                            titleColor='#f8f9fa'
                            titleStyles={{ fontFamily: 'Poppins', fontSize: 13, paddingTop: 2 }}
                        /></LinearGradient>
                </View></View>}
        </View >
    )
}

export default Home