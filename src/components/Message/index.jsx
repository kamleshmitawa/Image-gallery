import React from "react";
import './message.css';

export const Message = () => {
  return (
    <div class="container card message-container ">
      <h1 class="message-title">Send A Message</h1>

      <form action="mailto:email@email.com" method="post" enctype="text/plain">
        <label for="subject" class="subject">
          Subject
        </label>
        <input type="text" name="subject" maxlength="45" />

        <label for="message" class="message">
          Message
        </label>
        <textarea
          name="message"
          cols="30"
          rows="7"
          required
          maxlength="500"
        ></textarea>

        <label for="name" class="name">
          Name
          <p id="break">(Optional)</p>
        </label>
        <input
          class="first-name"
          type="text"
          name="first-name"
          placeholder="First Name"
          maxlength="20"
        />
        <input
          class="last-name"
          type="text"
          name="last-name"
          placeholder="Last Name"
          maxlength="20"
        />

        <label for="email" class="email">
          Email
          <p id="break">(Optional)</p>
        </label>
        <input type="email" name="email" placeholder="example@email.com" />

        <p class="button-container">
          <input class="button" type="submit" value="Send" />
        </p>
      </form>
    </div>
  );
};
