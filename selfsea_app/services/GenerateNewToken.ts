import auth from '@react-native-firebase/auth';
import { api } from '.';

const GenerateNewToken = async () => {
  const user: any = auth().currentUser;
  const idTokenResult = await user.getIdTokenResult();
  api.setAuthHeader(idTokenResult.token);
  console.log('User JWT generator file: ', idTokenResult.token);

  return idTokenResult.token;
};

export default GenerateNewToken;
