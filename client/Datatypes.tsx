interface baseActivity {
  id: string
  notes: string
  photo: string
}

interface pottyActivity extends baseActivity {
  pottyType: string
}

interface foodActivity extends baseActivity {
  finishFood: boolean
}