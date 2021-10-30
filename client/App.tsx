import * as React from "react";
import { ActivityList } from './ActivityList';
import { IpottyActivity, IfoodActivity } from './Datatypes'
import { NavBar } from './Navbar';
import { AddMomentButton } from './AddMomentButton';

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

  const onSubmitPotty = (pottyObject: IpottyActivity) => {

    let newPottyArray = pottyMoment?.slice()
    newPottyArray?.push(pottyObject)

    setPottyMoment(newPottyArray)
  }

  const onSubmitFood = (foodObject: IfoodActivity) => {

    let newFoodArray = foodMoment?.slice()
    newFoodArray?.push(foodObject)

    setFoodMoment(newFoodArray)
  }

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
      <AddMomentButton onSubmitPotty={onSubmitPotty} onSubmitFood={onSubmitFood}/>
      <ActivityList pottyMoment={pottyMoment} foodMoment={foodMoment}/>
    </div>
  )
}