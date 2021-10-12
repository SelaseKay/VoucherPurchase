import { Text, TextField, VStack } from "native-base";

export function CustomTextField(props) {
    return (
        <VStack w="100%"
                mb = {4}>
            <Text
                mb = {2}
                fontSize='md'
                color='black'>
                {props.fieldHeader}
            </Text>
            <TextField
                w="100%"
                bgcolor='white'
                color='black'
                backgroundColor='white'
                placeholder={props.placeholder} />
        </VStack>
    )
}