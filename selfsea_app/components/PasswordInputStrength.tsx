import React from 'react';
import { View } from 'react-native';
import Color from '../theme/colors';

type Props = {
  passwordScore: number;
  password: string;
};

const styles = {
  passwordStyle: {
    borderColor: Color.BORDER_COLOR,
    width: '22%',
    height: 6,
    backgroundColor: '',
    marginTop: 5,
  },
};

const passwordStrengthColor = (
  barNumber: number,
  password: string,
  passwordScore: number,
) => {
  if (password === '') {
    return Color.PASSWORD_NORMAL_COLOR;
  }
  if (passwordScore <= 1 && barNumber === 0) {
    return Color.BORDER_COLOR_WARNING;
  }
  if (passwordScore > 1 && passwordScore < 3 && barNumber <= 1) {
    return Color.BASE_COLOR_ORANGE;
  }
  if (passwordScore === 3 && barNumber <= 2) {
    return Color.BASE_COLOR_ORANGE;
  }
  if (passwordScore > 3 && barNumber <= 3) {
    return Color.BASE_COLOR_GREEN;
  }
  return Color.PASSWORD_NORMAL_COLOR;
};

export default function PasswordInputStrength({
  passwordScore,
  password,
}: Props) {
  return (
    <>
      <View
        style={[
          styles.passwordStyle,
          {
            backgroundColor: passwordStrengthColor(0, password, passwordScore),
          },
        ]}
      />
      <View
        style={[
          styles.passwordStyle,
          {
            backgroundColor: passwordStrengthColor(1, password, passwordScore),
          },
        ]}
      />
      <View
        style={[
          styles.passwordStyle,
          {
            backgroundColor: passwordStrengthColor(2, password, passwordScore),
          },
        ]}
      />
      <View
        style={[
          styles.passwordStyle,
          {
            backgroundColor: passwordStrengthColor(3, password, passwordScore),
          },
        ]}
      />
    </>
  );
}
