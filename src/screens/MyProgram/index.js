import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'

// const { width, height } = Dimensions.get('window')

export default class MyProgram extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                    <View style={{ flex: 20 }}>
                        <Text style={{ fontSize: 34, fontWeight: 'bold' }}> My Program </Text>
                    </View>
                    <View style={{ flex: 80, paddingHorizontal: '5%' }}>
                        <View>
                            <Text style={{ fontSize: 50, color: 'steelblue', fontFamily: "amsterdam", letterSpacing: 3 }}>Hey gorgeous!</Text>
                        </View>
                        <View style={{ marginTop: 40 }}>
                            <View>
                                <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'steelblue', lineHeight: 35 }}>Looks like you're not</Text>
                                <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'steelblue', lineHeight: 35 }}>currently on a Tone It Up</Text>
                                <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'steelblue', lineHeight: 35 }}>program.</Text>
                            </View>
                            <View style={{ marginVertical: 20 }}>
                                <Text style={{ fontSize: 18, lineHeight: 25 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </Text>
                            </View>
                            <TouchableOpacity style={[styles.button, ]} onPress={() => this.props.navigation.navigate('Programs')}>
                                <Text style={styles.buttonText}>Lets find a program!</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'pink',
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
})
