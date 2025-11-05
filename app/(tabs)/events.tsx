import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar, Clock, MapPin, Users } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown } from 'react-native-reanimated';

const { width } = Dimensions.get('window');

const upcomingEvents = [
  {
    id: '1',
    title: 'Techno Friday: Marcel Dettmann',
    date: 'Jan 19, 2025',
    time: '23:00 - 06:00',
    lineup: ['Marcel Dettmann', 'Ben Klock', 'Answer Code Request'],
    image: 'https://images.unsplash.com/photo-1571266028243-d220c6e2f4e0?w=800&h=400&fit=crop',
    capacity: '150 people',
    status: 'Available',
  },
  {
    id: '2',
    title: 'House Saturdays: Dixon',
    date: 'Jan 20, 2025',
    time: '22:00 - 05:00',
    lineup: ['Dixon', 'Âme', 'Sonja Moonear'],
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=400&fit=crop',
    capacity: '150 people',
    status: 'Available',
  },
  {
    id: '3',
    title: 'Ambient Sessions: Vladislav Delay',
    date: 'Jan 26, 2025',
    time: '20:00 - 01:00',
    lineup: ['Vladislav Delay', 'Biosphere', 'Susumu Yokota'],
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=400&fit=crop',
    capacity: '100 people',
    status: 'Available',
  },
];

export default function EventsScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.title}>DJ Nights</Text>
        <View style={styles.locationContainer}>
          <MapPin color="#6B6B6B" size={14} />
          <Text style={styles.location}>EchoHaus Records, Kreuzberg</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Animated.View entering={FadeInDown.delay(100)} style={styles.featuredEventContainer}>
          <Image 
            source={{ uri: upcomingEvents[0].image }} 
            style={styles.featuredEventImage}
          />
          <LinearGradient
            colors={['transparent', 'rgba(10,10,10,0.95)']}
            style={styles.featuredEventGradient}
          >
            <View style={styles.featuredEventContent}>
              <View style={styles.featuredEventBadge}>
                <Text style={styles.featuredEventBadgeText}>Next Event</Text>
              </View>
              <Text style={styles.featuredEventTitle}>{upcomingEvents[0].title}</Text>
              <View style={styles.featuredEventMeta}>
                <View style={styles.featuredEventMetaItem}>
                  <Calendar color="#FF3366" size={16} />
                  <Text style={styles.featuredEventMetaText}>{upcomingEvents[0].date}</Text>
                </View>
                <View style={styles.featuredEventMetaItem}>
                  <Clock color="#FF3366" size={16} />
                  <Text style={styles.featuredEventMetaText}>{upcomingEvents[0].time}</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.rsvpButton}>
                <Text style={styles.rsvpButtonText}>RSVP Now</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(200)} style={styles.section}>
          <Text style={styles.sectionTitle}>Upcoming Events</Text>
          <View style={styles.eventsList}>
            {upcomingEvents.slice(1).map((event, index) => (
              <TouchableOpacity
                key={event.id}
                style={styles.eventCard}
              >
                <Image source={{ uri: event.image }} style={styles.eventImage} />
                <View style={styles.eventInfo}>
                  <Text style={styles.eventTitle} numberOfLines={2}>{event.title}</Text>
                  <View style={styles.eventMetaContainer}>
                    <View style={styles.eventMetaItem}>
                      <Calendar color="#6B6B6B" size={14} />
                      <Text style={styles.eventMetaText}>{event.date}</Text>
                    </View>
                    <View style={styles.eventMetaItem}>
                      <Clock color="#6B6B6B" size={14} />
                      <Text style={styles.eventMetaText}>{event.time}</Text>
                    </View>
                  </View>
                  <View style={styles.eventLineup}>
                    <Text style={styles.eventLineupLabel}>Lineup:</Text>
                    <Text style={styles.eventLineupText} numberOfLines={1}>
                      {event.lineup.join(', ')}
                    </Text>
                  </View>
                  <View style={styles.eventFooter}>
                    <View style={styles.eventCapacity}>
                      <Users color="#6B6B6B" size={14} />
                      <Text style={styles.eventCapacityText}>{event.capacity}</Text>
                    </View>
                    <View style={styles.eventStatus}>
                      <View style={styles.eventStatusDot} />
                      <Text style={styles.eventStatusText}>{event.status}</Text>
                    </View>
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
    marginBottom: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  location: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: '#6B6B6B',
  },
  featuredEventContainer: {
    marginHorizontal: 20,
    marginBottom: 32,
    height: width * 0.75,
    borderRadius: 16,
    overflow: 'hidden',
  },
  featuredEventImage: {
    width: '100%',
    height: '100%',
  },
  featuredEventGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 80,
  },
  featuredEventContent: {
    padding: 20,
  },
  featuredEventBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#FF3366',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    marginBottom: 12,
  },
  featuredEventBadgeText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 11,
    color: '#FFFFFF',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  featuredEventTitle: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 12,
    letterSpacing: -0.5,
  },
  featuredEventMeta: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  },
  featuredEventMetaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  featuredEventMetaText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: '#FFFFFF',
  },
  rsvpButton: {
    backgroundColor: '#FF3366',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  rsvpButtonText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 15,
    color: '#FFFFFF',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
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
  eventsList: {
    paddingHorizontal: 20,
    gap: 16,
  },
  eventCard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    overflow: 'hidden',
  },
  eventImage: {
    width: '100%',
    height: 160,
  },
  eventInfo: {
    padding: 16,
  },
  eventTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 12,
    letterSpacing: -0.3,
  },
  eventMetaContainer: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 12,
  },
  eventMetaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  eventMetaText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: '#6B6B6B',
  },
  eventLineup: {
    marginBottom: 12,
  },
  eventLineupLabel: {
    fontFamily: 'Inter_500Medium',
    fontSize: 12,
    color: '#6B6B6B',
    marginBottom: 4,
  },
  eventLineupText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: '#CCCCCC',
  },
  eventFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#2A2A2A',
  },
  eventCapacity: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  eventCapacityText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: '#6B6B6B',
  },
  eventStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  eventStatusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#00FF88',
  },
  eventStatusText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 13,
    color: '#00FF88',
  },
});
