import { Table, TableHeadColumn } from './styles';
import { Item } from '../../types/Item'
import { TableItem } from '../TableItem';

import { BsCalendar2EventFill, BsFillTagsFill, BsFileEarmarkTextFill, BsCashStack } from 'react-icons/bs'

type Props = {
  list: Item[]
}

export const TableArea = ({ list }: Props) => {
  return (
    <Table>
      <thead>
        <tr>
          <TableHeadColumn width={100}><BsCalendar2EventFill /> Data </TableHeadColumn>
          <TableHeadColumn width={130}><BsFillTagsFill /> Categoria </TableHeadColumn>
          <TableHeadColumn><BsFileEarmarkTextFill /> Descrição </TableHeadColumn>
          <TableHeadColumn width={150}><BsCashStack /> Valor </TableHeadColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) =>(
          <TableItem key={index} item={item} />
        ))}
      </tbody>
    </Table>
  );
}