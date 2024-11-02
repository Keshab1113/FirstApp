import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Separator = () => <View style={styles.separator} />;

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink);
    }
  return (
    <View>
          <Text style={styles.headingText}>Action Card</Text>
          <Separator />
          <TouchableOpacity onPress={() => openWebsite('https://github.com/Keshab1113')} style={styles.profileButton}>
              <Text style={styles.profileButtonText}>Github Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openWebsite('https://www.linkedin.com/in/keshab-das-6a84ab234/')} style={styles.profileButton}>
              <Text style={styles.profileButtonText}>LinkedIn Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openWebsite('https://leetcode.com/u/kd1113/')} style={styles.profileButton}>
              <Text style={styles.profileButtonText}>LeetCode Profile</Text>
          </TouchableOpacity>
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
    profileButton: {
        height: 50,
        backgroundColor: 'blue',
        marginVertical: 20,
        marginHorizontal:20,
        borderRadius: 4,
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    },
    profileButtonText: {
        color:'white'
    }
})