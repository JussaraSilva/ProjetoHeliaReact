import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Calendar, DateData } from "react-native-calendars";
import { useContext, useState, useMemo} from "react";
import { theme } from "../../styles/themes";

import { ThemeContext } from '../../context/themeContext';
import {  ArrowFatRightIcon } from "phosphor-react-native";

interface ModalCalendarProps {
  visible: boolean;
  onClose: () => void;
  onNext: (dates: { start: string; end: string }) => void;
}

export default function ModalCalendar({ visible, onClose, onNext }: ModalCalendarProps) {
  const [start, setStart] = useState<string | null>(null);
  const [end, setEnd] = useState<string | null>(null);
  const [markedDates, setMarkedDates] = useState({});

  const { currentTheme } = useContext(ThemeContext) as {
      currentTheme: keyof typeof theme;
    };
  const styles = useMemo(() => createStyles(currentTheme), [currentTheme]);
  
  function handleDayPress(day: DateData) {
    // Se for a primeira seleção
    if (!start) {
      setStart(day.dateString);
      setEnd(null);
      setMarkedDates({
        [day.dateString]: {
          startingDay: true,
          color: theme[currentTheme].accent,
          textColor: theme[currentTheme].textPrimary,
        },
      });
      return;
    }

    // Se já tiver start mas não fim
    if (start && !end) {
      const range = getDateRange(start, day.dateString);
      const marks: any = {};

      range.forEach((d, i) => {
        marks[d] = {
          color: theme[currentTheme].accent,
          textColor: theme[currentTheme].textPrimary,
        };
        if (i === 0) marks[d].startingDay = true;
        if (i === range.length - 1) marks[d].endingDay = true;
      });

      setEnd(day.dateString);
      setMarkedDates(marks);
      return;
    }

    // Reiniciar seleção
    setStart(day.dateString);
    setEnd(null);
    setMarkedDates({
      [day.dateString]: {
        startingDay: true,
        color: theme[currentTheme].accent,
        textColor: theme[currentTheme].textPrimary,
      },
    });
  }

  function handleContinue() {
    if (!start || !end) {
      alert("Selecione o intervalo completo.");
      return;
    }
    onNext({ start, end });
  }

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View
        style={styles.containerAnimation}
      >
        <View
          style={styles.containerCalendar}
        >
          <Text style={styles.titleModal}>Select Date</Text>

          {/* 🔥 CALENDÁRIO ESTILOSO */}
          <Calendar
            style={styles.calendar}
            markingType="period"
            markedDates={markedDates}
            onDayPress={handleDayPress}
            minDate={new Date().toISOString().split("T")[0]}
            theme={{
              arrowColor: theme[currentTheme].background,
              monthTextColor: theme[currentTheme].textCalendar,
              textDayFontSize: 16,
              textDayFontWeight: "bold",
              textMonthFontSize: 20,
              textMonthFontWeight: "bold",
              textDayHeaderFontSize: 14,
            }}
          />

          {/* Datas escolhidas */}
          <View style={styles.datesContainer}>
            <View style={styles.containerStart}>
              <Text
                style={styles.datesText}>
                  Check-in: 
              </Text>
              <View style={styles.datesContainer}>
                <Text style={styles.dateStartText}>
                      {start || "-"}
                </Text>

              </View>
            </View>

            <View>
              <ArrowFatRightIcon 
              size={32} 
              color={theme[currentTheme].iconColor}
              weight="fill"
              />
            </View>
            
            <View style={styles.containerEnd}>
              <Text
                  style={styles.datesText}
                >Check-out: 
              </Text>
            <View style={styles.datesContainer}>
                <Text style={styles.dateEndText}>
                  {end || "-"}
                </Text>
                  
              </View>
            </View>
            
            
          </View>

          {/* Botões */}
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <TouchableOpacity onPress={onClose}
              style={styles.buttonCancel}
            >
              <Text style={styles.textButtonCancel}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleContinue}
              style={styles.buttonContinue}
            >
              <Text style={styles.textButtonContinue}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

// utilitário para gerar intervalo
function getDateRange(start: string, end: string) {
  const arr: string[] = [];
  let dt = new Date(start);
  const dtEnd = new Date(end);

  while (dt <= dtEnd) {
    arr.push(dt.toISOString().split("T")[0]);
    dt.setDate(dt.getDate() + 1);
  }

  return arr;
}


export const createStyles = (currentTheme: 'dark' | 'light') =>
  StyleSheet.create({
    containerAnimation: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.349)",
      justifyContent: "center",
      padding: 10,
    },

    containerCalendar: {
      backgroundColor: theme[currentTheme].background,
      borderRadius: 10,
      flexDirection: "column",
      gap: 20,
      padding: 20,

    },

    calendar: {
      borderRadius: 10,
      backgroundColor: theme[currentTheme].backgroundCalendar,
    },

    titleModal: {
      fontSize: 20,
      fontWeight: "bold",
      color: theme[currentTheme].textPrimary,
    },

    buttonCancel: {
      backgroundColor: theme[currentTheme].colorError,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },

    textButtonCancel: {
      color: theme[currentTheme].textPrimary,
      fontWeight: "bold",
    },

    buttonContinue: {
      backgroundColor: theme[currentTheme].colorComplet,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    textButtonContinue: {
      color: theme[currentTheme].textPrimary,
      fontWeight: "bold",
    },

    datesContainer: {
      flexDirection: "row",
      
      alignItems: "center",
      justifyContent: "space-between",
    },

    datesText: {
      color: theme[currentTheme].textPrimary,
      fontSize: 20,
      fontWeight: "bold",
    },

    containerStart: {
      flexDirection: "column",
      paddingHorizontal: 10,
      gap: 10,
    },

    containerEnd: {
      flexDirection: "column",
      gap: 10,
    }, 

    dateStartText: {
      color: theme[currentTheme].textPrimary,
      fontSize: 16,
      fontWeight: "bold",
    },

    dateEndText: {
      color: theme[currentTheme].textPrimary,
      fontSize: 16,
      fontWeight: "bold",
    },


    
  });