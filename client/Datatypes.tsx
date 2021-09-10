 export interface IbaseActivity {
  id: Number
  activityType: 'potty' | 'food'
  notes: string
  photo: string
  date : Date
}

export interface IpottyActivity extends IbaseActivity {
  pottyType: string
  activityType: 'potty'
}

export interface IfoodActivity extends IbaseActivity {
  finishFood: boolean
  activityType: 'food'
}