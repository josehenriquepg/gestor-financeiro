import { TableLine, TableColumn, Category, Value } from './styles';
import { Item } from '../../types/Item';
import { formatDate } from '../../helpers/dateFilter';
import { categories } from '../../data/categories';

type Props = {
  item: Item;
}

export const TableItem = ({ item }: Props) => {
  const category = categories[item.category];

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
    </TableLine>
  );
}