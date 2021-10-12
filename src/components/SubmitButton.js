import { Button } from "native-base";

export function SubmitButton(){
    return (
        <Button
            onPress = {() => console.log("hello world")}
            color = '#2178E4'
            mt = {8}
            >
                Submit
            </Button>
    )
}