import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';

export default function Touchable() {
  //Touxable opacity é o botão personalizavel
  return (
    <View>
      <TouchableOpacity onPress={() => console.log('oi')}>
        <Text>Clicar aqui</Text>
      </TouchableOpacity>
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
