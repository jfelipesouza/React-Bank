import app from '../../assets/img/app.svg';
import car from '../../assets/img/car.svg';
import car2 from '../../assets/img/car2.svg';


export const data = [
  {
    id:'about',
    lightBg:false,
    lightText:true,
    imgStart:false,
    topLine:'Premium Bank',
    headLine:'Transações ilimitadas com taxas zero!',
    description:'Tenha acesso ao nosso aplicativo exclusivo que permite o envio de transações ilimitadas sem cobrança de taxas.',
    btnText:'Começar',
    img:car,
    alt:'car',
  },
  {
    id:'discover',
    lightBg:true,
    lightText:false,
    imgStart:true,
    topLine:'Acesso Ilimitado',
    headLine:'Acesse sua conta a qualquer momento.',
    description:'Temos tudo o que você precisa, não importa onde você esteja. Tudo o que você precisa é uma conexão com a Internet e um telefone ou computador.',
    btnText:'Saiba mais',
    img:app,
    alt:'app',
    
  },
  {
    id:'singup',
    lightBg:false,
    lightText:true,
    imgStart:false,
    topLine:'Junte-se a nossa equipe',
    headLine:'Criar uma conta é extremamente fácil!',
    description:'Prepare tudo em menos de 10 minutos. Tudo que você precisa fazer é adicionar suas informações e você está pronto para começar.',
    btnText:'Comece agora!',
    img:car2,
    alt:'car2',
    
  },
]