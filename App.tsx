import React from 'react';
import Login from './Components/Login/Login';
import Loader from './Components/Loader/Loader';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Components/Home/Home';
import { View } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
import OrderDetails from './Components/Home/OrderDetails';
import Processing from './Components/Processing/Processing';
import SideMenu from './Components/Ui/SideMenu';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack({ navigation }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} listeners={{
        focus: () => {
          navigation.setOptions({
            tabBarStyle: {
              height: 75,
              backgroundColor: '#191919',
              margin: 25,
              borderRadius: 25,
              shadowOpacity: 1,
              elevation: 1,
              borderStartWidth: 1,
              borderEndWidth: 1,
              borderColor: 'rgba(255, 255, 255, 0.15)',
              paddingHorizontal: 10,
              paddingVertical: 7,
              paddingBottom: 7,
            },
          });
        },
      }} />
      <Stack.Screen name="OrderPage" component={OrderDetails} options={{ headerShown: false }} listeners={{ focus: () => navigation.setOptions({ tabBarStyle: { display: 'none' } }), }} />
    </Stack.Navigator>
  );
}

function LoaderStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Loader" component={Loader} />
    </Stack.Navigator>
  );
}

function ProcessStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Process" component={Processing} />
    </Stack.Navigator>
  );
}

function App(): React.JSX.Element {
  return (
    <View className='bg-[#0F0F0F] h-[100%] w-[100%] '>
      <SafeAreaProvider>
        <NavigationContainer >
          <Tab.Navigator screenOptions={({ route }) => ({ headerShown: false, tabBarStyle: (route.name === 'HomeTab' && route.state?.routes[route.state.index]?.name === 'OrderPage') ? { display: 'none' } : { height: 75, backgroundColor: '#191919', margin: 25, borderRadius: 25, shadowOpacity: 1, elevation: 1, borderStartWidth: 1, borderEndWidth: 1, borderColor: 'rgba(255, 255, 255, 0.15)', paddingHorizontal: 10, paddingVertical: 7, paddingBottom: 7 } })}>
            <Tab.Screen name="HomeTab" component={HomeStack}
              options={{
                tabBarItemStyle: { borderRadius: 15 },
                tabBarLabelStyle: { color: '#fff', paddingBottom: 8, paddingTop: 5, fontSize: 10, letterSpacing: 0.3, fontFamily: 'Poppins', fontWeight: 500 },
                tabBarIconStyle: { marginTop: 10 },
                tabBarActiveBackgroundColor: 'rgba(255, 255, 255, 0.15)',
                tabBarLabel: 'New Orders', tabBarIcon: ({ color, size }) => (<Svg
                  width={85}
                  height={85}
                  viewBox="0 0 80 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <Path
                    d="M41.8591 30.699H37.1815C37.1047 30.699 37.0287 30.7141 36.9578 30.7435C36.8868 30.7728 36.8224 30.8159 36.7681 30.8702C36.7139 30.9245 36.6708 30.9889 36.6414 31.0598C36.612 31.1307 36.5969 31.2067 36.5969 31.2835C36.6068 32.0523 36.9191 32.7864 37.4663 33.3266C38.0134 33.8668 38.7514 34.1697 39.5203 34.1697C40.2892 34.1697 41.0272 33.8668 41.5743 33.3266C42.1215 32.7864 42.4338 32.0523 42.4437 31.2835C42.4437 31.1285 42.3821 30.9798 42.2725 30.8702C42.1629 30.7606 42.0142 30.699 41.8591 30.699Z"
                    fill="url(#paint0_linear_1_3627)"
                  />
                  <Path
                    d="M39.5207 14.25C39.0556 14.2505 38.6098 14.4355 38.2809 14.7643C37.9521 15.0932 37.7671 15.539 37.7666 16.0041V17.2902C37.7666 17.4453 37.8282 17.5939 37.9378 17.7036C38.0474 17.8132 38.1961 17.8748 38.3511 17.8748H40.6897C40.8448 17.8748 40.9934 17.8132 41.1031 17.7036C41.2127 17.5939 41.2743 17.4453 41.2743 17.2902V16.0041C41.2738 15.5391 41.0889 15.0933 40.7601 14.7645C40.4314 14.4357 39.9856 14.2506 39.5207 14.25Z"
                    fill="url(#paint1_linear_1_3627)"
                  />
                  <Path
                    d="M47.706 30.6988C47.2409 30.6983 46.7951 30.5133 46.4662 30.1845C46.1374 29.8556 45.9524 29.4098 45.9519 28.9447V23.2712C45.9519 19.7621 43.2447 16.5712 39.4813 16.588C37.7826 16.5989 36.1572 17.2811 34.9596 18.4858C33.7621 19.6906 33.0896 21.3201 33.0888 23.0188V28.9447C33.0883 29.4098 32.9034 29.8556 32.5745 30.1845C32.2457 30.5133 31.7998 30.6983 31.3348 30.6988C31.1797 30.6988 31.0309 30.7604 30.9213 30.87C30.8116 30.9797 30.75 31.1285 30.75 31.2835C30.75 31.4386 30.8116 31.5874 30.9213 31.697C31.0309 31.8067 31.1797 31.8683 31.3348 31.8683H47.706C47.8611 31.8683 48.0098 31.8067 48.1195 31.697C48.2291 31.5874 48.2907 31.4386 48.2907 31.2835C48.2907 31.1285 48.2291 30.9797 48.1195 30.87C48.0098 30.7604 47.8611 30.6988 47.706 30.6988Z"
                    fill="url(#paint2_linear_1_3627)"
                  />
                  <Defs>
                    <LinearGradient
                      id="paint0_linear_1_3627"
                      x1={39.5203}
                      y1={34.1697}
                      x2={39.5203}
                      y2={30.699}
                      gradientUnits="userSpaceOnUse"
                    >
                      <Stop stopColor="#FFBEF9" />
                      <Stop offset={1} stopColor="#FFF1FF" />
                    </LinearGradient>
                    <LinearGradient
                      id="paint1_linear_1_3627"
                      x1={39.5204}
                      y1={17.8748}
                      x2={39.5204}
                      y2={14.25}
                      gradientUnits="userSpaceOnUse"
                    >
                      <Stop stopColor="#FFBEF9" />
                      <Stop offset={1} stopColor="#FFF1FF" />
                    </LinearGradient>
                    <LinearGradient
                      id="paint2_linear_1_3627"
                      x1={39.5204}
                      y1={31.8683}
                      x2={39.5204}
                      y2={16.5879}
                      gradientUnits="userSpaceOnUse"
                    >
                      <Stop stopColor="#FD4161" />
                      <Stop offset={1} stopColor="#F84C38" />
                    </LinearGradient>
                  </Defs>
                </Svg>)
              }} />
            <Tab.Screen name="Processing" component={ProcessStack}
              options={{
                tabBarItemStyle: { borderRadius: 15 },
                tabBarLabelStyle: { color: '#fff', paddingBottom: 8, paddingTop: 5, fontSize: 10, letterSpacing: 0.3, fontFamily: 'Poppins', fontWeight: 500 },
                tabBarIconStyle: { marginTop: 10 },
                tabBarActiveBackgroundColor: 'rgba(255, 255, 255, 0.15)',
                tabBarLabel: 'Processing', tabBarIcon: ({ color, size }) => (<Svg
                  width={85}
                  height={85}
                  viewBox="0 0 80 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <Path
                    d="M39.9793 34.2076C38.0056 34.2077 36.0762 33.6225 34.4352 32.526C32.7941 31.4296 31.515 29.8711 30.7597 28.0477C30.0044 26.2243 29.8067 24.2179 30.1917 22.2821C30.5767 20.3464 31.5271 18.5683 32.9227 17.1727C34.3183 15.7771 36.0964 14.8267 38.0321 14.4417C39.9679 14.0567 41.9743 14.2544 43.7977 15.0097C45.6211 15.765 47.1796 17.0441 48.276 18.6852C49.3725 20.3262 49.9577 22.2556 49.9576 24.2293C49.9519 26.8739 48.8988 29.4086 47.0287 31.2787C45.1586 33.1488 42.6239 34.2019 39.9793 34.2076Z"
                    fill="url(#paint0_linear_1_3620)"
                  />
                  <Path
                    d="M41.7076 26.6374L37.5736 22.5034C37.5208 22.5562 37.4787 22.6186 37.4493 22.6872L34.9687 28.4754C34.9225 28.5829 34.9096 28.7017 34.9316 28.8165C34.9537 28.9313 35.0097 29.0369 35.0924 29.1196C35.175 29.2023 35.2806 29.2583 35.3954 29.2803C35.5103 29.3024 35.6291 29.2895 35.7365 29.2433L41.5247 26.7626C41.5931 26.7336 41.6553 26.6917 41.708 26.6393L41.7076 26.6374Z"
                    fill="url(#paint1_linear_1_3620)"
                  />
                  <Path
                    d="M45.0524 19.9238L42.5717 25.712C42.5427 25.7804 42.5008 25.8426 42.4484 25.8953L38.3145 21.7614C38.367 21.7094 38.4289 21.6677 38.4968 21.6385L44.285 19.1579C44.3925 19.1117 44.5113 19.0988 44.6261 19.1208C44.7409 19.1429 44.8465 19.1989 44.9292 19.2816C45.0119 19.3642 45.0679 19.4698 45.0899 19.5846C45.112 19.6995 45.0991 19.8183 45.0529 19.9257L45.0524 19.9238Z"
                    fill="url(#paint2_linear_1_3620)"
                  />
                  <Defs>
                    <LinearGradient
                      id="paint0_linear_1_3620"
                      x1={39.9788}
                      y1={34.2076}
                      x2={39.9788}
                      y2={14.25}
                      gradientUnits="userSpaceOnUse"
                    >
                      <Stop stopColor="#FD4161" />
                      <Stop offset={1} stopColor="#F84C38" />
                    </LinearGradient>
                    <LinearGradient
                      id="paint1_linear_1_3620"
                      x1={38.3146}
                      y1={29.2908}
                      x2={38.3146}
                      y2={22.5034}
                      gradientUnits="userSpaceOnUse"
                    >
                      <Stop stopColor="#FFBEF9" />
                      <Stop offset={1} stopColor="#FFF1FF" />
                    </LinearGradient>
                    <LinearGradient
                      id="paint2_linear_1_3620"
                      x1={41.7074}
                      y1={25.8953}
                      x2={41.7074}
                      y2={19.1104}
                      gradientUnits="userSpaceOnUse"
                    >
                      <Stop stopColor="#FFBEF9" />
                      <Stop offset={1} stopColor="#FFF1FF" />
                    </LinearGradient>
                  </Defs>
                </Svg>)
              }} />
            <Tab.Screen name="Dashboard" component={HomeStack}
              options={{
                tabBarItemStyle: { borderRadius: 15 },
                tabBarLabelStyle: { color: '#fff', paddingBottom: 8, paddingTop: 5, fontSize: 10, letterSpacing: 0.3, fontFamily: 'Poppins', fontWeight: 500 },
                tabBarIconStyle: { marginTop: 10 },
                tabBarActiveBackgroundColor: 'rgba(255, 255, 255, 0.15)',
                tabBarLabel: 'Dashboard', tabBarIcon: ({ color, size }) => (<Svg
                  width={25}
                  height={25}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <Path
                    d="M9.95257 21.0847H3.35044C3.05858 21.0847 2.77868 20.9688 2.57231 20.7624C2.36594 20.5561 2.25 20.2762 2.25 19.9843V13.3822C2.25 13.0903 2.36594 12.8104 2.57231 12.604C2.77868 12.3977 3.05858 12.2817 3.35044 12.2817H9.95257C10.2444 12.2817 10.5243 12.3977 10.7307 12.604C10.9371 12.8104 11.053 13.0903 11.053 13.3822V19.9843C11.053 20.2762 10.9371 20.5561 10.7307 20.7624C10.5243 20.9688 10.2444 21.0847 9.95257 21.0847Z"
                    fill="url(#paint0_linear_78_715)"
                  />
                  <Path
                    d="M9.95289 11.053H3.35076C3.0589 11.053 2.779 10.9371 2.57263 10.7307C2.36626 10.5243 2.25032 10.2444 2.25032 9.95256V3.35043C2.25032 3.05858 2.36626 2.77868 2.57263 2.57231C2.779 2.36594 3.0589 2.25 3.35076 2.25H9.95289C10.2447 2.25 10.5246 2.36594 10.731 2.57231C10.9374 2.77868 11.0533 3.05858 11.0533 3.35043V9.95256C11.0533 10.2444 10.9374 10.5243 10.731 10.7307C10.5246 10.9371 10.2447 11.053 9.95289 11.053Z"
                    fill="url(#paint1_linear_78_715)"
                  />
                  <Path
                    d="M20.0306 21.0847H13.4285C13.1367 21.0847 12.8568 20.9688 12.6504 20.7624C12.444 20.5561 12.3281 20.2762 12.3281 19.9843V13.3822C12.3281 13.0903 12.444 12.8104 12.6504 12.604C12.8568 12.3977 13.1367 12.2817 13.4285 12.2817H20.0306C20.3225 12.2817 20.6024 12.3977 20.8088 12.604C21.0151 12.8104 21.1311 13.0903 21.1311 13.3822V19.9843C21.1311 20.2762 21.0151 20.5561 20.8088 20.7624C20.6024 20.9688 20.3225 21.0847 20.0306 21.0847Z"
                    fill="url(#paint2_linear_78_715)"
                  />
                  <Path
                    d="M20.0312 11.053H13.429C13.1372 11.053 12.8573 10.9371 12.6509 10.7307C12.4445 10.5243 12.3286 10.2444 12.3286 9.95256V3.35043C12.3286 3.05858 12.4445 2.77868 12.6509 2.57231C12.8573 2.36594 13.1372 2.25 13.429 2.25H20.0312C20.323 2.25 20.6029 2.36594 20.8093 2.57231C21.0156 2.77868 21.1316 3.05858 21.1316 3.35043V9.95256C21.1316 10.2444 21.0156 10.5243 20.8093 10.7307C20.6029 10.9371 20.323 11.053 20.0312 11.053Z"
                    fill="url(#paint3_linear_78_715)"
                  />
                  <Defs>
                    <LinearGradient
                      id="paint0_linear_78_715"
                      x1={6.6515}
                      y1={21.0847}
                      x2={6.6515}
                      y2={12.2817}
                      gradientUnits="userSpaceOnUse"
                    >
                      <Stop stopColor="#FD4161" />
                      <Stop offset={1} stopColor="#F84C38" />
                    </LinearGradient>
                    <LinearGradient
                      id="paint1_linear_78_715"
                      x1={6.65182}
                      y1={11.053}
                      x2={6.65182}
                      y2={2.25}
                      gradientUnits="userSpaceOnUse"
                    >
                      <Stop stopColor="#FFBEF9" />
                      <Stop offset={1} stopColor="#FFF1FF" />
                    </LinearGradient>
                    <LinearGradient
                      id="paint2_linear_78_715"
                      x1={16.7296}
                      y1={21.0847}
                      x2={16.7296}
                      y2={12.2817}
                      gradientUnits="userSpaceOnUse"
                    >
                      <Stop stopColor="#FD4161" />
                      <Stop offset={1} stopColor="#F84C38" />
                    </LinearGradient>
                    <LinearGradient
                      id="paint3_linear_78_715"
                      x1={16.7301}
                      y1={11.053}
                      x2={16.7301}
                      y2={2.25}
                      gradientUnits="userSpaceOnUse"
                    >
                      <Stop stopColor="#FD4161" />
                      <Stop offset={1} stopColor="#F84C38" />
                    </LinearGradient>
                  </Defs>
                </Svg>)
              }} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </View>
  )
}

export default App;