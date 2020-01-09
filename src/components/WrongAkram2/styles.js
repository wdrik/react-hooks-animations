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
    margin: 5px 0;
    cursor: pointer;
    position: relative;

    &.red {
      background-color: #de4431;
    }

    &.yellow {
      background-color: #f4b61a;
    }

    &.blue {
      background-color: #527abd;
    }

    &.green {
      background-color: #009e52;
    }

    .point {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      width: 20px;
      height: 20px;
      background: rgba(0, 0, 0, 0.2);
    }
  }
`;
