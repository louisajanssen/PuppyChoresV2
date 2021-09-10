import * as React from "react";
import { IfoodActivity, IpottyActivity } from './Datatypes';

interface IProps {
  moment: IpottyActivity | IfoodActivity
}

export const Activity: React.FC<IProps>= ({moment}: IProps) => {

  
  if (moment.activityType === 'potty') {
    return (
      <div className='moment'>
        <p>Potty: {moment.pottyType}</p>
      </div>
    )
  }
  return (
    <div className='moment'>
      <p>Food: {moment.notes}</p>
    </div>
  )
}