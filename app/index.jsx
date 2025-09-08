import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const pomodoro = [
  {
    id: "focus",
    initialValue: 25,
    image: require('./foco.png'),
    display: "Foco",
  },
  {
    id: "short",
    initialValue: 5,
    image: require('./descanso_curto.png'),
    display: "Pausa curta",
  },
  {
    id: "long",
    initialValue: 15,
    image: require('./descanso_longo.png'),
    display: "Pausa longa",
  },
]

export default function Index() {

  const [timerType, setTimerType] = useState(pomodoro[1])

  return (
    <View style={styles.container}>
      <Image source={timerType.image} />
      <View style={styles.actions}>
        <View style={styles.context}>

          <Pressable style={styles.contextButtonActive}>
            <Text style={styles.contextButtonText}>{timerType.display}</Text>
          </Pressable>

        </View>

        <Text style={styles.timer}>{timerType.initialValue}</Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Começar</Text>
        </Pressable>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto fictício e sem fins comerciais.
        </Text>
        <Text style={styles.footerText}>
          Desenvolvido por Aluno. 
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#021123',
    gap: 40,
  },
  actions: {
    padding: 24,
    backgroundColor: '#14448080',  //Foi adicionado 80 no final para mudar o tom para mais escuro

    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480',
    width: '80%',
    gap:32,  //Espaçamento entre os itens do actions
  },
  context:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  contextButtonActive: {
    backgroundColor: '#144480',
    borderRadius: 8,
  },
  contextButtonText: {
    color: '#FFF',
    fontSize: 12.5,
    padding: 8,
  },
  timer: {
    fontSize: 54,
    color: '#FFF',
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    backgroundColor: '#B872FF',
    borderRadius: 32,
    padding: 8,
  },
  buttonText: {
    textAlign: "center",
    color: '#021123',
    fontSize: 18,
  },
  footer: {
    width: '80%',
  },
  footerText: {
    color: '#98A0A8',
    fontSize: 12.5,
    textAlign: "center",
  }
})