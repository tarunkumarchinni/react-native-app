import React,{ useState } from 'react'
import {View, Text, FlatList, Image, Pressable } from 'react-native'
import { UserIcon, ArrowLeftIcon, ChartBarIcon } from 'react-native-heroicons/solid';
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-virtualized-view'
import DashboardCard from './DashboardCard'
import MyFlatList from './HorizontalCards'
import EntityCard from './EntityCard'
import { useNavigation } from '@react-navigation/native'
import CardComponent from './CardComponent'
const DashboardScreen: React.FC = (props:any) => {
    const navigation = useNavigation();
    const [user, setUser] = React.useState<string | null>("Marco");
    return(
        <>
        <ScrollView style={{backgroundColor: "white" }}>
        <SafeAreaView  className="rounded-3xl" style={{backgroundColor: "#6a5acd" }}> 
        {/* #FF7700 */}
            <View className="h-[30px] z-20 flex flex-row justify-between items-center px-2">
                <View className='flex flex-row gap-4 justify-center items-center'>
                    <View className="flex-row justify-start">
                        <Pressable onPress={()=>navigation?.goBack()} className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4">
                            <ArrowLeftIcon size="20" color="black"/>
                        </Pressable>
                    </View>
                    <Text className='text-white text-xl'>Home</Text>
                </View>  
                <View className='w-[30px] h-[30px] bg-[#d4d1ce] justify-center items-center rounded-full'>
                    <UserIcon color="gray"/>
                </View>         
            </View>
            {/* <View className='w-full bg[#0c080c] h-[10%] rounded-[20px] absolute'/> */}
            <Text className='text-white mt-[20px] text-2xl text-bold ml-[20px]'>
                Hello, {user}
            </Text>
            <DashboardCard cardTitle="Total Balance" totalAmount={"$3960.00"} dateText="27-04-2024" icon={<ChartBarIcon color="#008D96" size={60}/>} />
        </SafeAreaView>
        {/* <View className="flex items-center justify-center">
            <View className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4"> */}
            {/* <FlatList
                horizontal={true}
                data={cardsData}
                keyExtractor={(item) => item.id}
                // numColumns={2}
                showsHorizontalScrollIndicator = {false}
                stickyHeaderHiddenOnScroll ={true}
                ListHeaderComponent={<Text>{"test"}</Text>}
                renderItem={({ item }) => <Card cardName={item.cardName} imageUrl={item.imageUrl} totalAmount={item.totalAmount}/>}
            /> */}
            <MyFlatList />
            {/* {
                cardsData?.map((item)=> <Card key={item.id} cardName={item.cardName} imageUrl={item.imageUrl} totalAmount={item.totalAmount}/>)
            } */}
            {/* </View>         
        </View> */}
        </ScrollView>
        </>
    )
}

const cardsData = [
    { id: '1', cardName: 'Food', imageUrl: "https://th.bing.com/th/id/R.522343a634b19609e1a7aa4c07c1f06f?rik=%2frWHbvZNYH3sEw&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f7%2fFresh-Healthy-Food-Background-PNG.png&ehk=RMFfsyzz4JN01DHevfe6EI9g0n8ghU7z3Eh5XHbJeUc%3d&risl=&pid=ImgRaw&r=0", totalAmount: "$230"},
    { id: '3', cardName: 'Transport', imageUrl: "https://www.pngall.com/wp-content/uploads/8/Vector-Travel-PNG-Free-Download.png", totalAmount: "$430" },
    { id: '4', cardName: 'Entertainment', imageUrl: "https://png.pngtree.com/png-clipart/20220723/ourmid/pngtree-entertainment-icon-png-image_6034079.png", totalAmount: "$270" },
    { id: '5', cardName: 'Sports', imageUrl: "https://th.bing.com/th/id/OIP.V4xg8zeAWuB1u0OGS5uC0QAAAA?rs=1&pid=ImgDetMain", totalAmount: "$180" },
    { id: '6', cardName: 'Electronics', imageUrl: "https://th.bing.com/th/id/OIP.5pMrPA_5IlOrnXTq2SxQaAHaDa?w=298&h=180&c=7&r=0&o=5&pid=1.7", totalAmount: "$2300" },
    { id: '7', cardName: 'Groceries', imageUrl: "https://th.bing.com/th/id/OIP.BHpZFPqbgu-pMX0EFkaQiAHaGP?rs=1&pid=ImgDetMain", totalAmount: "$340" },
    { id: '2', cardName: 'Bills', imageUrl: "https://th.bing.com/th/id/OIP.7vEjrMFqGOgrFqN8JMaeaQHaHa?rs=1&pid=ImgDetMain", totalAmount: "$210" },
];

const Card = ({ cardName, imageUrl, totalAmount }) => (
    <View className='w-1/2 p-4'>
        {/* <Image source={{ uri: require('../assets/food.png') }} className='h-40 rounded-md' /> */}
        {/* <EntityCard cardName={cardName} totalAmount={totalAmount} imageUrl={imageUrl}/> */}
        <CardComponent
                    imageUrl={imageUrl}
                    cardName={cardName}
                    totalAmount={totalAmount}
                />
    </View>
);
export default DashboardScreen;