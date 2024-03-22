import { useState } from "react";
import { formateDate } from "../../utils/formateDate";

const Profile = () => {
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (e) => {};
  return (
    <div>
      <div className="mb-5">
        <p className="form__label">Name*</p>
        <input
          type="text"
          name="name"
          value={FormData.name}
          onChange={handleInputChange}
          placeholder="Full Name"
          className="form__input"
        />
      </div>
      <div className="mb-5">
        <p className="form__label">Email*</p>
        <input
          type="text"
          name="email"
          value={FormData.email}
          onChange={handleInputChange}
          placeholder="Email"
          className="form__input"
          readOnly
          aria-readonly
        />
      </div>

      <div className="mb-5">
        <p className="form__label"></p>
      </div>
    </div>
  );
};

export default Profile;
