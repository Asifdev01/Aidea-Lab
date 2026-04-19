import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, Platform, SafeAreaView, Animated, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const Avatar = ({ color, zIndex, left }: { color: string, zIndex: number, left: number }) => (
    <View style={[styles.avatar, { backgroundColor: color, zIndex, left }]} />
);

const CATEGORIES = [
    {
        id: 'startup',
        code: 'startup',
        displayCategory: 'STARTUP',
        title: 'Startup Ideas',
        description: 'Explore innovative projects solving real-world problems and disrupting established markets.',
        stats: Math.floor(Math.random() * 20) + 5
    },
    {
        id: 'ai',
        code: 'ai',
        displayCategory: 'ARTIFICIAL INTELLIGENCE',
        title: 'AI Innovations',
        description: 'Discover next-generation AI tools, smart platforms, and machine learning solutions.',
        stats: Math.floor(Math.random() * 20) + 5
    },
    {
        id: 'student',
        code: 'student',
        displayCategory: 'STUDENT',
        title: 'Campus & Study',
        description: 'Find creative utilities designed to streamline campus life, productivity, and education.',
        stats: Math.floor(Math.random() * 20) + 5
    },
    {
        id: 'unique',
        code: 'unique',
        displayCategory: 'UNIQUE',
        title: 'Unique Concepts',
        description: 'Browse unconventional, experimental, and out-of-the-box project ideas.',
        stats: Math.floor(Math.random() * 20) + 5
    },
    {
        id: 'finance',
        code: 'finance',
        displayCategory: 'FINANCE',
        title: 'Fintech & Budgeting',
        description: 'Smart utilities for managing money, splitting expenses, and financial planning.',
        stats: Math.floor(Math.random() * 20) + 5
    },
    {
        id: 'productivity',
        code: 'productivity',
        displayCategory: 'PRODUCTIVITY',
        title: 'Workflow & Habits',
        description: 'Optimize your daily routine with habit trackers and intelligent planning tools.',
        stats: Math.floor(Math.random() * 20) + 5
    },
    {
        id: 'health',
        code: 'health',
        displayCategory: 'HEALTH & WELLNESS',
        title: 'Mind & Body',
        description: 'Focus on your wellbeing with posture alerts, hydration trackers, and health tools.',
        stats: Math.floor(Math.random() * 20) + 5
    },
    {
        id: 'entertainment',
        code: 'entertainment',
        displayCategory: 'ENTERTAINMENT',
        title: 'Media & Social',
        description: 'Explore mood-based music players and collaborative watch party platforms.',
        stats: Math.floor(Math.random() * 20) + 5
    },
    {
        id: 'ecommerce',
        code: 'ecommerce',
        displayCategory: 'E-COMMERCE',
        title: 'Shop & Market',
        description: 'From campus marketplaces to price trackers, build the next shopping utility.',
        stats: Math.floor(Math.random() * 20) + 5
    },
    {
        id: 'local',
        code: 'local',
        displayCategory: 'LOCAL & COMMUNITY',
        title: 'Neighborhood Tools',
        description: 'Find study spots or track local crowd levels in real-time with your community.',
        stats: Math.floor(Math.random() * 20) + 5
    },
    {
        id: 'experimental',
        code: 'experimental',
        displayCategory: 'EXPERIMENTAL',
        title: 'The Lab',
        description: 'Deep dives into emotional patterns and simulations of your future self.',
        stats: Math.floor(Math.random() * 20) + 5
    },
    {
        id: 'futureTech',
        code: 'futureTech',
        displayCategory: 'FUTURE TECH',
        title: 'AR & Agents',
        description: 'Step into the future with Augmented Reality and autonomous AI personal agents.',
        stats: Math.floor(Math.random() * 20) + 5
    },
    {
        id: 'problemSolution',
        code: 'problemSolution',
        displayCategory: 'PROBLEM SOLVING',
        title: 'Fix Your Problems',
        description: 'Targeted solutions for everyday annoyances like hostel food quality feedback.',
        stats: Math.floor(Math.random() * 20) + 5
    },
    {
        id: 'quickBuild',
        code: 'quickBuild',
        displayCategory: 'QUICK BUILD',
        title: 'Swift Projects',
        description: 'Small-scale projects perfect for practicing core backend and frontend skills.',
        stats: Math.floor(Math.random() * 20) + 5
    },
    {
        id: 'solo',
        code: 'solo',
        displayCategory: 'SOLO DEV',
        title: 'Personal Portfolio',
        description: 'Showcase your work with automated portfolio generators and personal sites.',
        stats: Math.floor(Math.random() * 20) + 5
    }
];

export default function Home() {
    const router = useRouter();
    const [searchActive, setSearchActive] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const widthAnim = useRef(new Animated.Value(48)).current; // icon size

    const filteredCategories = CATEGORIES.filter(cat => {
        const q = searchQuery.toLowerCase();
        return (
            cat.title.toLowerCase().includes(q) ||
            cat.displayCategory.toLowerCase().includes(q)
        );
    });

    const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            if (searchActive) {
                // Clear any existing timeout first
                if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);

                // Set a 3-second timer to collapse
                searchTimeoutRef.current = setTimeout(() => {
                    collapseSearch();
                }, 3000);
            }
        });

        const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
            // If user opens keyboard again, cancel the auto-close
            if (searchTimeoutRef.current) {
                clearTimeout(searchTimeoutRef.current);
                searchTimeoutRef.current = null;
            }
        });

        return () => {
            hideSubscription.remove();
            showSubscription.remove();
            if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
        };
    }, [searchActive]);

    const expandSearch = () => {
        if (searchTimeoutRef.current) {
            clearTimeout(searchTimeoutRef.current);
            searchTimeoutRef.current = null;
        }
        setSearchActive(true);
        Animated.timing(widthAnim, {
            toValue: 280,
            duration: 250,
            useNativeDriver: false,
        }).start();
    };

    const collapseSearch = () => {
        Keyboard.dismiss();
        if (searchTimeoutRef.current) {
            clearTimeout(searchTimeoutRef.current);
            searchTimeoutRef.current = null;
        }
        Animated.timing(widthAnim, {
            toValue: 48,
            duration: 250,
            useNativeDriver: false,
        }).start(() => {
            setSearchActive(false);
            setSearchQuery('');
        });
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
                <View style={styles.container}>
                    <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
                        <View style={styles.header}>
                            <Text style={styles.subtitle}>AIDEA LAB</Text>
                            <Text style={styles.title}>Find Ideas</Text>
                            <View style={styles.searchWrapper}>
                                <Animated.View style={[styles.searchContainer, { width: widthAnim }]}>
                                    {searchActive ? (
                                        <>
                                            <TextInput
                                                style={styles.searchInput}
                                                placeholder="Search ideas..."
                                                placeholderTextColor="#888"
                                                value={searchQuery}
                                                onChangeText={setSearchQuery}
                                                autoFocus
                                            />
                                            <TouchableOpacity onPress={collapseSearch} style={styles.closeBtn}>
                                                <Text style={styles.closeText}>✕</Text>
                                            </TouchableOpacity>
                                        </>
                                    ) : (
                                        <TouchableOpacity onPress={expandSearch} style={styles.iconBtn}>
                                            <Text style={styles.iconText}>🔍</Text>
                                        </TouchableOpacity>
                                    )}
                                </Animated.View>
                            </View>
                        </View>

                        <View style={styles.cardsContainer}>
                            {(searchActive ? filteredCategories : CATEGORIES).map((cat, idx) => (
                                <Pressable
                                    key={idx}
                                    style={styles.card}
                                    onPress={() => router.push({
                                        pathname: "/screens/swipeScreen",
                                        params: { category: cat.code }
                                    })}
                                >
                                    <Text style={styles.cardCategory}>{cat.displayCategory}</Text>
                                    <Text style={styles.cardTitle}>{cat.title}</Text>

                                    <View style={styles.avatarRow}>
                                        <Avatar color="#DBE2EF" zIndex={3} left={0} />
                                        <Avatar color="#F9F7F7" zIndex={2} left={-12} />
                                        <Avatar color="#E8E8E8" zIndex={1} left={-24} />
                                        <View style={[styles.avatarStats, { left: -36 }]}>
                                            <Text style={styles.statsText}>+{cat.stats}</Text>
                                        </View>
                                    </View>

                                    <Text style={styles.cardDescription}>{cat.description}</Text>
                                </Pressable>
                            ))}
                        </View>
                    </ScrollView>
                </View>

                {/* FAB to access Saved Ideas */}
                <TouchableOpacity
                    style={styles.fab}
                    onPress={() => router.push('/screens/savedIdeasScreen')}
                    activeOpacity={0.8}
                >
                    <Ionicons name="bookmark" size={24} color="#FFFFFF" />
                </TouchableOpacity>

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
    container: {
        flex: 1,
    },
    scrollContent: {
        paddingHorizontal: 24,
        paddingTop: 60,
        paddingBottom: 60,
    },
    header: {
        marginBottom: 40,
        position: 'relative',
        zIndex: 10,
    },
    subtitle: {
        fontSize: 12,
        fontWeight: '700',
        letterSpacing: 2.5,
        color: '#8E8E93',
        marginBottom: 12,
    },
    title: {
        fontSize: 48,
        fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
        color: '#1C1C1E',
        lineHeight: 52,
        paddingRight: 50, // space for search icon
    },
    searchWrapper: {
        position: 'absolute',
        right: 0,
        top: 25, // Align near the "Find Ideas" title
    },
    searchContainer: {
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        borderWidth: 1,
        borderColor: '#D1D5DB',
        shadowColor: 'rgba(0, 0, 0, 0.05)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 2,
        overflow: 'hidden',
    },
    iconBtn: {
        width: 48,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconText: {
        fontSize: 20,
    },
    searchInput: {
        flex: 1,
        height: '100%',
        paddingLeft: 16,
        fontSize: 14,
        color: '#1C1C1E',
        fontWeight: '500',
    },
    closeBtn: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeText: {
        fontSize: 18,
        color: '#8E8E93',
        fontWeight: '600',
    },
    cardsContainer: {
        gap: 20,
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 24,
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
    avatarRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        borderWidth: 2,
        borderColor: '#FFFFFF',
    },
    avatarStats: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#F2F2F7',
        borderWidth: 2,
        borderColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    statsText: {
        fontSize: 11,
        fontWeight: '700',
        color: '#1C1C1E',
    },
    cardDescription: {
        fontSize: 15,
        fontWeight: '500',
        color: '#3A3A3C',
        lineHeight: 22,
    },
    fab: {
        position: 'absolute',
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        right: 24,
        bottom: Platform.OS === 'ios' ? 40 : 24,
        backgroundColor: '#111111',
        borderRadius: 30,
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 6,
        elevation: 6,
        zIndex: 100,
    }
});