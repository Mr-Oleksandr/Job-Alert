import styled from "styled-components";

export interface Props {
  first?: boolean;
}

export interface ButtonProps {
  yellow?: boolean;
}

export interface ButtonGroupProps {
  last?: boolean;
}

export const JobDetailedContainer = styled.div`
  display: flex;
  color: #3a4562;
  justify-content: space-around;
  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const JobDetailedLeftSide = styled.div`
  width: 60%;
  @media (max-width: 1100px) {
    width: 80%;
  }
`;

export const JobDetailedMap = styled.div`
  width: 400px;
  height: 432px;
  background: #2a3047;
  border-radius: 8px;
  margin-top: 56px;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
`;

export const JobDetailedNav = styled.nav`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(58, 69, 98, 0.3);
  align-items: center;
  text-align: center;
`;
export const ContactsNav = styled.div`
  justify-content: space-between;
  border-bottom: 1px solid rgba(58, 69, 98, 0.3);
  align-items: center;
  text-align: center;
  width: 80%;
  margin: 10px;
  display: none;
  @media (max-width: 1100px) {
    display: flex;
  }
`;
export const JobDetailedNavMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const JobDetailedNavBtn = styled.button<Props>`
  border: none;
  background-color: transparent;
  margin-left: 16px;
  margin-right: ${({ first }) => (first ? "32px" : "0px")};
  color: #3a4562;
`;

export const Title = styled.h2`
  font-size: 24px;
  line-height: 30px;
  letter-spacing: -0.75px;
  color: #3a4562;
  max-width: 500px;
`;

export const ContentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const TitlePrice = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: -0.625px;
`;

export const SubtitlePrice = styled.p`
  font-size: 18px;
  margin: 0;
  font-weight: 400;
`;

export const SubTitle = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: rgba(56, 65, 93, 0.355988);
  margin: 0;
`;

export const JobDetailedInformation = styled.article`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.5625px;
  color: #3a4562;
`;

export const JobsOrderList = styled.ul`
  margin: 0;
  list-style: square;
  font-size: 18px;
  line-height: 24px;
  color: #3a4562;
`;

export const ButtonEmployment = styled.button<ButtonProps>`
  background: ${({ yellow }) =>
    yellow ? "rgba(255, 207, 0, 0.15)" : "rgba(161, 177, 219, 0.317343)"};
  border: 1px solid
    ${({ yellow }) => (yellow ? "#FFCF00" : "rgba(85, 105, 158, 0.3)")};
  border-radius: 8px;
  font-size: 16px;
  line-height: 16px;
  color: ${({ yellow }) => (yellow ? "#988B49" : "#55699E")};
  text-align: center;
  padding: 17px 30px;
  width: 222px;
  margin-right: 8px;
`;

export const ButtonGroup = styled.div<ButtonGroupProps>`
  display: flex;
  margin-bottom: ${({ last }) => (last ? "87px" : "0px")};
`;

export const ImageGroup = styled.div`
  display: flex;
  margin-top: 21px;
`;
export const Image = styled.img`
  margin-right: 8px;
  border-radius: 8px;
  height: 116px;
  width: 200px;
`;

export const ButtonBack = styled.button`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 16px;
  padding: 18px 26px;
  margin-top: 90px;
  margin-bottom: 90px;
  margin-left: 5px;
  position: relative;
  mix-blend-mode: normal;
  border-radius: 8px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media (max-width: 900px) {
    display: none;
  }
`;

export const TitleNameCompany = styled.h2`
  font-size: 20px;
  line-height: 25px;
  color: #e7eaf0;
  text-align: center;
  margin-top: 32px;
  width: 270px;
  margin-bottom: 0px;
`;

export const CompanyInformation = styled.div`
  z-index: 100;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
`;

export const Map = styled.img`
  width: 15px;
  height: 13px;
`;
export const Contacts = styled.p`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  color: #e8ebf3;

  > * {
    margin-bottom: 8px;
  }
`;
export const Point = styled.img`
  position: absolute;
  left: 50px;
  top: 50px;
`;
export const Links = styled.a`
  color: #e8ebf3;
  font-size: 18px;
  text-decoration: none;
`;
export const MapContent = styled.div`
  position: relative;
`;
export const ButtonContent = styled.span`
  margin-left: 30px;
`;
