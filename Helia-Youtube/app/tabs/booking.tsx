import {  ChatsTeardropIcon, MagnifyingGlassIcon} from 'phosphor-react-native';
import { FlatList,  StyleSheet, Text, View } from 'react-native';
import { theme } from '../../src/styles/themes';
import { ThemeContext } from '../../src/context/themeContext';
import ButtonFilter from '../../src/components/buttonFilter';
import { useEffect, useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import CardsBuilding from '../../src/components/cardsBuilding';

export default function Booking() {
  const { currentTheme } = useContext(ThemeContext);
  const styles = createStyles(currentTheme);

  const [activeFilter, setActiveFilter] = useState("OnGoing");
  const filters = ["OnGoing", "Completed", "Canceled"];
  
  type Booking = {
    id: string;
    name: string;
    address: string;
    image: string;
  };

  const [bookingData, setBookingData] = useState<Booking[]>([]);

  useEffect(() => {
  async function loadBookings() {
    const stored = await AsyncStorage.getItem("bookings");
    setBookingData(stored ? (JSON.parse(stored) as Booking[]) : []);
  }

  loadBookings();
}, []);



  


  function handleStatus() {
    switch (activeFilter) {
      case "OnGoing":
        return "Ativa";
      case "Completed":
        return "Completa";
      default:
        return "Cancelada";
    }
  }

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <ChatsTeardropIcon size={30} color="#1ab65c" weight="duotone" />
          <Text style={styles.headerLeftText}>My Booking</Text>
        </View>

        <MagnifyingGlassIcon
          size={30}
          color={theme[currentTheme].iconColor}
          weight="duotone"
        />
      </View>

      {/* FILTERS */}
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

      {/* LIST */}
      <FlatList
        data={bookingData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardsBuilding
            id={item.id}
            nameHouse={item.name}
            adress={item.address}
            image={{ uri: item.image }}
            statusBooking={handleStatus()}
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
      
    },

    header: {
      marginTop: 60,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
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
      marginTop: 8,
      gap: 10,
      paddingHorizontal: 10,
    },

    statusBooking: {
      
    }
  });
