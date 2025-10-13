# COMANDOS DO REACT NATIVE
1. npx create-expo-app@3 fokus -> criar um app react native com o nome fokus, na versão 3.
2. npm run reset-project -> Reseta o projeto para ficar limpo.
3. npm start -> Prepara o servidor para ser executado.
4. npm run web -> Inicializar o app no navegador.
5. npm install -> Instala todas as dependências necessárias para o projeto rodar.

## COMPONENTES DO REACT NATIVE
<View></View> -> Funciona como container "div". É obrigatório para outros componentes. É por padrão flex.
<Text></Text> -> Funciona quando você vai utilizar textos.
<Image> -> Utilizado para renderizar imagens no projeto.
<Pressable></Pressable> -> Utilizado quando temos algo pressionável.

## FUNÇÕES E CLASSES UTILIZADAS NO REACT NATIVE
1. require() -> Faz com que você consiga passar um caminho da img que está dentro do projeto.
2. create() -> Utilizada quando você quer criar algo.
3. StyleSheet -> Utilizado para criar um campo de estilização.


## CRIAÇÃO DO COMPONENT Timer
O código que você irá utilizar nesse componente é:
 <Text style={styles.timer}>

{timerType.initialValue} */}
{new Date(timerType.initialValue * 1000).toLocaleTimeString("pt-BR", { minute: "2-digit", second: "2-digit"

})}
</Text>
