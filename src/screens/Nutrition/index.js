import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity, FlatList, ScrollView } from 'react-native'

const { width, height } = Dimensions.get('window');
const guidelines = [
    { id: 0, title: "Getting Started With Tone It up" },
    { id: 1, title: "Tone It Up Transformations" },
    { id: 2, title: "Eat Lean, Clean, 'N Green" },
    { id: 3, title: "Have 5 Meals A Day ~ YES 5!" },
    { id: 4, title: "Fuel Up With Protein" }
]
const recipes = [
    { id: 0, title: "Smoothies" },
    { id: 1, title: "Healthy Breakfast" },
    { id: 2, title: "Protein-Packed Muffins" },
    { id: 3, title: "Hearty Salads" },
    { id: 4, title: "Delicious Dinners" },
    { id: 5, title: "Wraps + Rolls" },
    { id: 6, title: "Easy Tray Bake Meals" },
    { id: 7, title: "Tasty Treats" },
    { id: 8, title: "Simple Snacks" },
    { id: 9, title: "Shots + Sips" },
    { id: 10, title: "Prenatal Recipes" },
]

const shop = [
    { id: 0, title: "Team Pullover", tag: "#TIUTeam" },
    { id: 1, title: "Vanilla Protein Powder", tag: "28 servings" },
    { id: 2, title: "Team PullTankover", tag: "#TIUTeam" },
    { id: 3, title: "Marine Collagen", tag: "14 servings" },
    { id: 4, title: "Team Hoodie", tag: "#TIUTeam" }
]

export default class Nutrition extends Component {
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
                            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Guidelines</Text>
                            <TouchableOpacity style={{ marginRight: 20 }}>
                                <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#dda0a9' }}>View all</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <FlatList
                                data={guidelines}
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
                            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Recipes</Text>
                            <TouchableOpacity style={{ marginRight: 20 }}>
                                <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#dda0a9' }}>View all</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <FlatList
                                data={recipes}
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
                            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Shop</Text>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <FlatList
                                data={shop}
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                                renderItem={({ item }) => {
                                    return (
                                        <TouchableOpacity
                                            style={[styles.program, {
                                                backgroundColor: "#fff",
                                                borderColor: "lightgrey",
                                                borderWidth: 1,
                                                borderRadius: '12%',
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                                padding: 10,
                                                marginLeft: item.id === 0 ? 20 : 0,
                                                flex: 1
                                            }]}>
                                            <View style={{ justifyContent: 'space-between', flex: 60 }}>
                                                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#000" }}>{item.title}</Text>
                                                <Text style={{ fontSize: 12, color: "#000" }}>{item.tag}</Text>
                                            </View>
                                            <View style={{ flex: 40 }}>
                                                {/* Image goes here */}
                                            </View>
                                        </TouchableOpacity>
                                    )
                                }}
                                keyExtractor={item => `programs-${item.id}`}
                            />
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
        padding: 20
    }
})

