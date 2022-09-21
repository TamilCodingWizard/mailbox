import { ListItem, Text } from "@react-native-material/core";
import { FlatList } from "react-native-gesture-handler";
import { useState } from 'react';

const Drafts = () => {

    const [mails, setMails] = useState([
        {
          id: "1",
          subject: "Meeting Today!",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        { id: "2", subject: "whaatz up", content: "Content 2" },
        {
          id: "3",
          subject: "Good Morning",
          content:
            " when an unknown printer took a galley of type and scrambled it.Lorem Ipsum has been the industry's standard ",
        },
      ]);
    
    return ( 
        <FlatList 
            data={mails}
            keyExtractor={(item) => item.id}
            renderItem = {({item}) => <ListItem title={item.subject}/>}
            />
            
            
     );
}
 
export default Drafts;