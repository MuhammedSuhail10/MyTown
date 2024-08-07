import React from 'react'
import { StyleSheet, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from "react-native";

const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
    datasets: [
        {
            data: [20, 45, 28, 80, 99, 43, 33, 45],
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // optional
            strokeWidth: 3
        }
    ],
    yAxisLabel: 'Orders',
};

const ChartUi = () => {
    const screenWidth = Dimensions.get("window").width;
    return (
        <View className='mt-[30] '>
            <LineChart
                data={data}
                width={screenWidth}
                height={300}
                chartConfig={chartConfig}
                withDots={false}
                withHorizontalLines={false}
                XAxisLabel='Orders'
                bezier
            />
        </View>
    )
}

const chartConfig = {
    backgroundGradientFrom: "#0F0F0F",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#0F0F0F",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
    fillShadowGradientFrom: "rgba(253, 65, 97, 1)",
    fillShadowGradientTo: "rgba(248, 76, 56, 0)",
    fillShadowGradientFromOpacity: 0.6,
    fillShadowGradientToOpacity: 0,
};

export default ChartUi