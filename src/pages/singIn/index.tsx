import React from "react";
import {
  Button,
  Container,
  FaceIcon,
  FormCard,
  Header,
  HeaderLogo,
  Label,
  TextField,
  TextInput,
} from "./styled";

const SingIn: React.FC = () => {
  return (
    <Container>
      {/* Header da pagina */}
      <Header>
        <HeaderLogo to={"/"}>RBANK</HeaderLogo>
      </Header>
      {/* Formulario de entrada */}
      <FormCard>
        {/* Campo de entrada de dados */}
        <TextField>
          <Label>E-mail</Label>
          <TextInput type={"email"} />
        </TextField>
        <TextField>
          <Label>Senha</Label>
          <TextInput type={"password"} />
        </TextField>
        {/* Botão de entrada por login e senha */}
        <Button textColor={"#fff"} backgroundColor={"#333"}>
          Entrar
        </Button>
        ou
        {/* Botões de entrada alternativa */}
        <Button backgroundColor={"#3b5998"} textColor={"#f8f8f8"}>
          Entrar com Facebook
          <FaceIcon />
        </Button>
      </FormCard>
    </Container>
  );
};

export default SingIn;
