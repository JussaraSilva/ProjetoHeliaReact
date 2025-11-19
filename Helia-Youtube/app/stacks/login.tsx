
import { useRouter } from 'expo-router';
import {
  AppleLogoIcon,
  ArrowLeftIcon,
  ChatsTeardropIcon,
  EnvelopeSimpleIcon,
  FacebookLogoIcon,
  GoogleLogoIcon,
  LockKeyIcon,
} from 'phosphor-react-native';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ScrollView,
} from 'react-native';

// Obtém as dimensões atuais da tela
const { width} = Dimensions.get('window');

// Função para calcular tamanhos responsivos baseados na LARGURA
// Usado principalmente para fontSize, iconSize e padding/margins HORIZONTAIS
interface IResponsiveSize {
    (size: number): number;
}

const guidelineBaseWidth = 375; // Largura de referência (ex: iPhone 8)

const responsiveSize: IResponsiveSize = (size: number): number => {
    return (size * width) / guidelineBaseWidth;
};

export default function Login() {

    {/* Função atribuida a setinha de voltar */}
    const router = useRouter();

    function handleHome() {
        router.navigate('/tabs/home');
    }

  return (
    
    <View style={styles.container}>
      {/* Header: Botão de Voltar fora da área de scroll */}
      <TouchableOpacity style={styles.header}>
        <ArrowLeftIcon
          size={responsiveSize(28)}
          color='#f4f4f4'
          weight='regular'
        />
      </TouchableOpacity>

      <ScrollView
        contentContainerStyle={styles.scrollContent} 
        showsVerticalScrollIndicator={false} // Opcional: esconde 
        keyboardShouldPersistTaps='handled'
      >
        {/* Cabeçalho de Boas-Vindas */}
        <View style={styles.welcomeHeader}>
          <ChatsTeardropIcon
            size={responsiveSize(62)}
            color='#1ab55c' // Cor alterada para dar destaque
            weight='fill'
          />
          <Text style={styles.welcomeText}>Faça login para continuar</Text>
        </View>

        {/* Área de Inputs */}
        <View style={styles.content}>
          {/* Input E-mail */}
          <View style={styles.contentInput}>
            <EnvelopeSimpleIcon
              size={responsiveSize(24)} // Tamanho ajustado
              color='#757575'
              weight='fill'
            />
            <TextInput
              style={styles.input}
              placeholder='Digite seu e-mail'
              placeholderTextColor='#757575'
              keyboardType='email-address'
              autoCapitalize='none'
            />
          </View>

          {/* Input Senha */}
          <View style={styles.contentInput}>
            <LockKeyIcon
              size={responsiveSize(24)} // Tamanho ajustado
              color='#757575'
              weight='fill'
            />
            <TextInput
              style={styles.input}
              placeholder='Digite sua Senha'
              placeholderTextColor='#757575'
              secureTextEntry
            />
          </View>
        </View>

        {/* Botão de Entrar */}
        <TouchableOpacity 
        onPress={handleHome}
        style={styles.buttonSignIn}>
          <Text style={styles.buttonSignInText}>Entrar</Text>
        </TouchableOpacity>

        {/* Separador */}
        <View style={styles.containerSeparator}>
          <View style={styles.separatorLine} />
          <Text style={styles.separatorText}>ou continue com:</Text>
          <View style={styles.separatorLine} />
        </View>

        {/* Botões Sociais */}
        <View style={styles.footer}>
          {/* Google */}
          <TouchableOpacity style={styles.footerButton}>
            <GoogleLogoIcon
              size={responsiveSize(28)}
              weight='bold'
              color='#e94134'
            />
          </TouchableOpacity>

          {/* Facebook */}
          <TouchableOpacity style={styles.footerButton}>
            <FacebookLogoIcon
              size={responsiveSize(28)}
              weight='bold'
              color='#3b5998'
            />
          </TouchableOpacity>

          {/* Apple */}
          <TouchableOpacity style={styles.footerButton}>
            <AppleLogoIcon
              size={responsiveSize(28)}
              weight='fill'
              color='#fff'
            />
          </TouchableOpacity>
        </View>

        {/* Link de Cadastro */}
        <View style={styles.footerText}>
          <View style={styles.footerTextLink}>
            <Text style={styles.footerQuestionLink}>Não possui uma conta?</Text>
            <TouchableOpacity>
              <Text style={styles.footerButtonSignInText}>Inscreva-se</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

// -----------------------------------------------------

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181A20',
    
  },

  
  scrollContent: {
    paddingTop: responsiveSize(10),
    paddingBottom: responsiveSize(30),
    paddingHorizontal: responsiveSize(20),
    alignItems: 'center', 
    flexGrow: 1, 
    justifyContent: 'space-around', 
  },

  header: {
    alignSelf: 'flex-start',
    marginTop: responsiveSize(40),
    padding: responsiveSize(10),
    paddingHorizontal: responsiveSize(20),
    width: '100%',
  },

  welcomeHeader: {
    alignItems: 'center',
    marginTop: responsiveSize(30), // Reduzido ligeiramente
    padding: responsiveSize(20),
    gap: responsiveSize(20),
    width: '100%',
  },

  welcomeText: {
    color: '#f4f4f4',
    fontSize: responsiveSize(24),
    fontWeight: '600',
    textAlign: 'center',
    maxWidth: '90%',
  },

  content: {
    marginTop: responsiveSize(30), // Reduzido ligeiramente
    width: '100%',
    gap: responsiveSize(20),
    alignItems: 'center',
  },

  contentInput: {
    width: '100%',
    height: responsiveSize(56),
    backgroundColor: '#1f222a',
    borderRadius: responsiveSize(12),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: responsiveSize(20),
    gap: responsiveSize(10),
  },

  input: {
    flex: 1,
    color: '#f4f4f4', 
    fontSize: responsiveSize(16),
    paddingVertical: responsiveSize(8),
  },

  buttonSignIn: {
    backgroundColor: '#1ab55c',
    width: '100%',
    height: responsiveSize(56),
    borderRadius: responsiveSize(36),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveSize(40),
    maxWidth: responsiveSize(350),
  },

  buttonSignInText: {
    color: '#f4f4f4',
    fontSize: responsiveSize(16),
    fontWeight: '800',
  },

  containerSeparator: {
    width: '100%',
    marginTop: responsiveSize(40), // Reduzido ligeiramente
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: responsiveSize(10),
    maxWidth: responsiveSize(350),
  },

  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#757575',
  },

  separatorText: {
    color: '#f4f4f4',
    fontSize: responsiveSize(14),
    fontWeight: '400',
    marginHorizontal: responsiveSize(10),
    textAlign: 'center',
  },

  footer: {
    flexDirection: 'row',
    marginTop: responsiveSize(40), // Reduzido ligeiramente
    gap: responsiveSize(15),
    justifyContent: 'center',
    width: '100%',
    flexWrap: 'wrap',
  },

  footerButton: {
    width: responsiveSize(80),
    height: responsiveSize(60),
    backgroundColor: '#1f222a',
    borderRadius: responsiveSize(12),
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: responsiveSize(70),
  },

  footerText: {
    marginTop: responsiveSize(40),
  },

  footerTextLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveSize(5),
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  footerQuestionLink: {
    color: '#f4f4f4',
    fontSize: responsiveSize(14),
    fontWeight: '400',
  },

  footerButtonSignInText: {
    color: '#1ab55c',
    fontWeight: '600',
    textDecorationLine: 'underline',
    fontSize: responsiveSize(14),
  },
});
