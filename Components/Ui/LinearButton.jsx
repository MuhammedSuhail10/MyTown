import React from 'react'
import { Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Svg, { Path, Defs, Stop } from "react-native-svg";

const LinearButton = ({ name, w, h, icon, m }) => {
    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ width: `${w}%`, paddingVertical: h, marginTop: m }} className='rounded-lg flex flex-row gap-1 justify-center  ' colors={['#fc435a', '#fc435a', '#f84c39']}>
            {icon && <Svg
                fill="#fff"
                width="20px"
                height="20px"
                viewBox="0 0 50 50"
                baseProfile="tiny"
                xmlns="http://www.w3.org/2000/svg"
                overflow="inherit"
            >
                <Path d="M32.517 48.107l-7.072-21.107h-22.983l44.198-24.804z" />
            </Svg>}
            <Text style={{ fontFamily: 'Poppins', }} className='tracking-[3px] text-[14px] text-white  '>{name}</Text>
        </LinearGradient>
    )
}

export default LinearButton