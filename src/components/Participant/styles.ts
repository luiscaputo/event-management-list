import { StyleSheet } from "react-native";

export const participantStyles = StyleSheet.create({
  container: {
    backgroundColor: '#1f1e25',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  name: {
    color: '#fff',
    flex: 1,
    fontSize: 16,
    marginLeft: 16,
  },
  buttonAddParticipant: {
    width: 56,
    height: 56,
    backgroundColor: '#e23c44',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 24,
  },
});