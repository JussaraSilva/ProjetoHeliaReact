import { useLocalSearchParams, useRouter } from "expo-router";
import * as Icons from "phosphor-react-native";
import { useContext } from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { ThemeContext } from "../../src/context/themeContext";
import { theme } from "../../src/styles/themes";
import housesData from "../../src/data/houses.json";
import IconsDetailsComponents from "../../src/components/iconsDetailsComponent";
import IconsServicesComponents from "../../src/components/iconsServicesComponent";
import ExternalMap from "../../src/components/simpleMapProps";





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

      const params = useLocalSearchParams<{
          id: string;
          nameHouse: string;
          adress: string;
          price: string;
          avaliation: string;
          image: string;
      }>();

      

      const router = useRouter();
  
      function arrowBackPage() {
          router.navigate('/tabs/home');
      }

       const house = housesData.houses.find((h) => h.id === params.id);

        if (!house) {
          return <Text>Erro: imóvel não encontrado.</Text>;
        }


    return (
      
      <View style = {styles.container}>
          <View style = {styles.header}>
                <Image style = {styles.headerImage}
                  source={{ uri: params.image }}/>

                <View style = {styles.headerInfoButtons}>
                    <TouchableOpacity onPress={arrowBackPage}>
                        <Icons.ArrowLeftIcon 
                          size={32} 
                          color='#f4f4f4' 
                          weight='regular'/>
                    </TouchableOpacity>
                    <View style = {styles.headerInfoButtonsRight}>
                      <Icons.BookmarkIcon size={32} color='#f4f4f4' weight='regular'/>

                      <Icons.DotsThreeIcon size={32} color='#f4f4f4' weight='regular'/>
                  </View>
              </View>
          </View>

          <ScrollView>
            <Text style = {styles.imovelNameText}>
              {params.nameHouse}
            </Text>
            <View style = {styles.infoLocalizacao}>
                <Icons.MapPinIcon size={32} color='#1ab65c' weight='fill'/>
                <Text style = {styles.infoLocalizacaoEnderecoText}>
                  {params.adress}
                </Text>
            </View>

            <View style = {styles.separator}>
            </View>

            <View style = {styles.containerGaleriaFotos}>
              <Text style = {styles.containerGaleriaFotosTexto}>Galeria de Fotos</Text>
              <Text style = {styles.containerGaleriaVerTodosTexto}>Ver todas</Text>
            </View>

                <ScrollView horizontal style={styles.contentFotosContainer}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{ paddingRight: 25 }}
                >
                  {house.gallery.map((photo: string, index: number) => (
                    <Image
                      key={index}
                      style={styles.contentPhotoImg}
                      source={{ uri: photo }}
                    />
                  ))}
                </ScrollView>

            <View style = {styles.containerDetails}>
              <Text style = {styles.containerDetailsTitle}>Details</Text>
            <View style = {styles.contentDetails}>
                <View style = {styles.containerIconsDetails}>
                    <IconsDetailsComponents
                      icon=
                      {<Icons.BuildingApartmentIcon 
                        size={32} 
                        color={theme[currentTheme].iconColor} 
                        weight='fill'/>}
                      detailsText="Hotels"
                    />
                    <IconsDetailsComponents
                      icon=
                      {<Icons.BedIcon 
                        size={32} 
                        color={theme[currentTheme].iconColor} 
                        weight='fill'/>}
                      detailsText="4 Bedrooms"
                    />
                    <IconsDetailsComponents
                      icon=
                      {<Icons.BathtubIcon 
                        size={32} 
                        color={theme[currentTheme].iconColor} 
                        weight='fill'/>}
                      detailsText="2 Bathrooms"
                    />

                    <IconsDetailsComponents
                      icon=
                      {<Icons.VectorThreeIcon 
                        size={32} 
                        color={theme[currentTheme].iconColor} 
                        weight='fill'/>}

                      detailsText="4000 mts²"
                    />
                </View>
            </View> 

            </View>

            <View style = {styles.descriptionContainer}>
                    <Text style = {styles.descriptionContainerTitle}>Description</Text>
              <View style = {styles.descriptionContent}>
                    <Text style = {styles.descriptionContainerText}>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, rem, laudantium modi omnis doloremque eos harum quidem distinctio dignissimos totam ducimus quos, accusamus eveniet nihil facilis quo consequuntur veritatis. Quisquam.
                      Quia nam velit perspiciatis. Ducimus porro eius a, facere alias omnis inventore nobis maxime et quos maiores incidunt fuga, facilis esse fugit, asperiores voluptates eveniet sequi quasi! Quod, maxime dolor!
                      
                    </Text>
              </View>
              
            </View>

            <View style = {styles.facilitiesContainer}>
              <Text style = {styles.facilitiesTitle}> Facilities</Text>

              <View style = {styles.facilitiesIconsContainer}>
                <IconsServicesComponents
                    icon={
                      <Icons.SwimmingPoolIcon
                        size={32} 
                        color={theme[currentTheme].iconColor} 
                        weight='fill'/>}
                    serviceText="Swimming Pool"
                />
                <IconsServicesComponents
                    icon={
                      <Icons.WifiHighIcon
                        size={32} 
                        color={theme[currentTheme].iconColor} 
                        weight='fill'/>}
                    serviceText="Wifi"
                />
                <IconsServicesComponents
                    icon={
                      <Icons.ForkKnifeIcon
                        size={32} 
                        color={theme[currentTheme].iconColor} 
                        weight='fill'/>}
                    serviceText="Restaurant"
                />
                <IconsServicesComponents
                    icon={
                      <Icons.LetterCirclePIcon
                        size={32} 
                        color={theme[currentTheme].iconColor} 
                        weight='fill'/>}
                    serviceText="Parking"
                />
                
                <IconsServicesComponents
                    icon={
                      <Icons.ChalkboardTeacherIcon
                        size={32} 
                        color={theme[currentTheme].iconColor} 
                        weight='fill'/>}
                    serviceText="Meeting Room"
                />
                <IconsServicesComponents
                    icon={
                      <Icons.ElevatorIcon
                        size={32} 
                        color={theme[currentTheme].iconColor} 
                        weight='fill'/>}
                    serviceText="Elevator"
                />
                <IconsServicesComponents
                    icon={
                      <Icons.BarbellIcon
                        size={32} 
                        color={theme[currentTheme].iconColor} 
                        weight='fill'/>}
                    serviceText="Fitness Center"
                />
                <IconsServicesComponents
                    icon={
                      <Icons.ArrowsClockwiseIcon
                        size={32} 
                        color={theme[currentTheme].iconColor} 
                        weight='fill'/>}
                    serviceText="24-Hours Open"
                />
                
              </View>
                  
            </View>

            <View style = {styles.locationContainer}>
                  <Text style = {styles.locationContainerTitle}>Location</Text>
                  <View style = {styles.locationContainerMap}>
                    <ExternalMap 
                        address={params.adress} 
                        hotelName={params.nameHouse} 
                    />
                  </View>
            </View>

            <View style = {styles.footer}>
                  <View style = {styles.footerContainerText}>
                    <Text style = {styles.footerContainerTextMoney}>{params.price}</Text>
                    <Text style = {styles.footerContainerTextMonth}>/mês</Text>
                  </View>

                  <View style = {styles.footerContainerButton}>
                    <TouchableOpacity 
                            style={styles.button}>
                      <Text style={styles.buttonText}>Alugar</Text>
                    </TouchableOpacity>
                  </View>
            </View>

          </ScrollView>
            
      </View>
        
    );
}


export const createStyles = (currentTheme: "dark" | "light") =>
  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme[currentTheme].background,
        justifyContent: 'space-between',
        
        
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

    

    contentFotosContainer: {  
        paddingHorizontal: 30,
        paddingTop: 10,
        flex:1,
    },

    contentPhotoImg: {
        width: 100,
        height: 100,
        marginRight: 10,
        borderRadius: 12,
    },

    containerDetails: {
        flexDirection: "column",
        paddingHorizontal: 20,
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
      justifyContent:"center",

    },

    containerIconsDetails: {
      flexDirection: "row",
      gap:20,
      
    },

    descriptionContainer: {
      flexDirection:"column",
      paddingHorizontal:20,
      gap:15,
      marginTop:15,
    },

    descriptionContent: {
      flexDirection:"column",
      paddingHorizontal:10,
    },

    descriptionContainerTitle: {
      color:theme[currentTheme].textPrimary,
      fontSize:18,
      fontWeight:"bold",
      
    },

    descriptionContainerText: {
      color:theme[currentTheme].textPrimary,
      fontSize:14,
      fontWeight:"bold",
    },

    contentDescriptionText: {
      color:theme[currentTheme].textPrimary,
      fontSize:14,
      marginTop:10,
    },

    facilitiesTitle: {
      color:theme[currentTheme].textPrimary,
      fontSize:18,
      fontWeight:"bold",

    },


    facilitiesContainer: {
      flexDirection: "column",
      paddingHorizontal: 20,
      gap: 10,
      marginTop: 15,
      width: '100%',
    },

    facilitiesIconsContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 10,
      justifyContent: "space-between",
      width: '100%',
    },

    locationContainer: {
      flexDirection:"column",
      paddingHorizontal:20,
      gap:15,
      marginTop:15,

    },

    locationContainerMap: {

    },

    locationContainerTitle: {
      color:theme[currentTheme].textPrimary,
      fontSize:18,
      fontWeight:"bold",
      
    },

    locationContainerText: {
      color:theme[currentTheme].textPrimary,
      fontSize:14,
      fontWeight:"bold",
    },

    footer: {
      flexDirection:"row",
      justifyContent:"space-between",     
      borderWidth:1,
      gap:10,
      padding:10,
      marginTop:40,
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
      marginLeft:5,
      
    },

    footerContainerTextMoney:{
      color:theme[currentTheme].accent,
      fontSize:30,
      fontWeight:"bold",

    },

    footerContainerTextMonth: {
      color:theme[currentTheme].textPrimary,
      fontSize:12,
      fontWeight:"bold",
    },

    footerContainerButton: {
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    button: {
      backgroundColor: theme[currentTheme].accent,
      width:responsiveSize(180),
      height: responsiveSize(56),
      borderRadius: responsiveSize(36),
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: responsiveSize(250),
      

    },
    buttonText: {
        color:"#f4f4f4",
        fontSize:26,
        fontWeight:"800",
    },

});