import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
// import Op from "./Op";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  Button,
  Alert,
  Switch,
  InputAccessoryView,
  ScrollView,
  TextInput,
} from "react-native";

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const inputAccessoryViewID = "uniqueID";
  const initialText = "";
  const [text, setText] = useState(initialText);

  // console.log(require("./assets/favicon.png"));
  return (
    //SafeAreaView is like a div for our react native app
    <>
      <ScrollView keyboardDismissMode="interactive">
        <TextInput
          style={{
            padding: 16,
            marginTop: 50,
          }}
          inputAccessoryViewID={inputAccessoryViewID}
          onChangeText={setText}
          value={text}
          placeholder={"Please type here…"}
        />
      </ScrollView>
      <InputAccessoryView nativeID={inputAccessoryViewID}>
        <Button onPress={() => setText(initialText)} title="Clear text" />
      </InputAccessoryView>
    </>
  );
}
const styles2 = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
//we are using the style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

{
  /* <Text onPress={handleHandle}>Hello React Native</Text>
      <Image source={require("./assets/favicon.png")} />
      <TouchableOpacity onPress={() => console.log("image has been tapped")}>
        <Image
          source={{
            width: 200,
            height: 400,
            uri: "https://picsum.photos/id/237/200/300",
          }}
        />
      </TouchableOpacity>

      <StatusBar style="auto" /> */
}
