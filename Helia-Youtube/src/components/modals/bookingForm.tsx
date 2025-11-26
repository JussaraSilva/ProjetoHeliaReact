import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useMemo, useState, useContext } from "react";
import { theme } from "../../styles/themes";
import { ThemeContext } from "../../context/themeContext";

interface BookingFormsProps {
  visible: boolean;
  onClose: () => void;
  onNext: (info: {
    tenantName: string;
    tenantPhone: string;
    guests: number;
    notes: string;
  }) => void;
}

export default function BookingForms({
  visible,
  onClose,
  onNext,
}: BookingFormsProps) {
  const { currentTheme } = useContext(ThemeContext) as {
    currentTheme: keyof typeof theme;
  };

  const styles = useMemo(() => createStyles(currentTheme), [currentTheme]);

  const [tenantName, setTenantName] = useState("");
  const [tenantPhone, setTenantPhone] = useState("");
  const [guests, setGuests] = useState("1");
  const [notes, setNotes] = useState("");

  function handleContinue() {
    if (!tenantName.trim() || !tenantPhone.trim()) {
      alert("Preencha nome e telefone.");
      return;
    }

    onNext({
      tenantName,
      tenantPhone,
      guests: Number(guests),
      notes,
    });
  }

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.modalBackground}>
        <View style={styles.modalBox}>
          <Text style={styles.modalTitle}>Informações da Reserva</Text>

          <Text style={styles.label}>Nome Completo</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            placeholderTextColor={theme[currentTheme].textSecondary}
            value={tenantName}
            onChangeText={setTenantName}
          />

          <Text style={styles.label}>Telefone</Text>
          <TextInput
            style={styles.input}
            placeholder="(00) 00000-0000"
            placeholderTextColor={theme[currentTheme].textSecondary}
            keyboardType="phone-pad"
            value={tenantPhone}
            onChangeText={setTenantPhone}
          />

          <Text style={styles.label}>Hóspedes</Text>
          <TextInput
            style={styles.input}
            placeholder="Número de pessoas"
            placeholderTextColor={theme[currentTheme].textSecondary}
            keyboardType="numeric"
            value={guests}
            onChangeText={setGuests}
          />

          <Text style={styles.label}>Observações</Text>
          <TextInput
            style={[styles.input, { height: 80 }]}
            placeholder="Ex: Prefiro andar alto, tenho pet, etc."
            placeholderTextColor={theme[currentTheme].textSecondary}
            value={notes}
            onChangeText={setNotes}
            multiline
          />

          <View style={styles.buttonsRow}>
            <TouchableOpacity style={styles.cancelBtn} onPress={onClose}>
              <Text style={styles.cancelText}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.nextBtn} onPress={handleContinue}>
              <Text style={styles.nextText}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const createStyles = (currentTheme: "dark" | "light") =>
  StyleSheet.create({
    modalBackground: {
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.4)",
      justifyContent: "center",
      padding: 15,
    },

    modalBox: {
      backgroundColor: theme[currentTheme].background,
      borderRadius: 10,
      padding: 20,
      gap: 12,
    },

    modalTitle: {
      fontSize: 20,
      fontWeight: "bold",
      color: theme[currentTheme].textPrimary,
      marginBottom: 10,
    },

    label: {
      fontSize: 16,
      fontWeight: "bold",
      color: theme[currentTheme].textPrimary,
    },

    input: {
      borderColor: theme[currentTheme].textSecondary,
      borderWidth: 1,
      borderRadius: 6,
      padding: 10,
      color: theme[currentTheme].textPrimary,
    },

    buttonsRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 10,
    },

    cancelBtn: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: theme[currentTheme].colorError,
      borderRadius: 5,
    },

    cancelText: {
      color: theme[currentTheme].textPrimary,
      fontWeight: "bold",
    },

    nextBtn: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: theme[currentTheme].colorComplet,
      borderRadius: 5,
    },

    nextText: {
      color: theme[currentTheme].textPrimary,
      fontWeight: "bold",
    },
  });
