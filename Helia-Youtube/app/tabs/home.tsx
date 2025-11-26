// React
import { useContext, useMemo, useState } from 'react';

// React Native
import { Text, View, StyleSheet, FlatList } from 'react-native';

// Expo
import { StatusBar } from 'expo-status-bar';

// Ícones externos
import {
  BellRingingIcon,
  BookmarkIcon,
  ChatsTeardropIcon,
  StarIcon,
} from 'phosphor-react-native';

// Contexto
import { ThemeContext } from '../../src/context/themeContext';

// Estilos globais
import { theme } from '../../src/styles/themes';

// Componentes da aplicação
import CardsBuildingPrice from '../../src/components/cardsBuildingPrice';
import ButtonFilter from '../../src/components/buttonFilter';
import CardsRecomendacao from '../../src/components/recomendationCard';

// Dados
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
          <View style={styles.containerRecomendationsList}>
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


    containerRecomendationsList: {
      marginBottom: 10,
    },
  });
