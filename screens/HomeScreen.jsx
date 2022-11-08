import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import React from 'react';
import dataCollapsible from '../data/dataCollapsible';
import { auth } from '../firebase';
import AcordeonItem from './AcordeonItem';
import OptionHome from '../components/OptionHome';
import { stylesHome } from '../assets/constants/Styles';

const HomeScreen = ({ navigation }) => {

  const handleSignOut = () => {
    auth.signOut().then(() => navigation.replace("Login")).catch((error) => {
      //setValidationMessage(error.message);
      console.log(error.message)
    })
  }

  return (
    <ScrollView >
      <View
        style={stylesHome.container}
        behavior="padding"
      >
        <View style={stylesHome.headerOptions} >
          <View style={stylesHome.titleContainer} >
            <Text style={stylesHome.title}>
              Opciones
            </Text>

            <TouchableOpacity onPress={() => handleSignOut()}>
              <Text style={[stylesHome.title, { padding: 10, backgroundColor: '#589BDE', borderRadius: 10, color: '#fff' }]}>
                Cerrar Sesión
              </Text>
            </TouchableOpacity>

          </View>

          <View style={stylesHome.containerIcons}>

            <OptionHome source={require('../assets/img/cart.png')} text={"Carrito"} style={{ borderRadius: 50 }} />

            <OptionHome source={require('../assets/img/bolsas.png')} text={"Compras"}/>

            <OptionHome source={require('../assets/img/mascarilla.png')} text={"Salud"} />

          </View>

          <View style={stylesHome.containerIcons}>

            <OptionHome source={require('../assets/img/globito.png')}text={"Aniversario"}/>

            <OptionHome source={require('../assets/img/smartphone.png')} text={"WhatsApp"}/>

            <OptionHome source={require('../assets/img/caja.png')} text={"Envío"}/>

          </View>

        </View>

        <View
          style={stylesHome.expansibleContainer}>
          <FlatList
            data={dataCollapsible}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <AcordeonItem id={item.id} title={item.title} bodyText={item.content} />
            )}

          />
        </View>

      </View>
    </ScrollView>
  )
}

export default HomeScreen
