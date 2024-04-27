import { View, Text } from "react-native";
import React from "react";
import Svg,{ Path } from "react-native-svg";
interface IProps {
    cardName: string;
    totalAmount?: string | null;
    imageUrl: string;
}
const EntityCard: React.FC<IProps> = (props:IProps) => {
    return (
        <View className="relative bg-white py-6 px-6 rounded-3xl my-4 shadow-xl">
            <View className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6">
                 {/* <!-- svg  --> */} 
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg> */}
            </View>
            <View className="mt-8">
                <Text className="text-xl font-semibold ">{props?.cardName}</Text>
                <View className="flex space-x-2 text-gray-400 text-sm">
                    {/* <!-- svg  --> */} 
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg> */}
                     <Text>Marketing Team</Text> 
                </View>
                <View className="flex space-x-2 text-gray-400 text-sm my-3">
                    {/* <!-- svg  --> */} 
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg> */}
                     <Text>1 Weeks Left</Text> 
                </View>
                <View className="border-t-2"></View>

                <View className="flex justify-between">
                    <View className="my-2">
                        <Text className="font-semibold text-base mb-2">Team Member</Text>
                        <View className="flex space-x-2">
                            
                        </View>
                    </View>
                     <View className="my-2">
                        <Text className="font-semibold text-base mb-2">Progress</Text>
                        <View className="text-base text-gray-400 font-semibold">
                            <Text>34%</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default EntityCard;