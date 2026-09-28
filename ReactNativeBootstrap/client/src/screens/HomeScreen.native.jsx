import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { API_BASE_URL } from '../config/api';

export default function HomeScreen() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadApi = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`${API_BASE_URL}/api/hello`);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      setMessage(data.message);
    } catch (err) {
      setError(err.message || 'Could not reach API');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadApi();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.badge}><Text style={styles.badgeText}>MOBILE</Text></View>
        <Text style={styles.title}>Universal React Native App</Text>
        <Text style={styles.copy}>This native screen uses React Native components and shares the same Express API.</Text>

        {loading ? <ActivityIndicator size="large" /> : (
          <View style={[styles.status, error ? styles.error : styles.success]}>
            <Text style={styles.statusText}>{error ? `API error: ${error}` : `Server says: ${message}`}</Text>
          </View>
        )}

        <Pressable style={styles.button} onPress={loadApi} disabled={loading}>
          <Text style={styles.buttonText}>Refresh API</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f6f7f9' },
  container: { flex: 1, padding: 24, justifyContent: 'center', gap: 16 },
  badge: { alignSelf: 'flex-start', backgroundColor: '#0d6efd', borderRadius: 6, paddingHorizontal: 10, paddingVertical: 6 },
  badgeText: { color: '#fff', fontSize: 12, fontWeight: '700' },
  title: { fontSize: 30, lineHeight: 36, fontWeight: '700', color: '#212529' },
  copy: { fontSize: 16, lineHeight: 24, color: '#6c757d' },
  status: { borderRadius: 10, padding: 14 },
  success: { backgroundColor: '#d1e7dd' },
  error: { backgroundColor: '#f8d7da' },
  statusText: { color: '#212529', fontSize: 15 },
  button: { backgroundColor: '#0d6efd', borderRadius: 8, paddingVertical: 13, paddingHorizontal: 18, alignSelf: 'flex-start' },
  buttonText: { color: '#fff', fontWeight: '700', fontSize: 16 }
});
