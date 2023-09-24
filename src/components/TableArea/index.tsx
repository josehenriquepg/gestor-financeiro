import { useState } from 'react';
import { Table, TableHeadColumn } from './styles';
import { Item } from '../../types/Item'
import { TableItem } from '../TableItem';

import { BsCalendar2EventFill, BsFillTagsFill, BsFileEarmarkTextFill, BsCashStack } from 'react-icons/bs'

type Props = {
  list: Item[]
}

export const TableArea = ({ list }: Props) => {
  const [items, setItems] = useState<Item[]>(list);

  const handleDeleteItem = (itemToDelete: Item) => {
    const updatedItems = items.filter((item) => item !== itemToDelete);
    setItems(updatedItems);
  };

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
          <TableItem key={index} item={item} onDelete={handleDeleteItem} />
        ))}
      </tbody>
    </Table>
  );
}