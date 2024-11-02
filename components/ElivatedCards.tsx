import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const Separator = () => <View style={styles.separator} />;

const ElivatedCards = () => {
    return (
        <View>
            <Text style={styles.headingText}>Elivated Cards</Text>
            <Separator />
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.boxColor}>Tap 😗</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.boxColor}>Me 🫠</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.boxColor}>To</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.boxColor}>Scroll</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.boxColor}>More...😄</Text>
                </View>
                
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        color: 'white',
        marginTop: 20,
        marginBottom: 5,
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    container: {
        padding: 8,

    },
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        width:100,
        borderRadius: 4,
        margin:8,
    },
    cardElevated: {
        backgroundColor: '#CAD5E2',
        elevation:4
    },
    boxColor: {
        color: 'black',
        fontWeight: 'bold',
    },
})

export default ElivatedCards