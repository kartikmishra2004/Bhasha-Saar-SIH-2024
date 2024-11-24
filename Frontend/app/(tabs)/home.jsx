import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import * as Clipboard from 'expo-clipboard';
import CustomButton from '../../components/customButton'

export default function App() {

  const [transForm, setTransForm] = useState({
    key: 'devnagri_2c7a182ca9ca11efb60142010aa00012',
    sentence: '',
    src_lang: 'en',
    dest_lang: 'hi'
  });

  const [isLoading, setIsLoading] = useState(false);

  const languageMapping = {
    en: "English",
    hi: "Hindi",
    bn: "Bengali",
    gu: "Gujarati",
    kn: "Kannada",
    mr: "Marathi",
  };

  const [translatedText, setTranslatedText] = useState('Your translation will appear here!!');

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('key', transForm.key);
    formData.append('sentence', transForm.sentence);
    formData.append('src_lang', transForm.src_lang);
    formData.append('dest_lang', transForm.dest_lang);
    setIsLoading(true);
    try {
      const response = await fetch('https://api.devnagri.com/machine-translation/v2/translate', {
        method: "POST",
        body: formData,
      });
      const res_data = await response.json();
      setTranslatedText(res_data.translated_text);
      if (response.ok) {
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.log("Failed to translate!!");
      setIsLoading(false);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ height: '100vh', paddingVertical: 30 }}>
        <View style={styles.languageSelector}>
          <Picker
            onValueChange={(e) => setTransForm({ ...transForm, src_lang: e })}
            dropdownIconColor="white"
            style={{
              color: 'white',
              width: 150,
              height: 50,
              padding: 30,
              backgroundColor: '#232533',
              borderColor: '#232533',
            }}>
            <Picker.Item key={'en'} label='English' value='en' />
            <Picker.Item key={'hi'} label='Hindi' value='hi' />
            <Picker.Item key={'bn'} label='Bengali' value='bn' />
            <Picker.Item key={'gu'} label='Gujrati' value='gu' />
            <Picker.Item key={'kn'} label='Kannada' value='kn' />
            <Picker.Item key={'mr'} label='Marathi' value='mr' />
          </Picker>
          <Text style={{ color: 'white', padding: 10 }}>To</Text>
          <Picker
            onValueChange={(e) => setTransForm({ ...transForm, dest_lang: e })}
            dropdownIconColor="white"
            style={{
              color: 'white',
              width: 150,
              height: 50,
              padding: 30,
              backgroundColor: '#232533',
              borderColor: '#232533',
            }}>
            <Picker.Item key={'hi'} label='Hindi' value='hi' />
            <Picker.Item key={'en'} label='English' value='en' />
            <Picker.Item key={'bn'} label='Bengali' value='bn' />
            <Picker.Item key={'gu'} label='Gujrati' value='gu' />
            <Picker.Item key={'kn'} label='Kannada' value='kn' />
            <Picker.Item key={'mr'} label='Marathi' value='mr' />
          </Picker>
        </View>
        <View style={styles.translationBox}>
          <View style={styles.boxHeader}>
            <Text style={styles.boxTitle}>{languageMapping[transForm.src_lang]}</Text>
            <Ionicons name="volume-high" size={20} color="white" />
          </View>
          <TextInput
            multiline={true}
            scrollEnabled={true}
            onChangeText={(e) => setTransForm({ ...transForm, sentence: e })}
            style={styles.textInput}
            value={transForm.sentence}
          />
          <View style={styles.bottomRow}>
            <Ionicons onPress={() => Clipboard.setStringAsync(transForm.sentence)} name="copy" size={24} color="#bababa" />
          </View>
        </View>
        <View style={styles.translationBox}>
          <View style={styles.boxHeader}>
            <Text style={styles.boxTitle}>{languageMapping[transForm.dest_lang]}</Text>
            <Ionicons name="volume-high" size={20} color="white" />
          </View>
          <TextInput
            multiline={true}
            scrollEnabled={true}
            style={styles.textInput}
            editable={false}
          >{translatedText}</TextInput>
          <View style={styles.bottomRow}>
            <Ionicons onPress={() => Clipboard.setStringAsync(translatedText)} name="copy" size={24} color="#bababa" />
          </View>
        </View>
        <View style={{
          alignItems: 'center'
        }}>
          {isLoading ? (<CustomButton isDisabled={true} title='Please wait...' />) : (<CustomButton isDisabled={false} handlePress={() => handleSubmit()} style={styles.translateButtonText} title={'Translate'}>
            <Text>Translate</Text>
          </CustomButton>)}
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#ffa001' barStyle="light-content" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: '#161622',
  },
  languageSelector: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#232533',
    marginVertical: 10,
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 20,
    elevation: 2,
  },
  languageButton: {
    padding: 10,
  },
  languageText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white'
  },
  translationBox: {
    backgroundColor: '#232533',
    margin: 15,
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  boxHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  boxTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white'
  },
  textInput: {
    fontSize: 16,
    backgroundColor: '#2c2e40',
    borderRadius: 10,
    color: '#bababa',
    padding: 10,
    marginBottom: 10,
    height: 120,
    textAlignVertical: 'top'
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  micIcon: {
    backgroundColor: '#003366',
    borderRadius: 50,
    padding: 10,
  },
  translateButton: {
    backgroundColor: '#ffa001',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  translateButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: 'white',
  },
  navItem: {
    alignItems: 'center',
    flex: 1,
  },
  navText: {
    fontSize: 12,
    marginTop: 5,
    color: 'black',
  },
  activeNavText: {
    color: 'blue',
  },
});