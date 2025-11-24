
import {useContext} from "react";
import {StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ThemeContext } from "../context/themeContext";
import { theme } from "../global/themes";

type Props = {
    label?: string;
    isActive: boolean; // Indica se o filtro está ativo
    onPress: () => void; // A função de clique
};

export default function ButtonFilter({ label, isActive, onPress }: Props) {
    
    const { currentTheme } = useContext(ThemeContext) as { currentTheme: keyof typeof theme };
    const styles = createStyles(currentTheme);

    // Definição das cores baseadas no estado isActive
    const activeBackground = isActive ? theme[currentTheme].accent : '#fff'; 
    const activeBorderColor = theme[currentTheme].accent; 
    const activeTextColor = isActive ? '#fff' : theme[currentTheme].accent;

    return (
        <TouchableOpacity 
            style={styles.optionsFilter} 
            onPress={onPress} // Chama a função passada pela prop
        >
            {/* Aplica os estilos condicionalmente */}
            <View style={[
                styles.filtersLine,
                { 
                    backgroundColor: activeBackground, 
                    borderColor: activeBorderColor 
                }
            ]}>
                <Text style={[
                    styles.labelButton, 
                    { color: activeTextColor } 
                ]}>
                    {label}
                </Text>
            </View>
        </TouchableOpacity>
    );
}





export const createStyles = (currentTheme: "dark" | "light") =>
  StyleSheet.create({
  optionsFilter: {    
    alignItems:"center",
    height: 40,
    marginHorizontal: 5,
    alignSelf: 'center',
    marginBottom: 15,
  },

  filtersLine: {
    alignItems:"center",
    borderRadius: 20,
    justifyContent:"center",
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    height: "100%",
    flexDirection:"row",
    borderWidth: 2,
    borderColor: theme[currentTheme].accent,
    alignSelf:"center",
    
  },

  labelButton: {
    color: theme[currentTheme].accent,
    fontSize: 16,
    fontWeight: 'bold',
    
    
  },

  pressButton: {
    backgroundColor: theme[currentTheme].accent,
  },

  


});