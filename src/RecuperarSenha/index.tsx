import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import oijeans from "../assets/Logo-DGuests.svg";



export const RecuperarSenha = () => {
  return (
    <Html>
      <Head />
      <Preview>Email</Preview>

      <Body style={main}>
        <Container style={container}>
          <Img src={oijeans} width="30%" height="60" alt="Dguests" />
          <Section style={{ marginTop: "1.5rem" }}>
            <h2
              style={{
                fontSize: "1.5rem",
                color: "#313131",
                lineHeight: "26px",
                fontWeight: 600,
              }}
            >
              Olá, seu link de recuperação de senha chegou!
            </h2>
            <Text style={text}>
              Alteração de Dados no <strong>DGUESTS</strong>
            </Text>

            <Text style={text}>
              <strong>ALTERAÇÃO DE SENHA:</strong> recebemos o seu pedido de
              redefinição de senha. Para concluir este processo clique no link
              abaixo:
            </Text>
            <Text style={text}>
              O link abaixo é intransferível e individual, pode ser usado
              somente uma única vez, e serve para confirmarmos seu cadastro na
              plataforma.
            </Text>
            <div
              style={{ display: "flex", justifyContent: "center", margin: 45 }}
            >
              <a
                style={buttonStyle}
                href="https://www.dguests.com"
                target="_blank"
              >
                Escolher Nova Senha
              </a>
            </div>
            <div
              style={{
                fontSize: "14px",
                fontWeight: 300,
                color: "#313131",
                lineHeight: "26px",
                alignItems: "center",
                margin: "auto",
                textAlign: "center",
                width: "70%",
                marginBottom: "16px",
              }}
            >
              <p
                style={{
                  color: "#313131",
                  fontWeight: 300,
                }}
              >
                Enviado por <strong>Dguests</strong>
              </p>{" "}
              Rua Vergueiro, 3558 Vila Mariana / São Paulo - SP, Brasil CNPJ
              00.000.000/00000-00 Se deseja não receber mais mensagens como
              está, clique aqui
            </div>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default RecuperarSenha;

const main = {
  backgroundColor: "#f6f9fc",
  padding: "10px 0",
  height: 680,
};

const buttonStyle = {
  textTransform: "uppercase",
  width: "280px",
  padding: "10px",
  backgroundColor: "#00be1e",
  textAlign: "center",
  cursor: "pointer",
  textDecoration: "none",
  border: "none",
  borderRadius: "4px",
  color: "#fff",
  fontSize: "16px",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
  padding: "5px 35px 50px 35px",
  margin: "10px",
};

const text = {
  fontSize: "0.9rem",
  fontFamily:
    "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  fontWeight: "300",
  color: "#404040",
  lineHeight: "26px",
};

const anchor = {
  textDecoration: "underline",
  color: "#00BE1E",
  fontWeight: 600,
};
