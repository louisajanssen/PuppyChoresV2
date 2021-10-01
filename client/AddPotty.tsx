import { DefaultPalette, Dropdown, getTheme, IDropdownOption, IDropdownStyles, IStackItemStyles, IStackStyles, IStackTokens, Stack, TextField } from '@fluentui/react';
import * as React from "react";

const theme = getTheme();
const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 300 },
};
const mainDivStyles = {
  boxShadow: theme.effects.elevation8,
  width: 600,
  padding: 25,
  align: 'center'
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
const stackTokens: IStackTokens = {
  childrenGap: 5,
  padding: 10,
};

export const AddPotty: React.FC = () => {

  const optionsDrop: IDropdownOption[] = [
    { key: 'One', text: 'I went Number 1!'},
    { key: 'Two', text: 'I went Number 2!' },
  ];

  return (
    <div style={mainDivStyles}>
      <Stack styles={stackStyles} tokens={stackTokens}>
        <Dropdown
          placeholder="Select an option!"
          label="What did your puppy do?"
          styles={dropdownStyles}
          options={optionsDrop}
        />
      </Stack>
      <Stack styles={stackStyles} tokens={stackTokens}>
            <Stack.Item grow={2} styles={stackItemStyles}>
              <TextField label="Do you want to add any notes?:"/>
            </Stack.Item>
      </Stack>
    </div>
  )

}