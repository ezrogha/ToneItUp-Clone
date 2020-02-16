import React from 'react'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'

export default () => (
    <SafeAreaView style={{ flex: 1, backgroundColor: "darkturquoise" }}>
        <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={{ flex: 30, backgroundColor: "darkturquoise", alignItems: 'center' }}>
                <Text style={{ color: 'white' }}> Tone it Up</Text>
            </View>
            <View style={{ flex: 70, alignItems: 'center' }}>
                <View style={{width: '80%'}}>
                    <Text style={styles.headerText}>Personal training</Text>
                    <Text style={styles.headerText}>anywhere,</Text>
                    <Text style={styles.headerText}>anytime.</Text>
                </View>
                <View style={{width: '80%', marginTop: 50}}>
                    <Text style={styles.bodyText}>
                        We've designed effective fitness programs for you! We'll keep you motivated and on track to achieve your goals.
            </Text>
                </View>
            </View>
        </View>
    </SafeAreaView>
)

const styles = StyleSheet.create({
    headerText: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: "center"
    },
    bodyText: {
        fontSize: 22,
        textAlign: 'center',
        color: '#fff',
    }
})
