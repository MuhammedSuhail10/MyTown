import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Path, Defs, Stop } from "react-native-svg";
import ActionSheet from 'react-native-actions-sheet';
import { Button } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

const ActionSheetUi = React.forwardRef((props, ref) => {
    const buttonWidth = props.ablackbtn ? '50%' : '100%';
    return (
        <ActionSheet ref={ref} containerStyle={{ backgroundColor: '#392323', height: 318, }}>
            <View style={{ display: 'flex', alignItems: 'center', paddingVertical: 17, height: 260, }}>
                <Svg
                    width={80}
                    height={5}
                    viewBox="0 0 80 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    {...props}
                >
                    <Path
                        d="M76.8353 2.44336H2.37036"
                        stroke="#363636"
                        strokeWidth={4.47917}
                        strokeLinecap="round"
                    />
                </Svg>
                <Text style={styles.textFont} className='text-[#D9D9D9] text-[16px] tracking-wider pt-[30] '>#MTID00013</Text>
                <View style={{ marginTop: 45 }}>
                    {props.icon}
                </View>
                <Text style={styles.textFont} className='text-[#D9D9D9] text-[12px] tracking-wider pt-[20] '>{props.title}</Text>
            </View>
            <View className='flex flex-row  ' style={{ height: 58 }}>
                {props.ablackbtn && <Button mode="contained" className='bg-[#191919] rounded-none w-[50%] flex flex-row items-center justify-center'>
                    <Text style={styles.textFont} className='text-[#D9D9D9] text-[14px] tracking-wider '>{props.ablacktitle}</Text>
                </Button>}
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} style={{ width: buttonWidth }} className=' flex flex-row justify-center items-center h-[100%] ' colors={['#F84C38', '#FD4161']}>
                    <View>
                        {props.abtnicon}
                    </View>
                    <Text style={styles.textFont} className='text-[#D9D9D9] text-[14px] pt-[3] px-[5] tracking-wider '>{props.agradtitle}</Text>
                </LinearGradient>
            </View>
        </ActionSheet>
    )
});

const styles = StyleSheet.create({
    textFont: {
        fontFamily: 'Poppins'
    },
})

export default ActionSheetUi