import logo from "./logo.svg";
import {
  Box,
  Image,
  Text,
  Link,
  HStack,
  Heading,
  Switch,
  useColorMode,
  VStack,
  Code,
  Flex,
} from "native-base";
import { ParentBox } from "./components/ParentBox";
import { HeaderText } from "./components/HeaderText";
import { CustomTextField } from "./components/CustomTextField";
import { SubmitButton } from "./components/SubmitButton";

function App() {

  return (
    <ParentBox>
        <HeaderText headerText="Welcome to Surfline!" />
        <CustomTextField
          fieldHeader="Email"
          placeholder="jondoe@gmail.com" />

        <CustomTextField
          fieldHeader="Phone-number"
          placeholder="0555238492" />
          <SubmitButton/>
    </ParentBox>
  );
}

export default App;
