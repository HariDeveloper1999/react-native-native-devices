import { Text, View, StyleSheet, Pressable } from "react-native";
import { GlobalStyles } from "../../constants/Style";


export default function Button({ mode, children,style,PressHandler }) {
  return (
    <View style={style}>
      <Pressable onPress={PressHandler} style={({pressed})=>pressed && styles.pressed}>
        <View style={[styles.button,mode == "flat" && styles.flat]}>
          <Text style={[styles.buttonText,mode=="flat" && styles.flatText]}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary800,
    borderRadius: 4,
  },
});
