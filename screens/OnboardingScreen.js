import React from 'react'
import { View, Text, Button, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) => {
    const Dots = ({selected}) => {
        let backgroundColor;

        backgroundColor = selected ? 'rgba(0, 0, 0, 0.0)' : 'rgba(0, 0, 0, 0.0)'
        return(
            <View style={{
                width:5,
                height:5,
                marginHorizontal: 3,
                backgroundColor
            }}/>

        )
    }
    const Skip = ({...props}) => {
        return(
            <Button
            title="Skip"
            color="#000000"
            />
        )
    }

    const Next = ({...props}) => {
        return(
            <Button
                title="Next"
                color="#000000"
                {...props}
            />
        )
    }

    const Done = ({...props}) => {
        return(
            <TouchableOpacity
            style={{marginHorizontal: 10}}
            {...props}
            >
                <Text style={{fontSize: 16}}>Done</Text>
            </TouchableOpacity>
            
        )
    }

    return (
        <Onboarding
            SkipButtonComponent={Skip}
            NextButtonComponent={Next}
            DoneButtonComponent={Done}
            DotComponent={Dots}
            onSkip={() => navigation.replace('Login')}
            onDone={() => navigation.navigate('Login')}
            pages={[
                {
                    backgroundColor: '#a6e4d0',
                    image: <Image source={require('../assets/icon.png')} />,
                    title: 'Onboarding 1',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#fdeb93',
                    image: <Image source={require('../assets/icon.png')} />,
                    title: 'Onboarding 2',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/icon.png')} />,
                    title: 'Connected to the world',
                    subtitle: 'Done with React Native Onboarding Swiper',
                }
            ]}
        />
    )
}

export default OnboardingScreen
