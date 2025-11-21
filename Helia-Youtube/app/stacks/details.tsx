import { useRouter } from "expo-router";
import { ArrowLeftIcon, BathtubIcon, BedIcon, BookmarkIcon, BuildingApartmentIcon, DotsThreeIcon, MapPinIcon, VectorThreeIcon } from "phosphor-react-native";
import { useContext } from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { ThemeContext } from "../src/context/themeContext";
import { theme } from "../src/global/themes";



const { width} = Dimensions.get('window');

interface IResponsiveSize {
    (size: number): number;
}

const guidelineBaseWidth = 375; // Largura de referência (ex: iPhone 8)
const responsiveSize: IResponsiveSize = (size: number): number => {
    return (size * width) / guidelineBaseWidth;
};

export default function Details() {

    const { currentTheme } = useContext(ThemeContext);
      const styles = createStyles(currentTheme);

  

      const router = useRouter();
  
      function arrowBackPage() {
          router.navigate('/tabs/home');
      }


    return (
      <View style = {styles.container}>
          <View style = {styles.header}>
                <Image style = {styles.headerImage}
                  source={require("../src/assets/hotel.png")}/>

                <View style = {styles.headerInfoButtons}>
                    <TouchableOpacity onPress={arrowBackPage}>
                        <ArrowLeftIcon 
                          size={32} 
                          color='#f4f4f4' 
                          weight='regular'/>
                    </TouchableOpacity>
                    <View style = {styles.headerInfoButtonsRight}>
                      <BookmarkIcon size={32} color='#f4f4f4' weight='regular'/>

                      <DotsThreeIcon size={32} color='#f4f4f4' weight='regular'/>
                  </View>
              </View>
          </View>

            <Text style = {styles.imovelNameText}>
              Hotel Nova Vista
            </Text>
            <View style = {styles.infoLocalizacao}>
                <MapPinIcon size={32} color='#1ab65c' weight='fill'/>
                <Text style = {styles.infoLocalizacaoEnderecoText}>
                  Rua das Flores, 123 - São Paulo, SP
                </Text>
            </View>

            <View style = {styles.separator}>
            </View>

            <View style = {styles.containerGaleriaFotos}>
              <Text style = {styles.containerGaleriaFotosTexto}>Galeria de Fotos</Text>
              <Text style = {styles.containerGaleriaVerTodosTexto}>Ver todas</Text>
            </View>

              <ScrollView 
                horizontal 
                style={styles.contentFotosContainer}
                contentContainerStyle={styles.scrollViewContent}
                showsHorizontalScrollIndicator={false} // Opcional: esconde a barra de scroll
              >
              <Image 
                style = {styles.contentPhotoImg}
                source = {require("../src/assets/hotel.png")}
              />
              <Image 
                style = {styles.contentPhotoImg}
                source = {require("../src/assets/hotel.png")}
              />
              <Image 
                style = {styles.contentPhotoImg}
                source = {require("../src/assets/hotel.png")}
              />
              <Image 
                style = {styles.contentPhotoImg}
                source = {require("../src/assets/hotel.png")}
              />
              <Image 
                style = {styles.contentPhotoImg}
                source = {require("../src/assets/hotel.png")}
              />
              <Image 
                style = {styles.contentPhotoImg}
                source = {require("../src/assets/hotel.png")}
              />
              
            </ScrollView>

            <View style = {styles.containerDetails}>
              <Text style = {styles.containerDetailsTitle}>Details</Text>
            <View style = {styles.contentDetails}>
                <View style = {styles.containerIconsDetails}>
                  <BuildingApartmentIcon size={32} color='#1ab65c' weight='fill'/>
                  <Text style = {styles.detailsIconsText}>Hotels</Text>
                </View>
                <View style = {styles.containerIconsDetails}>
                  <BedIcon size={32} color='#1ab65c' weight='fill'/>
                  <Text style = {styles.detailsIconsText}>4 Bedrooms</Text>
                </View>
                <View style = {styles.containerIconsDetails}>
                  <BathtubIcon size={32} color='#1ab65c' weight='fill'/>
                  <Text style = {styles.detailsIconsText}>2 Bathrooms</Text>
                </View>
                <View style = {styles.containerIconsDetails}>
                  <VectorThreeIcon size={32} color='#1ab65c' weight='fill'/>
                  <Text style = {styles.detailsIconsText}>4000 Metros²</Text>
                </View>
            </View> 

            </View>

            <View style = {styles.footer}>
                  <View style = {styles.footerContainerText}>
                    <Text style = {styles.footerContainerTextMoney}>$ 450</Text>
                    <Text style = {styles.footerContainerTextMonth}>/mês</Text>
                  </View>

                  <View style = {styles.footerContainerButton}>
                    <TouchableOpacity 
                            style={styles.button}>
                      <Text style={styles.buttonText}>Alugar</Text>
                    </TouchableOpacity>
                  </View>
            </View>
      </View>
        
    );
}


export const createStyles = (currentTheme: "dark" | "light") =>
  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme[currentTheme].background,
        
    },

    header: {
        width: '100%',
        height: "40%",
        
        
    },

    headerImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },

    headerInfoButtons: {
        position: 'absolute',
        top: 50,
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
    },

    headerInfoButtonsRight: {
        flexDirection: 'row',
        gap: 10,
    },

    imovelNameText: {
        color: theme[currentTheme].textPrimary,
        fontSize: 36, 
        fontWeight: 'bold',
        paddingHorizontal: 30,
        paddingTop: 20,
    },

    infoLocalizacao: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingTop: 15,
        gap: 10,
    },

    infoLocalizacaoEnderecoText: {
        color: theme[currentTheme].textPrimary,
        fontSize: 16,
        fontWeight: '500',
    },

    separator: {
        width: '90%',
        height: 2,
        backgroundColor: theme[currentTheme].borderBottomColor,
        alignSelf: 'center',
        marginHorizontal: 30,
        marginTop: 20,
    },

    containerGaleriaFotos: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 20,
    },

    containerGaleriaFotosTexto: {
        fontSize: 18,
        color: theme[currentTheme].textPrimary,
        fontWeight: "bold"
    },

    containerGaleriaVerTodosTexto: {
        fontSize: 18,
        color: theme[currentTheme].accent,
        fontWeight: "bold"
    },

    scrollViewContent: {
        maxHeight:120,
        alignItems: 'flex-start', 
    },

    contentFotosContainer: {       
        paddingHorizontal: 30,
        paddingTop: 10,
        maxHeight:130,


    },

    contentPhotoImg: {
        width: 100,
        height: 100,
        marginRight: 10,
        borderRadius: 12,
    },

    containerDetails: {
        flexDirection: "column",
        paddingHorizontal: 30,
    },

    containerDetailsTitle: {
        color:theme[currentTheme].textPrimary,
        fontSize:18,
        fontWeight:"bold",
        marginTop:15,
        marginBottom:15,
    },

    contentDetails: {
      flexDirection: "row",
      width: "100%",
      gap: 20,
      paddingHorizontal: 50,
      justifyContent:"center",

    },

    containerIconsDetails: {
      flexDirection: "column",
      alignItems:"center",
      justifyContent:"center",
    },

    detailsIconsText: {
        fontSize:14,
        color:theme[currentTheme].textPrimary,
        fontWeight:"bold",
    },

    footer: {
      flexDirection:"row",
      justifyContent:"space-between",     
      borderWidth:1,
      height:90,
      marginTop:20,
      flex:1,
      borderRightColor:theme[currentTheme].borderBottomColor,
      borderLeftColor:theme[currentTheme].borderBottomColor,
      borderTopColor:theme[currentTheme].borderBottomColor,
      borderTopLeftRadius: 26,
      borderTopRightRadius: 26,
      paddingHorizontal:10,
    },

    footerContainerText: {
      flexDirection: "row",
      alignItems:"center",
      height:"100%",
      paddingHorizontal:20,
      gap:10,
    },

    footerContainerTextMoney:{
      color:theme[currentTheme].accent,
      fontSize:32,
      fontWeight:"bold",

    },

    footerContainerTextMonth: {
      color:theme[currentTheme].textPrimary,
      fontSize:12,
      fontWeight:"bold",
    },

    footerContainerButton: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    button: {
      backgroundColor: theme[currentTheme].accent,
      width:responsiveSize(210),
      height: responsiveSize(56),
      borderRadius: responsiveSize(36),
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: responsiveSize(350),
      

    },
    buttonText: {
        color:theme[currentTheme].textPrimary,
        fontSize:26,
        fontWeight:"800",
    },

    






});