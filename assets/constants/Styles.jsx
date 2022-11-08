import { StyleSheet } from 'react-native'
import Colors from './Colors';

export const stylesForm = StyleSheet.create({
    containerForm: {
        flex: 1,
        width: 'auto',
        justifyContent: 'center',
        marginHorizontal: 25,
        backgroundColor: Colors.background
    },
    inputContainerForm: {
        marginHorizontal: 5,
        backgroundColor: Colors.white,
        justifyContent: 'space-between',
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11
    },
    inputTextContainerGroup: {
        marginHorizontal: 30,
        marginVertical: 10
    },
    inputTextContainer: {
        borderColor: '#00000',
        borderBottomWidth: 1,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    containerError: {
        margin: 5
    },
    textValidationMessage: {
        color: 'red',
        alignSelf: 'center'
    },
    input: {
        marginLeft: 10
    },
    iconInput: {
        color: Colors.gray,
        fontSize: 25,
        marginLeft: 5
    },
})

export const stylesHome = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5'
      },
      headerOptions: {
        marginHorizontal: 25,
      },
      titleContainer: {
        marginTop: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      containerIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
        marginHorizontal: 20
      },
      optionsContainer: {
        justifyContent: 'center',
        alignItems: 'center'
      },
    
      title: {
        fontSize: 15
      },
      circleView: {
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 5
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11
      },
      image: {
        width: '90%',
        height: '90%',
        resizeMode: "center",
      },
      expansibleContainer: {
        flexGrow: 1,
        backgroundColor: '#fff'
      },
      cardExpansibleContainer: {
        padding: 20,
        //backgroundColor: '#F5F5F5',
        marginBottom: 10,
        justifyContent: 'center',
      },
      card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
      },
      textCard: {
        fontSize: 15,
        fontWeight: '700',
      },
      iconInput: {
        color: "#000",
        fontSize: 25,
        marginLeft: 5
      },
      contentContainer: {
        marginHorizontal: 15
      }
})
