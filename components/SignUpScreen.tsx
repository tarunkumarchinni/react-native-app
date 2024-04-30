import { useNavigation } from '@react-navigation/native'
import React,{ useState } from 'react'
import {View, Text, Image,TextInput, Pressable} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid'

const SignUpScreen: React.FC = (props:any) => {
    const [state, setState] = useState({
        user: "test"
    });
    const navigation = useNavigation();
    return (
        <View className="flex-1 bg-white" style={{backgroundColor: "#6a5acd"}}>
            <SafeAreaView className="flex">
                <View className="flex-row justify-start">
                    <Pressable onPress={()=>navigation.goBack()} className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4">
                        <ArrowLeftIcon size="20" color="black"/>
                    </Pressable>
                </View>
                <View className="flex-row justify-center">
                    <Image source={require('../assets/expense-tracker-app.png')} style={{width:165,height:110}} />
                </View>
            </SafeAreaView>
            <View className="flex-1 bg-white px-8 pt-8" style={{borderTopLeftRadius: 50, borderTopRightRadius:50}}>
                <View className ="form space-y-2">
                    <Text className="text-gray-700 ml-4">Name</Text>
                    <TextInput className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3" value="Marco" placeholder="Enter Full Name"/>
                    <Text className="text-gray-700 ml-4">Email Adress</Text>
                    <TextInput className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3" value="marco@gmail.com" placeholder="Enter Email"/>
                    <Text className="text-gray-700 ml-4">Password</Text>
                    <TextInput className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-7" secureTextEntry value="test@1235" placeholder="Enter Password"/>
                    <Pressable className="py-3 bg-yellow-400 rounded-xl">
                        <Text className="font-xl font-bold text-center text-gray-700">Sign Up</Text>
                    </Pressable>
                </View>
                {/* <Text className="text-xl text-gray-700 font-bold text-center py-5">
                    Or
                </Text>
            
                <View className="flex-row justify-center space-x-12">
                    <Pressable>
                        <Image source={require('../assets/expense-tracker-app.png')} className="w-10 h-10"/>
                    </Pressable> 
                    <Pressable>
                        <Image source={require('../assets/expense-tracker-app.png')} className="w-10 h-10"/>
                    </Pressable> 
                    <Pressable>
                        <Image source={require('../assets/expense-tracker-app.png')} className="w-10 h-10"/>
                    </Pressable> 
                </View> */}
                <View className="flex-row justify-center mt-3">
                    <Text className="text-gary-500 font-semibold">Already have an account?</Text>
                    <Pressable onPress={()=> navigation.navigate('Login' as never)}>
                        <Text className="font-semibold text-yellow-400"> Login</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}
export default SignUpScreen;