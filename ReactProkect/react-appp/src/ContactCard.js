import React from "react";

function ContactCard(props) {
  console.log(props);
  return (
    <div className="contact-name">
      <img src="https://placekitten.com/300/200" alt="llo" />
      <h3>Cat Master</h3>
      <p>Phone : (212) 245-9781</p>
      <p>Email : mr.whiskerson.com.meow</p>
    </div>
  );
}

export default ContactCard;
