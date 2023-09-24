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

  const validateDate = (date: string) => {
    return !isNaN(new Date(date).getTime());
  };

  const validateCategory = (category: string) => {
    return categoryKeys.includes(category);
  };

  const validateDescription = (description: string) => {
    return description !== '';
  };

  const validateValue = (value: number) => {
    return value > 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'value' ? parseFloat(value) : value,
    });
  };

  const handleAddEvent = () => {
    const errors: string[] = [];

    if (!validateDate(formData.date)) {
      errors.push('Data inválida!');
    }
    if (!validateCategory(formData.category)) {
      errors.push('Categoria inválida!');
    }
    if (!validateDescription(formData.description)) {
      errors.push('Descrição vazia!');
    }
    if (!validateValue(formData.value)) {
      errors.push('Valor inválido!');
    }

    if (errors.length > 0) {
      alert(errors.join('\n'));
    } else {
      onAdd({
        date: newDateAdjusted(formData.date),
        category: formData.category,
        description: formData.description,
        value: formData.value,
      });
      clearFields();
    }
  };

  const clearFields = () => {
    setFormData({
      date: '',
      category: '',
      description: '',
      value: 0,
    });
  }

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
        <Select value={formData.category} onChange={handleInputChange} name="category">
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
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          aria-label="Descrição"
        />
      </InputLabel>
      <InputLabel>
        <InputTitle><BsCashStack /> Valor </InputTitle>
        <Input
          type="number"
          name="value"
          value={formData.value}
          onChange={handleInputChange}
          aria-label="Valor"
        />
      </InputLabel>
      <InputLabel>
        <InputTitle>&nbsp;</InputTitle>
        <Button onClick={handleAddEvent}><BsPlusSquareFill /> Adicionar</Button>
      </InputLabel>
    </Container>
  );
}