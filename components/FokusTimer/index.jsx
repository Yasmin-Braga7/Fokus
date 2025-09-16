import { Text } from "react-native";

<Text style={styles.timer}>
  {new Date(timerType.initialValue * 1000).toLocaleTimeString("pt-BR", {
    minute: "2-digit", second: "2-digit"
  })}
</Text>

const styles = StyleSheet.create({
  timer: {
    fontSize: 54,
    color: '#FFF',
    fontWeight: "bold",
    textAlign: "center",
  }
})