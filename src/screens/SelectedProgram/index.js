import React, { Component } from 'react'
import { Text, View, SafeAreaView, Dimensions, TouchableOpacity, ScrollView, Switch } from 'react-native'
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window')

export default class SelectedProgram extends Component {
    state = {
        title: ""
    }

    componentDidMount() {
        const { state: { params = {} } } = this.props.navigation
        this.setState({ title: params.title })
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", alignItems: "center" }}>
                <ScrollView>
                    <View style={{ height: height * (20 / 100), backgroundColor: "rosybrown" }}>
                        <TouchableOpacity style={{ position: "absolute", left: 15, top: 12, padding: 10 }} onPress={() => this.props.navigation.goBack()}>
                            <Ionicons name="ios-arrow-back" color="white" size={32} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginHorizontal: 20 }}>
                        {/* Title */}
                        <View style={{ flexDirection: "row", paddingVertical: 20, alignItems: "flex-start", justifyContent: "space-between", borderBottomColor: "lightgrey", borderBottomWidth: 1 }}>
                            <View>
                                <Text style={{ fontSize: 26, fontWeight: "bold", marginBottom: 5 }}>{this.state.title}</Text>
                                <Text style={{ fontSize: 18, color: 'grey' }}>4 week program</Text>
                            </View>
                            <TouchableOpacity>
                                <SimpleLineIcons name="share-alt" size={23} color="rosybrown" />
                            </TouchableOpacity>
                        </View>


                        {/* Body */}
                        <View style={{ paddingVertical: 20, alignItems: "center", justifyContent: "space-between", borderBottomColor: "lightgrey", borderBottomWidth: 1 }}>
                            <Text style={{ fontSize: 18 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </Text>
                        </View>

                        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 20, alignItems: "center", justifyContent: "space-between" }}>
                            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Enable workout reminders</Text>
                            <Switch />
                        </View>
                    </View>
                </ScrollView>
                <TouchableOpacity style={{ backgroundColor: "pink", width: '90%', paddingVertical: 13, justifyContent: "center", alignItems: "center", borderRadius: 40, position: "absolute", bottom: 50 }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}>Join this program</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}
