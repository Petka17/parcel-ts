import React from "react";
import * as auth from "state/signin";

function SigninForm(): React.ReactElement {
  const {
    canStartCodeRequest,
    phone,
    setPhone,
    startCodeRequest,
    errorMessage,
    codeInputFlag,
    code,
    setCode,
    isLoading
  } = auth.useContext();

  const handlePhoneChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPhone(event.target.value);
  };

  const handleSubmitForm = (
    event: React.ChangeEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();
    startCodeRequest();
  };

  const handleCodeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setCode(event.target.value);
  };

  return (
    <form onSubmit={handleSubmitForm}>
      {codeInputFlag ? (
        <React.Fragment>
          <label key="label-code" htmlFor="code">
            Код
          </label>
          <input
            key="code"
            type="tel"
            name="code"
            id="code"
            autoFocus
            value={code}
            onChange={handleCodeChange}
            disabled={isLoading}
          />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <label key="label-phone" htmlFor="phone">
            Телефон
          </label>
          <input
            key="phone"
            type="tel"
            name="phone"
            id="phone"
            autoFocus
            value={phone}
            onChange={handlePhoneChange}
          />
          <button type="submit" disabled={!canStartCodeRequest}>
            Запросить код
          </button>
        </React.Fragment>
      )}
      {errorMessage !== "" ? <div>{errorMessage}</div> : null}
    </form>
  );
}

const Signin = (): React.ReactElement => (
  <auth.Provider>
    <SigninForm />
  </auth.Provider>
);

export default Signin;
