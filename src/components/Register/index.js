import React, { useState } from 'react' 

import './styles.css'

import api from '../../services/api'

const Register = () => {
  const [person, setPerson] = useState({
    name: '', gender: '', mother: '', birth_date: '',
    medical_records: '', hypertension: '', diabetes: ''
  })
  
  const { name, gender, mother, birth_date,
    medical_records, hypertension, diabetes } = person

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const response = await api.post('person', person)
      alert(`Cadastro de ${response.data.person.name} realizado com sucesso!`)
    } catch (error) {
      console.log({message: error})
    }
  }

  const handleChange = event => {
    const { name, value } = event.target
    setPerson({ ...person, [name]: value })
  }

  return (
    <div className="register-container">
      <div className="content">
        <h1>Cadastrar pessoa</h1>
        <section>
          <form onSubmit={handleSubmit}>
            <input
              placeholder='Nome'
              name='name'
              value={name}
              onChange={handleChange}
            />
            <input
              placeholder='Gênero'
              name='gender'
              value={gender}
              onChange={handleChange}
            />
            <input
              placeholder='Mãe'
              name='mother'
              value={mother}
              onChange={handleChange}
            />
            <input
              placeholder='Data de Nascimento'
              name='birth_date'
              value={birth_date}
              onChange={handleChange}
            />
            <input
              placeholder='Prontuário'
              name='medical_records'
              value={medical_records}
              onChange={handleChange}
            />
            <input
              placeholder='Hipertensão'
              name='hypertension'
              value={hypertension}
              onChange={handleChange}
            />
            <input
              placeholder='Diabete'
              name='diabetes'
              value={diabetes}
              onChange={handleChange}
            />

            <button className="button" type='submit'>Cadastrar</button>
          </form>
        </section>
      </div>
    </div>
  )
}

export default Register