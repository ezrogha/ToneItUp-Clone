import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default class Login extends Component {
    state = {
        inputBorderBottomColor: 'white',
        inputBorderBottomColor2: 'white'
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#9DD6EB' }}>
                <View style={styles.slide}>
                    <View style={styles.titleSection}>
                        <View style={{ position: "absolute", left: width * (10 / 100) }}>
                            <Ionicons name="ios-arrow-back" size={36} color="white" onPress={() => this.props.navigation.goBack()} />
                        </View>
                        <Text style={{ color: 'white', fontSize: 23 }}>Tone It Up</Text>
                    </View>
                    <View style={styles.bodySection}>
                        <View style={styles.header}>
                            <Text style={styles.headerText}>Welcome back</Text>
                            <TextInput
                                style={[styles.textInput, { borderBottomColor: this.state.inputBorderBottomColor }]}
                                selectionColor='white'
                                placeholder="Email address"
                                placeholderTextColor="rgba(256, 256, 256, 0.7)"
                                onFocus={() => this.setState({ inputBorderBottomColor: 'pink' })}
                                onBlur={() => this.setState({ inputBorderBottomColor: 'white' })}
                            />
                            <TextInput
                                style={[styles.textInput, { borderBottomColor: this.state.inputBorderBottomColor2 }]}
                                selectionColor='white'
                                placeholder="Password"
                                placeholderTextColor="rgba(256, 256, 256, 0.7)"
                                onFocus={() => this.setState({ inputBorderBottomColor2: 'pink' })}
                                onBlur={() => this.setState({ inputBorderBottomColor2: 'white' })}
                            />
                        </View>
                        <View style={styles.body}>
                            <TouchableOpacity style={styles.signupButton} onPress={() => this.props.navigation.navigate('Home')}>
                                <Text style={styles.buttonText}>Log in</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.facebookSignupButton}>
                                <Text style={styles.facebookButtonText}>Login with Facebook</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20 }} onPress={() => this.props.navigation.navigate('ForgotPassword')}>
                                <Text style={[styles.staticWrapperText]}>Forgot your password? </Text>
                                <Text style={[styles.staticWrapperText, { fontWeight: 'bold' }]}>Reset it now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    titleSection: {
        flex: 30,
        width: '100%',
        alignItems: 'center',
        // backgroundColor: 'darkcyan',
        // alignSelf: 'stretch',
        // textAlign: 'center'
    },
    bodySection: {
        flex: 70,
        alignItems: 'center'
    },
    header: {
        width: '90%',
    },
    headerText: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: "center"
    },
    body: {
        width: '90%',
        marginTop: 40,
        alignItems: 'center'
    },
    bodyText: {
        fontSize: 22,
        textAlign: 'center',
        color: '#fff',
    },
    textInput: {
        width: width * (90 / 100),
        // borderBottomColor: '#fff',
        borderBottomWidth: 1,
        paddingVertical: 10,
        marginTop: 20,
        fontSize: 18,
        color: '#fff'
    },
    signupButton: {
        backgroundColor: 'pink',
        width: width * (90 / 100),
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 13,
        borderRadius: 40
    },
    facebookSignupButton: {
        backgroundColor: '#fff',
        width: width * (90 / 100),
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 13,
        borderRadius: 40,
        marginTop: 15
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    facebookButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'pink'
    },
    staticWrapperText: {
        color: '#fff',
        fontSize: 16
    }
})
