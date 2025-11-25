import { BellIcon, ChatsTeardropIcon, CreditCardIcon, DotsThreeCircleIcon, InfoIcon, PaintBucketIcon, PencilSimpleIcon, ShieldCheckIcon, SignOutIcon, } from "phosphor-react-native";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ProfileOptions from "../../src/components/profileOptions";
import { theme } from "../../src/styles/themes";
import { useContext } from "react";
import { ThemeContext } from "../../src/context/themeContext";



export default function Profile() {
    const { currentTheme } = useContext(ThemeContext);

    if (!currentTheme) return null;

    const styles = createStyles(currentTheme);
    
    
    return (
        <View style={styles.container}>
            <View style={styles.headerProfile}>
                <View style={styles.header}>
                    <View style={styles.headerLogo}>
                        <ChatsTeardropIcon size={32} color={theme[currentTheme].accent} weight='duotone'/>
                        <Text style={styles.headerText}>Perfil</Text>
                    </View>
                    
                    <TouchableOpacity>
                        <DotsThreeCircleIcon size={32} color={theme[currentTheme].iconColor} weight='thin'/>
                    </TouchableOpacity>
                </View>
                <View style={styles.profileContainer}>
                    <View>
                        <Image
                            source={{uri:'https://images.unsplash.com/photo-1688888745596-da40843a8d45?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
                            style = {styles.avatar}
                        />
                        <TouchableOpacity style = {styles.buttonEditarFoto}>
                            <PencilSimpleIcon size={16} color='#f4f4f4' weight='duotone'/>
                        </TouchableOpacity>
                            
                    </View>
                    <Text style={styles.headerNameUser}>
                        Thiago Augusto
                    </Text>
                    <Text style={styles.headerEmailUser}>
                        7K7mP@example.com
                    </Text>
                </View>
                <ScrollView contentContainerStyle={styles.optionsContainer}
                showsVerticalScrollIndicator={false}
                >

                    <ProfileOptions icon={
                        <PencilSimpleIcon 
                            size={24} 
                            color={theme[currentTheme].iconColor}
                            weight='bold'/>} 
                        label="Edit Profile" 
                    
                    />

                    <ProfileOptions icon={
                        <CreditCardIcon 
                            size={24} 
                            color={theme[currentTheme].iconColor} 
                            weight='bold'/>} 
                        label="Payments" 
                    
                    />

                    <ProfileOptions icon={
                        <BellIcon 
                            size={24} 
                            color={theme[currentTheme].iconColor} 
                            weight='bold'/>} 
                        label="Notifications" 
                    
                    />

                    <ProfileOptions icon={
                        <ShieldCheckIcon 
                            size={24} 
                            color={theme[currentTheme].iconColor} 
                            weight='bold'/>} 
                        label="Security" 
                    
                    />

                    <ProfileOptions icon={
                        <PaintBucketIcon 
                            size={24} 
                            color={theme[currentTheme].iconColor} 
                            weight='bold'/>} 
                        label="Change Theme" 
                    isToggle                      
                    />

                    <ProfileOptions icon={
                        <InfoIcon 
                            size={24} 
                            color={theme[currentTheme].iconColor} 
                            weight='bold'/>} 
                        label="Help" 
                    
                    />
                        <TouchableOpacity style={styles.signOutButton} 
                            onPress={() => {}}
                        >
                            <SignOutIcon
                                size={20}
                                color="red"
                            />
                            <Text style={styles.optionLabelSignOut}>
                                Sign Out
                            </Text>
                        </TouchableOpacity>

                </ScrollView>
            </View>
        </View>
    );
}


export const createStyles = (currentTheme: "dark" | "light") =>
  StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: theme[currentTheme].background,
        
    },

    
    headerProfile: {
        marginTop:30,
        flex:1,

    },
    
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: theme[currentTheme].textPrimary,
    },
    header: {
        flexDirection: 'row',
        width:"100%",
        justifyContent: 'space-between',
        gap: 10,
        paddingHorizontal:20,
    },

    headerLogo: {
        flexDirection:"row",
        alignItems: 'center',
        gap: 10,
        
    },

    profileContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        marginTop:24,
        paddingBottom:20,
        borderBottomWidth: 1,
        borderBottomColor: theme[currentTheme].borderBottomColor,
        width:"100%",
        paddingHorizontal:20,
    },

    avatar: {
        width: 96,
        height: 96,
        borderRadius: 50,
    },

    headerNameUser: {
        fontSize: 20,
        fontWeight: 'bold',
        color: theme[currentTheme].textPrimary,
        marginTop: 12,
    },

    headerEmailUser: {
        fontSize: 16,
        color: theme[currentTheme].colorGray,
    },

    buttonEditarFoto: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 32,
        height: 32,
        borderRadius: 50,
        backgroundColor: '#1AB65C',
        alignItems: 'center',
        justifyContent: 'center',
    },

    optionsContainer: {
        marginTop:20,
        paddingHorizontal:20,
        gap: 10,
    },

    signOutButton: {
        paddingTop:20,
        flexDirection: 'row',
        alignItems: 'center',
        gap:10,
    },

    optionLabelSignOut: {
        color: "red",
        fontSize: 16,
        fontWeight: 'bold',
    },





    
});