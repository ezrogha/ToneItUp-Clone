import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper'

import Slide from './components/Slide'
import slidesData from '../Landing/constants/slides'

const { width, height } = Dimensions.get('window');

export default class Landing extends Component {
    renderSlides = () => {
        return slidesData.map((data, index) => {
            return <Slide key={index} data={data} />
        })
    }
    render() {
        console.log(slidesData)
        return (
            <View style={{ flex: 1 }}>
                <Swiper
                    style={styles.wrapper}
                    loop={false}
                    dotStyle={{ marginBottom: 140, backgroundColor: 'rgba(256, 256, 256, 0.4)' }}
                    activeDotStyle={{ marginBottom: 140, backgroundColor: 'rgba(256, 256, 256, 0.9)' }}
                >
                    {this.renderSlides()}
                </Swiper>
                <View style={styles.staticWrapper}>
                    <TouchableOpacity style={styles.signupButton} onPress={() => this.props.navigation.navigate('SignUp')}>
                        <Text style={styles.buttonText}>Create account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20 }} onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={[styles.staticWrapperText]}>Already a member? </Text>
                        <Text style={[styles.staticWrapperText, { fontWeight: 'bold' }]}>Log in</Text>
                    </TouchableOpacity>
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {},
    staticWrapper: {
        position: "absolute",
        height: 100,
        width: '100%',
        top: height - 140,
        alignItems: 'center',
        justifyContent: 'center'
    },
    signupButton: {
        backgroundColor: 'pink',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 13,
        borderRadius: 40
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    staticWrapperText: {
        color: '#fff',
        fontSize: 16
    }
})
