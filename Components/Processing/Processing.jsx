import React, { useState } from 'react';
import { Dimensions, ScrollView, Text, View, TouchableWithoutFeedback, Modal } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop, Line } from "react-native-svg";
import LinearButton from '../Ui/LinearButton';
import SwipeBtn from './../Ui/SwipeBtn';
import OrderWorthBox from '../Home/OrderWorthBox';
import OrderDetailsBox from '../Home/OrderDetailsBox';
import OrderStatus from './../Home/OrderStatus';
import SideMenu from '../Ui/SideMenu';

const Processing = () => {
    const [showWorth, setShowWorth] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [showStatus, setShowStatus] = useState(true);
    const [picked, setPicked] = useState(true);
    const [reached, setReached] = useState(false);
    const [open, setOpen] = useState(false);
    const [progress, setProgress] = useState(0.12);
    const { height } = Dimensions.get('window');
    return (
        <ScrollView className='bg-[#0F0F0F] h-[100%] px-5 '>
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
                    <Svg onPress={() => setOpen(true)}
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
                        <Text style={{ fontFamily: 'Poppins' }} className='text-[Poppins] tracking-wider text-center text-[20px] text-white '>MTID00013</Text>
                    </View>
                </View>
                <OrderWorthBox show={showWorth} setShow={() => setShowWorth((prevWorth) => (prevWorth ? false : true))} />
                <OrderDetailsBox show={showDetails} setShow={() => setShowDetails((prevDetails) => (prevDetails ? false : true))} />
                <OrderStatus progress={progress} show={showStatus} setShow={() => setShowStatus((prevWorth) => (prevWorth ? false : true))} />
            </View >
            <View className='mt-[-15] '>
                <SwipeBtn progress={progress} setProgress={() => setProgress(progress + 0.12)} title='Slide if Picked Delivery' title2='Slide if Picked Delivery' actionscript atitle='Order is on the way' aicon={<Svg
                    width={52}
                    height={50}
                    viewBox="0 0 52 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <Path
                        d="M3.0751 11.4653H14.7849C15.4505 11.4653 16.0888 11.7297 16.5595 12.2004C17.0301 12.671 17.2945 13.3094 17.2945 13.9749V23.1752C17.2945 23.8407 17.0301 24.4791 16.5595 24.9497C16.0888 25.4204 15.4505 25.6848 14.7849 25.6848H3.0751C2.40951 25.6848 1.77118 25.4204 1.30054 24.9497C0.829896 24.4791 0.565491 23.8407 0.565491 23.1752V13.9756C0.565407 13.646 0.630258 13.3196 0.75634 13.015C0.882422 12.7104 1.06727 12.4337 1.30031 12.2006C1.53336 11.9675 1.81005 11.7826 2.11457 11.6564C2.41909 11.5303 2.74548 11.4653 3.0751 11.4653Z"
                        fill="white"
                    />
                    <Path
                        d="M28.1885 7.05441C30.3308 7.05441 32.0674 5.60738 32.0674 3.82237C32.0674 2.03737 30.3308 0.590332 28.1885 0.590332C26.0462 0.590332 24.3095 2.03737 24.3095 3.82237C24.3095 5.60738 26.0462 7.05441 28.1885 7.05441Z"
                        fill="white"
                    />
                    <Path
                        d="M9.76764 28.0712C9.76784 29.3698 10.2785 30.6164 11.1895 31.5419H24.7908V28.0667C24.7908 27.8461 24.7031 27.6345 24.5471 27.4785C24.3911 27.3225 24.1795 27.2349 23.9589 27.2349H10.5995C10.3785 27.2362 10.167 27.3249 10.0112 27.4816C9.85536 27.6383 9.7678 27.8502 9.76764 28.0712Z"
                        fill="white"
                    />
                    <Path
                        d="M51.3721 41.0435C50.9642 39.5353 50.0495 38.2135 48.7817 37.3004C47.514 36.3873 45.9705 35.9384 44.4108 36.0294C44.5419 35.5408 44.6094 35.0373 44.6118 34.5314C44.596 33.7293 44.3858 32.943 43.9991 32.2401C43.6125 31.5371 43.061 30.9385 42.392 30.4957C40.5952 29.3042 39.2521 26.2725 39.0493 23.0859H40.649C41.3116 23.0862 41.9472 22.8236 42.4164 22.3557C42.8856 21.8879 43.15 21.2529 43.1515 20.5903V18.9324C43.15 18.2706 42.8863 17.6363 42.418 17.1686C41.9498 16.7008 41.3153 16.4377 40.6534 16.4369H34.9303C30.0935 15.0438 28.6384 13.4397 27.7682 12.4786L27.7157 12.4203C27.8025 11.779 27.6864 11.1265 27.3837 10.5545C27.0809 9.98246 26.6068 9.5195 26.0277 9.23053C25.6141 9.03257 25.1612 8.93057 24.7027 8.93215C24.2442 8.93373 23.792 9.03884 23.3798 9.23964C22.9676 9.44045 22.6061 9.73175 22.3222 10.0918C22.0384 10.4519 21.8395 10.8714 21.7405 11.3191L19.3454 22.7864C19.2748 23.1272 19.2762 23.479 19.3496 23.8193C19.423 24.1595 19.5668 24.4806 19.7717 24.7619C19.9766 25.0433 20.238 25.2787 20.5393 25.453C20.8406 25.6273 21.175 25.7366 21.521 25.774L25.6297 26.227C25.8417 26.2495 26.037 26.3526 26.1752 26.5148C26.3134 26.6771 26.3841 26.8863 26.3726 27.0992L25.7237 38.0648C25.0512 37.4769 24.5729 36.6987 24.3523 35.8331C24.1317 34.9674 24.179 34.0552 24.4881 33.2171H11.702C10.3532 35.4516 8.1942 39.6402 9.06764 42.3674C9.23044 42.8803 9.51338 43.3468 9.89292 43.7282C10.2724 44.1097 10.7376 44.3949 11.2496 44.5603C11.6256 44.6759 12.0201 44.7193 12.4123 44.6883C12.5071 46.0414 13.1116 47.3082 14.1037 48.2332C15.0958 49.1582 16.4018 49.6725 17.7582 49.6725C19.1146 49.6725 20.4206 49.1582 21.4127 48.2332C22.4048 47.3082 23.0092 46.0414 23.1041 44.6883H37.4419C37.5812 44.6806 37.7177 44.6454 37.8433 44.5846C37.969 44.5239 38.0813 44.4388 38.1739 44.3344C38.2754 44.8286 38.4404 45.3075 38.6647 45.7594C38.7273 45.8912 38.8235 46.0041 38.9435 46.087C39.0636 46.1699 39.2033 46.2197 39.3487 46.2315C39.4941 46.2433 39.6401 46.2166 39.7719 46.1542C39.9038 46.0918 40.0169 45.9958 40.0999 45.8759C40.1972 45.7364 40.3028 45.5994 40.4141 45.4651C40.5282 46.1853 40.7881 46.8747 41.1781 47.4909C41.5681 48.1072 42.0798 48.6372 42.6819 49.0486C43.284 49.46 43.9639 49.744 44.6797 49.8833C45.3955 50.0225 46.1322 50.0141 46.8447 49.8585C47.5571 49.7029 48.2303 49.4033 48.8228 48.9783C49.4154 48.5532 49.9148 48.0116 50.2906 47.3866C50.6663 46.7616 50.9105 46.0665 51.008 45.3438C51.1055 44.6211 51.0543 43.8861 50.8576 43.1839C51.0727 43.1603 51.2698 43.0532 51.4066 42.8856C51.5434 42.7181 51.6089 42.5035 51.589 42.2881C51.5573 41.8674 51.4846 41.4501 51.3721 41.0435ZM17.7579 48.0016C16.844 48.0015 15.9627 47.6621 15.285 47.049C14.6073 46.436 14.1814 45.5931 14.0901 44.6838H21.4263C21.3349 45.5932 20.909 46.4362 20.2311 47.0492C19.5533 47.6623 18.6718 48.0017 17.7579 48.0016ZM33.9756 38.8641H30.7257L32.1629 25.2794C32.2201 24.7292 32.0928 24.1756 31.8012 23.7056C31.5095 23.2356 31.07 22.8758 30.5516 22.6827L26.4526 21.1528C26.2647 21.0824 26.1086 20.9465 26.013 20.7702C25.9174 20.5938 25.8887 20.3888 25.9323 20.193L26.5562 17.5055C28.6896 19.2062 31.2653 20.2605 33.9788 20.5436L33.9756 38.8641ZM46.1769 48.2486C45.6219 48.3215 45.0576 48.2673 44.5266 48.0901C43.9957 47.9128 43.512 47.6171 43.1122 47.2253C42.7123 46.8336 42.4068 46.356 42.2188 45.8288C42.0307 45.3016 41.965 44.7385 42.0266 44.1821L42.2826 43.8622C44.1981 42.6747 46.4806 42.2257 48.7031 42.599L48.9009 42.7513C49.2046 43.2768 49.3737 43.8692 49.3931 44.4758C49.4125 45.0824 49.2816 45.6843 49.0122 46.2281C48.7427 46.7719 48.3429 47.2407 47.8485 47.5926C47.354 47.9445 46.7802 48.1688 46.1782 48.2454L46.1769 48.2486Z"
                        fill="white"
                    />
                </Svg>} icon={<Svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <Path
                        d="M8.0475 11.7261L20.3441 5.15128L16.0703 3L3.39172 9.38217L8.0475 11.7261Z"
                        fill="white"
                    />
                    <Path
                        d="M24.0785 7.03125L11.7819 13.606L16.0691 15.765L28.7496 9.38281L24.0785 7.03125Z"
                        fill="white"
                    />
                    <Path
                        d="M15.7202 16.3773L11.4023 14.2017V18.9771L9.5351 17.0971H7.67113V12.3243L3 9.97461V22.739L15.7202 29.1422V16.3773Z"
                        fill="white"
                    />
                    <Path
                        d="M16.4209 16.3773V29.1422L29.1411 22.739V9.97461L16.4209 16.3773Z"
                        fill="white"
                    />
                </Svg>} />
            </View>
        </ScrollView>
    )
}

export default Processing