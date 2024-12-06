import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
} from 'react-native';
import {styles } from './style.js';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';

const Pokeapi = () => {
  const [targetPokemon, setTargetPokemon] = useState(null);
  const [input, setInput] = useState('');
  const [hints, setHints] = useState([]);
  const [attempts, setAttempts] = useState([]);
  const [victory, setVictory] = useState(false);
  const [score, setScore] = useState(1000); // Pontuação inicial
  const [previousPokemon, setPreviousPokemon] = useState(null); // Pokémon anterior
  const [highestScore, setHighestScore] = useState(0); // Maior pontuação

  const navigation = useNavigation();

  const sair = () => {
    navigation.goBack();
  }


  // Inicia o jogo com um Pokémon aleatório
  const startGame = async () => {
    const randomId = Math.floor(Math.random() * 151) + 1; // Primeira geração
    const response = await api.get(`/pokemon/${randomId}`);
    setTargetPokemon(response.data);
    setHints([]);
    setAttempts([]);
    setVictory(false);
    setScore(1000); // Reinicia a pontuação
  };

  useEffect(() => {
    startGame();
  }, []);

  // Gera dicas com base no Pokémon adivinhado
  const generateHints = (guessedPokemon) => {
    const newHints = [];

    // Tipo
    if (
      guessedPokemon.types.some((type) =>
        targetPokemon.types.map((t) => t.type.name).includes(type.type.name)
      )
    ) {
      newHints.push({ text: 'Tipo em comum!', color: 'green' });
    } else {
      newHints.push({ text: 'Tipo diferente.', color: 'yellow' });
    }

    // Altura
    if (guessedPokemon.height === targetPokemon.height) {
      newHints.push({ text: 'Altura igual!', color: 'green' });
    } else if (guessedPokemon.height < targetPokemon.height) {
      newHints.push({ text: 'Altura maior!', color: 'yellow' });
    } else {
      newHints.push({ text: 'Altura menor!', color: 'yellow' });
    }

    // Peso
    if (guessedPokemon.weight === targetPokemon.weight) {
      newHints.push({ text: 'Peso igual!', color: 'green' });
    } else if (guessedPokemon.weight < targetPokemon.weight) {
      newHints.push({ text: 'Peso maior!', color: 'yellow' });
    } else {
      newHints.push({ text: 'Peso menor!', color: 'yellow' });
    }

    return newHints;
  };

  const calculateScore = () => {
    const newScore = Math.max(960 - (attempts.length - 1) * 20, 0); 
    setScore(newScore);

    if (newScore > highestScore) {
      setHighestScore(newScore);
    }
  };

  const checkGuess = async () => {
    try {
      const response = await api.get(`/pokemon/${input.toLowerCase()}`);
      const guessedPokemon = response.data;

      if (guessedPokemon.name === targetPokemon.name) {
        setVictory(true);
        alert(`Parabéns! Você acertou o Pokémon! Pontuação final: ${score}`);
        setPreviousPokemon(targetPokemon); 
        setTimeout(() => startGame(), 3000); // Reinicia o jogo após 3 segundos
      } else {
        const newHints = generateHints(guessedPokemon);
        setHints(newHints);
        setAttempts([...attempts, guessedPokemon]);
        calculateScore(); 
      }
      setInput('');
      Keyboard.dismiss();
    } catch (error) {
      alert('Pokémon não encontrado! Verifique a ortografia.');
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <ImageBackground
        source={{
          uri: 'https://i.pinimg.com/564x/8d/59/3b/8d593bce501e09ff72545f8342cf797c.jpg',
        }}
        style={styles.backgroundImage}>
        <View style={styles.overlay} />

        <View style={styles.main}>
          {/* Exibir Pokémon anterior e maior pontuação no canto superior */}
          <View style={styles.topInfo}>
            {previousPokemon && (
              <Text style={{ color: 'white', fontSize: 16 }}>
                Pokémon Anterior: {previousPokemon.name}
              </Text>
            )}
            <Text style={{ color: 'white', fontSize: 16 }}>
              Maior Pontuação: {highestScore}
            </Text>
          </View>

          <Text style={styles.titulo}>Adivinhe o Pokémon</Text>

          <Text style={styles.score}>Pontuação: {score}</Text>

          <TextInput
            style={styles.input}
            value={input}
            onChangeText={(texto) => setInput(texto)}
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity onPress={checkGuess} style={styles.botaoContainer}>
            <Text style={styles.botao}>Enviar</Text>
          </TouchableOpacity>

          {victory ? (
            <Text style={styles.victoryText}>Você acertou! Reiniciando...</Text>
          ) : (
            hints.map((hint, index) => (
              <View
                key={index}
                style={[styles.hintCard, { backgroundColor: hint.color }]}>
                <Text style={styles.hintText}>{hint.text}</Text>
              </View>
            ))
          )}

          <Text style={styles.texto}>
            <Text onPress={sair}>{'Voltar'}</Text>
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Pokeapi;
