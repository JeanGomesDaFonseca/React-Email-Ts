import { render } from '@react-email/render';
import RecuperarSenha from '../RecuperarSenha';
import ConfirmarEmail from '../ConfirmarEmail';

export function Teletubies() {
    const html1 = render(<RecuperarSenha />, {
        pretty: true,
      });


      const html2 = render(<ConfirmarEmail />, {
        pretty: true,
      });

      // console.log(html1);
      console.log(html2);


      return(
        <>
          <h1>oiii</h1>
        </>
      )
      
}