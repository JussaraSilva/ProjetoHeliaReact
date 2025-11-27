
import { Image, ScrollView,  StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';
import { theme } from '../../src/styles/themes';
import { ThemeContext } from '../../src/context/themeContext';
import {  useContext, useState } from "react";


import { useLocalSearchParams, useRouter } from 'expo-router';
import {  ArrowLeftIcon, BookmarkIcon,StarIcon } from 'phosphor-react-native';
import { Picker } from '@react-native-picker/picker';


export default function ConfirmationReserv() {
  const { currentTheme } = useContext(ThemeContext);
  const styles = createStyles(currentTheme);
  const router = useRouter();

  
  const params = useLocalSearchParams();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
    });
  }

  const calculateNights = () => {
    const start = new Date(params.startDate as string);
    const end = new Date(params.endDate as string);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }

  function calculateTotal() {
  const nights = calculateNights();
  const priceString = params.housePrice as string;
  
  console.log('🔍 DEBUG calculateTotal:');
  console.log('nights:', nights);
  console.log('priceString:', priceString);
  console.log('Number(priceString):', Number(priceString));
  
  const pricePerNight = Number(priceString);
  const total = nights * pricePerNight;
  
  console.log('total:', total);
  return total;
  }
  
  const [selectedPayment, setSelectedPayment] = useState<string>('');




  return (

    
    
    <View style={styles.container}>
      <ScrollView style = {styles.content}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()}>
                <ArrowLeftIcon 
                  size={32} 
                  color={theme[currentTheme].iconColor} weight="thin" 
                />
            </TouchableOpacity>
            <View style={styles.titlePage}>
              <Text style={styles.textTitle}>Confirmação da Reserva</Text>
            </View>
          </View>
        

        <View style= {styles.containerResume}>
          <View style={styles.containerCardResumeImovel}>
              <View style={styles.cardResumeImovel}>
                <View style={styles.imagemEstabelecimento}>
                  <Image style={styles.imagem} 
                  source={{ uri: Array.isArray(params.houseImage) ? (params.houseImage as string[])[0] : (params.houseImage as string) }}/>
                </View>
                <View style={styles.informationEstabelecimento}>
                    <Text style={styles.nomeHouse}>
                      {params.houseName}
                      </Text>
                    <Text style={styles.adressHouse}>
                      {params.houseAddress}
                    </Text>
                    <View style={styles.avaliationEstabelecimento}>
                      <StarIcon size={16} color={theme[currentTheme].starColor} weight="fill" />

                      <Text style={styles.avaliationText}
                      >{params.houseAvaliation}</Text>
                    </View>
                                      
                </View>
                <View style={styles.priceEstabelecimento}>
                  <Text style={styles.precoImovel}>
                    {params.housePrice}</Text>
                  <BookmarkIcon size={24} color={theme[currentTheme].iconColor} weight="duotone" />
                </View>
              </View>
          </View>

          <View style={styles.containerCardDates}>
            <Text style={styles.textTitle}>Datas da Reserva:</Text>
            <View style={styles.containerChekIn}>
              <Text style={styles.textChekIn}>Data de Check-in: </Text>
              <Text style={styles.dateCheckIn}>{formatDate(params.startDate as string)}</Text>
            </View>
            <View style={styles.containerChekOut}>
              <Text style={styles.textChekOut}>Data de Check-out: </Text>             
              <Text style={styles.dateCheckOut}>{formatDate(params.endDate as string)}</Text> 
            </View>

            <View style={styles.containerGuests}>
              <Text style={styles.textGuests}>Quantidade de Pessoas:</Text>
              <Text style={styles.numGuests}>{params.guests} hóspedes</Text>
            </View>
                      
          </View>

          <View style={styles.containerTotalNights}>
            <View style={styles.containerValorNoites}>
              <Text style={styles.totalDays}>
                {calculateNights()} noites</Text>
              <Text style={styles.pricePerDay}>
                {params.housePrice} por noite
                </Text>
            </View>            
            <View style={styles.containerTotalPrice}>
              <Text style={styles.textTotalPrice}>Total:</Text>
              <Text style={styles.textTotal}>{calculateTotal()}</Text>
            </View>
          </View>

          <View style={styles.containerInfoReserv}>
            <View>
              <Text style={styles.textTitle}>Informações da Reserva</Text>
            </View>
            <View style={styles.contentInfos}>
              <View style={styles.containerInfo}>
                <Text style={styles.textInfoNome}>Nome:</Text>
                <Text style={styles.info}>{params.tenantName}</Text>
              </View>
              <View style={styles.containerInfo}>
                <Text style={styles.textInfoTelefone}>Telefone:</Text>
                <Text style={styles.info}>{params.tenantPhone}</Text>
              </View>
              <View style={styles.containerInfo}>
                <Text style={styles.textInfoHospedes}>Hóspedes:</Text>
                <Text style={styles.info}>{params.guests}</Text>
              </View>
              <View style={styles.containerInfo}>
                <Text style={styles.textNote}>Observações:</Text>
                <Text style={styles.info}>{params.notes || "Nenhuma"}</Text>
              </View>
              
              
              
            </View>
            
          </View>

          <View style={styles.containerPayments}>
            
            <Text style={styles.textTitle}>Forma de Pagamento:</Text>
            <View style={styles.containerMetodoPayment}>
              <View style={styles.containerTextMetodoPayment}>
                <Text style={styles.textMetodoPayment}>Forma de pagamento:</Text>
              </View>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={selectedPayment}
                  onValueChange={(itemValue) => setSelectedPayment(itemValue)}
                  style={styles.picker}
                  dropdownIconColor={theme[currentTheme].textSecondary}
                >
                  <Picker.Item label="Selecione uma opção" value="" />
                  <Picker.Item label="Cartão de Crédito" value="Cartão de Crédito" />
                  <Picker.Item label="Cartão de Débito" value="Cartão de Débito" />
                  <Picker.Item label="Pix" value="Pix" />
                </Picker>
              </View>
            </View>
              
          
                
          </View>


        </View>

        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.buttonConfirmReserv}>
            <Text style={styles.textButton}>Confirmar Agendamento</Text>
          </TouchableOpacity>
          
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
      
    },

    content: {
      paddingHorizontal: 10,
      marginBottom: 20,
    },

    header: {
      marginTop: 40,
      marginBottom: 20,
      flexDirection: 'row',
      gap: 20,
      alignItems: 'center',
      

    },

    titlePage: {
      alignItems: 'center',
      
    },

    
    textTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: theme[currentTheme].textPrimary,
      textAlign: 'center',
    },

    


    containerResume: {
      marginBottom: 20,
      gap: 15,

    },

    containerCardResumeImovel: {
      
    },

    cardResumeImovel: {
      flexDirection: 'row',
      gap: 5,
      backgroundColor: theme[currentTheme].card,
      padding: 10,
      borderRadius: 10,
    },

    imagemEstabelecimento: {
      width: 90,
      height: 90,
    },

    imagem: {
      width: "100%",
      height: "100%",
      borderRadius: 10,
    },

    informationEstabelecimento: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      flex: 1,
      paddingHorizontal: 10,
    },

    nomeHouse: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme[currentTheme].textPrimary,
    },

    adressHouse: {
      color: theme[currentTheme].textSecondary,
    },

    avaliationEstabelecimento: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
      marginTop: 4,
      wordWrap: 'break-word',
      color: theme[currentTheme].textPrimary,
    },

    avaliationText: {
      color: theme[currentTheme].textPrimary,
    },

    priceEstabelecimento: {
      flex:1,
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    },
    precoImovel: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme[currentTheme].textPrimary,
    },

    containerCardDates: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginTop: 10,
      gap: 10,
      backgroundColor: theme[currentTheme].card,
      padding: 10,
      borderRadius: 10,
    },

    containerChekIn: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomColor: theme[currentTheme].borderInput,
      borderBottomWidth: 1,
      paddingBottom: 5,
    },

    textChekIn: {
      fontWeight: 'bold',
      color: theme[currentTheme].textPrimary,
      fontSize: 16,
    },

    dateCheckIn: {
      color: theme[currentTheme].textPrimary,
    },

    containerChekOut: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomColor: theme[currentTheme].borderInput,
      borderBottomWidth: 1,
      paddingBottom: 5,
    },

    textChekOut: {
      fontWeight: 'bold',
      color: theme[currentTheme].textPrimary,
      fontSize: 16,
    },

    dateCheckOut: {
      color: theme[currentTheme].textPrimary,
    },

    containerGuests: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    textGuests: {
      fontWeight: 'bold',
      color: theme[currentTheme].textPrimary,
      fontSize: 16,
    },

    numGuests: {
      color: theme[currentTheme].textPrimary,
    },



    containerTotalNights: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginTop: 10,
      gap: 10,
      backgroundColor: theme[currentTheme].card,
      padding: 10,
      borderRadius: 10,
    },

    containerValorNoites: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    totalDays: {
      fontWeight: 'bold',
      color: theme[currentTheme].textPrimary,
      fontSize: 16,
    },

    pricePerDay: {
      color: theme[currentTheme].textPrimary,
    },

    

    containerTotalPrice: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderTopColor: theme[currentTheme].borderInput,
      borderTopWidth: 2,
      paddingTop: 5,
    },

    textTotalPrice: {
      fontWeight: 'bold',
      color: theme[currentTheme].textPrimary,
      fontSize: 18,
    },

    textTotal: {
      color: theme[currentTheme].textPrimary,
      fontSize: 18,
    },
    containerInfoReserv: {
      flexDirection: 'column',
      marginTop: 10,
      gap: 10,
      backgroundColor: theme[currentTheme].card,
      padding: 10,
      borderRadius: 10,
    },

        contentInfos: {
      gap: 5,

    },

    containerInfo: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    textInfoNome: {
      fontWeight: 'bold',
      color: theme[currentTheme].textPrimary,
    },

    info: {
      color: theme[currentTheme].textPrimary,
    },

    textInfoTelefone: {
      fontWeight: 'bold',
      color: theme[currentTheme].textPrimary,
    },

    textInfoHospedes: {
      fontWeight: 'bold',
      color: theme[currentTheme].textPrimary,
    },

    textNote: {
      fontWeight: 'bold',
      color: theme[currentTheme].textPrimary,
    },

    textInfo: {
      color: theme[currentTheme].textPrimary,
    },

    containerPayments: {
      flexDirection: 'column',
      gap: 10,
      backgroundColor: theme[currentTheme].card,
      borderRadius: 10,
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      flex:1,
    },


    containerMetodoPayment: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
    },

    containerTextMetodoPayment: {
      flex:1,
    },

    textMetodoPayment: {
      color: theme[currentTheme].textPrimary,
    },

    pickerContainer: {
      backgroundColor: theme[currentTheme].input,
      borderRadius: 8,
      padding: 5,
      flex:2,
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },

    picker: { 
      color: theme[currentTheme].textPrimary,
      backgroundColor: theme[currentTheme].input,
      borderColor: theme[currentTheme].borderInput,
      width:"100%",
    },

    containerButton: {
      flex:1,
      paddingVertical: 15,
      borderRadius: 8,
    },

    buttonConfirmReserv: {
      backgroundColor: theme[currentTheme].accent,
      padding: 10,
      borderRadius: 8,
      alignItems: 'center',
    },

    textButton: {
      color: theme[currentTheme].textPrimary,
      fontSize: 16,
      fontWeight: 800,
      
    },


  });
