import { useContext } from "react";
import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity} from "react-native";

import { ThemeContext } from "../src/context/themeContext";
import { theme } from "../src/global/themes";
import { ScrollView } from "react-native";
import { Pressable } from "react-native";
import { BookmarkIcon, MagnifyingGlassIcon, SlidersHorizontalIcon, StarIcon } from "phosphor-react-native";
import { useRouter } from "expo-router";

import ButtonFilter from "../components/buttonFilter";


export default function Search() {

    

    const { currentTheme } = useContext(ThemeContext) as { currentTheme: keyof typeof theme };
    const styles = createStyles(currentTheme);

    const router = useRouter();

    function handleDetails() {
        router.navigate('/stacks/details');
    }

    const [activeFilter, setActiveFilter] = useState("All Hotels");
    const filters = ["All Hotels", "Recommended", "Popular", "Recent", "Favorites"];

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <MagnifyingGlassIcon
                    size={30}
                    color="#757575"
                    weight="duotone"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Busque uma casa aqui"
                    placeholderTextColor={"#757575"}
                />
                <SlidersHorizontalIcon
                    size={30}
                    color="#1ab65c"
                    weight="duotone"
                />
            </View>

            <ScrollView horizontal // Essencial
                        showsHorizontalScrollIndicator={false} // Para esconder a barra de rolagem (opcional)
                        contentContainerStyle={styles.filterContainer}>           
                                
                                {filters.map((label) => (
                                    <ButtonFilter 
                                        key={label}
                                        label={label}                     
                                        isActive={activeFilter === label}            
                                    onPress={() => setActiveFilter(label)} 
                />
            ))}
                                
            </ScrollView>

            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={true}
                indicatorStyle="black"
                bounces={true}
                overScrollMode="always"
            >
                <View style={styles.content}>
                    {/* As views dos cards de hotéis foram duplicadas apenas para exemplificar a rolagem da tela. */}

                    <View style={styles.card}>
                        <Pressable onPress={handleDetails}
                            style={styles.cardButton}>
                            <Image style={styles.cardImage}
                                source={require("../src/assets/hotel.png")}
                            />
                            <View style={styles.cardInfo}>
                                <View style={styles.cardInfoTop}>
                                    <Text style={styles.cardInfoTitle}>Hotel Nova Vista</Text>
                                    <Text style={styles.cardInfoSubTitle}>Posse, Goiás</Text>
                                </View>
                                <View style={styles.cardInfoBottom}>
                                    <View style={styles.cardInfoRate}>
                                        <StarIcon
                                            color={theme[currentTheme].starColor}
                                            size={16}
                                            weight="fill"
                                        />
                                        <Text style={styles.cardInfoRateText}>
                                            4.8 (200 avaliações)
                                        </Text>

                                    </View>
                                </View>

                            </View>
                        </Pressable>

                        <View style={styles.cardInfoBuy}>
                            <Text style={styles.cardInfoBuyText}>R$ 450,00</Text>
                            <BookmarkIcon
                                size={32}
                                color="#f4f4f4"
                                weight="fill"
                            />
                        </View>
                    </View>

                    <View style={styles.card}>
                        <Pressable onPress={handleDetails}
                            style={styles.cardButton}>
                            <Image style={styles.cardImage}
                                source={require("../src/assets/hotel.png")}
                            />
                            <View style={styles.cardInfo}>
                                <View style={styles.cardInfoTop}>
                                    <Text style={styles.cardInfoTitle}>Hotel Nova Vista</Text>
                                    <Text style={styles.cardInfoSubTitle}>Posse, Goiás</Text>
                                </View>
                                <View style={styles.cardInfoBottom}>
                                    <View style={styles.cardInfoRate}>
                                        <StarIcon
                                            color={theme[currentTheme].starColor}
                                            size={16}
                                            weight="fill"
                                        />
                                        <Text style={styles.cardInfoRateText}>
                                            4.8 (200 avaliações)
                                        </Text>

                                    </View>
                                </View>

                            </View>
                        </Pressable>

                        <View style={styles.cardInfoBuy}>
                            <Text style={styles.cardInfoBuyText}>R$ 450,00</Text>
                            <BookmarkIcon
                                size={32}
                                color="#f4f4f4"
                                weight="fill"
                            />
                        </View>
                    </View>

                    <View style={styles.card}>
                        <Pressable onPress={handleDetails}
                            style={styles.cardButton}>
                            <Image style={styles.cardImage}
                                source={require("../src/assets/hotel.png")}
                            />
                            <View style={styles.cardInfo}>
                                <View style={styles.cardInfoTop}>
                                    <Text style={styles.cardInfoTitle}>Hotel Nova Vista</Text>
                                    <Text style={styles.cardInfoSubTitle}>Posse, Goiás</Text>
                                </View>
                                <View style={styles.cardInfoBottom}>
                                    <View style={styles.cardInfoRate}>
                                        <StarIcon
                                            color={theme[currentTheme].starColor}
                                            size={16}
                                            weight="fill"
                                        />
                                        <Text style={styles.cardInfoRateText}>
                                            4.8 (200 avaliações)
                                        </Text>

                                    </View>
                                </View>

                            </View>
                        </Pressable>

                        <View style={styles.cardInfoBuy}>
                            <Text style={styles.cardInfoBuyText}>R$ 450,00</Text>
                            <BookmarkIcon
                                size={32}
                                color="#f4f4f4"
                                weight="fill"
                            />
                        </View>
                    </View>

                    <View style={styles.card}>
                        <Pressable onPress={handleDetails}
                            style={styles.cardButton}>
                            <Image style={styles.cardImage}
                                source={require("../src/assets/hotel.png")}
                            />
                            <View style={styles.cardInfo}>
                                <View style={styles.cardInfoTop}>
                                    <Text style={styles.cardInfoTitle}>Hotel Nova Vista</Text>
                                    <Text style={styles.cardInfoSubTitle}>Posse, Goiás</Text>
                                </View>
                                <View style={styles.cardInfoBottom}>
                                    <View style={styles.cardInfoRate}>
                                        <StarIcon
                                            color={theme[currentTheme].starColor}
                                            size={16}
                                            weight="fill"
                                        />
                                        <Text style={styles.cardInfoRateText}>
                                            4.8 (200 avaliações)
                                        </Text>

                                    </View>
                                </View>

                            </View>
                        </Pressable>

                        <View style={styles.cardInfoBuy}>
                            <Text style={styles.cardInfoBuyText}>R$ 450,00</Text>
                            <BookmarkIcon
                                size={32}
                                color="#f4f4f4"
                                weight="fill"
                            />
                        </View>
                    </View>

                    <View style={styles.card}>
                        <Pressable onPress={handleDetails}
                            style={styles.cardButton}>
                            <Image style={styles.cardImage}
                                source={require("../src/assets/hotel.png")}
                            />
                            <View style={styles.cardInfo}>
                                <View style={styles.cardInfoTop}>
                                    <Text style={styles.cardInfoTitle}>Hotel Nova Vista</Text>
                                    <Text style={styles.cardInfoSubTitle}>Posse, Goiás</Text>
                                </View>
                                <View style={styles.cardInfoBottom}>
                                    <View style={styles.cardInfoRate}>
                                        <StarIcon
                                            color={theme[currentTheme].starColor}
                                            size={16}
                                            weight="fill"
                                        />
                                        <Text style={styles.cardInfoRateText}>
                                            4.8 (200 avaliações)
                                        </Text>

                                    </View>
                                </View>

                            </View>
                        </Pressable>

                        <View style={styles.cardInfoBuy}>
                            <Text style={styles.cardInfoBuyText}>R$ 450,00</Text>
                            <BookmarkIcon
                                size={32}
                                color="#f4f4f4"
                                weight="fill"
                            />
                        </View>
                    </View>


                </View>

            </ScrollView>
        </View>
    );
}


export const createStyles = (currentTheme: "dark" | "light") =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme[currentTheme].background,
            gap: 10,
            paddingHorizontal: 20,
        },
        inputContainer: {
            height: 56,
            backgroundColor: theme[currentTheme].input,
            borderRadius: 12,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 30,
            gap: 10,
            marginTop: 40,
            
        },

        input: {
            flex: 1,
            color: theme[currentTheme].textPrimary,
        },

        content: {
            marginRight: 28,
            width: "100%",
            gap: 20,
        },

        filterContainer: {
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",               
            gap: 10,
            height: 70,
            
            alignItems: "center",
            
            
        },

        scrollView: {
            height: "100%",
            marginTop: 10,
            
        },

        scrollContent: {
            width: "100%",
            gap: 20,
        },

        

        card: {
            width: "100%",
            height: 120,
            backgroundColor: theme[currentTheme].card,
            borderRadius: 12,
            alignItems: "center",
            flexDirection: "row",
            paddingHorizontal: 10,
            justifyContent: "space-between",
        },

        cardButton: {
            alignItems: "flex-start",
            flexDirection: "row",
            gap: 10,
        },

        cardImage: {
            width: 90,
            height: 90,
            borderRadius: 12,
        },

        cardInfo: {
            height: "100%",
            gap: 10,
        },

        cardInfoTop: {
            justifyContent: "center",
            gap: 4,
        },

        cardInfoBottom: {
            justifyContent: "center",
        },

        cardInfoRate: {
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
        },

        cardInfoRateText: {
            color: theme[currentTheme].textPrimary,
            fontSize: 14,
            fontWeight: "500",
        },

        cardInfoTitle: {
            color: theme[currentTheme].textPrimary,
            fontSize: 16,
            fontWeight: "400",
        },

        cardInfoSubTitle: {
            color: theme[currentTheme].textSecondary,
            fontSize: 14,
            fontWeight: "300",
        },

        cardInfoBuy: {
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            gap: 30,
        },

        cardInfoBuyText: {
            color: theme[currentTheme].accent,
            fontSize: 18,
            fontWeight: "900",
        },
    });