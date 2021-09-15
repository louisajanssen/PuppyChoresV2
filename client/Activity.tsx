import * as React from "react";
import { IfoodActivity, IpottyActivity } from './Datatypes';
import { Text, DefaultPalette, Stack, IStackStyles, IStackTokens, IStackItemStyles, getTheme } from '@fluentui/react';

interface IProps {
  moment: IpottyActivity | IfoodActivity
}

const stackStyles: IStackStyles = {
  root: {
    background: DefaultPalette.white,
  },
};

const stackItemStyles: IStackItemStyles = {
  root: {
    alignItems: 'center',
    background: DefaultPalette.white,
    color: DefaultPalette.black,
    display: 'flex',
    height: 50,
    justifyContent: 'center',
  },
};

const mainStackItemStyles: IStackItemStyles ={
  root: {
      background: DefaultPalette.white,
      color: DefaultPalette.black,
      padding: 5,
    },
}

const divStyles = {
  padding: 10
}

const theme = getTheme();

const mainDivStyles = {
  boxShadow: theme.effects.elevation64,
  width: 600,
  padding: 25,
  align: 'center'
}

const textStyle = {
  border: '2px solid #black'
}

const stackTokens: IStackTokens = {
  childrenGap: 5,
  padding: 10,
};

const itemAlignmentsStackTokens: IStackTokens = {
  childrenGap: 5,
  padding: 10,
};

const containerStackTokens: IStackTokens = { childrenGap: 5 };

export const Activity: React.FC<IProps>= ({moment}: IProps) => {


  if (moment.activityType === 'potty') {
    const getPottyType = () => {
      if (moment.pottyType === "pee") {
        return "I went Number 1!"
      } else {
        return "I went Number 2!"
      }
    }
    return (
      <Stack styles={stackStyles} tokens={itemAlignmentsStackTokens}>
        <Stack.Item align="center" styles={mainStackItemStyles}>
          <div style={mainDivStyles}>
          <Stack horizontal styles={stackStyles} tokens={stackTokens}>
            <Stack.Item grow={2} styles={stackItemStyles}>
              <Text style={textStyle}>{getPottyType()}</Text>
            </Stack.Item>
            <Stack.Item grow={2} styles={stackItemStyles}>
              <Text variant="medium">on</Text>
            </Stack.Item>
            <Stack.Item grow={2} styles={stackItemStyles}>
              Date
            </Stack.Item>
            <div style={divStyles}><br/>
              <Text>Notes:</Text><br/>
              <Text style={textStyle}>{moment.notes}</Text>
            </div>
          </Stack>
         </div>
        </Stack.Item>
      </Stack>
    )
  }
  return (
    <Stack tokens={containerStackTokens}>
      <Stack.Item align="center">Food: {moment.notes}</Stack.Item>
    </Stack>
  )
}