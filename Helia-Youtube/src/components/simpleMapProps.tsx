// src/components/ExternalMap.tsx
import React, { useContext } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Linking, Alert } from 'react-native';
import { MapPinIcon } from 'phosphor-react-native';
import { theme } from '../styles/themes';
import { ThemeContext } from '../../src/context/themeContext';

interface SimpleMapProps {
  address: string;
  hotelName: string;
}

const ExternalMap: React.FC<SimpleMapProps> = ({ address, hotelName }) => {
  const openMaps = async () => {
    try {
      const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
      
      const supported = await Linking.canOpenURL(url);
      
      if (supported) {
        await Linking.openURL(url);
      } else {
        const appleMapsUrl = `http://maps.apple.com/?q=${encodeURIComponent(address)}`;
        await Linking.openURL(appleMapsUrl);
      }
    } catch (_error) {
      Alert.alert('Erro', 'Não foi possível abrir o aplicativo de mapas');
    }
  };

  const { currentTheme } = useContext(ThemeContext) as {
      currentTheme: keyof typeof theme;
    };
    const styles = createStyles(currentTheme);

  return (
    <TouchableOpacity style={styles.container} onPress={openMaps}>
      <View style={styles.content}>
        <MapPinIcon size={24} color={theme[currentTheme].iconColor}/>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Ver localização no Maps</Text>
          <Text style={styles.address} numberOfLines={2}>{address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const createStyles = (currentTheme: 'dark' | 'light') =>
  StyleSheet.create({
  container: {
    margin: 16,
    backgroundColor: theme[currentTheme].background,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: theme[currentTheme].borderBottomColor,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 12,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: theme[currentTheme].textPrimary,
  },
  address: {
    fontSize: 14,
    color: theme[currentTheme].textSecondary,
    marginTop: 4,
  },
});

export default ExternalMap;