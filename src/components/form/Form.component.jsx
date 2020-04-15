import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { addUser } from '../../redux/users/users-actions';
import { notification } from 'antd';

import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 10px;
`;

const Label = styled.label`
    margin: 8px 15px;
`;

const Input = styled.input`
    margin: 5px 15px;
    width: 90%;
    border-radius: 4px;
    padding: 5px;
`;

const Errors = styled.span`
    color: red;
    margin: 0 15px;
`;

const ButtonSubmit = styled.input`
    margin: 15px;
    width: 90%;
`;

const FormComponent = ({ addUser, setVisible }) => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data, e) => {
        e.target.reset(); // reset after form submit
        addUser(data);
        openNotificationWithIcon();
        setVisible(false);
    };

    const openNotificationWithIcon = () => {
        notification['success']({
            message: 'Ajout réussi !',
            description: "L'utilisateur a bien été ajouté",
            placement: 'topRight',
            duration: 4,
        });
    };

    return (
        /* 
				note : 
				Form has to be improved > create component for input to avoid repetition.
				Add regex to email validation.
				**/

        <form onSubmit={handleSubmit(onSubmit)}>
            <Container>
                {/* Last name */}
                <Label>Nom :</Label>
                <Input name='lastName' ref={register({ required: true })} />
                <Errors>{errors.lastName && <span>Nom requis</span>}</Errors>
                {/* First name */}
                <Label>Prénom :</Label>
                <Input name='firstName' ref={register({ required: true })} />
                <Errors>
                    {errors.firstName && <span>Prénom requis</span>}
                </Errors>
                {/* Email */}
                <Label>Email :</Label>
                <Input name='email' ref={register({ required: true })} />
                <Errors>{errors.email && <span>Email requis</span>}</Errors>
                {/* City */}
                <Label>Ville :</Label>
                <Input name='city' ref={register({ required: true })} />
                <Errors>{errors.city && <span>Ville requise</span>}</Errors>
                {/* Company */}
                <Label>Entreprise :</Label>
                <Input name='company' ref={register({ required: true })} />
                <Errors>
                    {errors.company && <span>Entreprise requise</span>}
                </Errors>
                <ButtonSubmit type='submit' value='Ajouter' />
            </Container>
        </form>
    );
};

const mapDispatchToProps = {
    addUser,
};

export default connect(null, mapDispatchToProps)(FormComponent);
