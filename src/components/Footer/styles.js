import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 0;

  section#contact {
    width: 100%;
    background: #333;
    padding: 30px;

    form {
      display: flex;
      flex-direction: column;
      align-items: center;

      input[type='text'] {
        min-width: 300px;
        border: 1px solid #ebebeb;
        margin-bottom: 10px;
        padding: 10px;
        border-radius: 6px;
      }

      textarea {
        min-width: 300px;
        border: 1px solid #ebebeb;
        margin-bottom: 10px;
        padding: 10px;
        border-radius: 6px;
      }

      button {
        min-width: 300px;
        border: none;
        padding: 10px;
        border-radius: 6px;
        background: #7159c1;
        color: #fff;
        cursor: pointer;
      }
    }
  }

  section#copy {
    width: 100%;
    height: 60px;
    background: #ebebeb;
    padding: 0 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
