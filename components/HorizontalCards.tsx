import React from 'react';
import { View, Text, FlatList, TouchableOpacity, DimensionValue, Pressable } from 'react-native';

const CardItem = ({ courseName, coursePercentage }) => {
  return (
  // <View style={{ backgroundColor: 'lightgray', padding: 10, margin: 10, height: '50px' }}>
  //   <Text>{title}</Text>
  // </View>
  <View className="bg-[#fde047] rounded-2xl min-w-[40px] min-h-[80px] mx-[8px] py-[10px] px-[30px]">
            <Text className="text-[#dc2626] text-lg">{courseName}</Text>
            <View className="flex-row justify-between">
                <View className="justify-center items-start flex-1 pt-[5px]">
                    {/* <Text className="text-[#dc2626] text-2xl mb-[5px]">total ant</Text> */}
                    <View className="flex items-center justify-between">
                    {/* <Text className="text-slate-400 text-sm text-slate-500">Progress 4</Text> */}
                    <Text className="px-2 py-1 rounded-lg text-xs text-teal-400 font-medium min-w-[46px] text-center">{coursePercentage}%</Text>
                    </View>
                    <View className="w-full bg-slate-100 h-1 mb-6 mt-2">
                    <View className="bg-teal-400 h-1 rounded" style={{width: `${coursePercentage}%`}}></View>
                    </View>
                    {/* <Text className="text-white text-sm">date text</Text> */}
                </View>
            </View>
        </View>
)};
const MyFlatList: React.FC = (props:any) => {
  const data = [
    { id: '1', courseName: 'Java' , coursePercentage: 75},
    { id: '2', courseName: 'Javascript' , coursePercentage: 50},
    { id: '3', courseName: 'c' , coursePercentage: 25},
    { id: '4', courseName: 'QA Testing' , coursePercentage: 0},
    { id: '5', courseName: 'Social Science' , coursePercentage: 40},
    { id: '6', courseName: 'Biology' , coursePercentage: 60},
    { id: '7', courseName: 'Mathematics' , coursePercentage: 10},
    { id: '8', courseName: 'drawing' , coursePercentage: 5},
    // Add more card data here...
  ];

  const flatListRef = React.useRef(null);

  const renderCard = ({ item }) => <CardItem courseName={item.courseName} coursePercentage={item.coursePercentage}/>;

  const scrollToBottom = () => {
    flatListRef?.current?.scrollToEnd({ animated: true });
  };

  return (
    <View>
      {/* Your ListHeaderComponent */}
      <View className="flex-row justify-between" style={{ padding: 13 }}>
        <Text className='text-[#dc2626] text-lg'>Pending Courses</Text>
        <Pressable onPress={scrollToBottom}>
          <Text >View All</Text>
        </Pressable>
      </View>

      {/* Horizontal FlatList */}
      <FlatList
        ref={flatListRef}
        horizontal
        data={data}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator = {false}
      />
    </View>
  );
};

export default MyFlatList;
