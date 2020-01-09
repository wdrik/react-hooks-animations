import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 60px;
  padding: 0 15px;
  background: #7159c1;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 9;
`;

export const Navigation = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;

    li {
      margin-left: 10px;

      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }
`;
