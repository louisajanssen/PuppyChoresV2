import { DefaultButton, DefaultPalette, Dropdown, getTheme, IDropdownOption, IDropdownStyles, IStackItemStyles, IStackStyles, IStackTokens, Stack, TextField } from '@fluentui/react';
import * as React from "react";
import { ActivityType, IfoodActivity, IpottyActivity } from './Datatypes';

const theme = getTheme();
const mainDivStyles = {
  boxShadow: theme.effects.elevation8,
  width: 600,
  padding: 25,
  align: 'center'
}
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

const divStyles = {
  paddingTop: 10,
  paddingBottom: 5,
}

interface IProps {
  onSubmitPotty: (pottyObject: IpottyActivity) => void
  onSubmitFood: (pottyObject: IfoodActivity) => void
}

export const ChooseMoment: React.FC<IProps> = ({onSubmitPotty, onSubmitFood}: IProps) => {
  const [momentType, setMomentType] = React.useState<ActivityType | undefined>(undefined)
  const [pottyNotes, setPottyNotes] = React.useState('')
  const [foodNotes, setFoodNotes] = React.useState('')
  const [peeOrPoo, setPeeOrPoo] = React.useState('')
  const [foodFinish, setFoodFinish] = React.useState(true)
  const [pottyPhoto, _setPottyPhoto] = React.useState('')
  const [foodPhoto, _setFoodPhoto] = React.useState('') // delete photo from everything
  

  const optionsDrop: IDropdownOption[] = [
    { key: 'One', text: 'I went Number 1!'},
    { key: 'Two', text: 'I went Number 2!' },
  ];

  const foodOptionsDrop: IDropdownOption[] = [
    { key: 'One', text: 'Yes'},
    { key: 'Two', text: 'No' },
  ];

  // onPottyTypeChange
  const onPottyChange = (_e: React.FormEvent<HTMLDivElement>, t: string | IDropdownOption<any> | undefined ) => {

    if (t === "I went Number1!") {
      setPeeOrPoo('pee')
    } else {
      setPeeOrPoo('poo')
    }
    
  }

  // onfoodStateChange
  const onFoodChange = (_e: React.FormEvent<HTMLDivElement>, t: string | IDropdownOption<any> | undefined ) => {

    if (t === "Yes") {
      setFoodFinish(true)
    } else {
      setFoodFinish(false)
    }

  }

  const onPottySaveClick = () => {

    const pottyObject: IpottyActivity = {
      id: 5,
      activityType: 'potty',
      date: new Date(),
      pottyType: peeOrPoo,
      notes: pottyNotes,
      photo: pottyPhoto
    }

    onSubmitPotty(pottyObject)

  }

  const onFoodSaveClick = () => {

    const foodObject: IfoodActivity = {
      id: 6,
      activityType: 'food',
      date: new Date(),
      finishFood: foodFinish,
      notes: foodNotes,
      photo: foodPhoto
    }

    onSubmitFood(foodObject)
  }


   if (momentType === 'potty') {
    return (
      <div style={mainDivStyles}>
        <Stack styles={stackStyles} tokens={stackTokens}>
          <Stack.Item grow={2} styles={stackItemStyles}>
            <Dropdown
              placeholder="Select an option!"
              label="What did your puppy do?"
              styles={dropdownStyles}
              options={optionsDrop}
              onChange={(_e, t) => onPottyChange(_e, t)}
            />
          </Stack.Item>
        </Stack>
        <Stack styles={stackStyles} tokens={stackTokens}>
          <div style={divStyles}>
            <Stack.Item grow={2} styles={stackItemStyles}>
              <TextField value={pottyNotes} onChange={(_e, t) => setPottyNotes(t ?? '')} multiline rows={3} label="Do you want to add any notes?"/>
            </Stack.Item>
          </div>
          <Stack.Item grow={2} styles={stackItemStyles}>
            <DefaultButton styles={iconButtonStyles} text="Save" onClick={() => onPottySaveClick()}/>
          </Stack.Item>
        </Stack>
      </div>
    )
  } else if (momentType === 'food') {
    return (
      <div style={mainDivStyles}>
        <Stack styles={stackStyles} tokens={stackTokens}>
          <Stack.Item grow={2} styles={stackItemStyles}>
            <Dropdown
              placeholder="Select an option!"
              label="Did your puppy finish the food?"
              styles={dropdownStyles}
              options={foodOptionsDrop}
              onChange={(_e, t) => onFoodChange(_e, t)}
            />
          </Stack.Item>
        </Stack>
        <Stack styles={stackStyles} tokens={stackTokens}>
          <div style={divStyles}>
            <Stack.Item grow={2} styles={stackItemStyles}>
              <TextField value={foodNotes} onChange={(_e, t) => setFoodNotes(t ?? '')} multiline rows={3} label="Do you want to add any notes?"/>
            </Stack.Item>
          </div>
          <Stack.Item grow={2} styles={stackItemStyles}>
            <DefaultButton styles={iconButtonStyles} text="Save" onClick={() => onFoodSaveClick()}/>
          </Stack.Item>
        </Stack>
      </div>
    )
  }

  return (
    <div style={mainDivStyles}>
        <Stack tokens={containerStackTokens}>
          <Stack.Item align="center" styles={stackItemStyles}>
            <DefaultButton styles={iconButtonStyles} text="Potty" onClick={() => setMomentType('potty')}/> 
          </Stack.Item> 
          <Stack.Item align="center" styles={stackItemStyles}>
            <DefaultButton styles={iconButtonStyles} text="Food" onClick={() => setMomentType('food')}/>
          </Stack.Item>
        </Stack>
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

