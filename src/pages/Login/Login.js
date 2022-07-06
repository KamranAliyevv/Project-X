import React from "react";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineGoogle } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import RegistrationImg from "../../components/Others/RegistrationImg/RegistrationImg";
const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ criteriaMode: "firstError" });

  function setLogin(data) {
    console.log(data);
  }

  return (
    <div className="login">
      <div className="container">
        <div className="login-inner">
          <form
            onSubmit={handleSubmit((e) => setLogin(e))}
            className="userForm login-form"
          >
            <p>Daxil ol</p>
            <div className="social-login">
              <div className="social-btn">
                <span className="fb">
                  <RiFacebookFill />
                </span>
                Facebook ilə
              </div>
              <div className="social-btn">
                <span className="google">
                  <AiOutlineGoogle />
                </span>
                Google ilə
              </div>
            </div>
            <span className="or">və ya</span>
            <div className="form-group-list">
            <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <div className="form-input">
                  <input
                    {...register("email", {
                      required: "Email boş ola bilməz",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Email düzgün formatda deyil",
                      },
                    })}
                    type="text"
                    id="email"
                    name="email"
                    placeholder="nümunə@gmail.com"
                  />
                  <p className="form-error">{errors.email?.message}</p>
                </div>
              </div>
            </div>
            <button className="login-btn">Daxil ol</button>
            <div className="have-account left-side">
              Hesabınız yoxdur?
              <Link to="/register">Qeydiyyatdan keçin</Link>
            </div>
          </form>
          <RegistrationImg  btnText="Hesabınız yoxdur?" linkText="Qeydiyyatdan keçin" linkDirection="/register"/>
        </div>
      </div>
    </div>
  );
};

export default Login;
