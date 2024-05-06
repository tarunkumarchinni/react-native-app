import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, Image, Pressable } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { SafeAreaView } from 'react-native-safe-area-context'

const SplashScreen: React.FC = (props: any) => {
    return (
        <SafeAreaView className="flex-1" style={{ backgroundColor: "#6a5acd" }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <BouncingLetters text="Loading..." />
            </View>
        </SafeAreaView>
    )
}

const BouncingLetters = ({ text }) => {
    const renderBouncingLetters = () => {
        return text.split('').map((letter, index) => (
            <Animatable.Text
                key={index}
                iterationCount="infinite"
                animation="bounce"
                direction="alternate-reverse"
                delay={(index + text.length) * 100}
                className="text-white font-bold text-4xl text-center"
                style={{ marginRight: 5 }}
            >
                {letter}
            </Animatable.Text>
        ));
    };

    return (
        <View style={{ flexDirection: 'row'}}>
            {renderBouncingLetters()}
        </View>
    );
};

export default SplashScreen
