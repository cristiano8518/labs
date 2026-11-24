import React, { useCallback, useState } from 'react';
import {
  Alert,
  FlatList,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { Contact } from '../types';
import { generateContacts } from '../utils/mockData';

const ITEM_HEIGHT = 80;

export default function ContactsScreen() {
  const [contacts, setContacts] = useState<Contact[]>(generateContacts(100));
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);

  // 🔍 SEARCH
  const filteredContacts = contacts.filter((c) =>
    `${c.firstName} ${c.lastName}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // ⭐ FAVORITE
  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((i) => i !== id)
        : [...prev, id]
    );
  };

  // ➕ ADD CONTACT
  const addContact = () => {
    const newContact: Contact = {
      id: Date.now().toString(),
      firstName: 'New',
      lastName: 'User',
      email: 'new@almau.edu.kz',
      avatarColor: '#45B7D1',
    };
    setContacts((prev) => [newContact, ...prev]);
  };

  // 📊 SORT
  const sortContacts = () => {
    const sorted = [...contacts].sort((a, b) =>
      a.firstName.localeCompare(b.firstName)
    );
    setContacts(sorted);
  };

  const renderItem = useCallback(({ item }: { item: Contact }) => (
    <View style={styles.contactItem}>
      <TouchableOpacity
        style={{ flexDirection: 'row', flex: 1 }}
        onPress={() => Alert.alert('Selected', item.email)}
      >
        <View style={[styles.avatar, { backgroundColor: item.avatarColor }]}>
          <Text style={styles.avatarText}>
            {item.firstName[0]}{item.lastName[0]}
          </Text>
        </View>

        <View style={styles.contactDetails}>
          <Text style={styles.contactName}>
            {item.firstName} {item.lastName}
          </Text>
          <Text style={styles.contactEmail}>{item.email}</Text>
        </View>
      </TouchableOpacity>

      {/* ⭐ FAVORITE BUTTON */}
      <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
        <Text style={{ fontSize: 20 }}>
          {favorites.includes(item.id) ? '⭐' : '☆'}
        </Text>
      </TouchableOpacity>
    </View>
  ), [favorites]);

  const keyExtractor = useCallback((item: Contact) => item.id, []);

  const getItemLayout = useCallback((data: any, index: number) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  }), []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setContacts(generateContacts(100));
      setRefreshing(false);
    }, 1500);
  }, []);

  return (
    <SafeAreaView style={styles.container}>

      {/* 🔍 SEARCH */}
      <TextInput
        placeholder="Search..."
        value={search}
        onChangeText={setSearch}
        style={styles.search}
      />

      {/* 🔘 ACTIONS */}
      <View style={styles.actions}>
        <TouchableOpacity onPress={addContact} style={styles.btn}>
          <Text style={styles.btnText}>+ Add</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={sortContacts} style={styles.btn}>
          <Text style={styles.btnText}>Sort</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredContacts}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        getItemLayout={getItemLayout}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListEmptyComponent={
          <Text style={{ textAlign: 'center', marginTop: 50 }}>
            No contacts found 😢
          </Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },

  search: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  btn: {
    backgroundColor: '#0066cc',
    padding: 10,
    borderRadius: 10,
  },

  btnText: { color: '#fff' },

  contactItem: {
    height: ITEM_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    justifyContent: 'space-between',
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  avatarText: { color: '#fff', fontWeight: 'bold' },

  contactDetails: { flex: 1 },

  contactName: { fontWeight: 'bold' },

  contactEmail: { color: '#777' },
});