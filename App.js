import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';


const App = () => {
  const [toggle, setToggle] = useState(false);

  const handleChangeToggle = () =>  setToggle(oldToggle => !oldToggle);

  useEffect(() => {
    // Liga lanterna do celular
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(() => {
    // Altera o toggle quando o celular � chacoalhado

    const subscription = RNShake.addListener(() => {
    setToggle(oldToggle => !oldToggle);
    });

    // Essa fun��o ser� chamada quando o componente for desmontado

  },[]);

  return (  // Imagem On/Off
    <View style={toggle ? style.containerLight : style.container}>
      <TouchableOpacity
        onPress={handleChangeToggle}>
        <Image
          style={toggle ? style.lightingOn : style.lightingOff}
          source={
            toggle
              ? require('./assets/icons/eco-light-on.png')
              : require('./assets/icons/eco-light-off.png')
          }
        />
        <Image // Logotipo DIO
          style={style.dioLogo}
          source={
            toggle
              ? require('./assets/icons/logo-dio.png')
              : require('./assets/icons/logo-dio-off.png')
          }
        />
      </TouchableOpacity>
    </View>
  )
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  lightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },

  lightingOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },

  dioLogo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  },

});