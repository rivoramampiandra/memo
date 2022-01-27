import React from 'react';
import {Icon} from '@ui-kitten/components';

interface ISummaryIndex {
  type: string;
  rest: any;
}

const SummaryIndex = (props: ISummaryIndex) => {
  const {type, ...rest} = props;

  const iconTypes: Record<string, {color: string; icon: string}> = {
    default: {
      color: '#4CB6A2',
      icon: 'diagonal-arrow-right-up-outline',
    },
    critical: {
      color: '#FF5757',
      icon: 'diagonal-arrow-right-down-outline',
    },
  };

  return (
    <Icon name={iconTypes[type].icon} fill={iconTypes[type].color} {...rest} />
  );
};

export default SummaryIndex;
