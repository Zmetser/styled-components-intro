import styled from 'styled-components';

function setTextColor(props) {
  console.log(props);
  if (props.invalid) return 'red'
  if (props.disabled) return 'gray'
  return 'black'
}

export const Input = styled.input`
  padding: .5em;
  margin: .5em;
  color: ${setTextColor};
  /* color: ${props => setTextColor(props)} */
`;
/*
function Login({ onSubmit, user }) {
  // valid, i18n

  return (
    <>
      <label></label>
      <input name="username" type="text" />
      <label></label>
      <input name="pass" type="password" />
      <button></button>
    </>
  )
} */