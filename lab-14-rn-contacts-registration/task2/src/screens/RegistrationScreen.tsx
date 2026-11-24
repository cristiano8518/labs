import React, { useState } from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

export default function RegistrationScreen() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  // EMAIL
  const validateEmail = (text: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setForm({ ...form, email: text });

    if (!regex.test(text) && text.length > 0) {
      setErrors((prev) => ({ ...prev, email: 'Invalid email' }));
    } else {
      setErrors((prev) => ({ ...prev, email: '' }));
    }
  };

  // PASSWORD
  const validatePassword = (text: string) => {
    const valid = text.length >= 8 && /\d/.test(text);

    setForm({ ...form, password: text });

    if (!valid && text.length > 0) {
      setErrors((prev) => ({
        ...prev,
        password: 'Min 8 chars + number',
      }));
    } else {
      setErrors((prev) => ({ ...prev, password: '' }));
    }
  };

  const handleRegister = () => {
    Keyboard.dismiss();

    if (!errors.email && !errors.password && form.email && form.password) {
      Alert.alert('Success', 'Account created!');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>

          <Text style={styles.title}>Register</Text>

          <TextInput
            placeholder="Full Name"
            style={styles.input}
            value={form.name}
            onChangeText={(t) => setForm({ ...form, name: t })}
          />

          <TextInput
            placeholder="Email"
            style={[styles.input, errors.email && styles.errorInput]}
            value={form.email}
            onChangeText={validateEmail}
          />
          {errors.email && <Text style={styles.error}>{errors.email}</Text>}

          <View>
            <TextInput
              placeholder="Password"
              style={[styles.input, errors.password && styles.errorInput]}
              secureTextEntry={!showPassword}
              value={form.password}
              onChangeText={validatePassword}
            />

            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
            >
              <Text>
                {showPassword ? '🙈 Hide' : '👁️ Show'}
              </Text>
            </TouchableOpacity>
          </View>

          {errors.password && (
            <Text style={styles.error}>{errors.password}</Text>
          )}

          <TouchableOpacity
            style={[
              styles.btn,
              (!form.email || !form.password ||
                errors.email || errors.password) && styles.disabled,
            ]}
            onPress={handleRegister}
            disabled={
              !form.email || !form.password ||
              !!errors.email || !!errors.password
            }
          >
            <Text style={{ color: '#fff' }}>Register</Text>
          </TouchableOpacity>

        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },

  scrollContent: {
    padding: 20,
    justifyContent: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  input: {
    backgroundColor: '#eee',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },

  errorInput: {
    borderColor: 'red',
    borderWidth: 1,
  },

  error: {
    color: 'red',
    marginBottom: 10,
  },

  btn: {
    backgroundColor: '#0066cc',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  disabled: {
    backgroundColor: '#aaa',
  },
});