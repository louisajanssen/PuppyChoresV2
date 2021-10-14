import { DefaultButton, DefaultPalette, Dropdown, getTheme, IDropdownOption, IDropdownStyles, IStackItemStyles, IStackStyles, IStackTokens, Stack, Text, TextField, Toggle } from '@fluentui/react';
import * as React from "react";

const theme = getTheme();
const mainDivStyles = {
  boxShadow: theme.effects.elevation8,
  width: 600,
  padding: 25,
  align: 'center'
}

// const stackItemStyles: IStackItemStyles ={
//   root: {
//       padding: 15,
//     },
// }
const containerStackTokens: IStackTokens = { childrenGap: 5 };

const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 200 },
};

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
const stackTokens: IStackTokens = {
  childrenGap: 5,
  padding: 10,
};


export const ChooseMoment: React.FC = () => {
  const [momentType, setMomentType] = React.useState('')

  const optionsDrop: IDropdownOption[] = [
    { key: 'One', text: 'I went Number 1!'},
    { key: 'Two', text: 'I went Number 2!' },
  ];


  if (momentType === '') {
    return (
      <div style={mainDivStyles}>
        <Stack tokens={containerStackTokens}>
          <Stack.Item align="center" styles={stackItemStyles}>
            <DefaultButton styles={iconButtonStyles} text="Potty" onClick={() => setMomentType("Potty")}/> 
          </Stack.Item> 
          <Stack.Item align="center" styles={stackItemStyles}>
            <DefaultButton styles={iconButtonStyles} text="Food" onClick={() => setMomentType("Food")}/>
          </Stack.Item>
        </Stack>
      </div>
    )
  } else if (momentType === "Potty") {
    return (
      <div style={mainDivStyles}>
        <Stack styles={stackStyles} tokens={stackTokens}>
          <Stack.Item grow={2} styles={stackItemStyles}>
            <Dropdown
              placeholder="Select an option!"
              label="What did your puppy do?"
              styles={dropdownStyles}
              options={optionsDrop}
            />
          </Stack.Item>
        </Stack>
        <Stack styles={stackStyles} tokens={stackTokens}>
          <Stack.Item grow={2} styles={stackItemStyles}>
            <TextField label="Do you want to add any notes?:"/>
          </Stack.Item>
          <Stack.Item grow={2} styles={stackItemStyles}>
            <DefaultButton styles={iconButtonStyles} text="Save"/>
          </Stack.Item>
        </Stack>
      </div>
    )
  } else if (momentType === "Food") {
    return (
      <div style={mainDivStyles}>
        <Stack styles={stackStyles} tokens={stackTokens}>
          <Stack.Item grow={2} styles={stackItemStyles}>
          <Toggle label="Did your puppy finish their food?" onText="Yes" offText="No" />
          </Stack.Item>
        </Stack>
        <Stack styles={stackStyles} tokens={stackTokens}>
          <Stack.Item grow={2} styles={stackItemStyles}>
            <TextField label="Do you want to add any notes?:"/>
          </Stack.Item>
          <Stack.Item grow={2} styles={stackItemStyles}>
            <DefaultButton styles={iconButtonStyles} text="Save"/>
          </Stack.Item>
        </Stack>
      </div>
    )
  }

  return (
    <div>
      <Text>Loading...</Text>
    </div>
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