import { useContext } from 'react';
import {

  StyleSheet,
  Text,
  
  View,
  ImageSourcePropType,
  Image,
} from 'react-native';
import { ThemeContext } from '../context/themeContext';
import { theme } from '../styles/themes';
import { StarIcon } from 'phosphor-react-native';


type Review = {
  image?: ImageSourcePropType;
  nameUser?: string;
  dateComentary?: string;
  avaliationNote?: string;
  comentaryText?: string;
};

type Props = {
  reviews: Review[];
};

export default function ReviewCard({ reviews }: Props) {
  const { currentTheme } = useContext(ThemeContext) as {
    currentTheme: keyof typeof theme;
  };

  const styles = createStyles(currentTheme);


  return (
    <View style={styles.container}>
      <Text style={styles.reviewsTitle}>
        Avaliações ({reviews.length})
      </Text>
      
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <View key={index} style={styles.reviewCard}>
            {/* Header do Review */}
            <View style={styles.reviewHeader}>
              <View style={styles.userImageContainer}>
                {review.image && (
                  <Image style={styles.userImage}
                  source={review.image} />
                )}
              </View>
              <View style={styles.userInfo}>
                <Text style={styles.userName}>{review.nameUser}</Text>
                <Text style={styles.reviewDate}>{review.dateComentary}</Text>
              </View>
              
              {/* Nota com estrela */}
              <View style={styles.ratingContainer}>
                <StarIcon size={16} weight="fill" color={theme[currentTheme].starColor} />
                <Text style={styles.ratingText}>{review.avaliationNote}</Text>
              </View>
            </View>

            {/* Texto do comentário */}
            <Text style={styles.comment}>{review.comentaryText}</Text>
          </View>
        ))
      ) : (
        <Text style={styles.noReviews}>Ainda não há avaliações para este imóvel.</Text>
      )}
    </View>
  );
}

export const createStyles = (currentTheme: 'dark' | 'light') =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: 16,
    },
    
    reviewsTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: theme[currentTheme].textPrimary,
      marginBottom: 16,
    },
    
    reviewCard: {
      backgroundColor: theme[currentTheme].background,
      padding: 16,
      borderRadius: 12,
      marginBottom: 12,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 2,
    },
    
    reviewHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 12,
    },

    userImageContainer: {
      width: 60,
      height: 60,
      borderRadius: 50,
      overflow: 'hidden',
      marginRight: 12,
      zIndex: 5,
      
    },

    userImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    
    userInfo: {
      flex: 1,
    },
    
    userName: {
      fontWeight: 'bold',
      fontSize: 16,
      color: theme[currentTheme].textPrimary,
      marginBottom: 4,
    },
    
    reviewDate: {
      color: theme[currentTheme].textSecondary,
      fontSize: 14,
    },
    
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme[currentTheme].accent,
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 12,
      gap: 4,
    },
    
    ratingText: {
      color: "#f4f4f4",
      fontSize: 12,
      fontWeight: 'bold',
    },
    
    comment: {
      fontSize: 14,
      lineHeight: 20,
      color: theme[currentTheme].textPrimary,
    },
    
    noReviews: {
      textAlign: 'center',
      color: theme[currentTheme].textSecondary,
      fontStyle: 'italic',
      marginTop: 20,
      fontSize: 16,
    },
  });