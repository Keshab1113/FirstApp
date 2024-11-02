import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

const Separator = () => <View style={styles.separator} />;

export default function FancyCard() {
    return (
        <View>
            <Text style={styles.headingText}>Trending Places</Text>
            <Separator />
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card, styles.cardElevated]}>
                    <Image
                        source={{
                            uri: 'https://plus.unsplash.com/premium_photo-1697729555861-e406b4989ee1?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        }}
                        style={styles.cardImage}
                    />
                    <View style={styles.cardBody}>
                        <Text style={styles.cardTitle}>Beauty on Delhi</Text>
                        <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, et minus. Iusto porro reiciendis modi veritatis inventore numquam id in dolorem ullam, velit suscipit ea odit placeat tempora? Magnam, unde.</Text>
                    </View>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Image
                        source={{
                            uri: 'https://i.pinimg.com/736x/11/53/01/115301688712660cb51ba0893b36f192.jpg'
                        }}
                        style={styles.cardImage}
                    />
                    <View style={styles.cardBody}>
                        <Text style={styles.cardTitle}>Beauty of Kolkata</Text>
                        <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, et minus. Iusto porro reiciendis modi veritatis inventore numquam id in dolorem ullam, velit suscipit ea odit placeat tempora? Magnam, unde.</Text>
                    </View>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Image
                        source={{
                            uri: 'https://media.istockphoto.com/id/539018660/photo/taj-mahal-hotel-and-gateway-of-india.jpg?s=612x612&w=0&k=20&c=L1LJVrYMS8kj2rJKlQMcUR88vYoAZeWbYIGkcTo6QV0='
                        }}
                        style={styles.cardImage}
                    />
                    <View style={styles.cardBody}>
                        <Text style={styles.cardTitle}>Beauty on Mumbai</Text>
                        <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, et minus. Iusto porro reiciendis modi veritatis inventore numquam id in dolorem ullam, velit suscipit ea odit placeat tempora? Magnam, unde.</Text>
                    </View>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Image
                        source={{
                            uri: 'https://www.abhibus.com/blog/wp-content/uploads/2023/07/Ethipothala-Falls.jpg'
                        }}
                        style={styles.cardImage}
                    />
                    <View style={styles.cardBody}>
                        <Text style={styles.cardTitle}>Beauty of Hyderabad</Text>
                        <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, et minus. Iusto porro reiciendis modi veritatis inventore numquam id in dolorem ullam, velit suscipit ea odit placeat tempora? Magnam, unde.</Text>
                    </View>
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
    card: {
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 4,
        width: 380,
        margin: 15,

    },
    cardElevated: {

    },
    cardImage: {
        height: 180,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 4,
    },
    cardBody: {
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cardDescription: {
        fontSize: 15,
        fontWeight: 'semibold',
        marginBottom: 10,
    },
    container: {
        marginBottom: 20
    }
})