import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Separator = () => <View style={styles.separator} />;

const FlatCards = () => {
  return (
    <View>
          <Text style={styles.headingText}>Flat Cards</Text>
          <Separator />
          <View style={styles.container}>
              <View style={[styles.card, styles.cardOne]}>
                  <Text style={styles.boxColor}>Red</Text>
              </View>
              <View style={[styles.card, styles.cardTwo]}>
                  <Text style={styles.boxColor}>Green</Text>
              </View>
              <View style={[styles.card, styles.cardThree]}>
                  <Text style={styles.boxColor}>Blue</Text>
              </View>
          </View>
          
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
        marginBottom:5,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-around'
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        borderRadius: 4,
        margin: 8,
        width: 100,
    },
    boxColor: {
        color: 'white',
        fontWeight: 'bold',
    },
    cardOne: {
        backgroundColor: 'red',
    },
    cardTwo: {
        backgroundColor: 'green',
    },
    cardThree: {
        backgroundColor: 'blue',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
})

export default FlatCards