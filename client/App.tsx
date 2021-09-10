import * as React from "react";
import { ActivityList } from './ActivityList';
import { IpottyActivity, IfoodActivity } from './Datatypes'
import { NavBar } from './Navbar';

const potty: IpottyActivity[] = [{
  id: 1,
  activityType: 'potty',
  date: new Date(),
  pottyType: 'poo',
  notes: 'runny poo',
  photo: ''
},
{
  id: 2,
  activityType: 'potty',
  date: new Date(),
  pottyType: 'pee',
  notes: 'all good',
  photo: ''
},]

const food: IfoodActivity[] = [{
  id: 3,
  activityType: 'food',
  date: new Date(),
  finishFood: true,
  notes: 'everything good',
  photo: ''
},
{
  id: 4,
  activityType: 'food',
  date: new Date(),
  finishFood: false,
  notes: 'did not seem hungry, will observe',
  photo: ''
},]

export const App: React.FC = () => {
  const [pottyMoment, setPottyMoment] = React.useState<IpottyActivity[] | undefined>(potty)
  const [foodMoment, setFoodMoment] = React.useState<IfoodActivity[] | undefined>(food)

  if (pottyMoment === undefined || foodMoment === undefined) {
    return (
      <div>
        <h1>Oops!</h1>
      </div>
    )
  }

  return (
    <div>
      <NavBar />
      <ActivityList pottyMoment={pottyMoment} foodMoment={foodMoment}/>
    </div>
  )
}