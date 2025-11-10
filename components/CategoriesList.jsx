import React from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const data = [
  {
    id: '1',
    title: 'Body Systems',
    episodeCount: 12,
    updatedDate: '3 Jun',
    mainImage: require('./assets/lungs.png'),
    miniList: [
      { emoji: '❤️', text: 'How your heart works' },
      { emoji: '🫁', text: 'Breathing and the lungs' },
    ],
    moreCount: 10,
  },
  {
    id: '2',
    title: 'Medical Conditions',
    episodeCount: 27,
    updatedDate: '1 Jun',
    mainImage: require('./assets/clipboard.png'),
    miniList: [
      { emoji: '🩸', text: 'Managing high blood press...' },
      { emoji: '😔', text: 'Understanding depression' },
    ],
    moreCount: 25,
  },
  {
    id: '3',
    title: 'Diagnostics',
    episodeCount: 12,
    updatedDate: '29 May',
    mainImage: require('./assets/magnifying_glass.png'),
    miniList: [
      { emoji: '📊', text: 'Understanding your ECG r...' },
      { emoji: '🏥', text: 'What an MRI can tell you' },
    ],
    moreCount: 10,
  },
];

const CategoryItem = ({ item }) => {

 

  return (
    <TouchableOpacity 
      style={styles.itemContainer} 
     
    >
      <View style={styles.imageWrapper}>
        <Image source={item.mainImage} style={styles.mainImage} />
      </View>

      <View style={styles.contentWrapper}>
        <Text style={styles.title}>{item.title}</Text>
        
        <View style={styles.infoRow}>
          <Ionicons name="headset-outline" size={14} color="#666" />
          <Text style={styles.infoText}>{item.episodeCount} Episodes</Text>
          <Ionicons name="refresh-outline" size={14} color="#666" style={styles.infoIconSpacing} />
          <Text style={styles.infoText}>Updated {item.updatedDate}</Text>
        </View>

        <View style={styles.miniListContainer}>
          {item.miniList.map((miniItem, index) => (
            <View key={index} style={styles.miniListItem}>
              <Text style={styles.emoji}>{miniItem.emoji}</Text>
              <Text style={styles.miniListText}>{miniItem.text}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.moreText}>+{item.moreCount} more</Text>
      </View>
    </TouchableOpacity>
  );
};


const CategoriesList = () => {
  return (
    <View style={styles.listWrapper}>
      <FlatList
        data={data}
        renderItem={({ item }) => <CategoryItem item={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listWrapper: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    paddingTop: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginHorizontal: 15,
    marginBottom: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  imageWrapper: {
    width: 80,
    height: 80,
    backgroundColor: '#eefaff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  mainImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  contentWrapper: {
    flex: 1,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
    marginRight: 10,
  },
  infoIconSpacing: {
    marginLeft: 5,
  },
  miniListContainer: {
    marginBottom: 8,
  },
  miniListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
  },
  emoji: {
    fontSize: 14,
    marginRight: 6,
  },
  miniListText: {
    fontSize: 13,
    color: '#444',
    flexShrink: 1,
  },
  moreText: {
    fontSize: 13,
    color: '#007AFF',
    fontWeight: '500',
  },
});

export default CategoriesList;