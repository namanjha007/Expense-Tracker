import React from "react";
import ContactCard from "./ContactCard";

function MyInfo() {
  return (
    <div className="contacts">
      <ContactCard 
      name = "Mr. Whiskerson"
      imgUrl="https://placekitten.com/300/200"
      phone = "(205) 452 8273"
      email = "billyRani.com.meow"
      />
      <ContactCard 
       name = "Mrs. Fluffykit"
       imgUrl="https://placekitten.com/400/200"
       phone = "(205) 452 8273"
       email = "flupMaster.com.meow"
      />
    </div>
  );
}

export default MyInfo;
