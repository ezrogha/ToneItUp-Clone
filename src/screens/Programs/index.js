import React, { Component } from 'react'
import { Text, View, SafeAreaView, FlatList, Dimensions, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const programs = [
    { id: 0, title: "Toned Body, Toned Mind" },
    { id: 1, title: "Beach Body" },
    { id: 2, title: "14 Day Slay" },
    { id: 3, title: "Tone It Up Strength" },
    { id: 4, title: "Tone It Up Mama" }
]
const { width, height } = Dimensions.get('window')

export default class Programs extends Component {
    static navigationOptions = ({ navigation }) => {
        const headerStyle = {
            height: 100
        }
        const headerTitleStyle = {
            fontSize: 22,
            fontWeight: 'bold'
        }
        const headerLeft = () => {
            return (
                <TouchableOpacity style={{ marginLeft: 10, padding: 5 }} onPress={() => navigation.goBack()}>
                    <Ionicons name="ios-arrow-back" color="pink" size={32} />
                </TouchableOpacity>
            )
        }
        return { headerStyle, headerTitleStyle, headerLeft }
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <FlatList
                        data={programs}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity style={[styles.program, { borderRadius: '12%', marginTop: item.id === 0 ? 20 : 0 }]} onPress={() => this.props.navigation.navigate('SelectedProgram', { title: item.title })}>
                                    <View style={{ padding: 10 }}>
                                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>{item.title}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }} keyExtractor={item => `program-${item.id}`} />

                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    program: {
        width: width * (90 / 100),
        backgroundColor: "cornflowerblue",
        height: height * (15 / 100),
        justifyContent: 'flex-end',
        marginBottom: 10,
    }
})
