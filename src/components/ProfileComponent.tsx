import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { launchImageLibrary, ImagePickerResponse } from 'react-native-image-picker';

const ProfileComponent = () => {
  const [avatarSource, setAvatarSource] = useState<any>(null);
  useEffect(() => {
    // Puedes cargar la imagen de perfil existente aquí si la tienes guardada en el estado o en algún otro lugar.
  }, []);

  const selectImage = () => {
    const options: any = {
      title: 'Seleccionar imagen de perfil',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    const optionsCamera: any = {
      title: 'Seleccionar imagen de perfil',
      storageOptions: {
        saveToPhotos: true,
        mediaType: 'photo',
        includeBase64: false,
        includeExtra: true,
      },
    };

    launchImageLibrary(optionsCamera, (response: any) => {
      if (response.didCancel) {
        console.log('Usuario canceló la selección de imagen');
      } else if (response.error) {
        console.log('Error: ', response.error);
      } else {

        const [imageSelected] = response?.assets || [];
        const responseUrl = imageSelected?.uri || response?.uri
        setAvatarSource({ uri: responseUrl });
      }
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={selectImage}>
        {avatarSource ? (
          <Image  source={avatarSource} style={styles.avatar} />
        ) : (
          <View style={styles.placeholder}>
            <Text>Elegir una foto de perfil</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    borderWidth: 1,
    borderColor: 'black',
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  placeholder: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProfileComponent;
