export default function App() {
    return (
      <View style={styles.container}>
        <View
        style={{backgroundColor:"#099DB2", flex:0.5 }}>
        <Text style={styles.text}>Confirm your email account</Text>
        <StatusBar style="auto" />
          <View>
            <Text style={styles.textsec}> We sent a confirmation email to: 
            email@gmail.com
  Check your email and click on the confirmation link to continue.
            </Text>
          
          </View>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      height: 500,
      backgroundColor: '#fff',
      alignItems: "center",
      justifyContent: 'center',
    },
    imagebg: {
      top:-170,
    },
  
    text: {
      fontSize:24, 
      textAlign: "center",
      top:-150,
      fontWeight: 'bold',
    },
  
    textsec:{
      fontSize:14, 
      textAlign: "center",
      top:-100
    }
  });


<Image 
style={styles.imagebg}
source={require("./assets/bg_aut.png")}> 
</Image>  