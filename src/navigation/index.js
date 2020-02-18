import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';

import signUpScreen from '../screens/SignUp';
import loginScreen from '../screens/Login';
import landingScreen from '../screens/Landing'
import forgotPasswordScreen from '../screens/ForgotPassword'

// Tab Screens
import MyProgramScreen from '../screens/MyProgram'
import WorkoutsScreen from '../screens/Workouts'
import NutritionScreen from '../screens/Nutrition'
import ProfileScreen from '../screens/Profile'
import ProgramsScreen from '../screens/Programs'
import OnDemandScreen from '../screens/OnDemand'
import SelectedProgramScreen from '../screens/SelectedProgram'


const myProgramNavigator = createStackNavigator({
    MyProgram: {
        screen: MyProgramScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    Programs: {
        screen: ProgramsScreen,
    },
    SelectedProgram: {
        screen: SelectedProgramScreen,
        navigationOptions: {
            headerShown: false
        }
    }
})

const workoutsNavigator = createStackNavigator({
    Workouts: {
        screen: WorkoutsScreen,
        navigationOptions: {
            headerStyle: {
                height: 100,
                shadowOpacity: 0,
                shadowOffset: {
                    height: 0,
                }
            },
            headerTitle: "",
            headerLeft: () => {
                return (
                    <View style={{ paddingLeft: 10 }}>
                        <Text style={{ fontSize: 34, fontWeight: "bold" }}>Workouts</Text>
                    </View>
                )
            }
        }
    },
    Programs: {
        screen: ProgramsScreen,
    },
    SelectedProgram: {
        screen: SelectedProgramScreen,
        navigationOptions: {
            headerShown: false
        }
    }
})

const nutritionNavigator = createStackNavigator({
    Nutrition: {
        screen: NutritionScreen,
        navigationOptions: {
            headerStyle: {
                height: 100,
                shadowOpacity: 0,
                shadowOffset: {
                    height: 0,
                }
            },
            headerTitle: "",
            headerLeft: () => {
                return (
                    <View style={{ paddingLeft: 10 }}>
                        <Text style={{ fontSize: 34, fontWeight: "bold" }}>Nutrition</Text>
                    </View>
                )
            }
        }
    }
})

const profileNavigator = createStackNavigator({
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            headerStyle: {
                height: 100,
                shadowOpacity: 0,
                shadowOffset: {
                    height: 0,
                }
            },
            headerTitle: "",
            headerLeft: () => {
                return (
                    <View style={{ paddingLeft: 10 }}>
                        <Text style={{ fontSize: 34, fontWeight: "bold" }}>Collins Mbul...</Text>
                    </View>
                )
            },
            headerRight: () => {
                return (
                    <TouchableOpacity style={{ paddingRight: 20 }}>
                        <SimpleLineIcons name="settings" size={30} style={{ color: 'pink' }} />
                    </TouchableOpacity>
                )
            }
        }
    },
    OnDemand: {
        screen: OnDemandScreen
    },
    Programs: {
        screen: ProgramsScreen,
    },
    SelectedProgram: {
        screen: SelectedProgramScreen,
        navigationOptions: {
            headerShown: false
        }
    }
})

const tabNavigator = createBottomTabNavigator({
    MyProgram: {
        screen: myProgramNavigator,
        navigationOptions: {
            tabBarLabel: "My Program"
        }
    },
    Workouts: {
        screen: workoutsNavigator
    },
    Nutrition: {
        screen: nutritionNavigator
    },
    Profile: {
        screen: profileNavigator
    }
}, {
    tabBarOptions: {
        activeTintColor: '#000',
        labelStyle: {
            fontWeight: 'bold',
            fontSize: 14,
        },
        style: {
            paddingTop: 5,
            height: 60
        }
    },
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
            let { state: { routeName } } = navigation
            let iconName;
            tintColor = focused ? "pink" : "lightgrey"
            switch (routeName) {
                case "MyProgram":
                    iconName = "play-box-outline"
                    break;
                case "Workouts":
                    iconName = "dumbbell"
                    break;
                case "Nutrition":
                    iconName = "food-apple-outline"
                    break;
                case "Profile":
                    iconName = "user-female"
                    break;

                default:
                    break;
            }
            return routeName === "Profile" ? <SimpleLineIcons name={iconName} color={tintColor} size={28} /> : <MaterialCommunityIcons name={iconName} color={tintColor} size={32} />
        }
    })
})

const landingStackNavigator = createStackNavigator({
    Landing: {
        screen: landingScreen
    },
    SignUp: {
        screen: signUpScreen
    },
    Login: {
        screen: loginScreen
    },
    ForgotPassword: {
        screen: forgotPasswordScreen
    },
    Home: {
        screen: tabNavigator
    },
    
}, {
    mode: 'modal',
    defaultNavigationOptions: {
        headerShown: false
    }
})



export default createAppContainer(landingStackNavigator)
