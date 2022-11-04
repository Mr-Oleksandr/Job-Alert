import React, { FC } from "react";
import { Page, PaginatorContainer } from "./styled";
import Arrow from "../../assets/icons/Arrow";
import Line from "../../assets/icons/Line";
import ArrowRight from "../../assets/icons/ArrowRight";
import { v4 as uuid } from "uuid";

interface PaginatorProps {
  jobsPerPages: number;
  total: number;
  currentPage: number;
  pagination: (page: number) => void;
  prevPage: () => void;
  nextPage: () => void;
}

const Paginator: FC<PaginatorProps> = ({
  jobsPerPages,
  total,
  pagination,
  currentPage,
  prevPage,
  nextPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(total / jobsPerPages); i++) {
    pageNumbers.push(i);
  }
  return (
    <PaginatorContainer>
      <Arrow onClick={() => prevPage()} />
      <Line />
      {pageNumbers.map((item) => (
        <Page
          key={uuid()}
          currentPage={currentPage === item ? true : false}
          onClick={() => pagination(item)}
        >
          {item}
        </Page>
      ))}
      <Line />
      <ArrowRight onClick={() => nextPage()} />
    </PaginatorContainer>
  );
};

export default Paginator;
