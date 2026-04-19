import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, Pressable, Platform, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import { useRouter, useFocusEffect } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { getSavedIdeas, SavedIdea } from '@/utils/storage';

export default function SavedIdeasScreen() {
    const router = useRouter();
    const [savedIdeas, setSavedIdeas] = useState<SavedIdea[]>([]);
    const [loading, setLoading] = useState(true);

    useFocusEffect(
        useCallback(() => {
            let isActive = true;
            
            const fetchIdeas = async () => {
                setLoading(true);
                const ideas = await getSavedIdeas();
                // Sort newest heavily
                ideas.sort((a, b) => b.savedAt - a.savedAt);
                if (isActive) {
                    setSavedIdeas(ideas);
                    setLoading(false);
                }
            };

            fetchIdeas();

            return () => {
                isActive = false;
            };
        }, [])
    );

    const renderItem = ({ item }: { item: SavedIdea }) => (
        <Pressable
            style={styles.card}
            onPress={() => router.push({
                pathname: "/screens/resultScreen",
                params: { category: item.category, title: item.title }
            })}
        >
            <Text style={styles.cardCategory}>{(item.category || "IDEA").toUpperCase()}</Text>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDescription} numberOfLines={3}>{item.description}</Text>

            <View style={styles.difficultyContainer}>
                <Text style={styles.difficultyLabel}>DIFF: </Text>
                <Text style={styles.difficultyValue}>{item.difficulty || "Medium"}</Text>
            </View>
        </Pressable>
    );

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
                    <Text style={styles.headerTitle}>SAVED IDEAS</Text>
                    <View style={{ width: 40 }} />
                </View>

                {loading ? (
                    <View style={styles.statusContainer}>
                        <ActivityIndicator size="large" color="#1C1C1E" />
                    </View>
                ) : savedIdeas.length > 0 ? (
                    <FlatList
                        data={savedIdeas}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.listContent}
                    />
                ) : (
                    <View style={styles.statusContainer}>
                        <Text style={styles.emptyText}>No saved ideas yet.</Text>
                        <Text style={styles.emptySubtext}>Save some ideas to see them here.</Text>
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
    statusContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
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
        paddingTop: 10,
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
    emptyText: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1C1C1E',
        marginBottom: 8,
    },
    emptySubtext: {
        fontSize: 14,
        color: '#8E8E93',
    }
});
