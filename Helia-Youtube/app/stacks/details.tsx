import { ArrowLeftIcon, BathtubIcon, BedIcon, BookmarkIcon, BuildingApartmentIcon, DotsThreeIcon, MapPinIcon, VectorThreeIcon } from "phosphor-react-native";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";



export default function Details() {


    return (
      <View style = {styles.container}>
          <View style = {styles.header}>
                <Image style = {styles.headerImage}
                  source={require("../src/assets/hotel.png")}/>

                <View style = {styles.headerInfoButtons}>
                    <ArrowLeftIcon size={32} color='#f4f4f4' weight='regular'/>
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

            </View>
      </View>
        
    );
}


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181a20',
        
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
        color: '#f4f4f4',
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
        color: '#f4f4f4',
        fontSize: 16,
        fontWeight: '500',
    },

    separator: {
        width: '90%',
        height: 2,
        backgroundColor: '#757575',
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
        color: "#f4f4f4",
        fontWeight: "bold"
    },

    containerGaleriaVerTodosTexto: {
        fontSize: 18,
        color: "#1Ab65c",
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
        color:"#f1f1f1",
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
        color:"#f1f1f1",
        fontWeight:"bold",
    },

    footer: {
      borderWidth:1,
      height:80,
      borderRightColor:"#757575",
    }




});