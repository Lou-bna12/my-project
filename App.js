import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.bioElement}>
        Coucou j'ai réussi mes premiéres lignes de code{' '}
      </Text>
      <Text style={styles.bioElement}>Je me présente :</Text>
      <Text style={styles.bioElement}> Prénom : Loubna</Text>
      <Text style={styles.bioElement}>Ville : Cholet</Text>
      <Text style={styles.bioElement}> Genre : Féminin</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
