import React, { useContext, useState, useEffect } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import { ThemeContext } from '../../src/context/themeContext';
import ButtonFilter from '../../src/components/buttonFilter';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { theme } from '../../src/styles/themes';
import {
  ArrowRightIcon,
  CalendarDotsIcon,
  ChatsTeardropIcon,
  MagnifyingGlassIcon,
  UsersIcon,
} from 'phosphor-react-native';



interface BookingData {
  name: string;
  address: string;
  image: string;
  startDate: string;
  endDate: string;
  total: number;
  guests: number;
  paymentMethod: string;
  status: string;
  tenantName: string;
  tenantPhone: string;
  notes: string;
  avaliationNote: string;
  noites: number;
  price: string;
}


export default function Booking() {
  const [bookings, setBookings] = useState<BookingData[]>([]);


  useEffect(() => {
    async function loadData() {
      try {
        const data = await AsyncStorage.getItem('bookings');
        if (data) {
          setBookings(JSON.parse(data));
        }
      } catch (error) {
        console.log('Erro ao carregar reservas:', error);
      }
    }

    loadData();
  }, []);


  

  const { currentTheme } = useContext(ThemeContext);
  const styles = createStyles(currentTheme);

  const [activeFilter, setActiveFilter] = useState('Todos');
  const filters = ['Todos', 'Ativos', 'Concluídos', 'Cancelados'];

  const [isVisible, setIsVisible] = useState<number | null>(null);
  const handleDetailsLook = (index: number) => {
    setIsVisible(prev => (prev === index ? null : index));

  };


  return (
    <View style={styles.container}>
      <StatusBar />

      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <ChatsTeardropIcon size={30} color='#1ab65c' weight='duotone' />
          <Text style={styles.headerLeftText}>Helia</Text>
        </View>
        <View style={styles.headerRight}>
          <MagnifyingGlassIcon
            size={32}
            color={theme[currentTheme].iconColor}
            weight='duotone'
          />
        </View>
      </View>

      <View style={styles.containerFiltros}>
        <FlatList
          data={filters}
          horizontal
          showsHorizontalScrollIndicator={false}
          nestedScrollEnabled
          renderItem={({ item }) => (
            <ButtonFilter
              label={item}
              isActive={activeFilter === item}
              onPress={() => setActiveFilter(item)}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>

      
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.containerCards}>
          {bookings.length === 0 ? (
            <Text style={{ color: theme[currentTheme].textPrimary }}>
              Nenhuma reserva ainda
            </Text>
          ) : (
            bookings.map((item, index) => (
              <View key={index}>
                {/* --- SEU CARD --- */}
                <View style={styles.card}>
                  <View style={styles.cardContent}>
                    <View style={styles.cardTop}>
                      <View style={styles.containerImage}>
                        <Image
                          style={styles.imagemEstabelecimento}
                          source={{ uri: item.image }} // <<<<< DINÂMICO
                        />
                      </View>

                      <View style={styles.containerText}>
                        <Text style={styles.tituloEstabelecimento}>
                          {item.name}
                        </Text>
                        <Text style={styles.enderecoEstabelecimento}>
                          {item.address}
                        </Text>

                        <View style={styles.containerStatus}>
                          <Text style={styles.statusEstabelecimento}>
                            {item.status}
                          </Text>
                        </View>

                        <View style={styles.avaliationContainer}>
                          <Text style={styles.avaliationText}>
                            {item.avaliationNote ?? 'Sem avaliação'}
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View style={styles.divisor}></View>

                    <View style={styles.cardBottom}>
                      <View style={styles.containerOptionsButtons}>
                        <TouchableOpacity
                              style={styles.buttonCancelar}
                              onPress={async () => 
                              {
                              await AsyncStorage.removeItem('bookings');
                              setBookings([]); // limpa a lista na tela também
                            }}>
                            <Text style={styles.textButtonCancelar}>Limpar(DEBUG)</Text>
                          </TouchableOpacity>


                        <TouchableOpacity
                          style={styles.buttonDetalhes}
                          onPress={() => handleDetailsLook(index)}
                        >
                          <Text style={styles.textButton}>Detalhes</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>

                {/* --- DETALHES DINÂMICOS --- */}
                {isVisible === index && (
                  <View style={styles.containerDetails}>
                    <Text style={styles.titleContainer}>
                      Informações do Agendamento
                    </Text>

                    <View style={styles.detailContainer}>
                      <View style={styles.guestsRow}>
                        <UsersIcon
                          size={24}
                          color={theme[currentTheme].iconColor}
                          weight='duotone'
                        />
                        <Text style={styles.guestsText}>
                          {item.guests} Hóspede(s)
                        </Text>
                      </View>

                      <View style={styles.nameReservationRow}>
                        <Text style={styles.nameReservationText}>
                          Nome da Reserva:
                        </Text>
                        <Text style={styles.nameText}>{item.tenantName}</Text>
                      </View>
                      <View style={styles.phoneReservationRow}>
                        <Text style={styles.phoneReservationText}>
                          Telefone para Contato:
                        </Text>
                        <Text style={styles.nameText}>{item.tenantPhone}</Text>
                      </View>

                      <View style={styles.notesRow}>
                        <Text style={styles.notesText}>Observações:</Text>
                        <Text style={styles.notesText}>{item.notes}</Text>
                      </View>

                      <View style={styles.bookingDatesRow}>
                        <View style={styles.bookingCheckIn}>
                          <CalendarDotsIcon
                            size={24}
                            color={theme[currentTheme].iconColor}
                            weight='duotone'
                          />
                          <Text style={styles.checkInText}>Check-in:</Text>
                          <Text style={styles.checkInText}>{(item.startDate)}</Text>
                        </View>
                        
                        <ArrowRightIcon
                          size={24}
                          color={theme[currentTheme].iconColor}
                          weight='duotone'
                        />

                        <View style={styles.bookingCheckOut}>
                          <CalendarDotsIcon
                            size={24}
                            color={theme[currentTheme].iconColor}
                            weight='duotone'
                          />
                          <Text style={styles.checkOutText}>Check-out:</Text>
                        <Text style={styles.checkOutText}>{item.endDate}</Text>
                        </View>
                      </View>

                      <View style={styles.priceContainer}>
                        <View style={styles.priceRow}>
                          <Text style={styles.priceNight}>Valor/noite: </Text>
                          <Text style={styles.priceNight}>{item.price}</Text>
                        </View>
                        <View style={styles.quantidadeNoitesContainer}>
                          <Text style={styles.quantityNights}>Noites:</Text>
                          <Text style={styles.quantityNights}>
                            {item.noites}
                          </Text>
                        </View>
                        
                        <View style={styles.totalPriceContainer}>
                          <Text style={styles.totalPriceText}>Total: </Text>
                          <Text style={styles.totalPrice}>R$ {item.total},00</Text>
                        </View>
                        
                      </View>

                      <View style={styles.paymentMethodRow}>
                        <Text style={styles.paymentMethodText}>Pagamento:</Text>
                        <Text style={styles.paymentMethod}>
                          {item.paymentMethod}
                        </Text>
                      </View>
                    </View>
                  </View>
                )}
              </View>
            ))
          )}
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

    header: {
      marginTop: 50,
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

    containerFiltros: {
      marginTop: 20,
    },

    scrollContent: {
      
    },

    containerCards: {
      marginTop: 20,
      flex :1,
      marginBottom: 20,
      gap: 10,
    },

    card: {
      width: '100%',
      height: 200,
      backgroundColor: theme[currentTheme].card,
      borderRadius: 12,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
    },

    cardContent: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
    },

    cardTop: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },

    containerImage: {
      width: 100,
      height: 100,
      borderRadius: 10,
    },

    imagemEstabelecimento: {
      width: '100%',
      height: '100%',
      borderRadius: 10,
    },

    containerText: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: 10,
    },

    tituloEstabelecimento: {
      color: theme[currentTheme].textPrimary,
      fontSize: 18,
      fontWeight: '800',
    },

    enderecoEstabelecimento: {
      color: theme[currentTheme].textSecondary,
      fontSize: 14,
    },

    containerStatus: {
      width: 100,
    },

    statusEstabelecimento: {
      color: theme[currentTheme].textSecondary,
      fontSize: 14,
    },

    avaliationContainer: {
      width: 100,
    },

    avaliationText: {
      color: theme[currentTheme].textSecondary,
      fontSize: 14,
    },

    divisor: {
      width: '100%',
      height: 1,
      margin: 10,
      backgroundColor: theme[currentTheme].borderBottomColor,
    },

    cardBottom: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
    },

    containerOptionsButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 10,
      width: '100%',
    },

    buttonDetalhes: {
      borderWidth: 1,
      backgroundColor: theme[currentTheme].colorComplet,
      borderColor: theme[currentTheme].colorComplet,
      width: 150,
      height: 56,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
    },

    textButton: {
      color: theme[currentTheme].textPrimary,
      fontSize: 16,
      fontWeight: '800',
    },

    buttonCancelar: {
      borderWidth: 1,
      backgroundColor: theme[currentTheme].colorError,
      borderColor: theme[currentTheme].colorError,
      width: 150,
      height: 56,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
    },

    textButtonCancelar: {
      color: theme[currentTheme].textPrimary,
      fontSize: 16,
      fontWeight: '800',
    },

    containerDetails: {
      marginTop: 1,
      flexDirection: 'column',
      gap: 10,
      width: '100%',
      borderWidth: 2,
      borderColor: theme[currentTheme].borderBottomColor,
      borderTopWidth: 0,
      padding: 10,
      borderRadius: 10,
      backgroundColor: theme[currentTheme].card,
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },

    titleContainer: {
      color: theme[currentTheme].textPrimary,
      fontSize: 18,
      fontWeight: '800',
      textAlign: 'center',
    },

    detailContainer: {
      flexDirection: 'column',
      gap: 10,
      maxWidth: '100%',
    },

    guestsRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      borderBottomColor: theme[currentTheme].borderBottomColor,
      borderBottomWidth: 1,
      paddingBottom: 10,
    },

    guestsText: {
      color: theme[currentTheme].textPrimary,
      fontSize: 16,
      fontWeight: '600',
    },

    nameReservationRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 10,
      borderBottomColor: theme[currentTheme].borderBottomColor,
      borderBottomWidth: 1,
      paddingBottom: 10,
    },

    nameReservationText: {
      color: theme[currentTheme].textPrimary,
      fontSize: 16,
      fontWeight: '600',
    },

    nameText: {
      color: theme[currentTheme].textPrimary,
      fontSize: 16,
      fontWeight: '600',
    },

    phoneReservationRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 10,
      borderBottomColor: theme[currentTheme].borderBottomColor,
      borderBottomWidth: 1,
      paddingBottom: 10,
    },

    phoneReservationText: {
      color: theme[currentTheme].textPrimary,
      fontSize: 16,
      fontWeight: '600',
    },

    phoneText: {
      color: theme[currentTheme].textPrimary,
      fontSize: 16,
      fontWeight: '600',
    },

    notesRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 10,
      borderBottomColor: theme[currentTheme].borderBottomColor,
      borderBottomWidth: 1,
      paddingBottom: 10,
    },

    notesText: {
      color: theme[currentTheme].textPrimary,
      fontSize: 16,
      fontWeight: '600',
    },

    bookingDatesRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomColor: theme[currentTheme].borderBottomColor,
      borderBottomWidth: 1,
      paddingBottom: 10,
    },

    bookingCheckIn: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },

    checkInText: {
      color: theme[currentTheme].textPrimary,
      fontSize: 14,
      fontWeight: '600',
    },

    bookingCheckOut: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },

    checkOutText: {
      color: theme[currentTheme].textPrimary,
      fontSize: 14,
      fontWeight: '600',
    },

    priceContainer: {
      flexDirection: 'column',
      gap: 10,
      maxWidth: '100%',
    },

    priceRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 5,
    },

    quantidadeNoitesContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 10,
      maxWidth: '100%',
    },

    priceNight: {
      color: theme[currentTheme].textPrimary,
      fontSize: 16,
      fontWeight: '600',
    },

    quantityNights: {
      color: theme[currentTheme].textPrimary,
      fontSize: 16,
      fontWeight: '600',
    },

    totalPriceContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    totalPriceText: {
      color: theme[currentTheme].textPrimary,
      fontSize: 16,
      fontWeight: '600',
    },

    totalPrice: {
      color: theme[currentTheme].textPrimary,
      fontSize: 16,
      fontWeight: '600',
    },

    taxaServiceRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 5,
      borderBottomColor: theme[currentTheme].borderBottomColor,
      borderBottomWidth: 1,
      paddingBottom: 10,
    },

    taxaServiceText: {
      color: theme[currentTheme].textPrimary,
      fontSize: 16,
      fontWeight: '600',
    },

    taxaServiceValue: {
      color: theme[currentTheme].textPrimary,
      fontSize: 16,
      fontWeight: '600',
    },

    priceTotalRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 10,
      borderBottomColor: theme[currentTheme].borderBottomColor,
      borderBottomWidth: 1,
      paddingBottom: 10,
    },

    totalText: {
      color: theme[currentTheme].textPrimary,
      fontSize: 16,
      fontWeight: '600',
    },

    totalValue: {
      color: theme[currentTheme].textPrimary,
      fontSize: 16,
      fontWeight: '600',
    },

    paymentMethodRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 10,
    },

    paymentMethodText: {
      color: theme[currentTheme].textPrimary,
      fontSize: 16,
      fontWeight: '600',
    },

    paymentMethod: {
      color: theme[currentTheme].textPrimary,
      fontSize: 16,
      fontWeight: '600',
    },
  });
