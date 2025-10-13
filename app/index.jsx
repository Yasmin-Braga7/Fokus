import { useRef, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ActionButton } from "../components/ActionButton";
import { FokusButton } from "../components/FokusButton";
import { Timer } from "../components/Timer";

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

  const [timerType, setTimerType] = useState(pomodoro[0])

  const timerRef = useRef(null) /** Hook sincrono do react **/

  const toggleTimer = () =>{ /** Função da çogíca do botãp começar/pausar **/
    if(timerRef.current){
      //pausar
      clearInterval(timerRef.current)
      return
    }
    const id = setInterval(() => {console.log("timer funcionando")}, 1000) /** SetInterval é uma função do js puro, espera uma função e o tempo **/
    timerRef.current = id
  }

  return (
    <View style={styles.container}>
      <Image source={timerType.image} />
      <View style={styles.actions}>
        <View style={styles.context}>
          {pomodoro.map(p =>

            <ActionButton 
              key={p.id}
              active={timerType.id === p.id}
              onPress={() => setTimerType(p)}
              display={p.display}
            />
          )}
        </View>
        <Timer totalSeconds={timerType.initialValue}/>
        <FokusButton 
        press={toggleTimer}
        title={timerRef.current ? 'Pausar' : 'Começar'}
        />
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
    backgroundColor: '#14448080',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480',
    width: '80%',
    gap:32,
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
  footer: {
    width: '80%',
  },
  footerText: {
    color: '#98A0A8',
    fontSize: 12.5,
    textAlign: "center",
  }
})

