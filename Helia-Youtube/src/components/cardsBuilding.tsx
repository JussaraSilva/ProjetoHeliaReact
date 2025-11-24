
import {useContext} from "react";
import {Image, ScrollView, StyleSheet, Text,  TouchableOpacity,  View, ImageSourcePropType } from "react-native";
import { ThemeContext } from "../context/themeContext";
import { theme } from "../global/themes";


type Props = {
  image?: ImageSourcePropType;
  nameHouse?: string;
  adress?: string;
  statusBooking?: "Ativa" | "Cancelada" | "Completa";
};

export default function CardsBuilding({ nameHouse, adress, statusBooking, image}: Props) {
    
    const { currentTheme } = useContext(ThemeContext) as { currentTheme: keyof typeof theme };
    const styles = createStyles(currentTheme);

    const statusStyles = {
      Ativa: {
        color: theme[currentTheme].colorAtiva,
        backgroundColor: theme[currentTheme].colorAtivaBack
      },
      Cancelada: {
        color: theme[currentTheme].colorError,
        backgroundColor: theme[currentTheme].colorErrorBack
      },
      Completa: {
        color: theme[currentTheme].colorComplet,
        backgroundColor: theme[currentTheme].colorCompletBack
  }
    };

    return (
        <View style={styles.containerCards}>
          <ScrollView>
              <TouchableOpacity>
                <View style={styles.card}>
                  <Image style={styles.imagemEstabelecimento} 
                  source={image}
                />
                <View style={styles.contentInfoEstabelecimento}>
                  <Text style={styles.nomeEstabelecimento}>{nameHouse}</Text>
                  <Text style={styles.endereco}>{adress}</Text>
                  <Text style={[styles.statusAgendamento, statusBooking ? statusStyles[statusBooking] : undefined]}>
                      {statusBooking}
                    </Text>
                  
                </View>                
                </View>
              </TouchableOpacity>
            
          </ScrollView>
        </View>
        
    );
}





export const createStyles = (currentTheme: "dark" | "light") =>
  StyleSheet.create({
    containerCards: {
      flex: 1,
      backgroundColor: theme[currentTheme].background,
      
    },

    card: {
      flexDirection: "row",
      margin: 10,
      padding: 10,
      backgroundColor: theme[currentTheme].card,
      borderRadius: 10,
      gap:10,
    },

    imagemEstabelecimento: {
      width: 100,
      height: 100,
      borderRadius: 10,
    },

    contentInfoEstabelecimento:{
      flexDirection: "column",
      marginLeft: 10,
      gap:10,
      
    },

    nomeEstabelecimento: {
      fontSize: 20,
      fontWeight: "bold",
      marginTop: 10,
      color: theme[currentTheme].textPrimary,
    },

    endereco: {
      fontSize: 16,
      color: theme[currentTheme].textSecondary,
    },

    statusAgendamento: {
      fontSize: 16,
      fontWeight: "bold",    
      padding: 10,
      borderRadius: 10,
      alignSelf: "flex-start",
    },

    


  


});