 export interface IbaseActivity {
  id: Number
  notes: string
  photo: string
}

export interface IpottyActivity extends IbaseActivity {
  pottyType: string
}

export interface IfoodActivity extends IbaseActivity {
  finishFood: boolean
}