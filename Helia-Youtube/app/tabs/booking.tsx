import { ChatsTeardropIcon, MagnifyingGlassIcon } from 'phosphor-react-native';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { theme } from '../../src/styles/themes';
import { ThemeContext } from '../../src/context/themeContext';
import ButtonFilter from '../../src/components/buttonFilter';
import React, { useEffect, useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import CardsBuilding from '../../src/components/cardsBuilding';
import { router } from 'expo-router';
import CardsBuildingPrice from '../../src/components/cardsBuildingPrice';
import CardsBookingDetails from '../../src/components/cardsBookingDetails';

// Defina o tipo Booking CORRETAMENTE
type BookingData = {
  id: string;
  name: string;
  address: string;
  image: string;
  price: string;
  total: number;
  startDate: string;
  endDate: string;
  tenantName: string;
  tenantPhone: string;
  guests: string;
  paymentMethod: string;
  status: string;
  // Props adicionais que você está usando no CardsBuildingPrice
  notes?: string;
  avaliation?: string;
  avaliationNote?: string;
  iconAvaliation?: React.ReactNode;
  iconFavorite?: React.ReactNode;
};

export default function Booking() {
  const { currentTheme } = useContext(ThemeContext);
  const styles = createStyles(currentTheme);

  const [activeFilter, setActiveFilter] = useState("OnGoing");
  const filters = ["OnGoing", "Completed", "Canceled"];
  
  // CORREÇÃO: useState deve estar DENTRO do componente
  const [bookingData, setBookingData] = useState<BookingData[]>([]);

  useEffect(() => {
    loadBookings();
  }, []);

  async function loadBookings() {
    try {
      const stored = await AsyncStorage.getItem("bookings");
      
      if (stored) {
        const parsedData = JSON.parse(stored) as BookingData[];
        setBookingData(parsedData);
      } else {
        setBookingData([]);
      }
    } catch (error) {
      console.error("Erro ao carregar bookings:", error);
      setBookingData([]);
    }
  }

  // CORREÇÃO: Função handleStatus corrigida
  const handleStatus = (booking: BookingData): string => {
    // Se já tem status definido, retorna ele
    if (booking.status) {
      return booking.status;
    }
    
    // Lógica para determinar status baseado nas datas
    const now = new Date();
    const startDate = new Date(booking.startDate);
    const endDate = new Date(booking.endDate);
    
    if (now < startDate) {
      return "Agendado";
    } else if (now >= startDate && now <= endDate) {
      return "Em Andamento";
    } else {
      return "Concluído";
    }
  };

  // CORREÇÃO: Filtro para mostrar apenas os bookings baseado no activeFilter
  const filteredBookings = bookingData.filter(booking => {
    const status = handleStatus(booking);
    
    switch (activeFilter) {
      case "OnGoing":
        return status === "Em Andamento" || status === "Agendado";
      case "Completed":
        return status === "Concluído";
      case "Canceled":
        return status === "Cancelado";
      default:
        return true;
    }
  });

  const handleCancelBooking = async (bookingId: string) => {
    const updated = bookingData.map(booking =>
      booking.id === bookingId 
        ? { ...booking, status: "Cancelado" }
        : booking
    );
    
    setBookingData(updated);
    await AsyncStorage.setItem("bookings", JSON.stringify(updated));
  };

  const handleEditBooking = (booking: BookingData) => {
    router.push({
      pathname: '..',
      params: { booking: JSON.stringify(booking) }
    });
  };

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

      {/* LIST - usando filteredBookings em vez de bookingData */}
      <FlatList
        data={filteredBookings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.bookingContainer}>
            
            {/* 1. Info do Imóvel */}
            <CardsBuilding
              id={item.id}
              nameHouse={item.name}
              adress={item.address}
              image={{ uri: item.image }}
              statusBooking={handleStatus(item)}
            />
            
            {/* 2. Preços */}
            <CardsBuildingPrice
              nameHouse={item.name}
              id={item.id}
              address={item.address}
              image={{ uri: item.image }}
              avaliationNote={item.avaliationNote}
              iconAvaliation={item.iconAvaliation}
              iconFavorite={item.iconFavorite}
              statusBooking={handleStatus(item)}
              price={item.price}
            />
            
            {/* 3. Detalhes da Reserva + Ações */}
            <CardsBookingDetails
              startDate={item.startDate}
              endDate={item.endDate}
              tenantName={item.tenantName}
              tenantPhone={item.tenantPhone}
              guests={item.guests}
              notes={item.notes}
              paymentMethod={item.paymentMethod}
              status={handleStatus(item)}
              onCancel={() => handleCancelBooking(item.id)}
              onEdit={() => handleEditBooking(item)}
            />
            
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              Nenhuma reserva {activeFilter === "OnGoing" ? "em andamento" : 
                            activeFilter === "Completed" ? "concluída" : 
                            "cancelada"}
            </Text>
          </View>
        }
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

    headerLeftText: {
      color: theme[currentTheme].textPrimary,
      fontSize: 24,
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

    bookingContainer: {
      marginTop: 8,
      gap: 10,
      paddingHorizontal: 10,
      marginBottom: 15,
    },

    emptyContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 50,
    },

    emptyText: {
      color: theme[currentTheme].textSecondary,
      fontSize: 16,
      textAlign: 'center',
    },
  });