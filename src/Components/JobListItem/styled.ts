import styled from "styled-components";
import { Link } from "react-router-dom";

export const ItemCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  padding: 16px;
  color: #ffffff;
  cursor: pointer;
  width: 90%;
  height: 100%;
  box-shadow: 2px 1px 7px rgba(0, 0, 0, 0.08),
    0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12);
  @media (max-width: 950px) {
    flex-direction: column-reverse;
  }
`;
export const ItemContent = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 950px) {
    width: 100%;
  }
`;
export const ItemImg = styled.img`
  width: 77px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const ItemTitle = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: -0.625px;
  color: #3a4562;
  text-decoration: none;

  @media (max-width: 950px) {
    font-size: 18px;
  }
  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

export const ItemSubtitle = styled.p`
  font-weight: 400;
  max-width: 959px;
  height: 25px;
  font-size: 16px;
  line-height: 25px;
  color: #878d9d;
  margin: 0px 0px 8px 0px;
`;

export const ItemLocation = styled.p`
  font-size: 16px;
  line-height: 25px;
  color: #878d9d;
  margin: 0;
`;

export const Img = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 8px;
`;
export const ItemTimePosted = styled.div`
  font-size: 16px;
  line-height: 25px;
  display: flex;
  align-items: flex-end;
  text-align: right;
  color: #878d9d;
  height: 116px;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 950px) {
    height: 25px;
    align-items: flex-start;
  }
`;
export const ItemRating = styled.div``;

export const Title = styled(Link)`
  text-decoration: none;
  color: #3a4562;
  text-overflow: ellipsis;
  display: inherit;
  overflow: hidden;
  white-space: pre-wrap;
  max-width: 700px;
  @media (max-width: 950px) {
    align-items: flex-start;
  }
`;

export const RightContent = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
export const ImgWrap = styled.div`
  display: flex;
  height: 80px;
`;
export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
export const WrapRating = styled.div`
  display: flex;
  gap: 45px;
`;
