import React, { Component } from 'react'
import { Text, View, Dimensions, SafeAreaView, TouchableHighlight, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default class Profile extends Component {
    render() {
        return (
            <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
                <ScrollView>
                    <View style={{ marginHorizontal: 20 }}>
                        <View style={{ marginTop: 15, paddingBottom: 15, flexDirection: 'row', borderBottomColor: 'lightgrey', borderBottomWidth: 0.2 }}>
                            <View style={{
                                height: 80,
                                width: 80,
                                borderRadius: height * (4.5 / 100),
                                borderColor: 'pink',
                                borderWidth: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <SimpleLineIcons name="camera" size={38} style={{ color: 'pink' }} />
                            </View>
                            <View style={{
                                marginLeft: 20
                            }}>
                                <Text style={{ fontSize: 16, color: "grey", marginBottom: 5 }}>Love running</Text>
                                <Text style={{ fontSize: 16, color: "grey", marginBottom: 5 }}>Kampala, Uganda</Text>
                                <TouchableOpacity>
                                    <Text style={{ color: "pink", fontSize: 16 }}>Edit Profile</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.section}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Current program</Text>
                            <View style={{ alignItems: 'center', paddingTop: 20, paddingHorizontal: 30 }}>
                                <SimpleLineIcons name="plus" size={25} style={{ color: 'grey' }} />
                                <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold', color:'#444' }}>Join a program and receive your weekly workout plan.</Text>
                                <TouchableOpacity style={{ marginTop: 5, borderColor: 'pink', borderWidth: 2, paddingHorizontal: 60, paddingVertical: 10, borderRadius: 20 }} onPress={() => this.props.navigation.navigate('Programs')}>
                                    <Text style={{  color: 'pink', fontWeight: 'bold' }}>Explore programs</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.section}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Recent activity</Text>
                            <View style={{ alignItems: 'center', paddingTop: 20, paddingHorizontal: 30 }}>
                                <SimpleLineIcons name="plus" size={25} style={{ color: 'grey' }} />
                                <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold', color:'#444' }}>Let's start working out together</Text>
                                <TouchableOpacity style={{ marginTop: 5, borderColor: 'pink', borderWidth: 2, paddingHorizontal: 70, paddingVertical: 10, borderRadius: 20 }} onPress={() => this.props.navigation.navigate("OnDemand")}>
                                    <Text style={{  color: 'pink', fontWeight: 'bold' }}>Find a workout</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.section}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Favorites</Text>
                            <View style={{ alignItems: 'center', paddingTop: 20, paddingHorizontal: 30 }}>
                                <SimpleLineIcons name="plus" size={25} style={{ color: 'grey' }} />
                                <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold', color:'#444' }}>Mark your favorite workouts and see them here</Text>
                                <TouchableOpacity style={{ marginTop: 5, borderColor: 'pink', borderWidth: 2, paddingHorizontal: 60, paddingVertical: 10, borderRadius: 20 }}>
                                    <Text style={{  color: 'pink', fontWeight: 'bold' }}>Add a favorite now</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    section: {
        marginTop: 40
    }
})
