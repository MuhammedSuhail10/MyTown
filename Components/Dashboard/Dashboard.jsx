import React, { useState } from 'react';
import { Dimensions, ScrollView, Text, View, TouchableWithoutFeedback, Modal, TouchableHighlight, StyleSheet, } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop, Line } from "react-native-svg";
import SideMenu from '../Ui/SideMenu';
import ChartUi from './../Ui/ChartUi';
import DashReports from './DashReports';

const Dashboard = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState('day');
    return (
        <ScrollView className='bg-[#0F0F0F] h-[100%] px-5 '>
            <Modal transparent={true} visible={open} onRequestClose={() => setOpen(false)} animationType="fade" >
                <TouchableWithoutFeedback onPress={() => setOpen(false)}>
                    <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <TouchableWithoutFeedback>
                            <View className='absolute w-[80%] h-[100%] bg-[#1e1e1e] '>
                                <SideMenu />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <View>
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
                        <Text style={styles.textFont} className='text-[Poppins] tracking-wider text-center text-[20px] text-white '>Dashboard</Text>
                    </View>
                </View>
                <View className='flex flex-row justify-between'>
                    <View style={styles.container} className='w-[65%] px-[5] bg-[#191919] h-[45] flex-row flex justify-between items-center rounded-xl '>
                        <View className='w-[18%] rounded-lg h-[35] flex justify-center' style={active == 'day' ? styles.activebg : styles.bg}>
                            <Text style={styles.textFont} className='text-[Poppins] tracking-wider text-center text-[12px] text-white '>1d</Text>
                        </View>
                        <View className='w-[18%] rounded-lg h-[35] flex justify-center' style={active == 'week' ? styles.activebg : styles.bg}>
                            <Text style={styles.textFont} className='text-[Poppins] tracking-wider text-center text-[12px] text-white '>1w</Text>
                        </View>
                        <View className='w-[18%] rounded-lg h-[35] flex justify-center' style={active == 'week' ? styles.activebg : styles.bg}>
                            <Text style={styles.textFont} className='text-[Poppins] tracking-wider text-center text-[12px] text-white '>1m</Text>
                        </View>
                        <View className='w-[18%] rounded-lg h-[35] flex justify-center' style={active == 'week' ? styles.activebg : styles.bg}>
                            <Text style={styles.textFont} className='text-[Poppins] tracking-wider text-center text-[12px] text-white '>1y</Text>
                        </View>
                    </View>
                    <View style={styles.container} className='w-[30%] px-[10] bg-[#191919] h-[45] flex-row flex justify-between items-center rounded-xl '>
                        <View className='w-[100%] rounded-lg h-[35] flex flex-row justify-between items-center' style={styles.bg}>
                            <Text style={styles.textFont} className='text-[Poppins] tracking-wider text-center text-[12px] text-white '>January</Text>
                            <Svg
                                width={13}
                                height={8}
                                viewBox="0 0 13 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <Path
                                    d="M1.28882 1.5L6.28882 6.5L11.2888 1.5"
                                    stroke="white"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </Svg>
                        </View>
                    </View>
                </View>
                <View>
                    <ChartUi />
                    <View className='mt-[-20] '>
                        <Text style={styles.textFont} className='text-[Poppins] tracking-wider text-center text-[13px] text-white '>Month : Jan</Text>
                    </View>
                    <View className='absolute -rotate-90 flex flex-row items-center h-[100%] left-[-15] top-[-10] '>
                        <Text style={styles.textFont} className='text-[Poppins] tracking-wider text-center text-[13px] text-white '>Orders</Text>
                    </View>
                </View>
                <DashReports title='Total Orders' rate='8' icon={<Svg
                    width={45}
                    height={45}
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <Path
                        d="M21.756 0.430176H8.31845C3.7243 0.430176 0 4.15447 0 8.74863V22.1861C0 26.7803 3.7243 30.5046 8.31845 30.5046H21.756C26.3501 30.5046 30.0744 26.7803 30.0744 22.1861V8.74863C30.0744 4.15447 26.3501 0.430176 21.756 0.430176Z"
                        fill="url(#paint0_linear_271_1655)"
                    />
                    <Path
                        d="M9.48477 12.507L18.1488 7.87428L15.1375 6.3584L6.2041 10.8555L9.48477 12.507Z"
                        fill="white"
                    />
                    <Path
                        d="M20.7801 9.19873L12.1161 13.8315L15.1377 15.3525L24.0736 10.8554L20.7801 9.19873Z"
                        fill="white"
                    />
                    <Path
                        d="M14.8912 15.7831L11.8485 14.2545V17.619L10.5355 16.2918H9.21733V12.9273L5.92834 11.272V20.2655L14.8912 24.7773V15.7831Z"
                        fill="white"
                    />
                    <Path
                        d="M15.3848 15.7826V24.7768L24.3476 20.265V11.2715L15.3848 15.7826Z"
                        fill="white"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_271_1655"
                            x1={15.0372}
                            y1={30.5046}
                            x2={15.0372}
                            y2={0.430176}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FD4161" />
                            <Stop offset={1} stopColor="#F84C38" />
                        </LinearGradient>
                    </Defs>
                </Svg>} />
                <DashReports title='Total Earnings' rate='Rs 960' icon={<Svg
                    width={45}
                    height={45}
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <Path
                        d="M21.756 0.504395H8.31845C3.7243 0.504395 0 4.22869 0 8.82285V22.2603C0 26.8545 3.7243 30.5788 8.31845 30.5788H21.756C26.3501 30.5788 30.0744 26.8545 30.0744 22.2603V8.82285C30.0744 4.22869 26.3501 0.504395 21.756 0.504395Z"
                        fill="url(#paint0_linear_271_951)"
                    />
                    <Path
                        d="M20.5306 10.445C20.6447 10.445 20.7541 10.3997 20.8347 10.3191C20.9153 10.2384 20.9606 10.129 20.9606 10.015V8.58039C20.9606 8.46635 20.9153 8.35698 20.8347 8.27633C20.7541 8.19569 20.6447 8.15039 20.5306 8.15039H9.91822C9.80418 8.15039 9.69481 8.19569 9.61416 8.27633C9.53352 8.35698 9.48822 8.46635 9.48822 8.58039V10.1852C9.48856 10.299 9.53401 10.4081 9.61462 10.4884C9.69522 10.5688 9.8044 10.6139 9.91822 10.6139H12.9762C13.3924 10.5887 13.8086 10.6645 14.1892 10.8349C14.5698 11.0053 14.9036 11.2651 15.162 11.5923H9.91822C9.80429 11.5923 9.69501 11.6375 9.61439 11.718C9.53377 11.7985 9.48839 11.9077 9.48822 12.0217V13.4556C9.48822 13.5121 9.49934 13.568 9.52095 13.6202C9.54256 13.6724 9.57424 13.7198 9.61416 13.7597C9.65409 13.7996 9.7015 13.8313 9.75367 13.8529C9.80584 13.8745 9.86175 13.8856 9.91822 13.8856H15.6132C15.5201 14.513 15.1901 15.0808 14.6909 15.4721C14.1918 15.8634 13.5616 16.0484 12.9301 15.9889H9.91822C9.80418 15.9889 9.69481 16.0342 9.61416 16.1149C9.53352 16.1955 9.48822 16.3049 9.48822 16.4189V18.3194C9.48819 18.3788 9.50045 18.4375 9.52424 18.4919C9.54802 18.5463 9.58282 18.5952 9.62643 18.6355L15.5441 24.0981C15.6235 24.1714 15.7277 24.2121 15.8358 24.212H18.7959C18.8824 24.2118 18.9667 24.1856 19.038 24.1367C19.1093 24.0878 19.1643 24.0186 19.1956 23.9381C19.227 23.8575 19.2333 23.7694 19.2139 23.6852C19.1944 23.6009 19.15 23.5245 19.0864 23.4659L13.6769 18.4749C14.9332 18.4897 16.1474 18.0226 17.0698 17.1696C17.9923 16.3166 18.5527 15.1425 18.636 13.8888H20.5294C20.6434 13.8888 20.7528 13.8435 20.8334 13.7629C20.9141 13.6823 20.9594 13.5729 20.9594 13.4588V12.0217C20.9594 11.9076 20.9141 11.7983 20.8334 11.7176C20.7528 11.637 20.6434 11.5917 20.5294 11.5917H18.4267C18.3059 11.1889 18.1339 10.8033 17.9148 10.4444L20.5306 10.445Z"
                        fill="white"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_271_951"
                            x1={15.0372}
                            y1={30.5788}
                            x2={15.0372}
                            y2={0.504395}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FD4161" />
                            <Stop offset={1} stopColor="#F84C38" />
                        </LinearGradient>
                    </Defs>
                </Svg>} />
                <DashReports title='Total Time Covered' rate='5hr 31min' icon={<Svg
                    width={45}
                    height={45}
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <Path
                        d="M21.7558 0.241699H8.31833C3.72418 0.241699 -0.00012207 3.966 -0.00012207 8.56015V21.9977C-0.00012207 26.5918 3.72418 30.3161 8.31833 30.3161H21.7558C26.35 30.3161 30.0743 26.5918 30.0743 21.9977V8.56015C30.0743 3.966 26.35 0.241699 21.7558 0.241699Z"
                        fill="url(#paint0_linear_271_589)"
                    />
                    <Path
                        d="M15.314 7.5791C13.6696 7.5791 12.0622 8.06672 10.6949 8.9803C9.32767 9.89388 8.26205 11.1924 7.63281 12.7116C7.00356 14.2308 6.83895 15.9025 7.1598 17.5153C7.48065 19.1281 8.27254 20.6095 9.43534 21.7722C10.5981 22.9349 12.0796 23.7267 13.6924 24.0474C15.3052 24.3681 16.9769 24.2034 18.496 23.574C20.0152 22.9446 21.3136 21.8789 22.2271 20.5116C23.1406 19.1443 23.6281 17.5368 23.628 15.8924C23.6278 13.6875 22.7518 11.573 21.1926 10.014C19.6335 8.45495 17.5189 7.5791 15.314 7.5791ZM18.1154 18.6945C17.9737 18.8362 17.7815 18.9158 17.5811 18.9158C17.3807 18.9158 17.1885 18.8362 17.0468 18.6945L14.7797 16.4274C14.6379 16.2857 14.5583 16.0935 14.5583 15.8931V11.3582C14.5583 11.1578 14.6379 10.9656 14.7796 10.8239C14.9213 10.6822 15.1136 10.6025 15.314 10.6025C15.5144 10.6025 15.7066 10.6822 15.8483 10.8239C15.9901 10.9656 16.0697 11.1578 16.0697 11.3582V15.5815L18.1173 17.6291C18.259 17.7708 18.3386 17.963 18.3386 18.1634C18.3386 18.3638 18.259 18.556 18.1173 18.6977L18.1154 18.6945Z"
                        fill="white"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_271_589"
                            x1={15.0371}
                            y1={30.3161}
                            x2={15.0371}
                            y2={0.241699}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FD4161" />
                            <Stop offset={1} stopColor="#F84C38" />
                        </LinearGradient>
                    </Defs>
                </Svg>} />
                <DashReports title='Total Distance Covered' rate='32 km' icon={<Svg
                    width={45}
                    height={45}
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <Path
                        d="M21.756 0.65332H8.31845C3.7243 0.65332 0 4.37762 0 8.97177V22.4093C0 27.0034 3.7243 30.7277 8.31845 30.7277H21.756C26.3501 30.7277 30.0744 27.0034 30.0744 22.4093V8.97177C30.0744 4.37762 26.3501 0.65332 21.756 0.65332Z"
                        fill="url(#paint0_linear_271_1259)"
                    />
                    <Path
                        d="M14.8771 7.23535C13.8988 7.23535 12.9605 7.624 12.2687 8.31581C11.5769 9.00761 11.1882 9.9459 11.1882 10.9243C11.1882 12.5713 13.5993 15.5736 14.5233 16.6634C14.5666 16.7151 14.6208 16.7568 14.682 16.7853C14.7432 16.8139 14.8099 16.8287 14.8774 16.8287C14.945 16.8287 15.0117 16.8139 15.0729 16.7853C15.1341 16.7568 15.1882 16.7151 15.2316 16.6634C16.1556 15.5756 18.5667 12.5681 18.5667 10.9243C18.5667 10.4398 18.4712 9.96003 18.2858 9.51243C18.1004 9.06483 17.8286 8.65814 17.486 8.31558C17.1434 7.97303 16.7366 7.70132 16.289 7.51597C15.8414 7.33062 15.3616 7.23527 14.8771 7.23535ZM7.03409 13.558C6.86015 13.6276 6.71104 13.7477 6.606 13.9028C6.50096 14.0579 6.4448 14.2409 6.44476 14.4283V21.7574C6.44489 21.8337 6.46362 21.9088 6.49935 21.9761C6.53508 22.0435 6.58671 22.1011 6.64977 22.144C6.71283 22.1869 6.78541 22.2137 6.86119 22.2222C6.93698 22.2307 7.01368 22.2205 7.08464 22.1926L11.1293 20.3529V13.5279C10.8841 13.0932 10.6761 12.6386 10.5074 12.1688L7.03409 13.558ZM14.8771 17.7659C14.6735 17.7659 14.4723 17.7215 14.2876 17.6357C14.1029 17.55 13.9392 17.4249 13.8079 17.2693C13.232 16.5898 12.6203 15.8168 12.0661 15.0233V20.3529L17.6875 22.2265V15.0233C17.1333 15.8168 16.5216 16.5904 15.9457 17.2693C15.8145 17.4249 15.6509 17.55 15.4663 17.6359C15.2817 17.7218 15.0807 17.7657 14.8771 17.7659ZM22.667 11.9538L18.6249 13.7941V22.2265L22.7201 20.5884C22.894 20.5189 23.0431 20.399 23.1482 20.244C23.2532 20.089 23.3094 19.906 23.3095 19.7188V12.389C23.3095 12.3124 23.2908 12.237 23.2549 12.1693C23.219 12.1016 23.1671 12.0438 23.1037 12.0009C23.0403 11.9579 22.9674 11.9312 22.8912 11.923C22.8151 11.9148 22.7381 11.9254 22.667 11.9538Z"
                        fill="white"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_271_1259"
                            x1={15.0372}
                            y1={30.7277}
                            x2={15.0372}
                            y2={0.65332}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FD4161" />
                            <Stop offset={1} stopColor="#F84C38" />
                        </LinearGradient>
                    </Defs>
                </Svg>} />
                <DashReports title='Cash in Hand' rate='Rs 1800' icon={<Svg
                    width={45}
                    height={45}
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <Path
                        d="M21.756 0.727539H8.31845C3.7243 0.727539 0 4.45184 0 9.04599V22.4835C0 27.0776 3.7243 30.8019 8.31845 30.8019H21.756C26.3501 30.8019 30.0744 27.0776 30.0744 22.4835V9.04599C30.0744 4.45184 26.3501 0.727539 21.756 0.727539Z"
                        fill="url(#paint0_linear_271_2226)"
                    />
                    <Path
                        d="M15.1368 25.616C11.341 25.616 7.03833 25.6159 7.03833 20.7068C7.10335 19.0288 7.56352 17.3901 8.38183 15.9238C9.1879 14.361 10.3064 12.9798 11.6662 11.865H18.6112C19.971 12.9798 21.0882 14.361 21.8943 15.9238C22.7126 17.3901 23.1728 19.0288 23.2378 20.7068C23.2365 25.6159 18.9345 25.616 15.1368 25.616ZM12.6735 18.2229C12.6462 18.2229 12.6187 18.2284 12.5935 18.2389C12.5683 18.2495 12.5453 18.2649 12.5261 18.2843C12.5068 18.3036 12.4914 18.3265 12.4811 18.3517C12.4707 18.377 12.466 18.4041 12.4661 18.4314V19.3522C12.4665 19.381 12.473 19.4095 12.4848 19.4358C12.4966 19.462 12.5136 19.4856 12.5348 19.5051L15.3943 22.1421C15.4124 22.1604 15.4341 22.1747 15.458 22.1843C15.4819 22.1939 15.5073 22.1985 15.533 22.1977H16.9652C17.0065 22.1986 17.0471 22.1869 17.0815 22.164C17.1158 22.1411 17.1414 22.1082 17.1564 22.0698C17.172 22.0306 17.1758 21.9877 17.1664 21.9465C17.1571 21.9054 17.1362 21.868 17.1052 21.8394L14.4907 19.4284C15.0986 19.4381 15.6877 19.2132 16.1341 18.8004C16.5805 18.3876 16.85 17.8186 16.8877 17.2118H17.8026C17.8579 17.2116 17.9097 17.1896 17.9488 17.1506C17.9879 17.1115 18.0099 17.0585 18.01 17.0032V16.3121C18.0099 16.2568 17.9879 16.2039 17.9488 16.1648C17.9097 16.1257 17.8579 16.1037 17.8026 16.1036H16.7853C16.7276 15.9083 16.6437 15.7213 16.5378 15.5474H17.8026C17.8573 15.5478 17.9097 15.5264 17.9488 15.4881C17.9879 15.4497 18.0094 15.3975 18.01 15.3428V14.6477C18.01 14.5924 17.9892 14.5394 17.9501 14.5003C17.9109 14.4611 17.8579 14.4392 17.8026 14.4392H12.6735C12.6462 14.4393 12.62 14.4447 12.5948 14.4553C12.5696 14.4658 12.5466 14.4812 12.5273 14.5006C12.5081 14.5199 12.4927 14.543 12.4823 14.5682C12.4719 14.5935 12.4672 14.6204 12.4673 14.6477V15.4228C12.4672 15.4501 12.4719 15.477 12.4823 15.5023C12.4927 15.5275 12.5081 15.5505 12.5273 15.5699C12.5466 15.5893 12.5696 15.6047 12.5948 15.6152C12.62 15.6257 12.6462 15.6312 12.6735 15.6313H14.152C14.3529 15.6201 14.5532 15.6571 14.7369 15.7393C14.9206 15.8214 15.0813 15.9463 15.2068 16.1036H12.6735C12.6462 16.1036 12.62 16.1091 12.5948 16.1197C12.5696 16.1302 12.5466 16.1456 12.5273 16.165C12.5081 16.1843 12.4927 16.2072 12.4823 16.2324C12.4719 16.2577 12.4672 16.2848 12.4673 16.3121V17.0032C12.4672 17.0305 12.4719 17.0576 12.4823 17.0829C12.4927 17.1082 12.5081 17.131 12.5273 17.1504C12.5466 17.1698 12.5696 17.1852 12.5948 17.1957C12.62 17.2062 12.6462 17.2117 12.6735 17.2118H15.4255C15.3783 17.5136 15.2187 17.7863 14.9781 17.9746C14.7375 18.1629 14.4338 18.2527 14.1295 18.226L12.6735 18.2229ZM18.6112 10.6722H11.6662L10.0965 8.29955C9.99071 8.11679 9.93287 7.90987 9.93029 7.69872C9.92771 7.48757 9.98021 7.27927 10.0815 7.09399C10.1798 6.91191 10.3252 6.75969 10.5027 6.65329C10.6801 6.54688 10.8832 6.49018 11.0901 6.48926H13.9808C14.134 6.48969 14.2849 6.52103 14.4257 6.58127C14.5665 6.64152 14.6945 6.7295 14.8006 6.83997L15.718 7.78511L16.634 6.83997C16.7397 6.72966 16.8673 6.64183 17.0077 6.58158C17.1481 6.52134 17.2986 6.48985 17.4514 6.48926H19.1886C19.3953 6.4904 19.5975 6.54721 19.7747 6.6536C19.9519 6.76 20.0977 6.9121 20.1959 7.09399C20.2965 7.27959 20.3476 7.48794 20.3446 7.69903C20.3416 7.91013 20.2843 8.11691 20.1784 8.29955L18.6112 10.6722Z"
                        fill="white"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_271_2226"
                            x1={15.0372}
                            y1={30.8019}
                            x2={15.0372}
                            y2={0.727539}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FD4161" />
                            <Stop offset={1} stopColor="#F84C38" />
                        </LinearGradient>
                    </Defs>
                </Svg>} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    textFont: {
        fontFamily: 'Poppins'
    },
    container: {
        shadowOpacity: 1,
        elevation: 1,
        borderStartWidth: 0.5,
        borderEndWidth: 0.5,
        borderTopWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.15)',
        paddingHorizontal: 10,
        paddingVertical: 7,
        paddingBottom: 7
    },
    activebg: {
        backgroundColor: '#fd4161'
    },
    bg: {
        backgroundColor: 'transparent',
    }
})

export default Dashboard