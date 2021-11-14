import styled from "styled-components";

export const ServiceContainer = styled.section`
  height: 880px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black.ligth};

  @media screen and (max-width: 760px) {
    height: 1100px;
  }
  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;
export const ServiceWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  overflow-y: hidden;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServiceCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.7rem;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
    border-radius: 1rem;
  }
`;
export const ServiceTitle = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 4rem;

  @media screen and (max-width: 480px) {
    font-size: 2.4rem;
  }

  @media screen and (max-width: 375px) {
    font-size: 2rem;
  }
`;

export const ServiceSubtitle = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ServiceIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ServiceText = styled.p`
  text-align: center;
  font-size: 1rem;
`;
