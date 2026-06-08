import { useState } from "react";
import type { NativeBottomTabScreenProps } from "@react-navigation/bottom-tabs/unstable";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, ImageBackground, TextInput } from "react-native";
import Checkbox from "expo-checkbox";
import type { RootTabParamList } from "../../../../Router";
import background from "../../../../assets/background-login.jpeg";
import styles from "./login.styles";

type LoginProps = NativeBottomTabScreenProps<RootTabParamList, "Login">;

export default function Login({ navigation }: LoginProps) {
  const [remember, setRemember] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.floatingButtonContainer}>
          <View style={styles.floatingButton}>
            <Text style={styles.floatingButtonText}>→</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>Login</Text>

          <TextInput
            placeholder="Email"
            style={styles.input}
            placeholderTextColor="#A8A8A8"
          />

          <TextInput
            placeholder="Senha"
            secureTextEntry
            style={styles.input}
            placeholderTextColor="#A8A8A8"
          />

          <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>

          <View style={styles.checkboxContainer}>
            <Checkbox
              color={remember ? "#E9A5B3" : "#F0D7DC"}
              style={styles.checkbox}
              value={remember}
              onValueChange={setRemember}
            />

            <Text style={styles.checkboxText}>Lembrar-me</Text>
          </View>

          <Text style={styles.signupText}>
            Não possui uma conta?
            <Text
              style={styles.signupLink}
              onPress={() => navigation.navigate("Register")}
            >
              {" "}
              Cadastrar-se
            </Text>
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
