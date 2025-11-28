
import { useContext } from "react";
import {  StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { ThemeContext } from "../context/themeContext";
import { theme } from "../styles/themes";

type CardsBookingDetailsProps = {
  startDate: string;
  endDate: string;
  tenantName: string;
  tenantPhone: string;
  guests: string;
  notes?: string;
  paymentMethod: string;
  status: string;
  onCancel?: () => void;
  onEdit?: () => void;
};


export default function CardsBookingDetails({
  startDate,
  endDate,
  tenantName,
  tenantPhone,
  guests,
  notes,
  paymentMethod,
  status,
  onCancel,
  onEdit,
}: CardsBookingDetailsProps) {
  





  const { currentTheme } = useContext(ThemeContext);
    const styles = createStyles(currentTheme);

  
  const getStatusColor = () => {
    switch (status) {
      case 'Confirmado': return '#4CAF50';
      case 'Pendente': return '#FF9800';
      case 'Cancelado': return '#F44336';
      default: return '#757575';
    }
  };

  function DetailRow({ icon, label, value }: { icon: string, label: string, value: string }) {
  return (
    <View style={styles.detailRow}>
      <Text style={styles.detailLabel}>{label}:</Text>
      <Text style={styles.detailValue}>{value}</Text>
    </View>
  );
}

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Detalhes da Reserva</Text>
        <View style={[styles.statusBadge, { backgroundColor: getStatusColor() }]}>
          <Text style={styles.statusText}>{status}</Text>
        </View>
      </View>

      <View style={styles.details}>
        <DetailRow icon="calendar" label="Check-in" value={formatDate(startDate)} />
        <DetailRow icon="calendar" label="Check-out" value={formatDate(endDate)} />
        <DetailRow icon="users" label="Hóspedes" value={guests} />
        <DetailRow icon="user" label="Responsável" value={tenantName} />
        <DetailRow icon="phone" label="Telefone" value={tenantPhone} />
        <DetailRow icon="credit-card" label="Pagamento" value={paymentMethod} />
        
        {notes && (
          <DetailRow icon="file-text" label="Observações" value={notes} />
        )}
      </View>

      {/* Ações */}
      <View style={styles.actions}>
        <TouchableOpacity  
            onPress={onCancel}
            style={styles.cancelButton}>
          <Text>Cancelar Reserva</Text>
        </TouchableOpacity>
        <TouchableOpacity  
          onPress={onEdit}
          style={styles.editButton}>
          <Text>Editar Reserva</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


// Componente auxiliar para linhas de detalhe



export const createStyles = (currentTheme: "dark" | "light") =>
  StyleSheet.create({
    container: {
      backgroundColor: theme[currentTheme].background,
      borderRadius: 8,
      padding: 16,
      marginBottom: 16,
    },

    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 16,
    },

    title: {
      fontSize: 18,
      fontWeight: "bold",
      color: theme[currentTheme].textPrimary,
    },

    statusBadge: {
      

    },

    statusText: {
      fontSize: 14,
      fontWeight: "bold",
      color: theme[currentTheme].textPrimary,
    },

    details: {
      
    },

    detailRow: {
      flexDirection: "row",
      marginBottom: 8,
    },

    detailLabel: {
      fontSize: 14,
      fontWeight: "bold",
      color: theme[currentTheme].textPrimary,
    },

    detailValue: {
      fontSize: 14,
      color: theme[currentTheme].textSecondary,
    },

    actions: {
      flexDirection: "row",
      justifyContent: "flex-end",
      marginTop: 16,
    },

    cancelButton: {
      marginRight: 8,
    },

    editButton: {
      
    },



  });