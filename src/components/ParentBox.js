import { Container, VStack } from 'native-base';

export function ParentBox(props) {

    const breakpoint = [
        480,
        576,
    ]

    return (
        <Container
            w={breakpoint}
            alignSelf='center'
            borderWidth={2}
            borderColor='#D3D3D3'
            borderRadius='md'
            bgColor='#F9F9F9'
            mt={16}
        >
            <VStack
                w="100%"
                pr={8}
                pl={8}>
                {props.children}
            </VStack>
        </Container>
    )
}