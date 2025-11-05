import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, SlidersHorizontal } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import Animated, { FadeInDown } from 'react-native-reanimated';

const { width } = Dimensions.get('window');

const genres = [
  { id: '1', name: 'Techno', color: '#FF3366', count: 342 },
  { id: '2', name: 'House', color: '#FFB800', count: 289 },
  { id: '3', name: 'Ambient', color: '#00D9FF', count: 156 },
  { id: '4', name: 'Berlin Underground', color: '#9D00FF', count: 97 },
  { id: '5', name: 'Minimal', color: '#00FF88', count: 203 },
  { id: '6', name: 'Dub Techno', color: '#FF6B00', count: 124 },
];

const records = [
  {
    id: '1',
    title: 'Dystopian Frequencies',
    artist: 'Marcel Dettmann',
    genre: 'Techno',
    price: '€24.99',
    image: 'https://images.unsplash.com/photo-1619983081563-430f63602796?w=600&h=600&fit=crop',
  },
  {
    id: '2',
    title: 'Berlin Afterhours',
    artist: 'Dixon',
    genre: 'House',
    price: '€22.99',
    image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=600&h=600&fit=crop',
  },
  {
    id: '3',
    title: 'Ambient Structures',
    artist: 'Vladislav Delay',
    genre: 'Ambient',
    price: '€19.99',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=600&fit=crop',
  },
  {
    id: '4',
    title: 'Warehouse Sessions',
    artist: 'Ben Klock',
    genre: 'Techno',
    price: '€26.99',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=600&fit=crop',
  },
];

export default function BrowseScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.title}>Browse</Text>
      </View>

      <Animated.View entering={FadeInDown.delay(100)} style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Search color="#6B6B6B" size={20} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search records, artists..."
            placeholderTextColor="#6B6B6B"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <SlidersHorizontal color="#FFFFFF" size={20} />
        </TouchableOpacity>
      </Animated.View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Animated.View entering={FadeInDown.delay(200)} style={styles.section}>
          <Text style={styles.sectionTitle}>Genres</Text>
          <View style={styles.genresGrid}>
            {genres.map((genre, index) => (
              <TouchableOpacity
                key={genre.id}
                style={[styles.genreCard, { borderColor: genre.color }]}
              >
                <View style={[styles.genreColorIndicator, { backgroundColor: genre.color }]} />
                <Text style={styles.genreName}>{genre.name}</Text>
                <Text style={styles.genreCount}>{genre.count} records</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(300)} style={styles.section}>
          <Text style={styles.sectionTitle}>All Records</Text>
          <View style={styles.recordsList}>
            {records.map((record, index) => (
              <TouchableOpacity
                key={record.id}
                style={styles.recordCard}
                onPress={() => router.push(`/record/${record.id}`)}
              >
                <Image source={{ uri: record.image }} style={styles.recordImage} />
                <View style={styles.recordInfo}>
                  <Text style={styles.recordTitle} numberOfLines={1}>{record.title}</Text>
                  <Text style={styles.recordArtist} numberOfLines={1}>{record.artist}</Text>
                  <View style={styles.recordFooter}>
                    <Text style={styles.recordGenre}>{record.genre}</Text>
                    <Text style={styles.recordPrice}>{record.price}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 32,
    color: '#FFFFFF',
    letterSpacing: -0.5,
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 24,
    gap: 12,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    paddingHorizontal: 16,
    gap: 12,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Inter_400Regular',
    fontSize: 15,
    color: '#FFFFFF',
    paddingVertical: 14,
  },
  filterButton: {
    width: 48,
    height: 48,
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 20,
    color: '#FFFFFF',
    paddingHorizontal: 20,
    marginBottom: 16,
    letterSpacing: -0.3,
  },
  genresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    gap: 12,
  },
  genreCard: {
    width: (width - 52) / 2,
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
  },
  genreColorIndicator: {
    width: 40,
    height: 4,
    borderRadius: 2,
    marginBottom: 12,
  },
  genreName: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  genreCount: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: '#6B6B6B',
  },
  recordsList: {
    paddingHorizontal: 20,
    gap: 12,
  },
  recordCard: {
    flexDirection: 'row',
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    overflow: 'hidden',
  },
  recordImage: {
    width: 100,
    height: 100,
  },
  recordInfo: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  recordTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 15,
    color: '#FFFFFF',
    marginBottom: 2,
  },
  recordArtist: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: '#CCCCCC',
  },
  recordFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  recordGenre: {
    fontFamily: 'Inter_500Medium',
    fontSize: 11,
    color: '#FF3366',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  recordPrice: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 15,
    color: '#FFFFFF',
  },
});
