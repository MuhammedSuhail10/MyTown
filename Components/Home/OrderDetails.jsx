import React, { useState } from 'react';
import { Dimensions, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop, Line } from "react-native-svg";
import LinearButton from '../Ui/LinearButton';
import OrderWorthBox from './OrderWorthBox';
import OrderDetailsBox from './OrderDetailsBox';
import SwipeBtn from './../Ui/SwipeBtn';
import { useLinkTo } from '@react-navigation/native';

const OrderDetails = () => {
    const linkTo = useLinkTo();
    const [showWorth, setShowWorth] = useState(true);
    const [showDetails, setShowDetails] = useState(false);
    const { height } = Dimensions.get('window');
    return (
        <ScrollView className='bg-[#0F0F0F] h-[100%] px-5 '>
            <View className='flex flex-row h-[30] items-center my-8 '>
                <TouchableOpacity onPress={() => linkTo('/Home')}>
                    <Svg
                        width={24}
                        height={24}
                        viewBox="0 0 1024 1024"
                        className="icon"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <Path fill="#fff" d="M224 480h640a32 32 0 110 64H224a32 32 0 010-64z" />
                        <Path
                            fill="#fff"
                            d="M237.248 512l265.408 265.344a32 32 0 01-45.312 45.312l-288-288a32 32 0 010-45.312l288-288a32 32 0 1145.312 45.312L237.248 512z"
                        />
                    </Svg>
                </TouchableOpacity>
                <View className='flex justify-center  w-[90%] '>
                    <Text style={{ fontFamily: 'Poppins' }} className='text-[Poppins] tracking-wider text-center text-[20px] text-white '>MTID00013</Text>
                </View>
            </View>
            <OrderWorthBox show={showWorth} setShow={() => setShowWorth((prevWorth) => (prevWorth ? false : true))} />
            <OrderDetailsBox show={showDetails} setShow={() => setShowDetails((prevDetails) => (prevDetails ? false : true))} />
            <SwipeBtn title='Accept Delivery' title2='Accept Delivery' actionscript atitle='Order Accepted' aicon={<Svg
                width={52}
                height={52}
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <Path
                    d="M15.6301 21.8399C15.2907 21.4665 14.8168 21.2433 14.3128 21.2193C13.8088 21.1953 13.3159 21.3725 12.9426 21.7119C12.5692 22.0513 12.346 22.5251 12.322 23.0292C12.298 23.5332 12.4752 24.0261 12.8146 24.3994L22.4768 34.8935C22.6466 35.0845 22.8531 35.2396 23.0839 35.3495C23.3147 35.4594 23.5652 35.5219 23.8205 35.5333H23.8845C24.1369 35.5404 24.3877 35.4926 24.6197 35.3931C24.8517 35.2937 25.0594 35.145 25.2283 34.9574L49.6717 10.578C49.8537 10.4047 49.9986 10.1962 50.0976 9.9652C50.1966 9.73422 50.2476 9.48553 50.2476 9.23423C50.2476 8.98292 50.1966 8.73423 50.0976 8.50325C49.9986 8.27226 49.8537 8.06379 49.6717 7.89048C49.3139 7.53676 48.8311 7.33838 48.328 7.33838C47.8249 7.33838 47.342 7.53676 46.9842 7.89048L23.9485 30.8622L15.6301 21.8399Z"
                    fill="#D6D6D6"
                />
                <Path
                    d="M49.2239 24.4631C48.9705 24.4585 48.7188 24.5049 48.4838 24.5997C48.2487 24.6945 48.0352 24.8358 47.856 25.015C47.6768 25.1942 47.5356 25.4076 47.4408 25.6427C47.346 25.8777 47.2995 26.1294 47.3042 26.3828C47.3042 30.6604 46.0358 34.8419 43.6593 38.3986C41.2828 41.9554 37.9049 44.7275 33.9529 46.3644C30.0009 48.0014 25.6523 48.4297 21.4569 47.5952C17.2614 46.7607 13.4077 44.7008 10.383 41.6761C7.35824 38.6513 5.29838 34.7976 4.46386 30.6022C3.62934 26.4068 4.05764 22.0581 5.69461 18.1061C7.33158 14.1541 10.1037 10.7763 13.6604 8.39979C17.2171 6.02327 21.3986 4.75481 25.6763 4.75481C26.1854 4.75481 26.6736 4.55257 27.0336 4.19256C27.3937 3.83256 27.5959 3.34429 27.5959 2.83517C27.5959 2.32605 27.3937 1.83778 27.0336 1.47778C26.6736 1.11778 26.1854 0.915527 25.6763 0.915527C20.6393 0.915527 15.7155 2.40916 11.5274 5.20753C7.33934 8.00591 4.07513 11.9834 2.14758 16.6369C0.220019 21.2904 -0.284318 26.411 0.698342 31.3512C1.681 36.2914 4.10652 40.8292 7.66819 44.3909C11.2298 47.9525 15.7677 50.378 20.7078 51.3607C25.648 52.3434 30.7686 51.839 35.4222 49.9115C40.0757 47.9839 44.0531 44.7197 46.8515 40.5316C49.6499 36.3436 51.1435 31.4197 51.1435 26.3828C51.1482 26.1294 51.1018 25.8777 51.0069 25.6427C50.9121 25.4076 50.7709 25.1942 50.5917 25.015C50.4125 24.8358 50.199 24.6945 49.964 24.5997C49.729 24.5049 49.4773 24.4585 49.2239 24.4631Z"
                    fill="#D6D6D6"
                />
            </Svg>} icon={<Svg
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
        </ScrollView>
    )
}

export default OrderDetails