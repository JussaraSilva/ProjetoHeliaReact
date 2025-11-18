import { Text, View, StyleSheet, TextInput, Pressable, Image} from "react-native";

import { StatusBar } from "expo-status-bar";

import {
  BellRingingIcon,
  BookmarkIcon,
  ChatsTeardropIcon,
  MagnifyingGlassIcon,
  SlidersHorizontalIcon,
  StarIcon,
} from "phosphor-react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <ChatsTeardropIcon 
            size={30} 
            color="#1ab65c" 
            weight="duotone" 
          />
          <Text style={styles.headerLeftText}>
            Helia
          </Text>
        </View>
        <View style={styles.headerRight}>
            <BellRingingIcon 
              size={32} 
              color="#f4f4f4" 
              weight="duotone" 
            />
            <BookmarkIcon 
              size={32} 
              color="#f4f4f4" 
              weight="duotone" 
            />
        </View>
      </View>

      <Text style={styles.userName}>Olá, Rodrigo!</Text>

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

      <View style={styles.content}>
          <View style={styles.card}>
          <Pressable style={styles.cardButton}>
            <Image style={styles.cardImage}
              source={require("./src/assets/hotel.png")}
            />
            <View style={styles.cardInfo}>
              <View style= {styles.cardInfoTop}>
                <Text style={styles.cardInfoTitle}>Hotel Nova Vista</Text>
                <Text style={styles.cardInfoSubTitle}>Posse, Goiás</Text>
              </View>
              <View style= {styles.cardInfoBottom}>
                <View style={styles.cardInfoRate}>
                  <StarIcon 
                    color="#FFFF00"
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
          <Pressable style={styles.cardButton}>
            <Image style={styles.cardImage}
              source={require("./src/assets/hotel.png")}
            />
            <View style={styles.cardInfo}>
              <View style= {styles.cardInfoTop}>
                <Text style={styles.cardInfoTitle}>Hotel Nova Vista</Text>
                <Text style={styles.cardInfoSubTitle}>Posse, Goiás</Text>
              </View>
              <View style= {styles.cardInfoBottom}>
                <View style={styles.cardInfoRate}>
                  <StarIcon 
                    color="#FFFF00"
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
          <Pressable style={styles.cardButton}>
            <Image style={styles.cardImage}
              source={require("./src/assets/hotel.png")}
            />
            <View style={styles.cardInfo}>
              <View style= {styles.cardInfoTop}>
                <Text style={styles.cardInfoTitle}>Hotel Nova Vista</Text>
                <Text style={styles.cardInfoSubTitle}>Posse, Goiás</Text>
              </View>
              <View style= {styles.cardInfoBottom}>
                <View style={styles.cardInfoRate}>
                  <StarIcon 
                    color="#FFFF00"
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
          <Pressable style={styles.cardButton}>
            <Image style={styles.cardImage}
              source={require("./src/assets/hotel.png")}
            />
            <View style={styles.cardInfo}>
              <View style= {styles.cardInfoTop}>
                <Text style={styles.cardInfoTitle}>Hotel Nova Vista</Text>
                <Text style={styles.cardInfoSubTitle}>Posse, Goiás</Text>
              </View>
              <View style= {styles.cardInfoBottom}>
                <View style={styles.cardInfoRate}>
                  <StarIcon 
                    color="#FFFF00"
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
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181a20",
    paddingHorizontal: 28,
  },

  header: {
    marginTop: 80,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerLeftText: {
    color: "#f4f4f4",
    fontSize: 24,
    fontWeight: "800",
  },

  userName: {
    paddingTop: 30,
    paddingBottom: 30,
    color: "#f4f4f4",
    fontSize: 25,
    fontWeight: "800",
  },

  inputContainer: {
    width: "100%",
    height: 56,
    backgroundColor: "#1f222a",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 10,
    marginBottom: 20,
  },

  input: {
    flex: 1,
    color: "#f4f4f4",
  },

  content: {
    width: "100%",
    gap: 20,
  },

  card: {
    width: "100%",
    height: 120,
    backgroundColor: "#1f222a",
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
    color: "#f4f4f4",
    fontSize: 14,
    fontWeight: "500",
  },

  cardInfoTitle: {
    color: "#f4f4f4",
    fontSize: 16,
    fontWeight: "400",
    
  },

  cardInfoSubTitle: {
    color: "#757575",
    fontSize: 14,
    fontWeight: "300",
  },

  cardInfoBuy: {
    height: "100%",
    alignItems: "flex-end",
    justifyContent: "center",
    gap: 30,
    
  },

  cardInfoBuyText: {
    color: "#1ab65c",
    fontSize: 18,
    fontWeight: "900",
  },


});
