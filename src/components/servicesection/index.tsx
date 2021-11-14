import React from "react";
import {
  ServiceCard,
  ServiceContainer,
  ServiceIcon,
  ServiceSubtitle,
  ServiceText,
  ServiceTitle,
  ServiceWrapper,
} from "./styled";

import IconCard from "../../assets/img/credity.svg";

import IconFinance from "../../assets/img/finance.svg";

import IconWallet from "../../assets/img/wallet.svg";

interface ServicesProps {
  id?: string;
}

const ServicesSection: React.FC<ServicesProps> = ({ id }) => {
  return (
    <ServiceContainer id={id}>
      <ServiceTitle>Nossos Serviços</ServiceTitle>
      <ServiceWrapper>
        <ServiceCard>
          <ServiceIcon src={IconWallet} alt={"icon-service"} />
          <ServiceSubtitle>Reduzir Despezas</ServiceSubtitle>
          <ServiceText>
            Te ajudamos a reduzir suas taxas e aumentar sua receita geral.
          </ServiceText>
        </ServiceCard>
        <ServiceCard>
          <ServiceIcon src={IconFinance} alt={"icon-service"} />
          <ServiceSubtitle>Escritorios Virtuais</ServiceSubtitle>
          <ServiceText>
            Acesso a nossa plataforma online 24h em qualquer local do mundo.
          </ServiceText>
        </ServiceCard>
        <ServiceCard>
          <ServiceIcon src={IconCard} alt={"icon-service"} />
          <ServiceSubtitle>Beneficios Premium</ServiceSubtitle>
          <ServiceText>
            Conquiste nosso cartão de membro especial e receba 5% em cash back.
          </ServiceText>
        </ServiceCard>
      </ServiceWrapper>
    </ServiceContainer>
  );
};

export default ServicesSection;
