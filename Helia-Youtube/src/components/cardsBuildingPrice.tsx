import { useContext } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
} from 'react-native';
import { ThemeContext } from '../context/themeContext';
import { theme } from '../styles/themes';
import { useRouter } from 'expo-router';

type CardsBuildingPriceProps = {
  nameHouse: string;
  id: string;
  address: string;
  image: { uri: string };
  iconAvaliation: React.ReactNode;
  avaliation: string;
  iconFavorite: React.ReactNode;
  price: string;
};

export default function CardsBuildingPrice({
  nameHouse,
  id,
  address,
  image,
  price,
  iconAvaliation,
  avaliation,
  iconFavorite,
}: CardsBuildingPriceProps) {
  const { currentTheme } = useContext(ThemeContext) as {
    currentTheme: keyof typeof theme;
  };
  const styles = createStyles(currentTheme);

  const router = useRouter();

  function handleDetails() {
    router.push({
      pathname: '/stacks/details',
      params: {
        id,
        nameHouse,
        address,
        price,
        avaliation,
        image: image.uri,
      },
    });
  }

  return (
    <View style={styles.containerCards}>
      <ScrollView>
        <TouchableOpacity>
          <View style={styles.card}>
            <Pressable onPress={handleDetails} style={styles.cardButton}>
              <View style={styles.cardButtonHeader}>
                <Image style={styles.cardImage} source={image} />

                <View style={styles.cardInfo}>
                  <View style={styles.cardInfoTop}>
                    <Text style={styles.cardInfoTitle}>{nameHouse}</Text>
                    <Text style={styles.cardInfoSubTitle}>{address}</Text>
                  </View>
                  <View style={styles.cardInfoBottom}>
                    <View style={styles.cardInfoRate}>
                      {iconAvaliation}
                      <Text style={styles.cardInfoRateText}>{avaliation}</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.cardInfoBuy}>
                <Text style={styles.cardInfoBuyText}>{price}</Text>
                {iconFavorite}
              </View>
            </Pressable>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export const createStyles = (currentTheme: 'dark' | 'light') =>
  StyleSheet.create({
    containerCards: {
      flex: 1,
      backgroundColor: theme[currentTheme].background,
    },

    card: {
      height: 120,
      backgroundColor: theme[currentTheme].card,
      borderRadius: 12,
      alignItems: 'center',
      flexDirection: 'row',
      marginVertical:4,
    },

    cardButton: {
      width: '100%',
      alignItems: 'flex-start',
      flexDirection: 'row',
      paddingHorizontal: 10,
      justifyContent: 'space-between',
    },

    cardButtonHeader: {
      flexDirection: 'row',
      gap: 10,
      flex: 1,
      maxWidth: '70%', // Limita a largura do header para dar espaço ao preço
    },

    cardImage: {
      width: 90,
      height: 90,
      borderRadius: 12,
    },

    cardInfo: {
      height: '100%',
      flex:1,
      gap: 15,
    },

    cardInfoTop: {
      justifyContent: 'center',
      gap: 2,
      
    },

    cardInfoBottom: {
      justifyContent: 'center',
    },

    cardInfoRate: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
    },

    cardInfoRateText: {
      color: theme[currentTheme].textPrimary,
      fontSize: 14,
      fontWeight: '500',
    },

    cardInfoTitle: {
      color: theme[currentTheme].textPrimary,
      fontSize: 16,
      
      fontWeight: '400',
      flexWrap: 'wrap', // Permite quebra de linha
      flexShrink: 1, // Permite que o texto encolha
      marginBottom: 4,
      maxWidth: '100%',
    },

    cardInfoSubTitle: {
      color: theme[currentTheme].textSecondary,
      fontSize: 14,
      fontWeight: '300',
    },

    cardInfoBuy: {
      alignItems: 'center',
      flexDirection: 'column',
      gap: 40,
      minWidth: 80,
    },

    cardInfoBuyText: {
      color: theme[currentTheme].accent,
      fontSize: 18,
      fontWeight: '900',
    },
  });
