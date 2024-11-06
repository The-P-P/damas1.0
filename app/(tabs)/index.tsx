import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
 

type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  return (
    <View style={styles.container}>
      {/* Espaço para a logo */}
      <Image
        source={require('../../assets/images/logo.png')}  // Substitua pelo caminho correto do seu logo
        style={styles.logo}
      />
      <Text style={styles.title}>FMJD</Text>
      <Text style={styles.subtitle}>Federação Maranhense de Jogos de Damas</Text>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="E-mail" keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Esqueceu a sua senha?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
      style={styles.loginButton}
      onPress={() => navigation.navigate('main')}
    >
      <Text style={styles.loginButtonText}>ENTRAR</Text>
    </TouchableOpacity>

      <Text style={styles.orText}>Entrar com</Text>

      <TouchableOpacity style={styles.socialButtonGoogle}>
        <Text style={styles.socialButtonText}>Entrar com o Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButtonFacebook}>
        <Text style={styles.socialButtonText}>Entrar com o Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButtonApple}>
        <Text style={styles.socialButtonText}>Entrar com a Apple</Text>
      </TouchableOpacity>

      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Não tem uma conta? </Text>
        <Button
        title="Registre-se!"
        onPress={() => {
          console.log('Botão de registro pressionado');
          navigation.navigate('explore');
        }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#001f54',  // Fundo azul escuro
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
    // Substitua o caminho da logo acima para exibir a imagem correta
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#FFFFFF',
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    width: '100%',
  },
  forgotPassword: {
    color: '#001f54',
    fontSize: 12,
    textAlign: 'right',
    width: '100%',
  },
  loginButton: {
    backgroundColor: '#00008B',  // Azul escuro
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginTop: 15,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  orText: {
    fontSize: 14,
    color: '#FFFFFF',
    marginVertical: 20,
  },
  socialButtonGoogle: {
    backgroundColor: '#DB4437',  // Cor do Google
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  socialButtonFacebook: {
    backgroundColor: '#4267B2',  // Cor do Facebook
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  socialButtonApple: {
    backgroundColor: '#333333',  // Cor da Apple (preto)
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  socialButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  registerContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  registerText: {
    color: '#FFFFFF',
  },
  registerLink: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
