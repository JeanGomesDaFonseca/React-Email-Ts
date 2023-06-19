import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import exclamationIcon from '../assets/exclamacao.svg'

interface DropboxResetPasswordEmailProps {
  userFirstname?: string;
  resetPasswordLink?: string;
}

export const ConfirmarEmail = ({
  userFirstname = "Guilherme Torres",
}: DropboxResetPasswordEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Email</Preview>

      <Body style={main}>
        <Container style={container}>
          <Img
            src="../src/assets/Logo-DGuests.svg"
            width="30%"
            height="60"
            alt="Dguests"
          />
          <Section style={{ marginTop: "1.5rem" }}>
            <h2 style={title}>Confirme seu e-mail de cadastro</h2>
            <Text style={text}>
              Olá, <strong>{userFirstname}</strong>
            </Text>

            <Text style={text}>
              Para sua segurança, confirme se este é o endereço de e-mail que
              você cadastrou no <strong>Dguests</strong>.
            </Text>
            <div
              style={{ display: "flex", justifyContent: "center", margin: 45 }}
            >
              <a
                style={buttonStyle}
                href="https://www.dguests.com"
                target="_blank"
              >
                Confirmar o e-mail
              </a>
            </div>
            <div style={textLink}>
              Se não conseguir confirmar seu e-mail pelo botão &nbsp;
              <Link style={anchor} href="https://dguests.com">
                clique aqui
              </Link>
            </div>
            <div style={textinho}>
              <p
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "0.5rem",
                  color: "#313131",
                }}
              >
               Não se cadastrou?
              </p>
              Se não realizou nenhum cadastro no <strong>Dguests</strong>, por
              favor, desconsidere este e-mail.
            </div>
          </Section>
          <Section>
            <div style={span}>
              {/* <WarningAmberIcon
                style={{ marginRight: "0.6rem" }}
                fontSize="small"
              /> */}
              <img src={exclamationIcon} 
               style={{ marginRight: "0.6rem", height: 15, width: 15 }}
               alt="icon" />
              {" "}
              Este é um e-mail automático, por favor não responda
            </div>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ConfirmarEmail;

const main = {
  backgroundColor: "#f6f9fc",
  padding: "10px 0",
  height: 680,
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
  padding: "5px 35px 50px 35px",
  margin: "10px",
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

const span = {
  backgroundColor: "#f9f3e8",
  fontWeight: 200,
  fontSize: "14px",
  color: "#313131",
  height: "2.5rem",
  width: "98%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "6px",
  marginBottom: "0.5rem",
};

const title = {
  fontSize: "1.5rem",
  color: "#313131",
  lineHeight: "26px",
  fontWeight: 600,
}

const textLink = {
  color: "#404040",
  fontZize: "12px",
  marginBottom: "2rem",
  flexWrap: "wrap",
  display: "flex",
  justifyContent: "center",
};

const textinho = {
  fontSize: "14px",
  color: "#404040",
  lineHeight: "26px",
  alignItems: "center",
  margin: "auto",
  textAlign: "center",
  width: "80%",
  marginBottom: "16px",
}

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
