import React, { useState } from "react";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineGoogle } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import RegistrationImg from "../../components/Others/RegistrationImg/RegistrationImg";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { BsCheck } from "react-icons/bs";
import Select from "@mui/material/Select";

const Register = () => {
  const [number, setNumber] = useState("050");
  const [checkbox, setCheckbox] = useState({checked:false,firstClick:false});

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ criteriaMode: "firstError" });

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  function setRegister(data) {
    console.log(data);
  }
  return (
    <div className="register">
      <div className="container">
        <div className="register-inner">
          <form
            onSubmit={handleSubmit((e) => setRegister(e))}
            className="userForm register-form"
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
            <span className="or">və ya</
            
            span>
            <div className="form-group-list">
              <div className="form-group">
                <label htmlFor="fName">Ad</label>
                <div className="form-input">
                  <input
                    {...register("fName", {
                      required: "Ad boş ola bilməz",
                      minLength: 1,
                    })}
                    type="text"
                    id="fName"
                    name="fName"
                    placeholder="Adınızı daxil edin"
                  />
                  <p className="form-error">{errors.fName?.message}</p>
                </div>
              </div>
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
              <div className="form-group">
                <label htmlFor="phoneNumber">Mobil nömrə</label>
                <div className="form-input">
                  <div className="select-box">
                    <FormControl sx={{ minWidth: 80 }} size="small">
                      <Select value={number} onChange={handleChange}>
                        <MenuItem value={"050"}>050</MenuItem>
                        <MenuItem value={"051"}>051</MenuItem>
                        <MenuItem value={"055"}>055</MenuItem>
                        <MenuItem value={"070"}>070</MenuItem>
                        <MenuItem value={"077"}>077</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <input
                    {...register("phone", {
                      required: "Nömrə boş ola bilməz",
                      pattern: {
                        value: /^[1-9]\d{2}-\d{2}-\d{2}$/i,
                        message: "Düzgün format: 777-77-77",
                      },
                    })}
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="777-77-77"
                  />
                  <p className="form-error">{errors.phone?.message}</p>
                </div>
              </div>
              <div className="form-group agree">
                <div className="form-input">
                <span onClick={()=>setCheckbox({checked:!(checkbox.checked),firstClick:true})} className={`${checkbox.checked ? "checked" :""}`}>
                  <input type="checkbox" name="agree" id="agree" />
                  <BsCheck/>
                </span>
                <Link to="/">İstifadəçi şərtləri</Link>
                ilə razıyam
                <p className="form-error">{(!checkbox.checked && checkbox.firstClick) ? "İstifadəçi şərtlərini qəbul etməlisiniz." : ""}</p>
                </div>
              </div>
            </div>
            <button className="login-btn">Daxil ol</button>
            <div className="have-account left-side">
              Artıq hesabınız var?
              <Link to="/login">Daxil olun</Link>
            </div>
          </form>
          <RegistrationImg  btnText="Artıq hesabınız var?" linkText="Daxil olun" linkDirection="/login"/>
        </div>
      </div>
    </div>
  );
};

export default Register;
