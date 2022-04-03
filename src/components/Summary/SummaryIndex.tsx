import React from 'react';
import {Icon} from '@ui-kitten/components';

interface ISummaryIndex {
  type: string;
  style: any;
  rest?: any;
}

const SummaryIndex = (props: ISummaryIndex) => {
  const {type, style, ...rest} = props;

  const iconTypes: Record<string, {color: string; icon: string}> = {
    default: {
      color: '#4CB6A2',
      icon: 'diagonal-arrow-right-down-outline',
    },
    critical: {
      color: '#FF5757',
      icon: 'diagonal-arrow-right-up-outline',
    },
  };

  return (
    <Icon
      name={iconTypes[type].icon}
      fill={iconTypes[type].color}
      style={style}
      {...rest}
    />
  );
};

export default SummaryIndex;
