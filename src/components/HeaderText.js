import { Box, Container, Heading, Text } from "native-base";

export function HeaderText(props) {
    return (
            <Text
                fontSize='xl'
                fontWeight='bold'
                color='#11407B'
                mt = {4}
                mb = {16}>
                {props.headerText}
            </Text>

    )
}