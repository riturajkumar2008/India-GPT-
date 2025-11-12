import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [prompt, setPrompt] = React.useState('');
  const [response, setResponse] = React.useState('');

  const askAI = async () => {
    const res = await fetch("https://your-backend-url/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setResponse(data.reply);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🇮🇳 India GPT</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your question..."
        onChangeText={setPrompt}
      />
      <Button title="Ask" onPress={askAI} />
      <Text style={styles.response}>{response}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: 'black', flex: 1 },
  title: { color: '#00ff00', fontSize: 24, marginBottom: 20 },
  input: { backgroundColor: '#222', color: '#0f0', padding: 10, marginBottom: 10 },
  response: { color: '#0f0', marginTop: 20 }
});
          
