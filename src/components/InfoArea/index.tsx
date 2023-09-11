import * as C from './styles';
import { formatCurrentMonth } from '../../helpers/dateFilter';
import { ResumeItem } from '../ResumeItem';

import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

type Props = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  income: number;
  expense: number;
}

export const InfoArea = ({ currentMonth, onMonthChange, income, expense }: Props) => {
  const handlePrevMonth = () => {
    let [month, year] = currentMonth.split('-');
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth( currentDate.getMonth() - 1 );
    onMonthChange(`${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`);
  }

  const handleNextMonth = () => {
    let [month, year] = currentMonth.split('-');
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth( currentDate.getMonth() + 1 );
    onMonthChange(`${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`);
  }

  return (
    <C.Container>
      <C.DateArea>
        <C.DateArrow onClick={handlePrevMonth}><BsArrowLeftShort /></C.DateArrow>
        <C.DateTitle>{formatCurrentMonth(currentMonth)}</C.DateTitle>
        <C.DateArrow onClick={handleNextMonth}><BsArrowRightShort /></C.DateArrow>
      </C.DateArea>
      <C.ResumeArea>
        <ResumeItem title="Receitas" value={income} />
        <ResumeItem title="Despesas" value={expense} />
        <ResumeItem 
          title="Balanço" 
          value={income - expense} 
          color={(income-expense) < 0 ? '#ae2334' : '#239063'}
        />
      </C.ResumeArea>
    </C.Container>
  )
}