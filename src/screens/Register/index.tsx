import React from "react";

import { Input } from "../../components/Form/Input";
import { Button } from "../../components/Form/Button";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton"

import { 
  Container, 
  Header, 
  Title, 
  Form, 
  Fields 
} from "./styles.ts";

export function Register() {
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <Input placeholder="Nome" />

          <Input placeholder="Preço" />

          <TransactionTypeButton />
        </Fields>
          <Button title="Enviar" />
      </Form>
    </Container>
  );
}
