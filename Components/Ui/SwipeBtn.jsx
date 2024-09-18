// import React, { useRef, useState } from 'react';
// import { View, Text, Animated, PanResponder, StyleSheet, Dimensions } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import { Svg, Path } from 'react-native-svg';
// import ActionSheetUi from './ActionSheetUi';

// const { width } = Dimensions.get('window');
// const SWIPE_THRESHOLD = width - 115;

// const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

// const CheckoutButton = ({ icon }) => (
//     <LinearGradient
//         start={{ x: 0, y: 0 }}
//         end={{ x: 1, y: 0 }}
//         colors={['#fc435a', '#fc435a', '#f84c39']}
//         style={styles.checkoutButton}
//     >
//         {icon}
//     </LinearGradient>
// );

// const CheckoutButton2 = () => (
//     <LinearGradient
//         start={{ x: 0, y: 0 }}
//         end={{ x: 1, y: 0 }}
//         colors={['#37B737', '#37B737', '#37B737']}
//         style={styles.checkoutButton2}
//     >
//         <Svg
//             width="30px"
//             height="30px"
//             strokeWidth={1.5}
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             color="#fff"
//         >
//             <Path
//                 d="M5 13L9 17L19 7"
//                 stroke="#fff"
//                 strokeWidth={1.5}
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//             />
//         </Svg>
//     </LinearGradient>
// );

// const SwipeBtn = ({
//     title,
//     title2,
//     icon,
//     actionscript,
//     atitle,
//     aicon,
//     ablackbtn,
//     ablacktitle,
//     agradtitle,
//     abtnicon,
//     setProgress,
//     progress,
//     swiped,
//     setSwiped
// }) => {
//     const [swipe, setSwipe] = useState(false);
//     const actionSheetRef = useRef(null);
//     const translateX = useRef(new Animated.Value(0)).current;

//     const handleSwipeSuccess = () => {
//         setSwipe(true);
//         actionSheetRef.current?.show();
//         if (progress) {
//             setProgress(true);
//         }
//         if (swiped) {
//             setSwiped(true);
//             console.log('object')
//         }
//     };

//     const panResponder = useRef(
//         PanResponder.create({
//             onStartShouldSetPanResponder: () => true,
//             onPanResponderMove: (_, gestureState) => {
//                 const { dx } = gestureState;
//                 if (dx >= 0 && dx <= SWIPE_THRESHOLD) {
//                     translateX.setValue(dx);
//                 }
//             },
//             onPanResponderRelease: (_, gestureState) => {
//                 const { dx } = gestureState;
//                 if (dx > SWIPE_THRESHOLD * 0.5) {
//                     Animated.timing(translateX, {
//                         toValue: width - 115,
//                         duration: 200,
//                         useNativeDriver: true,
//                     }).start(() => handleSwipeSuccess());
//                 } else {
//                     Animated.spring(translateX, {
//                         toValue: 0,
//                         useNativeDriver: true,
//                     }).start();
//                 }
//             },
//         })
//     ).current;

//     const backgroundInterpolation = translateX.interpolate({
//         inputRange: [0, SWIPE_THRESHOLD],
//         outputRange: [0, 1],
//         extrapolate: 'clamp',
//     });

//     return (
//         <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[swipe ? '#fc435a' : '#6c757d', swipe ? '#f84c39' : '#121416',]} style={styles.container}>
//             <AnimatedLinearGradient
//                 colors={['#fc435a', '#f84c39']}
//                 start={{ x: 0, y: 0 }}
//                 end={{ x: 1, y: 0 }}
//                 style={[styles.gradient, { opacity: backgroundInterpolation, }]}
//             />
//             <Text style={styles.text}>{swipe ? title2 : title}</Text>
//             <Animated.View
//                 style={[
//                     styles.button,
//                     {
//                         transform: [{ translateX }],
//                     },
//                 ]}
//                 {...panResponder.panHandlers}
//             >
//                 {swipe ? <CheckoutButton2 /> : <CheckoutButton icon={icon} />}
//             </Animated.View>
//             {actionscript && (
//                 <ActionSheetUi
//                     ablackbtn={ablackbtn}
//                     abtnicon={abtnicon}
//                     ablacktitle={ablacktitle}
//                     agradtitle={agradtitle}
//                     title={atitle}
//                     icon={aicon}
//                     ref={actionSheetRef}
//                 />
//             )}
//         </LinearGradient>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         marginBottom: 30,
//         width: '100%',
//         height: 70,
//         borderRadius: 35,
//         overflow: 'hidden',
//         justifyContent: 'center',
//         borderWidth: 0.25,
//         borderColor: '#fff',
//     },
//     gradient: {
//         ...StyleSheet.absoluteFillObject,
//     },
//     text: {
//         color: '#f8f9fa',
//         fontSize: 13,
//         fontFamily: 'Poppins',
//         fontWeight: 'bold',
//         textAlign: 'center',
//     },
//     button: {
//         position: 'absolute',
//         left: 5,
//         width: 55,
//         height: 55,
//         borderRadius: 27.5,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     checkoutButton: {
//         width: '100%',
//         height: '100%',
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 27.5,
//     },
//     checkoutButton2: {
//         width: '100%',
//         height: '100%',
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 27.5,
//     },
// });

// export default SwipeBtn;

import React, { useRef, useState } from 'react';
import { View, Text, Animated, PanResponder, StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Svg, Path } from 'react-native-svg';
import ActionSheetUi from './ActionSheetUi';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const CheckoutButton = ({ icon }) => (
    <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#fc435a', '#fc435a', '#f84c39']}
        style={styles.checkoutButton}
    >
        {icon}
    </LinearGradient>
);

const CheckoutButton2 = () => (
    <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#37B737', '#37B737', '#37B737']}
        style={styles.checkoutButton2}
    >
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

const SwipeBtn = ({
    title,
    title2,
    icon,
    actionscript,
    atitle,
    aicon,
    ablackbtn,
    ablacktitle,
    agradtitle,
    abtnicon,
    setProgress,
    progress,
    swiped,
    setSwiped,
    width
}) => {
    const [swipe, setSwipe] = useState(false);
    const actionSheetRef = useRef(null);
    const translateX = useRef(new Animated.Value(0)).current;
    const SWIPE_THRESHOLD = width - (70); // Adjust based on dynamic width

    const handleSwipeSuccess = () => {
        setSwipe(true);
        actionSheetRef.current?.show();
        if (progress) {
            setProgress(true);
        }
        if (swiped) {
            setSwiped(true);
            console.log('Swipe successful');
        }
    };

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (_, gestureState) => {
                const { dx } = gestureState;
                if (dx >= 0 && dx <= SWIPE_THRESHOLD) {
                    translateX.setValue(Math.min(dx, SWIPE_THRESHOLD)); // Clamp translateX
                }
            },
            onPanResponderRelease: (_, gestureState) => {
                const { dx } = gestureState;
                if (dx > SWIPE_THRESHOLD * 0.5) {
                    Animated.timing(translateX, {
                        toValue: SWIPE_THRESHOLD,
                        duration: 200,
                        useNativeDriver: true,
                    }).start(() => handleSwipeSuccess());
                } else {
                    Animated.spring(translateX, {
                        toValue: 0,
                        useNativeDriver: true,
                    }).start();
                }
            },
        })
    ).current;

    const backgroundInterpolation = translateX.interpolate({
        inputRange: [0, SWIPE_THRESHOLD],
        outputRange: [0, 1],
        extrapolate: 'clamp',
    });

    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={[swipe ? '#fc435a' : '#6c757d', swipe ? '#f84c39' : '#121416']}
            style={[styles.container, { width }]} // Use dynamic width
        >
            <AnimatedLinearGradient
                colors={['#fc435a', '#f84c39']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={[styles.gradient, { opacity: backgroundInterpolation }]}
            />
            <Text style={styles.text}>{swipe ? title2 : title}</Text>
            <Animated.View
                style={[
                    styles.button,
                    {
                        transform: [{ translateX }],
                    },
                ]}
                {...panResponder.panHandlers}
            >
                {swipe ? <CheckoutButton2 /> : <CheckoutButton icon={icon} />}
            </Animated.View>
            {actionscript && (
                <ActionSheetUi
                    ablackbtn={ablackbtn}
                    abtnicon={abtnicon}
                    ablacktitle={ablacktitle}
                    agradtitle={agradtitle}
                    title={atitle}
                    icon={aicon}
                    ref={actionSheetRef}
                />
            )}
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10, // Adjust the margin as needed
        height: 70,
        borderRadius: 35,
        overflow: 'hidden',
        justifyContent: 'center',
        borderWidth: 0.25,
        borderColor: '#fff',
    },
    gradient: {
        ...StyleSheet.absoluteFillObject,
    },
    text: {
        color: '#f8f9fa',
        fontSize: 13,
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        position: 'absolute',
        left: 5,
        width: 55,
        height: 55,
        borderRadius: 27.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkoutButton: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 27.5,
    },
    checkoutButton2: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 27.5,
    },
});

export default SwipeBtn;