import RNfirebase from 'react-native-firebase';

const instance = RNfirebase.initializeApp({
  debug: true,
});

export default instance;