import React, { useState } from 'react';
import { Dimensions, ScrollView, Text, View, TouchableWithoutFeedback, Modal, TouchableHighlight, StyleSheet, } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop, Line } from "react-native-svg";
import OrderWorthBox from '../Home/OrderWorthBox';
import OrderDetailsBox from '../Home/OrderDetailsBox';
import OrderStatus from './../Home/OrderStatus';
import SideMenu from '../Ui/SideMenu';
import SwipeBtns from './SwipeBtns';
import { useNavigation } from '@react-navigation/native';
import HeadBanner from './HeadBanner';

const Processing = () => {
    const navigation = useNavigation();
    const [showWorth, setShowWorth] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [showStatus, setShowStatus] = useState(false);
    const [open, setOpen] = useState(false);
    const [progress, setProgress] = useState(0.12);
    const { height } = Dimensions.get('window');
    if (progress == 0.60) {
        navigation.replace('Success');
    }
    return (
        <View className='bg-[#0F0F0F] h-[100%] px-5 '>
            <ScrollView className='h-[100%] mb-[35] '>
                <Modal transparent={true} visible={open} onRequestClose={() => setOpen(false)} animationType="fade" >
                    <TouchableWithoutFeedback onPress={() => setOpen(false)}>
                        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                            <TouchableWithoutFeedback>
                                <View style={{ position: 'absolute', width: '80%', height: '100%', backgroundColor: '#1E1E1E' }}>
                                    <SideMenu />
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
                <View >
                    <View className='flex flex-row h-[30] items-center my-8 '>
                        <TouchableHighlight onPress={() => setOpen(true)}>
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
                        </TouchableHighlight>
                        <View className='flex justify-center  w-[90%] '>
                            <Text style={styles.textFont} className='text-[Poppins] tracking-wider text-center text-[20px] text-white '>MTID00013</Text>
                        </View>
                    </View>
                    <HeadBanner />
                    <OrderWorthBox show={showWorth} setShow={() => setShowWorth((prevWorth) => (prevWorth ? false : true))} />
                    <OrderDetailsBox show={showDetails} setShow={() => setShowDetails((prevDetails) => (prevDetails ? false : true))} />
                    <OrderStatus progress={progress} show={showStatus} setShow={() => setShowStatus((prevWorth) => (prevWorth ? false : true))} />
                </View >
            </ScrollView>
            <View className='h-[6%] flex  justify-center '>
                <SwipeBtns width={350} progress={progress} setProgress={() => setProgress(progress + 0.12)} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textFont: {
        fontFamily: 'Poppins'
    },

    textActive: {
        backgroundColor: 'rgba(159, 255, 87, 1)',
        width: 10
    }
})

export default Processing