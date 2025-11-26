import React, { useContext, useState } from 'react';
import { View, StyleSheet, TextInput, FlatList } from 'react-native';

import { ThemeContext } from '../../src/context/themeContext';
import { theme } from '../../src/styles/themes';

import {
  BookmarkIcon,
  MagnifyingGlassIcon,
  SlidersHorizontalIcon,
  StarIcon,
} from 'phosphor-react-native';

import ButtonFilter from '../../src/components/buttonFilter';
import CardsBuildingPrice from '../../src/components/cardsBuildingPrice';
import housesData from '../../src/data/houses.json';

export default function Search() {
  const { currentTheme } = useContext(ThemeContext) as {
    currentTheme: keyof typeof theme;
  };
  const styles = createStyles(currentTheme);

  const [activeFilter, setActiveFilter] = useState('All Hotels');
  const filters = [
    'All Hotels',
    'Recommended',
    'Popular',
    'Recent',
    'Favorites',
  ];

  return (
    <View style={styles.container}>
  <FlatList
    data={[1]}
    keyExtractor={() => 'main'}
    showsVerticalScrollIndicator={false}
    renderItem={() => (
      <View style={{ gap: 10 }}>
        
        {/* INPUT */}
        <View style={styles.inputContainer}>
          <MagnifyingGlassIcon
            size={30}
            color={theme[currentTheme].iconColor}
            weight="duotone"
          />
          <TextInput
            style={styles.input}
            placeholder="Busque uma casa aqui"
            placeholderTextColor="#757575"
          />
          <SlidersHorizontalIcon
            size={30}
            color={theme[currentTheme].accent}
            weight="duotone"
          />
        </View>

        {/* FLATLIST HORIZONTAL (FILTROS) */}
        <FlatList
          data={filters}
          horizontal
          showsHorizontalScrollIndicator={false}
          nestedScrollEnabled
          contentContainerStyle={{ gap: 10 }}
          renderItem={({ item }) => (
            <ButtonFilter
              label={item}
              isActive={activeFilter === item}
              onPress={() => setActiveFilter(item)}
            />
          )}
          keyExtractor={(item) => item}
        />

        {/* FLATLIST VERTICAL (CARDS) */}
        <FlatList
          
          data={housesData.houses.slice(0, 8)}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
          <View style={styles.cardsListContainer}>
              <CardsBuildingPrice
                id={item.id}
                nameHouse={item.name}
                address={item.address}
                image={{ uri: item.gallery[0] }}
                iconAvaliation={
                  <StarIcon
                    size={18}
                    color={theme[currentTheme].starColor}
                    weight="fill"
                  />
                }
                avaliation={item.avaliation}
                iconFavorite={
                  <BookmarkIcon
                    size={18}
                    color={theme[currentTheme].iconColor}
                    weight="duotone"
                  />
                }
                price={item.price}
              />
            </View>
          )}
          contentContainerStyle={{ paddingBottom: 40 }}
        />
      </View>
    )}
  />
</View>

  );
}

export const createStyles = (currentTheme: 'dark' | 'light') =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme[currentTheme].background,
      gap: 10,
      paddingHorizontal: 20,
    },
    inputContainer: {
      height: 56,
      backgroundColor: theme[currentTheme].input,
      borderRadius: 12,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 30,
      gap: 10,
      marginTop: 40,
    },

    input: {
      flex: 1,
      color: theme[currentTheme].textPrimary,
    },

    content: {
      marginRight: 28,
      width: '100%',
      gap: 20,
    },

    filterContainer: {
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'center',
      gap: 10,
      height: 70,
      alignItems: 'center',
    },

    scrollView: {
      height: '100%',
      marginTop: 10,
    },

    scrollContent: {
      width: '100%',
      gap: 20,
    },

    cardsListContainer: {
      marginBottom: 10,
    },
  });
