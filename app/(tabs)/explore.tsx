import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const SignUpScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Crie sua conta!</Text>

      <View style={styles.inputContainer}>
        <MaterialIcons name="person" size={20} color="#9E9E9E" />
        <TextInput placeholder="Nome completo" style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons name="calendar-today" size={20} color="#9E9E9E" />
        <TextInput placeholder="Data de Nascimento" style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons name="email" size={20} color="#9E9E9E" />
        <TextInput placeholder="E-mail" style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons name="phone" size={20} color="#9E9E9E" />
        <TextInput placeholder="Telefone" style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons name="fingerprint" size={20} color="#9E9E9E" />
        <TextInput placeholder="CPF" style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons name="location-city" size={20} color="#9E9E9E" />
        <TextInput placeholder="Cidade Natal" style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons name="location-on" size={20} color="#9E9E9E" />
        <TextInput placeholder="Cidade de Residência" style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons name="lock" size={20} color="#9E9E9E" />
        <TextInput placeholder="Crie uma senha" style={styles.input} secureTextEntry />
        <MaterialIcons name="visibility" size={20} color="#9E9E9E" />
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons name="lock" size={20} color="#9E9E9E" />
        <TextInput placeholder="Confirme sua senha" style={styles.input} secureTextEntry />
        <MaterialIcons name="visibility" size={20} color="#9E9E9E" />
      </View>

      <Text style={styles.passwordCriteria}>
        *Sua nova senha deve conter:
        {"\n"}• De 8 a 15 caracteres;
        {"\n"}• Pelo menos 1 letra maiúscula;
        {"\n"}• Pelo menos 1 letra minúscula;
        {"\n"}• Pelo menos 1 número;
        {"\n"}• Pelo menos 1 símbolo/caractere especial;
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>CADASTRAR</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F8F8F8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 8,
    width: '100%',
    height: 50,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
  passwordCriteria: {
    fontSize: 12,
    color: '#B71C1C',
    marginVertical: 10,
    textAlign: 'left',
    width: '100%',
  },
  button: {
    backgroundColor: '#0D47A1',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SignUpScreen;
