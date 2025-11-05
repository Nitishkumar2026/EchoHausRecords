import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { MapPin, TrendingUp, Clock } from 'lucide-react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

const { width } = Dimensions.get('window');

const featuredRecords = [
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
];

const newArrivals = [
  {
    id: '4',
    title: 'Warehouse Sessions',
    artist: 'Ben Klock',
    genre: 'Techno',
    price: '€26.99',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=600&fit=crop',
  },
  {
    id: '5',
    title: 'Deep Kreuzberg',
    artist: 'Sonja Moonear',
    genre: 'House',
    price: '€23.99',
    image: 'https://images.unsplash.com/photo-1616715432532-c1bc2e4ad448?w=600&h=600&fit=crop',
  },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.logo}>EchoHaus</Text>
            <View style={styles.locationContainer}>
              <MapPin color="#6B6B6B" size={14} />
              <Text style={styles.location}>Kreuzberg, Berlin</Text>
            </View>
          </View>
        </View>

        <Animated.View entering={FadeInDown.delay(100)}>
          <TouchableOpacity 
            style={styles.djNightsBanner}
            onPress={() => router.push('/events')}
          >
            <LinearGradient
              colors={['#FF3366', '#CC0044']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.djNightsGradient}
            >
              <View style={styles.djNightsContent}>
                <View style={styles.djNightsTextContainer}>
                  <Text style={styles.djNightsLabel}>Upcoming</Text>
                  <Text style={styles.djNightsTitle}>DJ NIGHTS</Text>
                  <Text style={styles.djNightsSubtitle}>Every Friday & Saturday</Text>
                </View>
                <View style={styles.djNightsIconContainer}>
                  <Clock color="#FFFFFF" size={32} />
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(200)} style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleContainer}>
              <TrendingUp color="#FF3366" size={20} />
              <Text style={styles.sectionTitle}>Featured</Text>
            </View>
          </View>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalScroll}
          >
            {featuredRecords.map((record, index) => (
              <TouchableOpacity
                key={record.id}
                style={[styles.featuredCard, index === 0 && styles.firstCard]}
                onPress={() => router.push(`/record/${record.id}`)}
              >
                <Image source={{ uri: record.image }} style={styles.featuredImage} />
                <LinearGradient
                  colors={['transparent', 'rgba(0,0,0,0.9)']}
                  style={styles.featuredGradient}
                >
                  <Text style={styles.featuredTitle} numberOfLines={1}>{record.title}</Text>
                  <Text style={styles.featuredArtist} numberOfLines={1}>{record.artist}</Text>
                  <View style={styles.featuredFooter}>
                    <Text style={styles.featuredGenre}>{record.genre}</Text>
                    <Text style={styles.featuredPrice}>{record.price}</Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(300)} style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>New Arrivals</Text>
          </View>
          <View style={styles.gridContainer}>
            {newArrivals.map((record) => (
              <TouchableOpacity
                key={record.id}
                style={styles.gridCard}
                onPress={() => router.push(`/record/${record.id}`)}
              >
                <Image source={{ uri: record.image }} style={styles.gridImage} />
                <View style={styles.gridInfo}>
                  <Text style={styles.gridTitle} numberOfLines={1}>{record.title}</Text>
                  <Text style={styles.gridArtist} numberOfLines={1}>{record.artist}</Text>
                  <View style={styles.gridFooter}>
                    <Text style={styles.gridGenre}>{record.genre}</Text>
                    <Text style={styles.gridPrice}>{record.price}</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  logo: {
    fontFamily: 'Inter_700Bold',
    fontSize: 28,
    color: '#FFFFFF',
    letterSpacing: -0.5,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    gap: 4,
  },
  location: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: '#6B6B6B',
  },
  djNightsBanner: {
    marginHorizontal: 20,
    marginTop: 8,
    marginBottom: 24,
    borderRadius: 16,
    overflow: 'hidden',
  },
  djNightsGradient: {
    padding: 20,
  },
  djNightsContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  djNightsTextContainer: {
    flex: 1,
  },
  djNightsLabel: {
    fontFamily: 'Inter_500Medium',
    fontSize: 11,
    color: '#FFFFFF',
    opacity: 0.8,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  djNightsTitle: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    color: '#FFFFFF',
    marginTop: 4,
    letterSpacing: -0.5,
  },
  djNightsSubtitle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.9,
    marginTop: 4,
  },
  djNightsIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  sectionTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 20,
    color: '#FFFFFF',
    letterSpacing: -0.3,
  },
  horizontalScroll: {
    paddingLeft: 20,
    paddingRight: 8,
  },
  featuredCard: {
    width: width * 0.65,
    height: width * 0.65,
    marginRight: 12,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#1A1A1A',
  },
  firstCard: {
    marginLeft: 0,
  },
  featuredImage: {
    width: '100%',
    height: '100%',
  },
  featuredGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    paddingTop: 48,
  },
  featuredTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 2,
  },
  featuredArtist: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: '#CCCCCC',
    marginBottom: 8,
  },
  featuredFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  featuredGenre: {
    fontFamily: 'Inter_500Medium',
    fontSize: 11,
    color: '#FF3366',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  featuredPrice: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 15,
    color: '#FFFFFF',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    gap: 12,
  },
  gridCard: {
    width: (width - 52) / 2,
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    overflow: 'hidden',
  },
  gridImage: {
    width: '100%',
    height: (width - 52) / 2,
  },
  gridInfo: {
    padding: 12,
  },
  gridTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    color: '#FFFFFF',
    marginBottom: 2,
  },
  gridArtist: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: '#CCCCCC',
    marginBottom: 8,
  },
  gridFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gridGenre: {
    fontFamily: 'Inter_500Medium',
    fontSize: 10,
    color: '#FF3366',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  gridPrice: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 13,
    color: '#FFFFFF',
  },
});
