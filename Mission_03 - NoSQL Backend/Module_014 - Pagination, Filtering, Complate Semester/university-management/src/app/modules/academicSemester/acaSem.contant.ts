import { IAcaSemCodes, IAcaSemMonths, IAcaSemTitles } from './acaSem.interface'

export const acaSemTitles: IAcaSemTitles[] = ['Autumn', 'Summer', 'Fall']

export const acaSemCodes: IAcaSemCodes[] = ['01', '02', '03']

export const acaSemMonths: IAcaSemMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const acaSemTitleCodeMapper: {
  [key: string]: string
} = {
  Autumn: '01',
  Summer: '02',
  Fall: '03',
}
