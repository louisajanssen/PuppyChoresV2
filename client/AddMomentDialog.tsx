import * as React from "react";
import { DefaultButton, getTheme, IconButton, IIconProps, mergeStyleSets, Modal } from '@fluentui/react';
import { Stack, IStackTokens, IStackItemStyles } from '@fluentui/react/lib/Stack';
import { useBoolean } from '@fluentui/react-hooks';
import { ChooseMoment } from './ChooseMoment';
import { IfoodActivity, IpottyActivity } from './Datatypes';

const containerStackTokens: IStackTokens = { childrenGap: 5 };

const cancelIcon: IIconProps = { iconName: 'Cancel' };

const stackItemStyles: IStackItemStyles ={
  root: {
      padding: 15,
  },
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
const theme = getTheme();
const contentStyles = mergeStyleSets({
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'stretch',
  },
  header: [
    theme.fonts.xLarge,
    {
      flex: '1 1 auto',
      borderTop: `4px solid #134018`,
      color: theme.palette.neutralPrimary,
      display: 'flex',
      alignItems: 'center',
      padding: '12px 12px 14px 24px',
    },
  ],
  body: {
    flex: '4 4 auto',
    padding: '0 24px 24px 24px',
    overflowY: 'hidden',
    selectors: {
      p: { margin: '14px 0' },
      'p:first-child': { marginTop: 0 },
      'p:last-child': { marginBottom: 0 },
    },
  },
});

interface IProps {
  onSubmitPotty: (pottyObject: IpottyActivity) => void
  onSubmitFood: (pottyObject: IfoodActivity) => void
}

export const AddMomentButton: React.FC<IProps> = ({onSubmitPotty, onSubmitFood}: IProps) => {
  const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] = useBoolean(false);

  return (
    <div>
      <Stack tokens={containerStackTokens}>
        <Stack.Item align="center" styles={stackItemStyles}>
          <DefaultButton styles={iconButtonStyles} text="Add New Moment" onClick={showModal} />
        </Stack.Item> 
      </Stack>
      <Modal
        isOpen={ isModalOpen }
        onDismiss={ hideModal }
        isBlocking={ false }
        containerClassName={ contentStyles.container }
      >
        <div className={ contentStyles.header }>
          <span style={ {paddingLeft: '20px'} }>Add A New Moment</span>
          <IconButton
            styles={ iconButtonStyles }
            iconProps={ cancelIcon }
            ariaLabel="Close popup modal"
            onClick={ hideModal }
          />
        </div>
        <div className={contentStyles.body}>
          <div><ChooseMoment onSubmitPotty={ onSubmitPotty } onSubmitFood={ onSubmitFood }/></div>
        </div>
      </Modal>
    </div>
  )
}

