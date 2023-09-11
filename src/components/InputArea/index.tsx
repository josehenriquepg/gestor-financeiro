import { useState } from 'react';
import * as C from './styles';
import { Item } from '../../types/Item';
import { categories } from '../../data/categories';
import { newDateAdjusted } from '../../helpers/dateFilter';

import { BsCalendar2EventFill, BsFillTagsFill, BsFileEarmarkTextFill, BsCashStack, BsPlusSquareFill } from 'react-icons/bs'

type Props = {
  onAdd: (item: Item) => void;
}

export const InputArea = ({ onAdd }: Props) => {
  const [dateField, setDateField] = useState('');
  const [categoryField, setCategoryField] = useState('');
  const [descriptionField, setDescriptionField] = useState('');
  const [valueField, setValueField] = useState(0);

  let categoryKeys: string[] = Object.keys(categories);

  const handleAddEvent = () => {
    let errors: string[] = [];

    if(isNaN(new Date(dateField).getTime())){
      errors.push('Data inválida!');
    }
    if(!categoryKeys.includes(categoryField)) {
      errors.push('Categoria inválida!');
    }
    if(descriptionField === '') {
      errors.push('Descrição vazia!');
    }
    if(valueField <= 0) {
      errors.push('Valor inválido!');
    }
    if(errors.length > 0) {
      alert(errors.join('\n'));
    } else {
      onAdd({
        date: newDateAdjusted(dateField),
        category: categoryField,
        description: descriptionField,
        value: valueField
      });
      clearFields();
    }
  }
  
  const clearFields = () => {
    setDateField('');
    setCategoryField('');
    setDescriptionField('');
    setValueField(0);
  }

  return (
    <C.Container>
      <C.InputLabel>
        <C.InputTitle><BsCalendar2EventFill /> Data </C.InputTitle>
        <C.Input type="date" value={dateField} onChange={e => setDateField(e.target.value)}/>
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle><BsFillTagsFill /> Categoria </C.InputTitle>
        <C.Select value={categoryField} onChange={e => setCategoryField(e.target.value)}>
          <>
            <option></option>
            {categoryKeys.map((key, index) => (
              <option key={index} value={key}>{categories[key].name}</option>
            ))}
          </>
        </C.Select>
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle><BsFileEarmarkTextFill /> Descrição </C.InputTitle>
        <C.Input type="text" value={descriptionField} onChange={e => setDescriptionField(e.target.value)} />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle><BsCashStack /> Valor </C.InputTitle>
        <C.Input type="number" value={valueField} onChange={e => setValueField(parseFloat(e.target.value))} />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>&nbsp;</C.InputTitle>
        <C.Button onClick={handleAddEvent}><BsPlusSquareFill /> Adicionar</C.Button>
      </C.InputLabel>
    </C.Container>
  );
}