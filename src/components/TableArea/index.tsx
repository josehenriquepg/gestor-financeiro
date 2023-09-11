import * as C from './styles';
import { Item } from '../../types/Item'
import { TableItem } from '../TableItem';

import { BsCalendar2EventFill, BsFillTagsFill, BsFileEarmarkTextFill, BsCashStack } from 'react-icons/bs'

type Props = {
  list: Item[]
}

export const TableArea = ({ list }: Props) => {
  return (
    <C.Table>
      <thead>
        <tr>
          <C.TableHeadColumn width={100}><BsCalendar2EventFill /> Data </C.TableHeadColumn>
          <C.TableHeadColumn width={130}><BsFillTagsFill /> Categoria </C.TableHeadColumn>
          <C.TableHeadColumn><BsFileEarmarkTextFill /> Descrição </C.TableHeadColumn>
          <C.TableHeadColumn width={150}><BsCashStack /> Valor </C.TableHeadColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) =>(
          <TableItem key={index} item={item} />
        ))}
      </tbody>
    </C.Table>
  );
}