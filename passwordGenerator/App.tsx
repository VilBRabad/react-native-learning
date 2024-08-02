import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import * as Yup from "yup";
import { Formik } from 'formik';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, "Should be min of length 4 characters!")
    .max(16, "Should be max of length 16 characters!")
    .required("Length must be required!")
});

export default function App() {
  const [password, setPassword] = useState("");
  const [isPassGenerated, setIsPasswordGenerated] = useState(false);

  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    let characterList = '';

    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const digitChars = "0123456789";
    const specialChars = "@#$!%^&*()_+";

    if (upperCase) {
      characterList += upperCaseChars;
    }
    if (lowerCase) {
      characterList += lowerCaseChars;
    }
    if (numbers) {
      characterList += digitChars;
    }
    if (symbols) {
      characterList += specialChars;
    }

    const passwordResult = createPassword(characterList, passwordLength);
    setPassword(passwordResult);
    setIsPasswordGenerated(true);
  }

  const createPassword = (characters: string, passwordLength: number) => {
    let result = "";
    for (let i = 0; i < passwordLength; i++) {
      const charIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(charIndex);
    }
    return result;
  }

  const resetPasswordState = () => {
    setPassword("");
    setIsPasswordGenerated(false);
    setLowerCase(true);
    setUpperCase(false);
    setNumbers(false);
    setSymbols(false);
  }

  return (
    <ScrollView>
      <SafeAreaView>
        <Text style={styles.headText}>Password Generator</Text>
        <View style={styles.form}>
          <Formik
            initialValues={{ passwordLength: '' }}
            validationSchema={passwordSchema}
            onSubmit={(values) => {
              generatePasswordString(+values.passwordLength);
            }}
          >
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset,
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.headingWrapper}>
                    <Text style={styles.heading}>Password Length</Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.error}>{errors.passwordLength}</Text>
                    )}
                  </View>
                  <TextInput
                    style={styles.input}
                    value={values.passwordLength}
                    onChangeText={handleChange('passwordLength')}
                    placeholder='Ex. 8'
                    keyboardType='numeric'
                  />
                </View>
                <View style={[styles.inputWrapper, { marginTop: 20 }]}>
                  <View style={styles.headingWrapper}>
                    <Text style={styles.heading}>Lowercase characters</Text>
                  </View>
                  <BouncyCheckbox
                    isChecked={lowerCase}
                    style={styles.checkBox}
                    onPress={() => setLowerCase(!lowerCase)}
                    fillColor='#37B7C3'
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <View style={styles.headingWrapper}>
                    <Text style={styles.heading}>Uppercase characters</Text>
                  </View>
                  <BouncyCheckbox
                    isChecked={upperCase}
                    style={styles.checkBox}
                    onPress={() => setUpperCase(!upperCase)}
                    fillColor='#37B7C3'
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <View style={styles.headingWrapper}>
                    <Text style={styles.heading}>Digit characters</Text>
                  </View>
                  <BouncyCheckbox
                    isChecked={numbers}
                    style={styles.checkBox}
                    onPress={() => setNumbers(!numbers)}
                    fillColor='#37B7C3'
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <View style={styles.headingWrapper}>
                    <Text style={styles.heading}>Symbol characters</Text>
                  </View>
                  <BouncyCheckbox
                    isChecked={symbols}
                    style={styles.checkBox}
                    onPress={() => setSymbols(!symbols)}
                    fillColor='#37B7C3'
                  />
                </View>

                <View style={styles.buttons}>
                  <TouchableOpacity
                    disabled={!isValid}
                    onPress={() => handleSubmit()}
                  >
                    <Text style={[styles.btn, { backgroundColor: "#088395" }]}>Generate Password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      handleReset();
                      resetPasswordState();
                    }}
                  >
                    <Text style={styles.btn}>Reset</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
        {
          isPassGenerated ?
            <View style={styles.resultCard}>
              <View style={styles.result}>
                <Text style={[styles.heading, { color: "#000000" }]}>Result</Text>
                <Text style={[{ color: "#000000" }]}>Long press to copy</Text>
                <View style={styles.resultText}>
                  <Text selectable={true} style={{ color: "#000000", fontSize: 25, fontWeight: '800' }}>{password}</Text>
                </View>
              </View>
            </View>
            :
            null
        }
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headText: {
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 25,
    fontWeight: '600',
    color: "#ffffff",
    marginBottom: 20,
    backgroundColor: '#37B7C3'
  },
  form: {
    paddingHorizontal: 12,
    color: '#ffffff'
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  headingWrapper: {},
  heading: {
    fontSize: 16,
    color: '#ffffff'
  },
  error: {
    color: "red"
  },
  input: {
    borderStyle: "solid",
    borderWidth: 1,
    paddingHorizontal: 20,
    height: 45,
    width: 90,
    borderRadius: 5,
    color: "#ffffff",
    borderColor: "#37B7C3",
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    marginTop: 20
  },
  btn: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#000000",
    borderRadius: 10,
    color: "#ffffff",
    marginVertical: 10
  },
  checkBox: {
    width: 50
  },
  resultCard: {
    marginTop: 30,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  result: {
    color: "black",
    paddingHorizontal: 20,
    width: '90%',
    paddingVertical: 10,
    backgroundColor: "#ffffff",
    borderRadius: 10,
  },
  resultText: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
