import React from 'react'
import { Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Svg, { Path, Defs, Stop } from "react-native-svg";

const LinearButton = ({ name, w, h, icon, m }) => {
    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} style={{ width: `${w}%`, paddingVertical: h, marginTop: m }} className='rounded-lg flex flex-row gap-1 justify-center  ' colors={['#F84C38','#FD4161']}>
            {icon == 'locate' ? <Svg
                fill="#fff"
                width="15px"
                height="20px"
                viewBox="0 0 50 50"
                baseProfile="tiny"
                xmlns="http://www.w3.org/2000/svg"
                overflow="inherit"
            >
                <Path d="M32.517 48.107l-7.072-21.107h-22.983l44.198-24.804z" />
            </Svg> : icon == 'phone' ? <Svg
                width="16px"
                height="20px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
            >
                <Path
                    fill="#fff"
                    d="M20 16v4c-2.758 0-5.07-.495-7-1.325-3.841-1.652-6.176-4.63-7.5-7.675C4.4 8.472 4 5.898 4 4h4l1 4-3.5 3c1.324 3.045 3.659 6.023 7.5 7.675L16 15l4 1z"
                />
                <Path
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 18.675c1.93.83 4.242 1.325 7 1.325v-4l-4-1-3 3.675zm0 0C9.159 17.023 6.824 14.045 5.5 11m0 0C4.4 8.472 4 5.898 4 4h4l1 4-3.5 3z"
                />
            </Svg> : <></>}
            <Text style={{ fontFamily: 'Poppins', }} className='tracking-[1.5px] text-[14px] text-white  '>{name}</Text>
        </LinearGradient>
    )
}

export default LinearButton