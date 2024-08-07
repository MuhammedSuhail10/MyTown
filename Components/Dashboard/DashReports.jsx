import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const DashReports = ({ icon, rate, title }) => {
    return (
        <View style={styles.Dcontainer} className='mt-2 h-[65] px-[15] flex bg-[#191919] flex-row justify-between items-center rounded-lg'>
            <View className='w-[50%] rounded-lg h-[38] flex flex-row justify-start items-center'>
                {icon}
                <Text style={styles.textFont} className='text-[Poppins] pl-[10] tracking-wider text-center text-[14px] text-white '>{title}</Text>
            </View>
            <View className=' rounded-lg h-[35] flex justify-center'>
                <Text style={styles.textFont} className='text-[Poppins] tracking-wider text-center text-[14px] text-white '>{rate}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Dcontainer: {
        shadowOpacity: 1, elevation: 1, borderStartWidth: 0.5, borderEndWidth: 0.5, borderBottomWidth: 1, borderColor: 'rgba(255, 255, 255, 0.15)', paddingHorizontal: 10, paddingVertical: 7, paddingBottom: 7
    },
    textFont:{
        fontFamily: 'Poppins'
    },
})

export default DashReports