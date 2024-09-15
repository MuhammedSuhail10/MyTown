import React, { useState } from 'react'
import icon from '../Icon.png'
import { Alert, Button, Image, ScrollView, Text, View,  TouchableWithoutFeedback, Modal, Dimensions, Pressable, StyleSheet } from 'react-native';
import Svg, { Path, Defs, Stop } from "react-native-svg";
import OrderBox from './OrderBox';
import SideMenu from '../Ui/SideMenu';
import SwipeBtn from '../Ui/SwipeBtn';

const Home = () => {
    const [swipe, setSwipe] = useState(false);
    const { height } = Dimensions.get('window');
    const [open, setOpen] = useState(false);
    return (
        <View style={{ flex: 1 }}>
            <Modal transparent={true} visible={open} onRequestClose={() => setOpen(false)} animationType="fade" >
                <TouchableWithoutFeedback className=' p-[5] ' onPress={() => setOpen(false)}>
                    <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <TouchableWithoutFeedback>
                            <View className='absolute w-[80%] h-[100%] bg-[#1e1e1e] '>
                                <SideMenu />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            {swipe ? <ScrollView className='bg-[#0F0F0F] h-[100%] px-5 '>
                <View className='flex flex-row h-[30] items-center my-8 '>
                    <Pressable onPress={() => setOpen(true)}>
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
                    </Pressable>
                    <View className='flex justify-center  w-[90%] '>
                        <Text style={styles.textFont} className='text-[Poppins] text-center text-[20px] text-white '>New Orders</Text>
                    </View>
                </View>
                <View className='mt-[-30] w-[100%] '>
                    <OrderBox />
                    <OrderBox />
                    <OrderBox />
                    <OrderBox />
                </View>
            </ScrollView> : <View style={{ height: height }} className=' flex items-center justify-center flex-column bg-[#0F0F0F] h-[100%] px-5 '><View style={{ height: height /2 }} className=' flex items-center justify-center flex-column ' >
                <Image source={icon} style={styles.img} />
            </View>
                <View style={{ height: height / 2, width: '100%' }} className=' flex items-center justify-start flex-column '>
                    <Text className='text-center text-white text-[28px] ' style={styles.textFont}>{swipe ? 'Welcome Again' : 'Turn On'}</Text>
                    <Text className='text-center pb-[30] text-[13.5px] text-[#adb5bd]' style={styles.textFont}>{swipe ? "Starting your day in 3s" : 'Slide to Start Delivery'}</Text>
                    <SwipeBtn swiped={true} setSwiped={() => setSwipe(true)} title='Accept Delivery' title2='Starting your day in 3s' icon={<Svg
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
                    </Svg>} />
                </View></View>}
        </View >
    )
}

const styles = StyleSheet.create({
    textFont:{
        fontFamily: 'Poppins'
    },
    img:{
        width:130,
        height:170
    }
})

export default Home