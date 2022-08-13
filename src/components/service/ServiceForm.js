import styles from '../project/ProjectForm.module.css';

import { useState } from 'react';

import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';

function ServiceForm( {handleSubmit, textBtn, projectData} ) {

    const [service, setService] = useState({})

    function submit(e) {
        e.preventDefault();
        projectData.services.push(service)
        handleSubmit(projectData)
    }
  
    function handleChange(e) {
        setService({ ...service, [e.target.name]: e.target.value}) 
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input 
                type="text"
                text="Nome do serviço"
                name="name"
                placeholder="Insira o nome do serviço"
                handleOnchange={handleChange}
            />
            <Input 
                type="number"
                text="Custo do serviço"
                name="cost"
                placeholder="Valor total do serviço"
                handleOnchange={handleChange}
            />
            <Input 
                type="text"
                text="Descriçao do serviço"
                name="description"
                placeholder="Descreva o serviço"
                handleOnchange={handleChange}
            />
            <SubmitButton text={textBtn} />
        </form>
    )
}

export default ServiceForm;