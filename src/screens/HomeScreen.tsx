import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HIGH_SCORE_KEY } from '../constant';

export default function HomeScreen({ navigation }: any) {
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    AsyncStorage.getItem(HIGH_SCORE_KEY).then(val => {
      if (val) setHighScore(Number(val));
    });
  }, []);

  return (
    <View style={styles.container}>
    <Text style={styles.highScore}>🏆 Điểm cao nhất: {highScore}</Text>
    <Text style={styles.title}>🎨 Different Color Game</Text>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Game')}>
      <Text style={styles.buttonText}>Chơi ngay</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HighScore')}>
      <Text style={styles.buttonText}>Điểm cao</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Help')}>
      <Text style={styles.buttonText}>Hướng dẫn</Text>
    </TouchableOpacity>
  </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  highScore: {
    position: 'absolute',
    top: 32,
    left: 8,
    fontSize: 16,
    color: '#f59e42',
    fontWeight: 'bold',
    textAlign: 'left',
    backgroundColor: 'rgba(255,255,255,0.85)',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#f59e42',
    shadowOpacity: 0.12,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 32,
    color: '#3b82f6',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#3b82f6',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 12,
    marginTop: 18,
    minWidth: 180,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});