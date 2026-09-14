import react from "react";
import { Text , StyleSheet , View , FlatList} from "react-native";

const students = [
    {name: "Gerti" , surname:" Gashi" , age: '13'},
    {name: "Art" , surname:" Gashi" , age: '15'},
    {name: "Geni" , surname:" Gashi" , age: '14'},
];

// const ListScreen = () => {
//     return(
//         <View>
//             <Text>List Screen:</Text>
//             <FlatList
//             horizontal={true}
//             data={students}
//            renderItem={({item)} => {
//             return <Text>{item.name}{item.surname}{item.age}</Text>
//            }
//         }

//         />
//         </View>
//     );
// }

const styles = StyleSheet.create({})

export default ListScreen;