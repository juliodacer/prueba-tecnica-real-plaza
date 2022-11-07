import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';
import React, { useRef, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import dataCollapsible from '../data/dataCollapsible';
import { Transition, Transitioning } from 'react-native-reanimated';

const transition = (
  <Transition.Together>
    <Transition.in type='fade' durationMs={200} />
    <Transition.Change />
    <Transition.Out type='fade' durationMs={200} />
  </Transition.Together>
);

const HomeScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const ref = useRef()

  return (
    <View
      ref={ref}
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={60}
    >
      <View style={styles.headerOptions} >
        <View style={styles.titleContainer} >
          <Text style={styles.title}>
            Opciones
          </Text>
        </View>

        <View style={styles.containerIcons}>
          <View style={styles.optionsContainer}>
            <View style={styles.circleView}>
              <Image source={require('../img/cart.png')} style={[styles.image, { borderRadius: 50 }]} />
            </View>
            <Text style={{ marginTop: 5, fontSize: 12 }} >Carrito</Text>
          </View>

          <View style={styles.optionsContainer}>
            <View style={styles.circleView}>
              <Image source={require('../img/bolsas.png')} style={styles.image} />
            </View>
            <Text style={{ marginTop: 5, fontSize: 12 }} >Carrito</Text>
          </View>

          <View style={styles.optionsContainer}>
            <View style={styles.circleView}>
              <Image source={require('../img/mascarilla.png')} style={styles.image} />
            </View>
            <Text style={{ marginTop: 5, fontSize: 12 }} >Carrito</Text>
          </View>

        </View>

        <View style={styles.containerIcons}>
          <View style={styles.optionsContainer}>
            <View style={styles.circleView}>
              <Image source={require('../img/globito.png')} style={styles.image} />
            </View>
            <Text style={{ marginTop: 5, fontSize: 12 }} >Carrito</Text>
          </View>

          <View style={styles.optionsContainer}>
            <View style={styles.circleView}>
              <Image source={require('../img/smartphone.png')} style={styles.image} />
            </View>
            <Text style={{ marginTop: 5, fontSize: 12 }} >Carrito</Text>
          </View>

          <View style={styles.optionsContainer}>
            <View style={styles.circleView}>
              <Image source={require('../img/caja.png')} style={styles.image} />
            </View>
            <Text style={{ marginTop: 5, fontSize: 12 }} >Carrito</Text>
          </View>

        </View>

      </View>

      <View
        style={styles.expansibleContainer}>
        {dataCollapsible.map(({ title, content }, index) => {
          return (
            <TouchableOpacity
              key={title}
              onPress={() => {
                setCurrentIndex(index === currentIndex ? null : index)
              }}
              style={styles.cardExpansibleContainer}>
              <View style={styles.card} >
                <Text style={styles.textCard}>{title}</Text>
                {
                  index === currentIndex ? <Icon name="keyboard-arrow-up" style={styles.iconInput} /> :
                    <Icon name="keyboard-arrow-down" style={styles.iconInput} />
                }
              </View>
              {
                index === currentIndex && <View style={styles.contentContainer} >
                  <Text style={styles.contentText} >{content}</Text>
                </View>
              }
            </TouchableOpacity>
          )
        })}

      </View>

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  headerOptions: {
    marginHorizontal: 25,
  },
  titleContainer: {
    marginTop: 40,
    alignItems: 'flex-start'
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
    padding: 2
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
    backgroundColor: '#F5F5F5',
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