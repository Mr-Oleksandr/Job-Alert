import styled from "styled-components";

interface PageProps {
  currentPage: boolean;
}

export const PaginatorContainer = styled.div`
  background: #ffffff;
  box-shadow: 2px 1px 7px rgba(0, 0, 0, 0.08),
    0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12);
  border-radius: 10.4px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  padding: 8px 12px;
`;
export const Page = styled.button<PageProps>`
  display: flex;
  align-items: center;
  color: ${({ currentPage }) => (currentPage ? "#5876C5" : "#70778b")};
  background-color: transparent;
  cursor: pointer;
  font-size: 20.8px;
  line-height: 25px;
  width: 30px;
  padding: 8px;
  border: none;
  border-bottom: ${({ currentPage }) =>
    currentPage ? "2.6px solid #5876C5" : "none"};
`;
