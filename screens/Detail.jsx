import { Button, HStack, ListItem, Spacer, Text, VStack } from "@react-native-material/core";

const Detail = ({route,navigation}) => {

    const {item} = route.params

    console.log(item)

    const handleTap = () => {
        navigation.goBack()
    }

    return (  
        <VStack m={20} spacing={20}>
            <ListItem title={item.content}/>
            <HStack mt={20}>
                <Button title="Delete" onPress={handleTap}/>
                <Spacer/>
                <Button title="Close" onPress={handleTap}/>
            </HStack>
        </VStack>
    );
}
 
export default Detail;