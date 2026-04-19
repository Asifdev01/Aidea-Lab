import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Pressable, Platform, SafeAreaView, ActivityIndicator, FlatList, Dimensions } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';
import { API_BASE_URL } from '@/constants/api';

const { width } = Dimensions.get('window');

// Avatar removed for better 2-column spacing

export default function SwipeScreen() {
    const { category } = useLocalSearchParams();
    const router = useRouter();
    const [ideas, setIdeas] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        axios.get(`${API_BASE_URL}/${category}/all`)
            .then(res => {
                setIdeas(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Fetch Error:", err);
                setError("Unable to connect to the server. Please check your network and ensure the backend is running.");
                setLoading(false);
            });
    }, [category]);

    if (loading) {
        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.header}>
                    <Pressable onPress={() => router.back()} style={styles.backButton}>
                        <Text style={styles.backText}>BACK</Text>
                    </Pressable>
                </View>
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#1C1C1E" />
                    <Text style={{ marginTop: 10, color: '#8E8E93' }}>Connecting...</Text>
                </View>
            </SafeAreaView>
        );
    }

    if (error) {
        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.header}>
                    <Pressable onPress={() => router.back()} style={styles.backButton}>
                        <Text style={styles.backText}>BACK</Text>
                    </Pressable>
                </View>
                <View style={styles.loadingContainer}>
                    <Text style={{ fontSize: 40 }}>⚠️</Text>
                    <Text style={{ color: '#FF3B30', marginTop: 10, fontWeight: '600' }}>Network Error</Text>
                    <Text style={{ color: '#8E8E93', textAlign: 'center', marginHorizontal: 40, marginTop: 10 }}>{error}</Text>
                    <Pressable 
                        onPress={() => router.back()} 
                        style={{ marginTop: 20, backgroundColor: '#1C1C1E', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 10 }}
                    >
                        <Text style={{ color: '#FFF', fontWeight: '700' }}>GO BACK</Text>
                    </Pressable>
                </View>
            </SafeAreaView>
        );
    }

    const renderItem = ({ item }: { item: any }) => {
        return (
            <Pressable
                style={styles.card}
                onPress={() => router.push({
                    pathname: "/screens/resultScreen",
                    params: { category: category as string, title: item.title }
                })}
            >
                <Text style={styles.cardCategory}>{item.displayCategory || (category ? String(category).toUpperCase() : 'CATEGORY')}</Text>
                <Text style={styles.cardTitle}>{item.title}</Text>

                <Text style={styles.cardDescription}>{item.description}</Text>

                <View style={styles.difficultyContainer}>
                    <Text style={styles.difficultyLabel}>DIFF: </Text>
                    <Text style={styles.difficultyValue}>{item.difficulty || "Medium"}</Text>
                </View>
            </Pressable>
        );
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <LinearGradient
                colors={['#FFF9E5', '#FFFFFF']}
                locations={[0, 0.4]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradient}
            >
                <View style={styles.header}>
                    <Pressable onPress={() => router.back()} style={styles.backButton}>
                        <Text style={styles.backText}>BACK</Text>
                    </Pressable>
                    <Text style={styles.headerTitle}>{(category as string || "IDEAS").toUpperCase()}</Text>
                    <View style={{ width: 40 }} />
                </View>

                {ideas.length > 0 ? (
                    <FlatList
                        data={ideas}
                        renderItem={renderItem}
                        keyExtractor={(item, idx) => idx.toString()}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.listContent}
                    />
                ) : (
                    <View style={styles.loadingContainer}>
                        <Text style={styles.noIdeasText}>No ideas found for this category.</Text>
                    </View>
                )}
            </LinearGradient>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    gradient: {
        flex: 1,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: Platform.OS === 'android' ? 40 : 10,
        paddingBottom: 20,
    },
    backButton: {
        paddingVertical: 8,
        paddingRight: 10,
    },
    backText: {
        fontSize: 12,
        fontWeight: '700',
        letterSpacing: 1.5,
        color: '#1C1C1E',
    },
    headerTitle: {
        fontSize: 14,
        fontWeight: '700',
        letterSpacing: 2,
        color: '#8E8E93',
    },
    listContent: {
        paddingHorizontal: 24,
        paddingBottom: 40,
    },
    card: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 24,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#D1D5DB',
        shadowColor: 'rgba(0, 0, 0, 0.05)',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 1,
    },
    cardCategory: {
        fontSize: 11,
        fontWeight: '700',
        letterSpacing: 1.5,
        color: '#8E8E93',
        marginBottom: 10,
    },
    cardTitle: {
        fontSize: 26,
        fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
        color: '#1C1C1E',
        marginBottom: 16,
    },
    cardDescription: {
        fontSize: 15,
        fontWeight: '500',
        color: '#3A3A3C',
        lineHeight: 22,
        marginBottom: 16,
    },
    difficultyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16,
        paddingTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#F0F0F0',
    },
    difficultyLabel: {
        fontSize: 11,
        fontWeight: '700',
        color: '#8E8E93',
        letterSpacing: 1.2,
    },
    difficultyValue: {
        fontSize: 12,
        fontWeight: '600',
        color: '#1C1C1E',
    },
    noIdeasText: {
        fontSize: 16,
        color: '#8E8E93',
    }
});
