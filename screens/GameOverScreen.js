import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The game is over...</Text>
      <Text>The Number you chose was {props.userNumber},</Text>
      <Text>
        And the computer guessed it in only {props.numberOfRounds} guesses!
      </Text>
      <Button title="new game" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
