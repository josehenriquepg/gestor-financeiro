import { TableLine, TableColumn, Category, Value } from './styles';
import { Item } from '../../types/Item';
import { formatDate } from '../../helpers/dateFilter';
import { categories } from '../../data/categories';

import { BsFillTrashFill } from 'react-icons/bs'

type Props = {
  item: Item;
  onDelete: (item: Item) => void
}

export const TableItem = ({ item, onDelete }: Props) => {
  const category = categories[item.category];
  const handleDelete = () => {
    onDelete(item);
  };

  return (
    <TableLine>
      <TableColumn>{formatDate(item.date)}</TableColumn>
      <TableColumn>
        <Category color={category.color}>
          {category.name}
        </Category>  
      </TableColumn>
      <TableColumn>{item.description}</TableColumn>
      <TableColumn>
        <Value color={category.expense ? '#ae2334' : '#239063'}>
        R$ {item.value}
        </Value>
      </TableColumn>
      <TableColumn>
        <BsFillTrashFill onClick={handleDelete} />
      </TableColumn>
    </TableLine>
  );
}