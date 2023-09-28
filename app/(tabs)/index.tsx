import { StyleSheet, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { useEffect, useState } from "react";
import axios from "axios";
import { FlatList } from "react-native-gesture-handler";
// https://dribbble.com/shots/20885324-Checklist-App
export default function TabOneScreen() {
  const [data, setData] = useState();
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    axios.get("https://checklist-express.onrender.com/").then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <View style={styles.container}>
      <View>
        <DateTimePicker
          testID="dateTimePicker"
          // timeZoneOffsetInMinutes={tzOffsetInMinutes}
          // timeZoneName={tzName}
          // minuteInterval={interval}
          // maximumDate={maximumDate}
          // minimumDate={minimumDate}
          value={date}
          // mode={mode}
          is24Hour
          // display={display}
          // onChange={onChange}
          // textColor={textColor || undefined}
          // accentColor={accentColor || undefined}
          // neutralButton={{label: neutralButtonLabel}}
          negativeButton={{ label: "Cancel", textColor: "red" }}
          // disabled={disabled}
        />
        <FlatList
          keyExtractor={(item) => item._id}
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.listItem}>
              <Text style={styles.listItemText}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
    height: 40,
    marginVertical: 1,
    paddingHorizontal: 30,
    backgroundColor: "#dddddd",
  },
  listItemText: {
    fontSize: 20,
    lineHeight: 40,
  },
});
