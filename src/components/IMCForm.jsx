import { useState } from 'react';
import PropTypes from 'prop-types';

const INITIAL_VALUES = {
  peso: '',
  altura: '',
  diaDePesaje: '',
  horaDePesaje: '',
  key: '',
};

function IMCForm({ change }) {
  const [formData, setFormData] = useState(INITIAL_VALUES);
  const diaDePesaje = new Date().toLocaleDateString().split(',')[0];

  const handleChange = e => {
    const { value, name } = e.target;

    if (value < 1 || value > 500) return;

    const newData = {
      ...formData,
      [name]: value,
      diaDePesaje,
      horaDePesaje: new Date().toLocaleDateString().split(',')[0],
      key: new Date().getTime(),
    };

    setFormData(newData);
  };

  const handleSubmit = () => {
    change(formData);
    setFormData(INITIAL_VALUES);
  };

  return (
    <div>
      <div>
        <label htmlFor='peso'>Peso (en kg)</label>
        <input
          id='peso'
          name='peso'
          type='number'
          min='1'
          max='500'
          placeholder='150'
          value={formData.peso}
          onChange={handleChange}
          autoFocus={true}
        />
      </div>
      <div>
        <label htmlFor='altura'>Altura (en cm)</label>
        <input
          id='altura'
          name='altura'
          type='number'
          min='1'
          max='300'
          placeholder='150'
          value={formData.altura}
          onChange={handleChange}
        />
      </div>
      <div>
        <button
          type='button'
          disabled={formData.peso === '' || formData.altura === ''}
          onClick={handleSubmit}>
          Calcula tu IMC
        </button>
      </div>
    </div>
  );
}

IMCForm.propTypes = {
  change: PropTypes.func.isRequired, // Mark 'change' as a required function prop
};

export default IMCForm;
