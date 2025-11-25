import { useContext } from 'react';
import {
  Image,
  
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageSourcePropType,
} from 'react-native';
import { ThemeContext } from '../context/themeContext';
import { theme } from '../styles/themes';
import { BookmarkIcon,StarIcon } from 'phosphor-react-native';

type Props = {
  image?: ImageSourcePropType;
  nameHouse?: string;
  address?: string;
  avaliationNote?: string;
  price?: string;
};

export default function CardsRecomendacao({
  nameHouse,
  address,
  image,
  avaliationNote,
  price,
}: Props) {
  const { currentTheme } = useContext(ThemeContext) as {
    currentTheme: keyof typeof theme;
  };
  const styles = createStyles(currentTheme);

  return (
    <View style={styles.containerCards}>
      <TouchableOpacity>
        <View style={styles.cardRecomendations}>
          
          <View style={styles.avaliationContainer}> 
              <StarIcon
                  size={18}
                  color="#f4f4f4"
                  weight='fill'
              />
              <Text style={styles.avaliationText}>
                {avaliationNote}
              </Text>
          </View>

          <View style={styles.overlay} />
              <Image style={styles.imagemEstabelecimento} source={image} />
            <View style={styles.contentInfoEstabelecimento}>
                  <Text style={styles.nomeEstabelecimento}>{nameHouse}</Text>
                  <Text style={styles.endereco}>{address}</Text>
              <View style={styles.priceContainer}>
                  <Text style={styles.price}>{price}/por noite</Text>
                    <BookmarkIcon
                    size={20}
                    color={theme[currentTheme].iconColor}
                    weight='fill'
                    />
              </View>
            </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export const createStyles = (currentTheme: 'dark' | 'light') =>
  StyleSheet.create({
    containerCards: {
      flex: 1,
      backgroundColor: theme[currentTheme].background,
    },

    cardRecomendations: {
      justifyContent: 'space-between',
      width:210,
      height: 260,
      flexDirection: 'column',
      margin: 10,
      borderRadius: 20,
      gap: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,
    },

    overlay: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      borderRadius: 20,
      backgroundColor: 'rgba(0, 0, 0, 0.562)', 
      zIndex:2,
    },

    avaliationContainer: {
      flexDirection: 'row',
      backgroundColor:theme[currentTheme].accent,
      margin:10,
      width:70,
      height:40,
      borderRadius:20,
      alignSelf:"flex-end",
      zIndex:3,
      justifyContent: 'center',
      alignItems:"center",
      gap:10,
    },

    avaliationText: {
      color: "#f4f4f4",
      fontSize: 12,
      fontWeight: 'bold',
      
    },

    imagemEstabelecimento: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      borderRadius: 20,
      zIndex:1,
    },

    contentInfoEstabelecimento: {
      flexDirection: 'column',
      gap: 10,
      padding:20,
      zIndex:3,
    },

    nomeEstabelecimento: {
      color: theme[currentTheme].textCardRecomendation,
      fontSize: 20,
      fontWeight: 'bold',
    },

    endereco: {
      color: theme[currentTheme].textCardRecomendation,
      fontSize: 16,
    },


    price: {
      color: theme[currentTheme].textCardRecomendation,
      fontSize: 12,
      fontWeight: 'bold',
      
    },

    priceContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width:"100%",
      justifyContent: 'space-between',
    },
  });
