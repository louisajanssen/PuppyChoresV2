import * as React from "react";
import { DefaultButton } from '@fluentui/react';
import { Stack, IStackTokens } from '@fluentui/react/lib/Stack';

const containerStackTokens: IStackTokens = { childrenGap: 5 };

export const AddMomentButton: React.FC = () => {

  return (
    <Stack tokens={containerStackTokens}>
      <Stack.Item align="center">
        <DefaultButton styles={iconButtonStyles} text="Add New Moment" />
      </Stack.Item> 
    </Stack>
  )
}

const iconButtonStyles = {
  root: {
    backgroundColor: '#073920',
    color: 'white',
    marginLeft: 'auto',
    marginTop: '4px',
    marginRight: '2px',
    align: 'center',
  },
};