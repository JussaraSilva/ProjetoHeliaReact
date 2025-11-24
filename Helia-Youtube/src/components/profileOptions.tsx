
import { useRef, useContext, useEffect } from "react";
import { Animated, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ThemeContext } from "../context/themeContext";
import { theme } from "../global/themes";

type Props = {
  icon?: React.ReactNode;
  label?: string;
  isToggle?: boolean;
};

export default function ProfileOptions({ icon, label, isToggle }: Props) {

  const { currentTheme, toggleTheme } = useContext(ThemeContext);
  const styles = createStyles(currentTheme);

  const animation = useRef(new Animated.Value(0)).current; 
  const colors = theme[currentTheme];

  const isOn = currentTheme === "dark"; // DEFINIÇÃO ÚNICA

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isOn ? 1 : 0,
      duration: 0,
      useNativeDriver: false
    }).start();
  }, [isOn, animation]);

  function toggleSwitch() {
    toggleTheme();
    Animated.timing(animation, {
      toValue: isOn ? 0 : 1,
      duration: 250,
      useNativeDriver: false
    }).start();
  }

  const trackColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.trackOff, colors.trackOn]
  });

  const thumbPosition = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 32]
  });

  return (
    <TouchableOpacity style={styles.options}>
      <View style={styles.left}>
        {icon}
        <Text style={styles.label}>{label}</Text>
      </View>

      {isToggle && (
        <TouchableOpacity onPress={toggleSwitch}>
          <Animated.View style={[styles.switchTrack, { backgroundColor: trackColor }]}>
            <Animated.View style={[styles.switchThumb, { left: thumbPosition }]} />
          </Animated.View>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};





export const createStyles = (currentTheme: "dark" | "light") =>
  StyleSheet.create({
  options: {    
    flexDirection:"row",
    alignItems: 'center',
    paddingVertical: 16,
    justifyContent: 'space-between',   
    borderBottomColor: '#2d2d2d',
  },

  left: {
    flexDirection:"row",
    alignItems:"center",
  },

  label: {
    color: theme[currentTheme].textPrimary,
    fontSize: 16,
    marginLeft:12,
  },

  themeButtonContainer: {
    flexDirection:"row",
    alignItems:"center",
  },

  button: {
    width: 70,
    height: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#f4f4f4',
    fontSize: 12,
    fontWeight: '600',
  },

  

  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textOn: {
    color: 'white',
  },
  textOff: {
    color: 'white',
  },

  switchTrack: {
  width: 60,
  height: 30,
  borderRadius: 20,
  justifyContent: "center",
},

switchThumb: {
  position: "absolute",
  width: 26,
  height: 26,
  borderRadius: 20,
  backgroundColor: "#fff",
},



});