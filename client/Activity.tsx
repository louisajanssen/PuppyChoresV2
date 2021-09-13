import * as React from "react";
import { IfoodActivity, IpottyActivity } from './Datatypes';
import { Stack, IStackTokens } from '@fluentui/react/lib/Stack';

interface IProps {
  moment: IpottyActivity | IfoodActivity
}

const containerStackTokens: IStackTokens = { childrenGap: 5 };

export const Activity: React.FC<IProps>= ({moment}: IProps) => {

  
  if (moment.activityType === 'potty') {
    return (
      <Stack tokens={containerStackTokens}>
        <Stack.Item align="center">Potty: {moment.pottyType}</Stack.Item>
      </Stack>
    )
  }
  return (
    <Stack tokens={containerStackTokens}>
      <Stack.Item align="center">Food: {moment.notes}</Stack.Item>
    </Stack>
  )
}