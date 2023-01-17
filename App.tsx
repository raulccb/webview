import React from 'react';
import {StyleSheet, View, PermissionsAndroid, Button} from 'react-native';
import {WebView} from 'react-native-webview';

export default function App() {
  const requestCameraPermission = async () => {
    const granted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.CAMERA,
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
    ]);

    console.log('granted', granted);

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      alert('Você pode usar a Câmera');
    } else {
      alert('Permissão de Câmera negada');
    }
  };

  return (
    <View style={styles.container}>
      <WebView
        style={{flex: 1}}
        useWebkit
        source={{uri: 'https://tsul-4e011.web.app/mediquo.html'}}
        originWhitelist={['*']}
        allowsInlineMediaPlayback
        javaScriptEnabled
        scalesPageToFit
        mediaPlaybackRequiresUserAction={false}
        startInLoadingState={true}
        pullToRefreshEnabled={true}
        bounces={true}
        cacheEnabled={false}
      />
      <Button title="Solicitar Permissões" onPress={requestCameraPermission} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
