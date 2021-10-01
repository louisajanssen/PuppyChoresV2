import { Dropdown, getTheme, IDropdownOption, IDropdownStyles } from '@fluentui/react';
import * as React from "react";

const theme = getTheme();
const mainDivStyles = {
  boxShadow: theme.effects.elevation8,
  width: 600,
  padding: 25,
  align: 'center'
}
const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 300 },
};

export const ChooseMoment: React.FC = () => {

  const optionsDrop: IDropdownOption[] = [
    { key: 'One', text: 'Potty'},
    { key: 'Two', text: 'Food' },
  ];

  return (
    <div style={mainDivStyles}>
      <Dropdown
        placeholder="Select an option!"
        label="What did your puppy do?"
        styles={dropdownStyles}
        options={optionsDrop}
      />
    </div>
  )

}