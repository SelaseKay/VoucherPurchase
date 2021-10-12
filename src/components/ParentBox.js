import { Container, VStack } from 'native-base';

export function ParentBox(props) {

    const breakpoint = [
        480,
        576,
    ]

    // const br = useBreakpointValue({
    //     xs: '480px',
    //     sm: '576px',
    //     md: '768px',
    //     lg: '992px',
    //     xl: '1200px',
    // })
    return (
        <Container
            w={breakpoint}
            h={500}
            alignSelf='center'
            borderWidth={2}
            borderColor='#D3D3D3'
            borderRadius='md'
            bgColor='#F9F9F9'
            mt={16}
        >
            <VStack
                w="100%"
                pr={32}
                pl={4}>
                {props.children}
            </VStack>
        </Container>
    )
}