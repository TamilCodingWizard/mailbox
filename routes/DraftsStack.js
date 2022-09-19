
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Drafts from './../screens/Drafts';

const Stack = createNativeStackNavigator()

export const DraftsStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="DraftsScreen" component={Drafts}/>
        </Stack.Navigator>
    )

}