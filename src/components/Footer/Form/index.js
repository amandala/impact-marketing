import React, { Component } from "react";
import { render } from "react-dom";
import MailchimpSubscribe from "react-mailchimp-subscribe";

import { Tiny } from "../../Typography";
import styles from "./index.module.scss";

const CustomForm = ({ status, message, onValidated }) => {
  let email;
  console.log(status);
  const submit = () => {
    return (
      email &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value
      })
    );
  };

  return (
    <div className={styles.Wrapper}>
      {status === "sending" && <Tiny>Sending...</Tiny>}
      {status === "error" && <Tiny>Sorry! Something went wrong.</Tiny>}
      {status === "success" && <Tiny>Yaaas!! You're signed up!</Tiny>}
      <div className={styles.Form}>
        <input
          className={styles.Input}
          ref={node => (email = node)}
          type="email"
          placeholder="Your email"
        />
        <br />
        <button className={styles.Button} onClick={submit}>
          Im in!
        </button>
      </div>
    </div>
  );
};

class Form extends Component {
  render() {
    const url =
      "https://impactfestival.us4.list-manage.com/subscribe/post?u=7772782d3694166230ef917d4&amp;id=fa8ee56538";
    return (
      <div className={styles.SignUpForm}>
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            />
          )}
        />
      </div>
    );
  }
}

export default Form;
