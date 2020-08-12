import React from 'react';
import { Container, Role, User, Avatar  } from './styles';

interface UserProps{
  nickName: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> =({nickName, isBot}) =>{
  return(
    <User>
      <Avatar className={isBot ? 'bot': ''} />
      <strong>{nickName}</strong>
      {isBot && <span>Bot</span>}
    </User>
  )
}

const UserList: React.FC = () =>{
  return(
    <Container>
      <Role> Disponível - 1</Role>
      <UserRow nickName="João Parreira" />
      <Role>Offline - 7</Role>
      <UserRow nickName="Alberto De Nobrega Aragão" isBot />
      <UserRow nickName="Junior" />
      <UserRow nickName="Andrezza" />
      <UserRow nickName="Milenna" />
      <UserRow nickName="Dante" isBot />
      <UserRow nickName="Zeritho" />
      <UserRow nickName="Aretuza" />
      <UserRow nickName="Dagoberto" />
      <UserRow nickName="Hernanes" />
      <UserRow nickName="Lindsay" />
      <UserRow nickName="Paulo Henrique" />
      <UserRow nickName="Defunto" />
      <UserRow nickName="Satoran" />
      <UserRow nickName="Rogério" />
      <UserRow nickName="Isabela" />
      <UserRow nickName="Darius" />
      <UserRow nickName="Pedrinho" />
      <UserRow nickName="Macarrão" />











    </Container>
  )
};


export default UserList;