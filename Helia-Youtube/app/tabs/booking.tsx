import { ChatsTeardropIcon, MagnifyingGlassIcon } from 'phosphor-react-native';
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { theme } from '../src/global/themes';
import { useContext, useState } from 'react';
import { ThemeContext } from '../src/context/themeContext';
import ButtonFilter from '../src/components/buttonFilter';
import CardsBuilding from '../src/components/cardsBuilding';

export default function Booking() {
  const { currentTheme } = useContext(ThemeContext) as {
    currentTheme: keyof typeof theme;
  };
  const styles = createStyles(currentTheme);

  const [activeFilter, setActiveFilter] = useState('OnGoing');
  const filters = ['OnGoing', 'Completed', 'Canceled'];

  function handleStatus() {
    if (activeFilter === 'OnGoing') {
      return 'Ativa';
    } else if (activeFilter === 'Completed') {
      return 'Completa';
    } else {
      return 'Cancelada';
    }

  }

  

  

  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <ChatsTeardropIcon size={30} color='#1ab65c' weight='duotone' />
          <Text style={styles.headerLeftText}>My Booking</Text>
        </View>
        <View style={styles.headerRight}>
          <MagnifyingGlassIcon
            size={30}
            color={theme[currentTheme].iconColor}
            weight='duotone'
          />
        </View>
      </View>

      {/* Filtros de status do aluguel */}
      <View style={styles.filterContainer}>
        {filters.map((label) => (
          <ButtonFilter
            key={label}
            label={label}
            isActive={activeFilter === label}
            onPress={() => setActiveFilter(label)}
          />
        ))}
      </View>

      <ScrollView style={styles.containerCards}
      showsVerticalScrollIndicator={false}
      >
        <CardsBuilding 
            nameHouse='Palms Casino Resort' 
            adress='London, United Kingdom' 
            statusBooking={handleStatus()}
            image={{uri: 'https://robbreport.com/wp-content/uploads/2018/11/copy-of-palms_26201_cinema_livingroom_v5.jpg?w=1000',}}
         
        />
        <CardsBuilding 
            nameHouse='Bulgari Casino Resort' 
            adress='Paris, France' 
            statusBooking={handleStatus()}
            image={{uri: 'https://robbreport.com/wp-content/uploads/2018/11/copy-of-palms_26201_cinema_livingroom_v5.jpg?w=1000',}}
         
        />
        <CardsBuilding 
            nameHouse='Bulgari Casino Resort' 
            adress='Paris, France' 
            statusBooking={handleStatus()}
            image={{uri: 'https://robbreport.com/wp-content/uploads/2018/11/copy-of-palms_26201_cinema_livingroom_v5.jpg?w=1000',}}
         
        />
        <CardsBuilding 
            nameHouse='Bulgari Casino Resort' 
            adress='Paris, France' 
            statusBooking={handleStatus()}
            image={{uri: 'https://robbreport.com/wp-content/uploads/2018/11/copy-of-palms_26201_cinema_livingroom_v5.jpg?w=1000',}}
         
        />
        <CardsBuilding 
            nameHouse='Bulgari Casino Resort' 
            adress='Paris, France' 
            statusBooking={handleStatus()}
            image={{uri: 'https://robbreport.com/wp-content/uploads/2018/11/copy-of-palms_26201_cinema_livingroom_v5.jpg?w=1000',}}
         
        />
          
          
      </ScrollView>
    </View>
  );
}

export const createStyles = (currentTheme: 'dark' | 'light') =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme[currentTheme].background,
      paddingHorizontal: 24,
    },

    header: {
      marginTop: 40,
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

    filterContainer: {
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'center',
      gap: 5,
      height: 70,
      width: '100%',
      marginTop: 15,
      alignItems: 'center',
      paddingHorizontal: 25,
    },

    containerCards: {
      marginTop: 10,
      gap: 10,
    },

    statusBooking: {

    }
  });
