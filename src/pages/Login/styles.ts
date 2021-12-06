import styled from 'styled-components';
import image from './../../assets/images/background_login_top.jpg';

export const Background = styled.div`
  height: 100vh;
  background-image: url(${image});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background-color: var(--discord-login-bg);
  width: 784px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 32px;
  box-shadow: 0 2px 10px 0 rgba(0,0,0,.2);
`;

export const Title = styled.div`
  font-size: 24px;
  color: white;
  font-weight: 600;
  margin-bottom: 8px;
  text-align: center;
`;

export const Subtitle = styled.div`
  font-size: 16px;
  text-align: center;
  color: var(--discord-header-secondary);
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.label`
  font-size: 12px;
  font-weight: 600;
  color: var(--discord-login-muted-text);
  margin-bottom: 8px;
  margin-top: 20px;
  text-transform: uppercase;
`;

export const LoginInput = styled.input`
  border: 1px solid var(--discord-input--border-login);
  background-color: var(--discord-input--bg-login);
  width: 100%;
  height: 45px;
  padding: 10px;
  color: var(--message-content);
  font-size: 16px;
  border-radius: 3px;
  transition: border-color .3s;

  :focus {
    border-color: var(--discord-blue);
    outline: none;
  }
`;

export const Button = styled.button`
  border: none;
  width: 100%;
  margin-bottom: 8px;
  padding: 2px 16px;
  background-color: var(--discord-blue);
  font-weight: 500;
  color: var(--white);
  border-radius: 3px;
  height: 50px;
  font-size: 16px;
  margin-top: 20px;
  cursor: pointer;

  :focus {
    outline: none;
  } 
`;

export const Option = styled.a`
  text-decoration: none;
  font-size: 14px;
  color: var(--discord-blue);
  font-weight: 500;
  margin-top: 4px;

  :focus {
    outline: none;
  } 
`;

export const MutedSpan = styled.span`
  color: var(--text-muted);
  font-size: 14px;
  margin-right: 4px;
`;

