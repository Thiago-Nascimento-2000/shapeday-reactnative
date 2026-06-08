import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    flex: 1,
    justifyContent: "flex-end",
  },

  card: {
    backgroundColor: "#FFFFFF",
    height: "50%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 30,
    paddingTop: 40,
    paddingBottom: 30,
  },

  title: {
    fontSize: 34,
    fontWeight: "700",
    marginBottom: 40,
  },

  input: {
    height: 52,
    borderWidth: 1,
    borderColor: "#F0D7DC",
    borderRadius: 16,
    backgroundColor: "#FFF8F9",
    color: "#222222",
    fontSize: 16,
    marginBottom: 17,
    paddingHorizontal: 18,
  },

  forgotPassword: {
    alignSelf: "flex-end",
    color: "#888",
    fontSize: 14,
    marginBottom: 25,
  },

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  checkbox: {
    borderColor: "#F0D7DC",
    borderRadius: 6,
    borderWidth: 1,
  },

  checkboxText: {
    marginLeft: 10,
    fontSize: 16,
  },

  signupText: {
    marginTop: "auto",
    textAlign: "center",
    color: "#666",
  },

  signupLink: {
    color: "#E9A5B3",
    fontWeight: "600",
  },

  floatingButtonContainer: {
    position: "absolute",
    justifyContent: "center",
    right: 40,
    bottom: "45%",
    zIndex: 999,
  },

  floatingButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#F8DDE2",
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },

  floatingButtonText: {
    fontSize: 36,
    color: "#FFFFFF",
    fontWeight: "300",
  },
});

export default styles;
