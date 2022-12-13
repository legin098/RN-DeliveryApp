import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MyColors } from '../theme/AppTheme';

interface IProps {
  title: string;
  onPress: () => void
}

export const RoundedButton = ({ title, onPress }: IProps) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={styles.roundedButton}
    >
      <Text style={styles.textButton}>{ title }</Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  roundedButton: {
    width: '100%',
    backgroundColor: MyColors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    borderRadius: 15
  },
  textButton: {
    color: '#fff',
    fontWeight: '600'
  }
});