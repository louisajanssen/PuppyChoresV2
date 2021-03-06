import * as React from "react";
import { IfoodActivity, IpottyActivity } from './Datatypes';
import { Text, TextField, DefaultPalette, Stack, IStackStyles, IStackTokens, IStackItemStyles, getTheme } from '@fluentui/react';

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

const theme = getTheme();

const mainDivStyles = {
  boxShadow: theme.effects.elevation64,
  width: 400,
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

//const containerStackTokens: IStackTokens = { childrenGap: 5 };

export const Activity: React.FC<IProps>= ({moment}: IProps) => {


  if (moment.activityType === 'potty') {
    const getPottyType = () => {
      if (moment.pottyType === "pee") {
        return "I went Number 1!"
      } else {
        return "I went Number 2!"
      }
    }
    const getIconUrl = () => {
      if (moment.pottyType === "poo") {
        return "https://img.icons8.com/ios/50/000000/dog-pooping.png"
      } else {
        return "https://img.icons8.com/ios/50/000000/dog-pee.png"
      }
    }
    return (
      <Stack styles={ stackStyles } tokens={ itemAlignmentsStackTokens }>
        <Stack.Item align="center" styles={ mainStackItemStyles }>
          <div style={mainDivStyles}>
           <Stack horizontal styles={ stackStyles } tokens={stackTokens}>
            <Stack.Item grow={ 2 } styles={ stackItemStyles }>
              <img src={ getIconUrl() }/>
            </Stack.Item>
            <Stack.Item grow={ 2 } styles={ stackItemStyles }>
              <Text style={textStyle}>{getPottyType()}</Text>
            </Stack.Item>
            <Stack.Item grow={ 2 } styles={ stackItemStyles }>
              <Text variant="medium">on</Text>
            </Stack.Item>
            <Stack.Item grow={ 2 } styles={ stackItemStyles }>
              { moment.date.toLocaleDateString() }
            </Stack.Item>
          </Stack>
          <Stack styles={stackStyles} tokens={stackTokens}>
            <Stack.Item grow={ 2 } styles={stackItemStyles}>
              <TextField label="Notes:" readOnly multiline rows={2} value={moment.notes}/>
            </Stack.Item>
          </Stack>
         </div>
        </Stack.Item>
      </Stack>
    )
  } else if (moment.activityType === 'food') {

    const getFoodStatus = () => {
      if (moment.finishFood === true) {
        return "I finished my food"
      } else {
        return "I didn't finish my food"
      }
    }
    const getIcon = () => {
      if (moment.finishFood === true) {
        return "https://img.icons8.com/ios/50/000000/dog-bowl.png"
      } else {
        return "https://img.icons8.com/ios/50/000000/empty-dog-bowl.png"
      }
    }

    return (
      
      <Stack styles={ stackStyles } tokens={ itemAlignmentsStackTokens }>
        <Stack.Item align="center" styles={ mainStackItemStyles }>
          <div style={ mainDivStyles }>
          <Stack horizontal styles={ stackStyles } tokens={ stackTokens }>
            <Stack.Item grow={ 2 } styles={ stackItemStyles }>
              <img src={ getIcon() }/>
            </Stack.Item>
            <Stack.Item grow={ 2 } styles={stackItemStyles}>
              <Text style={ textStyle }>{ getFoodStatus() }</Text>
            </Stack.Item>
            <Stack.Item grow={ 2 } styles={stackItemStyles}>
              <Text variant="medium">on</Text>
            </Stack.Item>
            <Stack.Item grow={ 2 } styles={stackItemStyles}>
              { moment.date.toLocaleDateString() }
            </Stack.Item>
          </Stack>
            <Stack styles={ stackStyles } tokens={ stackTokens }>
              <Stack.Item grow={ 2 } styles={ stackItemStyles }>
                <TextField label="Notes:" readOnly multiline rows={ 2 } value={ moment.notes }/>
              </Stack.Item>
            </Stack>
          </div>
        </Stack.Item>
      </Stack>
    )
  }

  return (
    <div>
      <Text>Error...</Text>
    </div>
  )
}