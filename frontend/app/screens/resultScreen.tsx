import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable, Image, ActivityIndicator, SafeAreaView, Platform, ScrollView, Animated } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import axios from "axios";
import { LinearGradient } from 'expo-linear-gradient';
import { API_BASE_URL } from '@/constants/api';
import { isIdeaSaved, saveIdea, removeIdea, SavedIdea } from '@/utils/storage';

export default function Result() {
    const { category, title } = useLocalSearchParams();
    const router = useRouter();
    const [idea, setIdea] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [isSaved, setIsSaved] = useState(false);
    const scaleAnim = React.useRef(new Animated.Value(1)).current;

    useEffect(() => {
        const fetchUrl = `${API_BASE_URL}/${category}?title=${encodeURIComponent(title as string)}`;
        axios.get(fetchUrl)
            .then(async res => {
                const fetchedIdea = res.data;
                setIdea(fetchedIdea);
                
                // Check if already saved
                if (fetchedIdea && fetchedIdea.title) {
                    const saved = await isIdeaSaved(fetchedIdea.title);
                    setIsSaved(saved);
                }
                
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [category, title]);

    const handleSaveToggle = async () => {
        if (!idea) return;
        
        Animated.sequence([
            Animated.timing(scaleAnim, {
                toValue: 0.96,
                duration: 100,
                useNativeDriver: true,
            }),
            Animated.spring(scaleAnim, {
                toValue: 1,
                friction: 3,
                tension: 40,
                useNativeDriver: true,
            })
        ]).start();

        if (isSaved) {
            const success = await removeIdea(idea.title);
            if (success) setIsSaved(false);
        } else {
            const ideaToSave: SavedIdea = {
                title: idea.title,
                description: idea.description,
                category: category as string || "IDEA",
                difficulty: idea.difficulty || "Medium",
                tech: idea.tech || "",
                image: idea.image || "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?auto=format&fit=crop&w=800&q=80",
                savedAt: Date.now()
            };
            const success = await saveIdea(ideaToSave);
            if (success) setIsSaved(true);
        }
    };

    if (loading) {
        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#1C1C1E" />
                </View>
            </SafeAreaView>
        );
    }

    if (!idea) {
        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.loadingContainer}>
                    <Text>No Idea Found</Text>
                </View>
            </SafeAreaView>
        );
    }

    // "React, Node, MongoDB" -> ["React", "Node", "MongoDB"]
    const techArray = idea.tech ? idea.tech.split(',').map((t: string) => t.trim()) : [];

    return (
        <SafeAreaView style={styles.safeArea}>
            <LinearGradient
                colors={['#FFF9E5', '#FFFFFF']}
                locations={[0, 0.4]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradient}
            >
                {/* Header */}
                <View style={styles.header}>
                    <Pressable onPress={() => router.back()} style={styles.backButton}>
                        <Text style={styles.backText}>BACK</Text>
                    </Pressable>

                    <View style={{ width: 40 }} /> 
                </View>

                <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                    {/* Main Feature Image */}
                    <Image
                        source={{ uri: idea.image || "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?auto=format&fit=crop&w=800&q=80" }}
                        style={styles.heroImage}
                    />

                    <View style={styles.contentContainer}>
                        {/* Category Tag */}
                        <View style={styles.categoryBadge}>
                            <Text style={styles.categoryText}>{(category as string || "IDEA").toUpperCase()}</Text>
                        </View>

                        {/* Title & Description */}
                        <Text style={styles.title}>{idea.title}</Text>
                        <Text style={styles.subtitle}>{idea.description}</Text>

                        {/* Tech Pills */}
                        {techArray.length > 0 ? (
                            <View style={styles.techContainer}>
                                {techArray.map((techItem: string, idx: number) => (
                                    <View key={idx} style={styles.techPill}>
                                        <Text style={styles.techText}>{techItem}</Text>
                                    </View>
                                ))}
                            </View>
                        ) : null}

                        <Text style={styles.longDescription}>
                            {idea.detailedDescription || idea.description || "A platform designed to be highly engaging and solve key problems in its specific niche. It aims to streamline your daily tasks utilizing robust technologies and cutting-edge paradigms."}
                        </Text>

                        {/* Info Section Box (gray background like the image design) */}
                        <View style={styles.infoBox}>
                            <Text style={styles.infoBoxTitle}>TECHNOLOGIES</Text>
                            <View style={styles.infoBoxTechs}>
                                {techArray.map((techItem: string, idx: number) => (
                                    <View key={idx} style={styles.infoTechPill}>
                                        <Text style={styles.infoTechText}>{techItem}</Text>
                                    </View>
                                ))}
                            </View>
                        </View>

                        {/* Stats List */}
                        <View style={[styles.statRow, { marginTop: 24, borderBottomWidth: 1, borderBottomColor: '#EBEBEB', paddingBottom: 16 }]}>
                            <Text style={styles.statLabel}>DIFFICULTY</Text>
                            <View style={styles.difficultyBadge}>
                                <Text style={styles.difficultyText}>{idea.difficulty || "Medium"}</Text>
                            </View>
                        </View>

                        <View style={[styles.statRow, { marginTop: 16 }]}>
                            <Text style={styles.statLabel}>SCALABLE</Text>
                            <View style={styles.scalableBadge}>
                                <Text style={styles.scalableText}>✔ Yes</Text>
                            </View>
                        </View>

                    </View>
                </ScrollView>

                {/* Bottom Floating Action Area */}
                <View style={styles.bottomActions}>
                    <View style={styles.actionCard}>
                        <AnimatedPressable 
                            style={[
                                styles.saveButton, 
                                isSaved && styles.savedButtonActive,
                                { transform: [{ scale: scaleAnim }] }
                            ]}
                            onPress={handleSaveToggle}
                        >
                            <Text style={[styles.saveButtonText, isSaved && styles.savedButtonTextActive]}>
                                {isSaved ? "SAVED" : "SAVE IDEA"}
                            </Text>
                        </AnimatedPressable>
                    </View>
                </View>
            </LinearGradient>
        </SafeAreaView>
    );
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

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
        fontWeight: '600',
        letterSpacing: 1.5,
        color: '#1C1C1E',
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: '#1C1C1E',
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingBottom: 140, // space for bottom button
    },
    heroImage: {
        width: '100%',
        height: 220,
        borderRadius: 24,
        marginBottom: 24,
    },
    contentContainer: {
        flex: 1,
    },
    categoryBadge: {
        alignSelf: 'flex-start',
        backgroundColor: '#EEEEEE',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
        marginBottom: 16,
    },
    categoryText: {
        fontSize: 10,
        fontWeight: '700',
        letterSpacing: 1.5,
        color: '#666666',
    },
    title: {
        fontSize: 32,
        fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
        color: '#1C1C1E',
        marginBottom: 8,
        lineHeight: 38,
    },
    subtitle: {
        fontSize: 14,
        fontWeight: '400',
        color: '#868484ff',
        marginBottom: 16,
    },
    techContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        marginBottom: 16,
    },
    techPill: {
        backgroundColor: '#EEEEEE',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
    },
    techText: {
        fontSize: 13,
        fontWeight: '500',
        color: '#333333',
    },
    longDescription: {
        fontSize: 15,
        color: '#444444',
        lineHeight: 22,
        marginBottom: 32,
    },
    infoBox: {
        backgroundColor: '#F2F2F2',
        borderRadius: 16,
        padding: 20,
        marginBottom: 8,
    },
    infoBoxTitle: {
        fontSize: 11,
        fontWeight: '700',
        letterSpacing: 1.5,
        color: '#666666',
        marginBottom: 16,
    },
    infoBoxTechs: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    infoTechPill: {
        backgroundColor: '#E0E0E0',
        paddingHorizontal: 14,
        paddingVertical: 6,
        borderRadius: 16,
    },
    infoTechText: {
        fontSize: 13,
        fontWeight: '500',
        color: '#333333',
    },
    statRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    statLabel: {
        fontSize: 12,
        fontWeight: '600',
        letterSpacing: 2,
        color: '#333333',
    },
    difficultyBadge: {
        backgroundColor: '#FADEDB', // subtle red/pink 
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 16,
    },
    difficultyText: {
        color: '#5B2625',
        fontWeight: '500',
        fontSize: 13,
    },
    scalableBadge: {
        backgroundColor: '#E1EDDF', // subtle green
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 16,
    },
    scalableText: {
        color: '#2A4A28',
        fontWeight: '500',
        fontSize: 13,
    },
    bottomActions: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 20,
        paddingBottom: Platform.OS === 'ios' ? 40 : 20,
        backgroundColor: 'transparent',
    },
    actionCard: {
        backgroundColor: '#FAFAFA',
        borderRadius: 30,
        padding: 12,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#D1D5DB',
        shadowColor: 'rgba(0, 0, 0, 0.05)',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 2,
    },
    saveButton: {
        flex: 1,
        backgroundColor: '#111111',
        paddingVertical: 20,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    savedButtonActive: {
        backgroundColor: '#EBEBEB',
    },
    saveButtonText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '700',
        letterSpacing: 1.5,
    },
    savedButtonTextActive: {
        color: '#1C1C1E',
    }
});