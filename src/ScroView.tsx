import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ScroView() {
  //Não performatico quando tem uma lista grande por que carrega as 10 mil imagens
  //utilizar o FlatList
  return (
    <View>
      <ScrollView contentContainerStyle={styles.scrollContent} style={styles.scroll}>
        <Text style={styles.container}>OI</Text>
        <Text style={styles.container}>OI</Text>
        <Text style={styles.container}>OI</Text>
        <Text style={styles.container}>OI</Text>
        <Text style={styles.container}>tudo bem?</Text>
        <Text style={styles.container}>tudo bem?</Text>
        <Text style={styles.container}>tudo bem?</Text>
        <Text style={styles.container}>tudo bem?</Text>
        <Text style={styles.container}>tudo bem?</Text>
        <Text style={styles.container}>tudo bem?</Text>
        <Text style={styles.container}>tudo bem?</Text>
        <Text style={styles.container}>tudo bem?</Text>
        <Text style={styles.container}>tudo bem?</Text>
        <Text style={styles.container}>tudo bem?</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 50,
  },
  scroll: {
    width: 250,
    display: 'flex',
    backgroundColor: 'red',
  },
  scrollContent: {
    alignItems: 'center',
  },
});
