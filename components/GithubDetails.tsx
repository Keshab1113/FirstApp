import { StyleSheet, Text, View, ScrollView, Linking, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

interface GitHubProfileData {
    login: string;
    id: number;
    avatar_url: string;
    html_url: string;
    name: string;
    company: string | null;
    blog: string;
    location: string | null;
    bio: string | null;
    public_repos: number;
    followers: number;
    following: number;
    created_at: string;
}

const Separator = () => <View style={styles.separator} />;

const GithubDetails = () => {
    const [profileData, setUser] = useState<GitHubProfileData | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.github.com/users/Keshab1113');
                setUser(response.data);
            } catch (err) {
                console.log('Failed to fetch data');
            }
        }
        fetchData();
    }, []);

    return (
        <View>
            <Text style={styles.headingText}>Github Details</Text>
            <Separator />
            <ScrollView contentContainerStyle={styles.container}>
                {profileData && (
                    <>
                        {profileData.avatar_url &&
                            <Image
                                source={{
                                    uri: profileData.avatar_url
                                }}
                                style={styles.ProfilePicture}
                            />
                        }
                        <View>
                            <Text style={styles.title}>{profileData.name || profileData.login}</Text>
                            <Text style={styles.subHead}> {profileData.bio || 'N/A'}</Text>
                            <Text style={styles.subOptions}>Username: {profileData.login}</Text>
                            <Text style={styles.subOptions}>Company: {profileData.company || 'N/A'}</Text>
                            <Text style={styles.subOptions}>Blog: {profileData.blog || 'N/A'}</Text>
                            <Text style={styles.subOptions}>Location: {profileData.location || 'N/A'}</Text>

                            <Text style={styles.subOptions}>Public Repos: {profileData.public_repos}</Text>
                            <Text style={styles.subOptions}>Followers: {profileData.followers}</Text>
                            <Text style={styles.subOptions}>Following: {profileData.following}</Text>
                            <Text style={styles.subOptions}>Profile Created At: {new Date(profileData.created_at).toLocaleDateString()}</Text>
                            <Text style={styles.link} onPress={() => Linking.openURL(profileData.html_url)}>
                                View GitHub Profile
                            </Text>
                        </View>
                    </>
                )}
            </ScrollView>
        </View>
    )
}

export default GithubDetails

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
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: 'white',
        marginVertical: 10
    },
    link: {
        color: 'yellow',
        marginTop: 10,
        textDecorationLine: 'underline',
    },
    ProfilePicture: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
    subHead: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: 'white',
        marginVertical: 10
    },
    subOptions: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white',
    }
})