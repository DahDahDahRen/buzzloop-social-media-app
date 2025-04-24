import { useState } from "react";
import { StyledRegisterSection } from "./Register.styles";
import Input from "../../src/components/Input/Input";
import Button from "../../src/components/Button/Button";
import registerValidation from "../../validators/registerValidation";

function Register() {
  // Form date
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  // Handle Change
  const handleInputChange = (e) => {
    // Get the name and value
    const { name, value } = e.target;

    // Set the form data
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle submit event
  const handleSubmit = (e) => {
    // Prevent default
    e.preventDefault();

    // Validate the form data
    const { error } = registerValidation.validate(formData, {
      abortEarly: false,
    });

    console.log(error);

    // Reset the form state
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <StyledRegisterSection onSubmit={handleSubmit}>
      <section className="content">
        <div className="section-header">
          <h3 className="section-title">Sign up now!</h3>
          <p className="section-sub_title">
            "Don't just scroll — make waves. Join BuzzLoop and be the buzz!"
          </p>
        </div>

        <form className="form-container">
          <Input
            type="text"
            placeholder="Fullname"
            name="fullname"
            onChange={handleInputChange}
            value={formData.fullname || ""}
          />

          <Input
            type="email"
            placeholder="example@email.com"
            name="email"
            onChange={handleInputChange}
            value={formData.email || ""}
          />

          <Input
            type="password"
            placeholder="password"
            name="password"
            onChange={handleInputChange}
            value={formData.password || ""}
          />

          <div className="form-btn-panel">
            <Button text="Register" />
            <span className="span-or">or</span>
            <Button text="Login" />
          </div>

          <a href="#" className="forget-password_link">
            Forget Password?
          </a>
        </form>
      </section>
    </StyledRegisterSection>
  );
}

export default Register;
