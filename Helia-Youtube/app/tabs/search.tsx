import React, { useContext, useState } from 'react';
import { View, StyleSheet, TextInput, ScrollView } from 'react-native';

import { ThemeContext } from '../../src/context/themeContext';
import { theme } from '../../src/global/themes';

import {
  BookmarkIcon,
  MagnifyingGlassIcon,
  SlidersHorizontalIcon,
  StarIcon,
} from 'phosphor-react-native';

import ButtonFilter from '../../src/components/buttonFilter';
import CardsBuildingPrice from '../../src/components/cardsBuildingPrice';

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
      <View style={styles.inputContainer}>
        <MagnifyingGlassIcon
          size={30}
          color={theme[currentTheme].iconColor}
          weight='duotone'
        />
        <TextInput
          style={styles.input}
          placeholder='Busque uma casa aqui'
          placeholderTextColor={'#757575'}
        />
        <SlidersHorizontalIcon
          size={30}
          color={theme[currentTheme].accent}
          weight='duotone'
        />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filterContainer}
      >
        {filters.map((label) => (
          <ButtonFilter
            key={label}
            label={label}
            isActive={activeFilter === label}
            onPress={() => setActiveFilter(label)}
          />
        ))}
      </ScrollView>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <CardsBuildingPrice
            id="008"
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
            id="009"
            nameHouse='Palms Casino Hotel'
            adress='Amsteram, Netherlands'
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
            id="010"
            nameHouse='Mountain Lodge'
            adress='Aspen, Colorado'
            image={{
              uri: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            }}
            iconAvaliation={
              <StarIcon
                size={18}
                color={theme[currentTheme].starColor}
                weight='fill'
              />
            }
            avaliation='4,9 (1.8k avaliações)'
            iconFavorite={
              <BookmarkIcon
                size={18}
                color={theme[currentTheme].iconColor}
                weight='duotone'
              />
            }
            price='R$ 350,00'
          />

          <CardsBuildingPrice
            id="011"
            nameHouse='Beach Paradise'
            adress='Maldives'
            image={{
              uri: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            }}
            iconAvaliation={
              <StarIcon
                size={18}
                color={theme[currentTheme].starColor}
                weight='fill'
              />
            }
            avaliation='4,7 (3.1k avaliações)'
            iconFavorite={
              <BookmarkIcon
                size={18}
                color={theme[currentTheme].iconColor}
                weight='duotone'
              />
            }
            price='R$ 520,00'
          />

          <CardsBuildingPrice
            id="012"
            nameHouse='Lakeside Retreat'
            adress='New York, USA'
            image={{
              uri: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/63/78/c8/the-lakeside-retreat.jpg?w=800&h=400&s=1',
            }}
            iconAvaliation={
              <StarIcon
                size={18}
                color={theme[currentTheme].starColor}
                weight='fill'
              />
            }
            avaliation='4,5 (2.4k avaliações)'
            iconFavorite={
              <BookmarkIcon
                size={18}
                color={theme[currentTheme].iconColor}
                weight='duotone'
              />
            }
            price='R$ 280,00'
          />

          <CardsBuildingPrice
            id="013"
            nameHouse='Desert Oasis'
            adress='Dubai, UAE'
            image={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpXDPtVh6MUv-ta4Lao7A0mkApBeD3yZUf4A&s',
            }}
            iconAvaliation={
              <StarIcon
                size={18}
                color={theme[currentTheme].starColor}
                weight='fill'
              />
            }
            avaliation='4,9 (1.2k avaliações)'
            iconFavorite={
              <BookmarkIcon
                size={18}
                color={theme[currentTheme].iconColor}
                weight='duotone'
              />
            }
            price='R$ 450,00'
          />

          <CardsBuildingPrice
            id="014"
            nameHouse='Phi Phi The Beach Resort'
            adress='Ko Phi Phi Don, Thailand'
            image={{
              uri: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/9f/2d/b3/view-from-deluxe-villa.jpg?w=800&h=500&s=1',
            }}
            iconAvaliation={
              <StarIcon
                size={18}
                color={theme[currentTheme].starColor}
                weight='fill'
              />
            }
            avaliation='4,6 (3.5k avaliações)'
            iconFavorite={
              <BookmarkIcon
                size={18}
                color={theme[currentTheme].iconColor}
                weight='duotone'
              />
            }
            price='R$ 380,00'
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
  });
