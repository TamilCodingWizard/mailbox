import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Inbox from './../screens/Inbox';
import Detail from './../screens/Detail';
import { TabRouter } from "@react-navigation/native";


const Stack = createNativeStackNavigator()


export const InboxStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="InboxScreen" component={Inbox}/>
            <Stack.Screen name="DetailsScreen" component={Detail}
                    />
        </Stack.Navigator>
    )
}