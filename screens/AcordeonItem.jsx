import { LayoutAnimation, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import React, { useState, useRef } from 'react'
import { Animated } from 'react-native';
import { ToggleAnimation } from '../animations/toggleAnimation';

const AcordeonItem = ({id, title, bodyText }) => {

    const [showContent, setShowContent] = useState(false);
    const animationController = useRef(new Animated.Value(0)).current;

    const toggleListItem = () => {
        const config = {
            duration: 300,
            toValue: showContent ? 0 : 1,
            useNativeDriver: true
        };
        Animated.timing(animationController, config).start();
        LayoutAnimation.configureNext(ToggleAnimation);
        setShowContent(!showContent);
    };

    const arrowTransform = animationController.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg']
    });

    return (
        <View style={[styles.container, {backgroundColor: id === 0 ? '#9FCBF6' : '#F5F5F5'}]}>
            <TouchableOpacity activeOpacity={0.7} onPress={() => toggleListItem()}>
                <View style={styles.card}>
                    <Text style={styles.textCard}>{title}</Text>
                    <Animated.View style={{ transform: [{ rotateZ: arrowTransform }] }}>
                        <Icon name="keyboard-arrow-up" style={styles.iconInput}/>
                    </Animated.View>
                </View>
            </TouchableOpacity>
            {
                showContent && <View style={styles.cardContent}>
                    <Text style={styles.contentText} >{bodyText}</Text>
                </View>
            }
        </View>
    )
}

export default AcordeonItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    cardContent: {
        paddingHorizontal: 20,
        marginBottom: 30
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
       
    }
})