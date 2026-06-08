import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    flex: 1,
  },

  keyboardView: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
    justifyContent: "flex-end",
    paddingTop: 32,
    paddingBottom: 0,
  },

  card: {
    minHeight: "72%",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 30,
    paddingTop: 34,
    paddingBottom: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -8,
    },
    shadowOpacity: 0.08,
    shadowRadius: 18,
    elevation: 10,
  },

  eyebrow: {
    color: "#E9A5B3",
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 0,
    marginBottom: 8,
    textTransform: "uppercase",
  },

  title: {
    color: "#202020",
    fontSize: 34,
    fontWeight: "700",
  },

  subtitle: {
    color: "#777777",
    fontSize: 15,
    lineHeight: 22,
    marginTop: 10,
    marginBottom: 28,
  },

  inputGroup: {
    marginBottom: 17,
  },

  label: {
    color: "#444444",
    fontSize: 13,
    fontWeight: "700",
    marginBottom: 8,
  },

  input: {
    height: 52,
    borderWidth: 1,
    borderColor: "#F0D7DC",
    borderRadius: 16,
    backgroundColor: "#FFF8F9",
    color: "#222222",
    fontSize: 16,
    paddingHorizontal: 18,
  },

  submitButton: {
    height: 58,
    borderRadius: 29,
    backgroundColor: "#F8DDE2",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
    shadowColor: "#E9A5B3",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 14,
    elevation: 8,
  },

  submitButtonPressed: {
    opacity: 0.82,
    transform: [
      {
        scale: 0.98,
      },
    ],
  },

  submitButtonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
  },

  submitButtonIcon: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "300",
    marginLeft: 10,
  },

  loginText: {
    color: "#666666",
    fontSize: 15,
    marginTop: 18,
    textAlign: "center",
  },

  loginLink: {
    color: "#E9A5B3",
    fontWeight: "700",
  },
});

export default styles;
