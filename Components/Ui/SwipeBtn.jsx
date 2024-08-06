import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SwipeButton from 'rn-swipe-button';
import Svg, { Path, Defs, Stop } from "react-native-svg";
import ActionSheetUi from './ActionSheetUi';

const CheckoutButton = ({ icon }) => {
    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} className='w-[100%] h-[fit] py-[16] px-[20] ' colors={['#fc435a', '#fc435a', '#f84c39']}>{icon}</LinearGradient>
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

const SwipeBtn = ({ title, title2, icon, actionscript, atitle, aicon, setProgress }) => {
    const [swipe, setSwipe] = useState(false);
    const actionSheetRef = useRef(null);
    const handleSwipeSuccess = () => {
        setSwipe(true);
        actionSheetRef.current?.show();
        setProgress(true)
    };
    return (
        <View className='mb-[30] w-[100%]' >
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[swipe ? '#fc435a' : '#6c757d', swipe ? '#f84c39' : '#121416',]} style={{ borderStartWidth: 1.5, borderEndWidth: 1, borderTopWidth: 1, borderColor: 'rgba(255, 255, 255, 0.15)', borderRadius: 35, marginTop: 30, height: 70, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <SwipeButton
                    containerStyles={{ borderRadius: 30, display: 'flex', marginLeft: 8, borderWidth: 0, justifyContent: 'center', alignItems: 'center' }}
                    height={55}
                    width='99%'
                    // onSwipeFail={() => updateSwipeStatusMessage('Incomplete swipe!')}
                    onSwipeStart={() => setSwipe(false)}
                    onSwipeSuccess={handleSwipeSuccess}
                    railBackgroundColor="transparent"
                    railFillBackgroundColor='transparent'
                    railStyles={{ borderRadius: 30, borderWidth: 0 }}
                    thumbIconComponent={swipe ? () => <CheckoutButton2 /> : () => <CheckoutButton icon={icon} />}
                    thumbIconStyles={{ borderRadius: 30, borderWidth: 0 }}
                    thumbIconWidth={55}
                    title={swipe ? title2 : title}
                    titleColor='#f8f9fa'
                    titleStyles={{ fontFamily: 'Poppins', fontSize: 13, paddingTop: 2 }}
                />
            </LinearGradient>
            {actionscript && <ActionSheetUi title={atitle} icon={aicon} ref={actionSheetRef} />}
        </View>
    )
}

export default SwipeBtn