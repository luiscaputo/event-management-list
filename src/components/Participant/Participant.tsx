import { Text, TouchableOpacity, View } from "react-native";
import { participantStyles } from "./styles";

type Props = {
  name: string;
  onRemove: () => void;
}

export function Participant({name, onRemove }: Props){
  return (
    <View style={participantStyles.container}>
      <Text style={participantStyles.name}>{name}</Text>

      <TouchableOpacity style={participantStyles.buttonAddParticipant} onPress={onRemove}>
          <Text style={participantStyles.buttonText}>-</Text>
        </TouchableOpacity>
    </View>
  );
}