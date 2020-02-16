import React from 'react'
import { Text, View, StyleSheet, SafeAreaView } from 'react-native'

export default ({ data: { title1, title2, title3, body } }) => (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#9DD6EB' }}>
        <View style={styles.slide}>
            <View style={styles.titleSection}>
                <Text style={{ color: 'white', fontSize: 23 }}>Tone It Up</Text>
            </View>
            <View style={styles.bodySection}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>{title1}</Text>
                    <Text style={styles.headerText}>{title2}</Text>
                    <Text style={styles.headerText}>{title3}</Text>
                </View>
                <View style={styles.body}>
                    <Text style={styles.bodyText}>
                        {body}
                    </Text>
                </View>
            </View>
        </View>
    </SafeAreaView>
)

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    titleSection: {
        flex: 30
    },
    bodySection: {
        flex: 70
    },
    header: {
        // width: '80%',
    },
    headerText: {
        color: '#fff',
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: "center"
    },
    body: {
        width: '80%',
        marginTop: 50,
    },
    bodyText: {
        fontSize: 22,
        textAlign: 'center',
        color: '#fff',
    }
})