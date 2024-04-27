import { useNavigation } from '@react-navigation/native'
import React,{ useState } from 'react'
import {View, Text, Image, Pressable} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const WelcomeScreen: React.FC = (props:any) => {
    const [state, setState] = useState({
        user: "test"
    });
    const navigation = useNavigation();
    return(
        <SafeAreaView className="flex-1" style={{backgroundColor: "#6a5acd" }}>
            <View className="flex-1 flex justify-around my-4">
                <Text className="text-white font-bold text-4xl text-center">Let's Get Stated!</Text>
                <View className="flex-row justify-center">
                    <Image source={require("../assets/expense-tracker-app.png")} style={{width:350,height:350}}/>
                </View>
                <View className="space-y-4">
                    <Pressable className="py-3 bg-yellow-400 mx-7 rounded-xl" onPress={()=> {navigation.navigate('SignUp' as never)}}>
                        <Text className="tesxt-xl font-bold text-center text-gray-700"> Sign Up</Text>
                    </Pressable>
                    <View className="flex-row justify-center">
                        <Text className="text-white font-semibold">Already have an account?</Text>
                        <Pressable onPress={()=> {navigation.navigate('Login' as never)}}>
                            <Text className="font-semibold text-yellow-400"> Log In </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            
        </SafeAreaView>
    )
}
export default WelcomeScreen;