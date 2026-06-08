import { useEffect, useRef, useState } from "react";
import type { NativeBottomTabScreenProps } from "@react-navigation/bottom-tabs/unstable";
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { RootTabParamList } from "../../../../Router";
import background from "../../../../assets/background-register.png";
import styles from "./register.styles";

type RegisterProps = NativeBottomTabScreenProps<RootTabParamList, "Register">;

export default function Register({ navigation }: RegisterProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    const keyboardHideSubscription = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        scrollViewRef.current?.scrollTo({ y: 0, animated: true });
      },
    );

    return () => {
      keyboardHideSubscription.remove();
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.background}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 24}
          style={styles.keyboardView}
        >
          <ScrollView
            ref={scrollViewRef}
            contentContainerStyle={styles.scrollContent}
            keyboardDismissMode="interactive"
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.card}>
              <View>
                <Text style={styles.eyebrow}>Comece agora</Text>
                <Text style={styles.title}>Criar conta</Text>
                <Text style={styles.subtitle}>
                  Complete seus dados para entrar no ShapeDay.
                </Text>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Nome</Text>
                <TextInput
                  autoCapitalize="words"
                  autoComplete="name"
                  placeholder="Seu nome completo"
                  placeholderTextColor="#A8A8A8"
                  returnKeyType="next"
                  style={styles.input}
                  textContentType="name"
                  value={name}
                  onChangeText={setName}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect={false}
                  keyboardType="email-address"
                  placeholder="voce@email.com"
                  placeholderTextColor="#A8A8A8"
                  returnKeyType="next"
                  style={styles.input}
                  textContentType="emailAddress"
                  value={email}
                  onChangeText={setEmail}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Senha</Text>
                <TextInput
                  autoCapitalize="none"
                  autoComplete="new-password"
                  placeholder="Crie uma senha"
                  placeholderTextColor="#A8A8A8"
                  returnKeyType="next"
                  secureTextEntry
                  style={styles.input}
                  textContentType="newPassword"
                  value={password}
                  onChangeText={setPassword}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Confirmar senha</Text>
                <TextInput
                  autoCapitalize="none"
                  autoComplete="new-password"
                  placeholder="Repita sua senha"
                  placeholderTextColor="#A8A8A8"
                  returnKeyType="done"
                  secureTextEntry
                  style={styles.input}
                  textContentType="newPassword"
                  value={passwordConfirmation}
                  onChangeText={setPasswordConfirmation}
                />
              </View>

              <Pressable
                accessibilityRole="button"
                style={({ pressed }) => [
                  styles.submitButton,
                  pressed && styles.submitButtonPressed,
                ]}
                onPress={() => undefined}
              >
                <Text style={styles.submitButtonText}>Cadastrar</Text>
                <Text style={styles.submitButtonIcon}>→</Text>
              </Pressable>

              <Text style={styles.loginText}>
                Ja possui uma conta?
                <Text
                  style={styles.loginLink}
                  onPress={() => navigation.navigate("Login")}
                >
                  {" "}
                  Entrar
                </Text>
              </Text>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  );
}
