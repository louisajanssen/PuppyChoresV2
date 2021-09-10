import * as React from "react";
import { IfoodActivity, IpottyActivity } from './Datatypes';

interface IProps {
  moment: IpottyActivity | IfoodActivity
}

export const Activity: React.FC<IProps>= ({moment}: IProps) => {

  
  if (moment.activityType === 'potty') {
    return (
      <div>
        <p>Potty</p>
        <p>{moment.pottyType}</p>
      </div>
    )
  }
  return (
    <div>
      <p>food</p>
      <p>{moment.finishFood}</p>
    </div>
  )
}