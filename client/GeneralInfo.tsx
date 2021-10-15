import * as React from "react";
import { TextField, getTheme, Stack, IStackStyles, IStackTokens, IStackItemStyles, DefaultPalette, Text } from '@fluentui/react';

const theme = getTheme();

const stackStyles: IStackStyles = {
  root: {
    background: DefaultPalette.white,
    paddingTop: 80
  },
};
const stackItemStyles: IStackItemStyles = {
  root: {
    background: DefaultPalette.white,
    color: DefaultPalette.black,
    display: 'flex',
    height: 50,
    justifyContent: 'center',
  },
};
const imgStackItemStyles: IStackItemStyles ={
  root: {
    background: DefaultPalette.white,
    color: DefaultPalette.black,
    padding: 5,
  },
}
const mainStackItemStyles: IStackItemStyles ={
  root: {
      background: DefaultPalette.white,
      color: DefaultPalette.black,
      padding: 5,
    },
}
// const stackTokens: IStackTokens = {
//   childrenGap: 5,
//   padding: 10,
// };
const itemAlignmentsStackTokens: IStackTokens = {
  childrenGap: 5,
  padding: 10,
};

const mainDivStyles = {
  boxShadow: theme.effects.elevation64,
  width: 600,
  padding: 25,
  align: 'center'
}

const styledImg = {
  borderRadius: 100,
  paddingReft: 40
}

const textStyles = {
  color: '#073920'
}

  export const GeneralInfo: React.FC = () => {

    return (
      <Stack styles={stackStyles} tokens={itemAlignmentsStackTokens}>
          <Stack.Item align="center" styles={mainStackItemStyles}>
          <div style={mainDivStyles}>
            <Stack.Item align="start" grow={2} styles={imgStackItemStyles}>
              <img style={styledImg} width="100" src="../images/Miko2.jpg"></img>
            </Stack.Item>
            <Stack.Item align="center" grow={2} styles={stackItemStyles}>
              <Text variant="xLarge" style={textStyles} >MIKO | 3 years old</Text>
            </Stack.Item>
            <TextField label="Breed:" readOnly placeholder="Mini Australian Shepherd"/>
            <TextField label="Birthday:" readOnly placeholder="10/27/17"/>
            <TextField label="Food:" readOnly placeholder="Royal Canine"/>
            <TextField label="Favorite Treats:" readOnly placeholder="Carrot, Salmon, Cheese"/>
            <TextField label="Vet:" readOnly placeholder="Eastside Vet Associates"/>
          </div>
          </Stack.Item>
        </Stack>
    );
  }