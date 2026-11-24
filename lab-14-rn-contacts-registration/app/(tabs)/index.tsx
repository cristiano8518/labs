import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import ContactsScreen from '../../task1/src/screens/ContactsScreen';
import RegistrationScreen from '../../task2/src/screens/RegistrationScreen';

export default function HomeScreen() {
  const [screen, setScreen] = useState<'contacts' | 'register'>('contacts');

  return (
    <View style={{ flex: 1 }}>
      
      {/* 🔥 ЭКРАНЫ */}
      {screen === 'contacts' ? (
        <ContactsScreen />
      ) : (
        <RegistrationScreen />
      )}

      {/* 🔥 ПЕРЕКЛЮЧЕНИЕ */}
      <View style={styles.switcher}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setScreen('contacts')}
        >
          <Text style={styles.text}>Contacts</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => setScreen('register')}
        >
          <Text style={styles.text}>Register</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  switcher: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#eee',
  },

  btn: {
    backgroundColor: '#0066cc',
    padding: 10,
    borderRadius: 10,
  },

  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});