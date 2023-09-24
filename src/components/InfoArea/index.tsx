import { Container, DateArea, DateArrow, DateTitle, ResumeArea } from './styles';
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
  const [month, year] = currentMonth.split('-');

  const getNextMonth = (date: Date) => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + 1);
    return newDate;
  }

  const getPrevMonth = (date: Date) => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() - 1);
    return newDate;
  }

  const handleNextMonth = () => {
    const currentDate = getNextMonth(new Date(parseInt(year), parseInt(month) - 1, 1));
    onMonthChange(`${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`);
  }

  const handlePrevMonth = () => {
    const currentDate = getPrevMonth(new Date(parseInt(year), parseInt(month) - 1, 1));
    onMonthChange(`${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`);
  }

  return (
    <Container>
      <DateArea>
        <DateArrow onClick={handlePrevMonth}>
          <BsArrowLeftShort />
        </DateArrow>
        <DateTitle>
          {formatCurrentMonth(currentMonth)}
        </DateTitle>
        <DateArrow onClick={handleNextMonth}>
          <BsArrowRightShort />
        </DateArrow>
      </DateArea>
      <ResumeArea>
        <ResumeItem title="Receitas" value={income} />
        <ResumeItem title="Despesas" value={expense} />
        <ResumeItem 
          title="Balanço" 
          value={income - expense} 
          color={(income-expense) < 0 ? '#ae2334' : '#239063'}
        />
      </ResumeArea>
    </Container>
  )
}