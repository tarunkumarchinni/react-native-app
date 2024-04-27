import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card } from 'react-native-paper';
interface IProps {
    cardName: string;
    totalAmount?: string | null;
    imageUrl: string;
}
const CardComponent: React.FC<IProps> = (props:IProps) =>  {
  return (
    <Card>
      <Card.Cover source={{ uri: props.imageUrl }} />
      <Card.Title title={props.cardName} />
      <Card.Content>
        <Text>Spent Amount :{props.totalAmount}</Text>
      </Card.Content>
    </Card>
  );
};

export default CardComponent;