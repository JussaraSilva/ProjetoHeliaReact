import { useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,

} from 'react-native';
import { ThemeContext } from '../context/themeContext';
import { theme } from '../styles/themes';


type Props = {
  icon: React.ReactNode;
  detailsText: string;
};

export default function IconsDetailsComponents({
  icon,
  detailsText
}: Props) {
  const { currentTheme } = useContext(ThemeContext) as {
    currentTheme: keyof typeof theme;
  };
  const styles = createStyles(currentTheme);

  return (
    <View>
      <View style = {styles.containerIconsDetails}>
            {icon}
            <Text style = {styles.detailsIconsText}>
              {detailsText}
            </Text>
      </View>
    </View>
  );
}

export const createStyles = (currentTheme: 'dark' | 'light') =>
  StyleSheet.create({
    containerDetails: {
      
      
    },

    containerIconsDetails: {
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10,
    },

    detailsIconsText: {
      color: theme[currentTheme].textPrimary,
      fontSize: 16,
      fontWeight: '600',
    },

    
  });