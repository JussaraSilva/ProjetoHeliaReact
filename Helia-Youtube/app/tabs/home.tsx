import {
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';

import {
  BellRingingIcon,
  BookmarkIcon,
  ChatsTeardropIcon,
  MagnifyingGlassIcon,
  SlidersHorizontalIcon,
  StarIcon,
} from 'phosphor-react-native';

import { useContext, useMemo, useState } from 'react';
import { ThemeContext } from '../../src/context/themeContext';

import { theme } from '../../src/styles/themes';
import CardsBuildingPrice from '../../src/components/cardsBuildingPrice';
import ButtonFilter from '../../src/components/buttonFilter';
import CardsRecomendacao from '../../src/components/cardRecomendacao';
import housesData from '../../src/data/houses.json';

export default function Home() {
  const { currentTheme } = useContext(ThemeContext) as {
    currentTheme: keyof typeof theme;
  };
  const styles = useMemo(() => createStyles(currentTheme), [currentTheme]);
  const [activeFilter, setActiveFilter] = useState('Recommended');
  const filters = ['Recommended', 'Popular', 'Trending', 'Recent', 'Favorites'];

  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <ChatsTeardropIcon size={30} color='#1ab65c' weight='duotone' />
          <Text style={styles.headerLeftText}>Helia</Text>
        </View>
        <View style={styles.headerRight}>
          <BellRingingIcon
            size={32}
            color={theme[currentTheme].iconColor}
            weight='duotone'
          />
          <BookmarkIcon
            size={32}
            color={theme[currentTheme].iconColor}
            weight='duotone'
          />
        </View>
      </View>

      <Text style={styles.userName}>Olá, Rodrigo!</Text>

      <View style={styles.inputContainer}>
        <MagnifyingGlassIcon size={30} color='#757575' weight='duotone' />
        <TextInput
          style={styles.input}
          placeholder='Busque uma casa aqui'
          placeholderTextColor={'#757575'}
        />
        <SlidersHorizontalIcon size={30} color='#1ab65c' weight='duotone' />
      </View>

      <FlatList
        data={housesData.houses.slice(0, 6)} // sua lista vertical principal
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
        ListHeaderComponent={
          <>
            {/* FILTROS (HORIZONTAL) */}
            <FlatList
              data={filters}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 10, marginBottom: 20 }}
              renderItem={({ item }) => (
                <ButtonFilter
                  label={item}
                  isActive={activeFilter === item}
                  onPress={() => setActiveFilter(item)}
                />
              )}
              keyExtractor={(item) => item}
            />

            {/* RECOMENDADOS (HORIZONTAL) */}
            <FlatList
              data={housesData.houses.slice(0, 6)}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 10, marginBottom: 20 }}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <CardsRecomendacao
                  nameHouse={item.name}
                  address={item.address}
                  image={{ uri: item.gallery[0] }}
                  price={item.price}
                  avaliationNote={item.avaliationNote}
                />
              )}
            />

            {/* TÍTULO OU ESPAÇAMENTO */}
            <View style={{ marginBottom: 10 }} />
          </>
        }
        renderItem={({ item }) => (
          <CardsBuildingPrice
            id={item.id}
            nameHouse={item.name}
            address={item.address}
            image={{ uri: item.gallery[0] }}
            iconAvaliation={
              <StarIcon
                size={18}
                color={theme[currentTheme].starColor}
                weight='fill'
              />
            }
            avaliation={item.avaliation}
            iconFavorite={
              <BookmarkIcon
                size={18}
                color={theme[currentTheme].iconColor}
                weight='duotone'
              />
            }
            price={item.price}
          />
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
      paddingHorizontal: 28,
    },

    header: {
      marginTop: 80,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    headerLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },

    headerRight: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },

    headerLeftText: {
      color: theme[currentTheme].textPrimary,
      fontSize: 24,
      fontWeight: '800',
    },

    userName: {
      paddingTop: 30,
      paddingBottom: 30,
      color: theme[currentTheme].textPrimary,
      fontSize: 25,
      fontWeight: '800',
    },

    inputContainer: {
      width: '100%',
      height: 56,
      backgroundColor: theme[currentTheme].input,
      borderRadius: 12,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      gap: 10,
      marginBottom: 20,
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

    scrollView: {
      flex: 1,
    },

    scrollContent: {
      paddingBottom: 10,
    },

    scrollfiltersRecomendations: {
      marginBottom: 12,
    },

    scrollCardsRecomendations: {
      gap: 20,
    },

    CardsRecomendations: {
      flexDirection: 'row',
      alignItems: 'center',

      justifyContent: 'center',
    },
  });
