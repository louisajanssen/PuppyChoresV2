import * as React from "react";
import { Activity } from './Activity';
import { IfoodActivity, IpottyActivity } from './Datatypes';

interface IProps {
  pottyMoment: IpottyActivity[]
  foodMoment: IfoodActivity[]
}

export const ActivityList: React.FC<IProps>= ({pottyMoment, foodMoment}: IProps) => {

  const activityArray = [...pottyMoment, ...foodMoment]

  const sortedActivityArray = activityArray.sort((a, b) => a.date < b.date ? 1 : -1)

  return (
    <div>
      {sortedActivityArray.map((moment) => <Activity moment={moment}/>)}
    </div>
  )
}