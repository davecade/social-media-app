import {Text} from 'react-native';
import React from 'react';
import style from './style';

type titkeProps = {
  title: string;
};

const Title = ({title}: titkeProps) => {
  return <Text style={style.title}>{title}</Text>;
};

export default Title;
