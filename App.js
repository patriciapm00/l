import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Image, PermissionsAndroid, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export default function App() {
  return (
    <View style={styles.principal}>
      <View style={styles.container}>
      <Image
        style={styles.imagebg}
        source={require("./assets/icon_aut.png")}> 
        </Image>
      </View>

      <View>
        <Text style={styles.text}>Confirm your email account
      </Text>
      </View>

      <View>
      <Text style={styles.textsec}> We sent a confirmation email:</Text>
      <Text style={styles.email}> email@gmail.com</Text>
      <Text style={styles.textsec2}> Check your email and click on the confirmation
link to continue. </Text>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.textbutton}>Resend email</Text>
      </TouchableOpacity>
      </View>

      <View>
      <TouchableOpacity style={styles.buttonConfirm} >
        <Text style={styles.textbuttonConfirm}>Confirm</Text>
      </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  principal: {
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: 'center',
  },

  container: {
    backgroundColor:"#099DB2", 
    flexDirection: "row",
    padding:"15%",
    paddingHorizontal:"100%"
  },

  imagebg: {
    width:220,
    height: 190,
    top:123,
  },

  text: {
    top: 100,
    fontSize:30, 
    textAlign: "center",
    fontWeight: 'bold',
  },

  textsec:{
    fontSize:15, 
    textAlign: "center",
    top:150
  },
  email:{
    fontSize:16,
    fontWeight:"bold", 
    textAlign: "center",
    top:160
  },
  textsec2:{
    fontSize:15, 
    textAlign: "center",
    top:140,
    margin:30,
  },

  button:{
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10,
    margin: 150,
    borderTopLeftRadius:20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderWidth:1,
  },
  textbutton:{
    fontSize:13, 
    textAlign: "center",
    fontWeight: 'bold',
    color:"white"
  },

  buttonConfirm: {
    top: -90,
    marginTop: 20,
    width:"100%",
    padding: 20,
    paddingHorizontal: 100,
    backgroundColor:"#099DB2",
    fontSize: 25,
    fontWeight:"bold",
    borderWidth: 2,
    borderColor:"#099DB2",
  },
  textbuttonConfirm:{
    fontSize: 22,
    color: "white",
    fontWeight:"bold",
    alignSelf:"center",
    textTransform:"uppercase",

  },
});
