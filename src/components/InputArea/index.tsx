import { useState } from 'react';
import { Container, InputLabel, InputTitle, Input, Select, Button } from './styles';
import { Item } from '../../types/Item';
import { categories } from '../../data/categories';
import { newDateAdjusted } from '../../helpers/dateFilter';

import { BsCalendar2EventFill, BsFillTagsFill, BsFileEarmarkTextFill, BsCashStack, BsPlusSquareFill } from 'react-icons/bs'

type Props = {
  onAdd: (item: Item) => void;
}

export const InputArea = ({ onAdd }: Props) => {
  const categoryKeys: string[] = Object.keys(categories);

  const [formData, setFormData] = useState({
    date: '',
    category: '',
    description: '',
    value: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'value' ? parseFloat(value) : value,
    });
  };

  const clearFields = () => {
    setFormData({
      date: '',
      category: '',
      description: '',
      value: 0,
    });
  }

  const handleAddEvent = () => {
    let errors: string[] = [];

    if(isNaN(new Date(formData.date).getTime())){
      errors.push('Data inválida!');
    }
    if(!categoryKeys.includes(formData.category)){
      errors.push('Categoria inválida!');
    }
    if(formData.description === '') {
      errors.push('Descrição vazia!');
    }
    if(formData.value <= 0) {
      errors.push('Valor inválido!');
    }
    if(errors.length > 0) {
      alert(errors.join('\n'));
    } else {
      onAdd({
        date: newDateAdjusted(formData.date),
        category: formData.category,
        description: formData.description,
        value: formData.value
      });
      clearFields();
    }
  };

  return (
    <Container>
      <InputLabel>
        <InputTitle><BsCalendar2EventFill /> Data </InputTitle>
        <Input 
          type="date" 
          name="date"
          value={formData.date} 
          onChange={handleInputChange} 
        />
      </InputLabel>
      <InputLabel>
        <InputTitle><BsFillTagsFill /> Categoria </InputTitle>
        <Select 
          value={formData.category} 
          onChange={handleInputChange}
        >
          <option value=""></option>
          {categoryKeys.map((key, index) => (
            <option key={index} value={key}>
              {categories[key].name}
            </option>
          ))}
        </Select>
      </InputLabel>
      <InputLabel>
        <InputTitle><BsFileEarmarkTextFill /> Descrição </InputTitle>
        <Input 
          type="text" 
          value={formData.description} 
          onChange={handleInputChange} 
        />
      </InputLabel>
      <InputLabel>
        <InputTitle><BsCashStack /> Valor </InputTitle>
        <Input 
          type="number" 
          value={formData.value}  
          onChange={handleInputChange} 
        />
      </InputLabel>
      <InputLabel>
        <InputTitle>&nbsp;</InputTitle>
        <Button onClick={handleAddEvent}><BsPlusSquareFill /> Adicionar</Button>
      </InputLabel>
    </Container>
  );
}