import React, { Component } from 'react'
import { Text, View, SafeAreaView, FlatList, Dimensions, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window')

const onDemand = [
    { id: 0, title: "Beginner Workouts" },
    { id: 1, title: "Abs" },
    { id: 2, title: "Total Body" },
    { id: 3, title: "HIIT" },
    { id: 4, title: "Booty + Legs" },
    { id: 5, title: "Arms" },
    { id: 6, title: "Yoga" },
    { id: 7, title: "Travel Friendly" },
    { id: 8, title: "Barre" },
    { id: 9, title: "Kettlebell" },
    { id: 10, title: "Stretching  + Foam Rolling" },
]

export default class OnDemand extends Component {
    static navigationOptions = ({ navigation }) => {
        const headerStyle = {
            height: 170
        }
        const headerTitle = () => {
            return (
                <View>
                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <View style={{ position: "absolute", left: 0 }}>
                            <TouchableOpacity style={{ padding: 5 }} onPress={() => navigation.goBack()}>
                                <Ionicons name="ios-arrow-back" color="pink" size={32} />
                            </TouchableOpacity>
                        </View>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>On Demand</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        borderWidth: 0.4,
                        borderColor: "grey",
                        marginTop: 10,
                        width: width * (90 / 100),
                        padding: 10,
                        borderRadius: 5
                    }}>
                        <Ionicons name="ios-search" size={28} style={{ color: "grey" }} />
                        <TextInput selectionColor='pink' style={{ paddingLeft: 10, width: '100%' }} placeholder="Search On Demand" />
                    </View>
                </View>
            )
        }
        return { headerStyle, headerTitle, headerLeft: () => {} }
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <FlatList
                        data={onDemand}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity style={[styles.program, { borderRadius: '12%', marginTop: item.id === 0 ? 20 : 0 }]}>
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

