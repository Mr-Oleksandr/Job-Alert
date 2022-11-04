import React, { FC } from "react";
// @ts-ignore
import logo from "../../assets/icons/pin.png";
import {
  ItemCard,
  ItemImg,
  ItemTitle,
  ItemSubtitle,
  ItemContent,
  ItemLocation,
  Img,
  ItemTimePosted,
  ItemRating,
  Title,
  RightContent,
  ImgWrap,
  TitleWrap,
  WrapRating,
} from "./styled";
import Stars from "../../assets/icons/Stars";
import Rectangle from "../../assets/icons/Rectangle";
import type { IJob } from "../../types";
import { transformDate } from "../../helpers/transformDate";

const JobListItem: FC<IJob> = ({
  id,
  createdAt,
  pictures,
  title,
  name,
  address,
}) => {
  const data = transformDate(createdAt);
  return (
    <ItemCard>
      <ItemContent>
        <ImgWrap>
          <ItemImg src={pictures[0]} alt="hospital" />
        </ImgWrap>
        <TitleWrap>
          <ItemTitle>
            <Title to={`/${id}`}>{title}</Title>
          </ItemTitle>
          <ItemSubtitle>Department name • {name}</ItemSubtitle>
          <ItemLocation>
            <Img src={logo} alt="location" />
            {address}
          </ItemLocation>
        </TitleWrap>
      </ItemContent>
      <RightContent>
        <WrapRating>
          <ItemRating>
            <Stars />
            <Stars />
            <Stars />
            <Stars />
          </ItemRating>
          <ItemTimePosted>
            <Rectangle />
            {`Posted ${data} years ago`}
          </ItemTimePosted>
        </WrapRating>
      </RightContent>
    </ItemCard>
  );
};

export default JobListItem;
