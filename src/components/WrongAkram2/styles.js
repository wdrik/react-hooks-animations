import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  text-align: center;

  .circle {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin: 20px;
    cursor: pointer;

    &.red {
      background-color: #fd5151;
    }

    &.yellow {
      background-color: #fdcf51;
    }

    &.blue {
      background-color: #51a0fd;
    }
  }
`;
