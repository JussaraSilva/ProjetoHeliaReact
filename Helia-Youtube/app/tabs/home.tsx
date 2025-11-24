import { Text, View, StyleSheet, TextInput, ScrollView } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import {
  BellRingingIcon,
  BookmarkIcon,
  ChatsTeardropIcon,
  MagnifyingGlassIcon,
  SlidersHorizontalIcon,
  StarIcon,
} from 'phosphor-react-native';

import { useContext } from 'react';
import { ThemeContext } from '../src/context/themeContext';

import { theme } from '../src/global/themes';
import CardsBuildingPrice from '../src/components/cardsBuildingPrice';

export default function Home() {
  const { currentTheme } = useContext(ThemeContext) as {
    currentTheme: keyof typeof theme;
  };
  const styles = createStyles(currentTheme);

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

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <CardsBuildingPrice
            id='001'
            nameHouse='President Hotel'
            adress='Paris, France'
            image={{
              uri: 'https://robbreport.com/wp-content/uploads/2018/11/copy-of-palms_26201_cinema_livingroom_v5.jpg?w=1000',
            }}
            iconAvaliation={
              <StarIcon
                size={18}
                color={theme[currentTheme].starColor}
                weight='fill'
              />
            }
            avaliation='4,8 (4.2k avaliações)'
            iconFavorite={
              <BookmarkIcon
                size={18}
                color={theme[currentTheme].iconColor}
                weight='duotone'
              />
            }
            price='R$ 200,00'
          />

          <CardsBuildingPrice
            id='002'
            nameHouse='Forest Cabin'
            adress='British Columbia, Canada'
            image={{
              uri: 'https://images.pexels.com/photos/2725675/pexels-photo-2725675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            }}
            iconAvaliation={
              <StarIcon
                size={18}
                color={theme[currentTheme].starColor}
                weight='fill'
              />
            }
            avaliation='4,8 (956 avaliações)'
            iconFavorite={
              <BookmarkIcon
                size={18}
                color={theme[currentTheme].iconColor}
                weight='duotone'
              />
            }
            price='R$ 190,00'
          />

          <CardsBuildingPrice
            id='003'
            nameHouse='Tokyo Skyline'
            adress='Tokyo, Japan'
            image={{
              uri: 'https://images.pexels.com/photos/262367/pexels-photo-262367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            }}
            iconAvaliation={
              <StarIcon
                size={18}
                color={theme[currentTheme].starColor}
                weight='fill'
              />
            }
            avaliation='4,9 (2.7k avaliações)'
            iconFavorite={
              <BookmarkIcon
                size={18}
                color={theme[currentTheme].iconColor}
                weight='duotone'
              />
            }
            price='R$ 320,00'
          />

          <CardsBuildingPrice
            id='004'
            nameHouse='Santorini View'
            adress='Santorini, Greece'
            image={{
              uri: 'https://images.pexels.com/photos/161815/santorini-oia-greece-water-161815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            }}
            iconAvaliation={
              <StarIcon
                size={18}
                color={theme[currentTheme].starColor}
                weight='fill'
              />
            }
            avaliation='4,7 (3.8k avaliações)'
            iconFavorite={
              <BookmarkIcon
                size={18}
                color={theme[currentTheme].iconColor}
                weight='duotone'
              />
            }
            price='R$ 410,00'
          />

          <CardsBuildingPrice
            id='005'
            nameHouse='Rio Penthouse'
            adress='Rio de Janeiro, Brazil'
            image={{
              uri: 'https://images.pexels.com/photos/15106299/pexels-photo-15106299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            }}
            iconAvaliation={
              <StarIcon
                size={18}
                color={theme[currentTheme].starColor}
                weight='fill'
              />
            }
            avaliation='4,6 (1.9k avaliações)'
            iconFavorite={
              <BookmarkIcon
                size={18}
                color={theme[currentTheme].iconColor}
                weight='duotone'
              />
            }
            price='R$ 270,00'
          />

          <CardsBuildingPrice
            id='007'
            nameHouse='Alpine Chalet'
            adress='Swiss Alps, Switzerland'
            image={{
              uri: 'https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            }}
            iconAvaliation={
              <StarIcon
                size={18}
                color={theme[currentTheme].starColor}
                weight='fill'
              />
            }
            avaliation='4,9 (1.4k avaliações)'
            iconFavorite={
              <BookmarkIcon
                size={18}
                color={theme[currentTheme].iconColor}
                weight='duotone'
              />
            }
            price='R$ 480,00'
          />
        </View>
      </ScrollView>
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
  });
