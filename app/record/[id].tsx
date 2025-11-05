import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ArrowLeft, Play, Heart, Share2, ShoppingCart } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown } from 'react-native-reanimated';

const { width } = Dimensions.get('window');

const recordData: { [key: string]: any } = {
  '1': {
    title: 'Dystopian Frequencies',
    artist: 'Marcel Dettmann',
    genre: 'Techno',
    price: '€24.99',
    image: 'https://images.unsplash.com/photo-1619983081563-430f63602796?w=800&h=800&fit=crop',
    year: '2024',
    label: 'Ostgut Ton',
    catalog: 'OSTGUT 123',
    description: 'A journey through the dark corners of Berlin techno. Marcel Dettmann delivers his signature sound with pounding kicks and hypnotic rhythms that capture the essence of underground club culture.',
    tracks: [
      { id: '1', name: 'A1. Dystopian', duration: '6:24' },
      { id: '2', name: 'A2. Frequencies', duration: '7:12' },
      { id: '3', name: 'B1. Warehouse', duration: '8:45' },
      { id: '4', name: 'B2. Berlin Dawn', duration: '5:33' },
    ],
  },
  '2': {
    title: 'Berlin Afterhours',
    artist: 'Dixon',
    genre: 'House',
    price: '€22.99',
    image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&h=800&fit=crop',
    year: '2024',
    label: 'Innervisions',
    catalog: 'IV 089',
    description: 'Deep house selections from the master himself. Perfect for those early morning sessions when the sun starts to rise over Kreuzberg.',
    tracks: [
      { id: '1', name: 'A1. Afterhours', duration: '7:18' },
      { id: '2', name: 'A2. Panorama Bar', duration: '6:52' },
      { id: '3', name: 'B1. Sunday Morning', duration: '8:24' },
    ],
  },
  '3': {
    title: 'Ambient Structures',
    artist: 'Vladislav Delay',
    genre: 'Ambient',
    price: '€19.99',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=800&fit=crop',
    year: '2024',
    label: 'Ripatti',
    catalog: 'RIP 012',
    description: 'Atmospheric soundscapes and textural explorations. A masterclass in ambient production from one of Finland\'s finest electronic musicians.',
    tracks: [
      { id: '1', name: 'A1. Structures I', duration: '12:34' },
      { id: '2', name: 'B1. Structures II', duration: '15:22' },
    ],
  },
  '4': {
    title: 'Warehouse Sessions',
    artist: 'Ben Klock',
    genre: 'Techno',
    price: '€26.99',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=800&fit=crop',
    year: '2024',
    label: 'Klockworks',
    catalog: 'KW 045',
    description: 'Raw and uncompromising techno straight from the warehouse. Ben Klock\'s signature driving sound that has made him a Berghain resident legend.',
    tracks: [
      { id: '1', name: 'A1. Warehouse', duration: '7:45' },
      { id: '2', name: 'A2. Sessions', duration: '6:38' },
      { id: '3', name: 'B1. Steel', duration: '8:12' },
      { id: '4', name: 'B2. Concrete', duration: '7:56' },
    ],
  },
};

export default function RecordDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const record = recordData[id as string] || recordData['1'];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: record.image }} style={styles.image} />
          <LinearGradient
            colors={['rgba(10,10,10,0.8)', 'transparent', 'rgba(10,10,10,0.95)']}
            style={styles.imageGradient}
          />
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <ArrowLeft color="#FFFFFF" size={24} />
          </TouchableOpacity>
        </View>

        <Animated.View entering={FadeInDown.delay(100)} style={styles.content}>
          <View style={styles.header}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{record.title}</Text>
              <Text style={styles.artist}>{record.artist}</Text>
            </View>
            <TouchableOpacity style={styles.heartButton}>
              <Heart color="#FF3366" size={24} />
            </TouchableOpacity>
          </View>

          <View style={styles.metaContainer}>
            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>Genre</Text>
              <Text style={styles.metaValue}>{record.genre}</Text>
            </View>
            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>Year</Text>
              <Text style={styles.metaValue}>{record.year}</Text>
            </View>
            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>Label</Text>
              <Text style={styles.metaValue}>{record.label}</Text>
            </View>
            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>Catalog</Text>
              <Text style={styles.metaValue}>{record.catalog}</Text>
            </View>
          </View>

          <Text style={styles.description}>{record.description}</Text>

          <View style={styles.tracksSection}>
            <Text style={styles.tracksTitle}>Tracklist</Text>
            <View style={styles.tracksList}>
              {record.tracks.map((track: any, index: number) => (
                <View
                  key={track.id}
                  style={[
                    styles.trackItem,
                    index === record.tracks.length - 1 && styles.lastTrack,
                  ]}
                >
                  <Text style={styles.trackName}>{track.name}</Text>
                  <Text style={styles.trackDuration}>{track.duration}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.actions}>
            <TouchableOpacity style={styles.previewButton}>
              <Play color="#FFFFFF" size={20} fill="#FFFFFF" />
              <Text style={styles.previewButtonText}>Listen Preview</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareButton}>
              <Share2 color="#6B6B6B" size={20} />
            </TouchableOpacity>
          </View>
        </Animated.View>
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceLabel}>Price</Text>
          <Text style={styles.price}>{record.price}</Text>
        </View>
        <TouchableOpacity style={styles.addToCartButton}>
          <ShoppingCart color="#FFFFFF" size={20} />
          <Text style={styles.addToCartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
  imageContainer: {
    width: '100%',
    height: width,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 20,
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 20,
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  titleContainer: {
    flex: 1,
    marginRight: 16,
  },
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 28,
    color: '#FFFFFF',
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  artist: {
    fontFamily: 'Inter_500Medium',
    fontSize: 18,
    color: '#CCCCCC',
  },
  heartButton: {
    width: 48,
    height: 48,
    backgroundColor: '#1A1A1A',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  metaContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginBottom: 24,
  },
  metaItem: {
    width: (width - 56) / 2,
  },
  metaLabel: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: '#6B6B6B',
    marginBottom: 4,
  },
  metaValue: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 15,
    color: '#FFFFFF',
  },
  description: {
    fontFamily: 'Inter_400Regular',
    fontSize: 15,
    color: '#CCCCCC',
    lineHeight: 24,
    marginBottom: 32,
  },
  tracksSection: {
    marginBottom: 32,
  },
  tracksTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 16,
    letterSpacing: -0.3,
  },
  tracksList: {
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    overflow: 'hidden',
  },
  trackItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2A',
  },
  lastTrack: {
    borderBottomWidth: 0,
  },
  trackName: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: '#FFFFFF',
    flex: 1,
  },
  trackDuration: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: '#6B6B6B',
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
  },
  previewButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF3366',
    paddingVertical: 16,
    borderRadius: 12,
    gap: 8,
  },
  previewButtonText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 15,
    color: '#FFFFFF',
  },
  shareButton: {
    width: 56,
    height: 56,
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#0A0A0A',
    borderTopWidth: 1,
    borderTopColor: '#1A1A1A',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    gap: 16,
  },
  priceContainer: {
    flex: 1,
  },
  priceLabel: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: '#6B6B6B',
    marginBottom: 4,
  },
  price: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    color: '#FFFFFF',
    letterSpacing: -0.5,
  },
  addToCartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF3366',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    gap: 8,
  },
  addToCartButtonText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 15,
    color: '#FFFFFF',
  },
});
