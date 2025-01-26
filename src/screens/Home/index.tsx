import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Alert,
} from "react-native";
import { homeStyles } from "./styles";
import { Participant } from "../../components/Participant/Participant";
import { useState } from "react";

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  function handleParticipantAdd() {
    if(participants.includes(participantName))
      return Alert.alert("Atenção", "Já existe um participante com esse nome!");

    if(participantName.trim() === '')
      return Alert.alert("Atenção", "O nome do participante não pode ser vazio!");

    setParticipants((prevState) => [...prevState, participantName]);
    setParticipantName('');
  }
 
  function handleParticipantRemove(name: string) {
    Alert.alert("Confirmar remoção", `Deseja realmente remover ${name}?`, [
      {
        text: "Sim",
        onPress: () => {
          setParticipants(prevState => prevState.filter(participant => participant != name));
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }
  return (
    <View style={homeStyles.container}>
      <Text style={homeStyles.eventName}>Nome do Evento</Text>
      <Text style={homeStyles.eventDate}>Sexta, 4 de Dezembro de 2025</Text>

      <View style={homeStyles.form}>
        <TextInput
          style={homeStyles.inputEventName}
          placeholder="Nome do participante"
          placeholderTextColor={"#6b6b6b"}
          onChangeText={setParticipantName}
          value={participantName}
        />
        <TouchableOpacity
          style={homeStyles.buttonAddParticipant}
          onPress={handleParticipantAdd}
        >
          <Text style={homeStyles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

    <FlatList 
      data={participants}
      keyExtractor={item => item}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => (
        <Text style={homeStyles.infoText}>Ninguem chegou no evento ainda? Adicione participantes a sua lista de presença.</Text>
      )}
      renderItem={({item }) => (
        <Participant
          key={item}
          name={item}
          onRemove={() => handleParticipantRemove(item)}
        />
      )}
     />
    </View>
  );
}
