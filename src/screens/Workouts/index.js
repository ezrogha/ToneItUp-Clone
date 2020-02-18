import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity, FlatList, ScrollView } from 'react-native'

const { width, height } = Dimensions.get('window');
const programs = [
    { id: 0, title: "Toned Body, Toned Mind" },
    { id: 1, title: "Beach Babe" },
    { id: 2, title: "14 Day Slay" },
    { id: 3, title: "Tone It Up Strength" },
    { id: 4, title: "Tone It Up Mama" }
]
const onDemand = [
    {id: 0, title: "Beginner Workouts"},
    {id: 1, title: "Abs"},
    {id: 2, title: "Total Body"},
    {id: 3, title: "HIIT"},
    {id: 4, title: "Booty + Legs"},
    {id: 5, title: "Arms"},
    {id: 6, title: "Yoga"},
    {id: 7, title: "Travel Friendly"},
    {id: 8, title: "Barre"},
    {id: 9, title: "Kettlebell"},
    {id: 10, title: "Stretching  + Foam Rolling"},
]
export default class Workouts extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
                <ScrollView>
                    <TouchableOpacity style={styles.banner}>
                        <View>
                            <Text style={[styles.bannerText, { fontWeight: 'bold' }]}>Toned Body, Toned Mind</Text>
                            <Text style={styles.bannerText}>Awaken your mind, body, and spirit!</Text>
                        </View>
                        <TouchableOpacity style={{ backgroundColor: "#fff", marginLeft: 20, paddingVertical: 5, paddingHorizontal: 10, borderRadius: 5 }}>
                            <Text style={{ fontSize: 16, color: "pink", }}>Join now</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Programs</Text>
                            <TouchableOpacity style={{ marginRight: 20 }} onPress={() => this.props.navigation.navigate('Programs')}>
                                <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#dda0a9' }}>View all</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <FlatList
                                data={programs}
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                                renderItem={({ item }) => {
                                    return (
                                        <TouchableOpacity style={[styles.program, { borderRadius: '12%', marginLeft: item.id === 0 ? 20 : 0 }]} onPress={() => this.props.navigation.navigate('SelectedProgram', { title: item.title })}>
                                            <View>
                                                <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>{item.title}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                }}
                                keyExtractor={item => `programs-${item.id}`}
                            />
                        </View>
                    </View>

                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>On Demand</Text>
                            <TouchableOpacity style={{ marginRight: 20 }}>
                                <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#dda0a9' }}>View all</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <FlatList
                                data={onDemand}
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                                renderItem={({ item }) => {
                                    return (
                                        <TouchableOpacity style={[styles.program, { borderRadius: '12%', marginLeft: item.id === 0 ? 20 : 0 }]}>
                                            <View>
                                                <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>{item.title}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                }}
                                keyExtractor={item => `programs-${item.id}`}
                            />
                        </View>
                    </View>

                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Toning Moves</Text>
                        </View>
                        <View style={{ marginTop: 10, marginHorizontal: 20 }}>
                            <TouchableOpacity style={[styles.program, { borderRadius: '12%', width: '100%', justifyContent: 'flex-end' }]}>
                                <View>
                                    <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>Get Toned</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ height: 30 }} />
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    banner: {
        marginTop: 15,
        height: height * (7 / 100),
        width: '100%',
        backgroundColor: 'pink',
        borderTopLeftRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 20
    },
    bannerText: {
        fontSize: 16,
        color: '#fff'
    },
    section: {
        marginTop: 35,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginLeft: 20
    },
    program: {
        width: width * (60 / 100),
        backgroundColor: "cornflowerblue",
        height: height * (15 / 100),
        justifyContent: 'flex-end',
        marginRight: 10,
        padding: 20,
    }
})
