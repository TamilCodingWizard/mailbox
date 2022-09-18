import { Avatar, Box, ListItem, Text } from "@react-native-material/core";
import { useState } from "react";
import { FlatList } from "react-native";

const Inbox = () => {
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
    <>
      <Box mt={60}>
        <FlatList
          data={mails}
          keyExtractor={(item) => item.id}
          renderItem={({ item,index }) => (
            <ListItem
              leadingMode="avatar"
              leading={
                <Avatar
                  image={{ uri: `https://mui.com/static/images/avatar/${index + 1}.jpg` }}
                />
              }
              title={item.subject}
              secondaryText={item.content}
            />
          )}
        />
      </Box>
    </>
  );
};

export default Inbox;
