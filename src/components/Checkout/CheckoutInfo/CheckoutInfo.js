import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FaRegCheckCircle } from "react-icons/fa";
import { TbCreditCard } from "react-icons/tb";
import { BiMoney } from "react-icons/bi";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const CheckoutInfo = () => {
  const [expanded, setExpanded] = useState(null);
  const [number, setNumber] = useState("050");
  const [userInfo, setUserInfo] = useState([]);
  const [addresInfo, setAddresInfo] = useState([]);
  const [checked, setChecked] = useState(false);
  // const [cardInfo,setCardInfo]=useState([]);
  const [accordionActive, setAccordionActive] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const {
    register: register2,
    formState: { errors: errors2 },
    handleSubmit: handleSubmit2,
  } = useForm({
    mode: "onBlur",
  });

  
  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  const handleAccordion = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const saveUserInfo = (data, panel) => {
    console.log(data)
    const inputs = Object.values(data);
    const keys = Object.keys(data);
    const all = [];
    for (let i = 0; i < inputs.length; i++) {
      let result = null;
      if (keys[i] === "tel") {
        result = number + inputs[i];
      } else {
        result = inputs[i];
      }
      all.push(result);
    }
    panel === "panel1" ? setUserInfo(all) : setAddresInfo(all);
    console.log(all)
    setChecked(panel);
    setExpanded(
      expanded === "panel1" ? "panel2" : expanded === "panel2" ? "panel3" : null
    );
  };
  // const saveUserInfo2 = (data, panel) => {
  //   console.log(data)
    
  // };

  useEffect(() => {
    setChecked(expanded);
    setAccordionActive(expanded);
  }, [expanded]);
  return (
    <div className="checkout-list">
      <h4>Ödəmə</h4>
      <div className="checkout-list-inner">
        <div className="checkout-item">
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleAccordion("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                <div
                  className={`checkout-title ${
                    expanded === "panel1" ? "active" : ""
                  } ${
                    checked !== "panel1" && userInfo.length > 0 ? "checked" : ""
                  }`}
                >
                  1.Şəxsi məlumatlar
                  <FaRegCheckCircle />
                </div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <form
                  className="userForm"
                  id="form1"
                  onSubmit={handleSubmit((e) => saveUserInfo(e, "panel1"))}
                >
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
                      <label htmlFor="lName">Soyad</label>
                      <div className="form-input">
                        <input
                          {...register("lName", {
                            required: "Soyad boş ola bilməz",
                            minLength: 1,
                          })}
                          type="text"
                          id="lName"
                          name="lName"
                          placeholder="Soyadınızı daxil edin"
                        />
                        <p className="form-error">{errors.lName?.message}</p>
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
                              value:/^[1-9]\d{2}-\d{2}-\d{2}$/i,
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
                  <button>Yadda saxla</button>
                </form>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <div
            className={`checkout-results ${
              accordionActive === "panel1" ? "dis-none" : ""
            }`}
          >
            {userInfo.length > 0 &&
              userInfo.map((item, index) => {
                return <span key={index}>{item}</span>;
              })}
          </div>
        </div>
        <div className="checkout-item">
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleAccordion("panel2")}
          >
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                <div
                  className={`checkout-title ${
                    expanded === "panel2" ? "active" : ""
                  } ${
                    checked !== "panel2" && addresInfo.length > 0
                      ? "checked"
                      : ""
                  }`}
                >
                  2. Çatdırılma
                  <FaRegCheckCircle />
                </div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <form
                  className="userForm"
                  id="form2"
                  onSubmit={handleSubmit2((e) => saveUserInfo(e, "panel2"))}
                >
                  <div className="form-group-list">
                    <div className="form-group">
                      <label htmlFor="address">Ünvan</label>
                      <div className="form-input">
                        <input
                        {...register2("address", {
                          required: "Adres boş ola bilməz",
                          minLength: 1,
                        })}
                          type="text"
                          id="address"
                          name="address"
                          placeholder="Ünvanı daxil edin"
                        />
                        <p className="form-error">{errors2.address?.message}</p>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="home">Bina/Mənzil</label>
                      <div className="form-input">
                        <input
                        {...register2("home", {
                          required: "Ev ünvanı boş ola bilməz",
                          minLength: 1,
                        })}
                          type="text"
                          id="home"
                          name="home"
                          placeholder="Daxil edin"
                        />
                        <p className="form-error">{errors2.home?.message}</p>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="notes">Kuryer üçün əlavə qeydlər</label>
                      <div className="form-input">
                        <textarea
                          name="notes"
                          id="notes"
                          cols="30"
                          rows="20"
                          placeholder="Mətni daxil edin..."
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <button>Yadda saxla</button>
                </form>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <div
            className={`checkout-results ${
              accordionActive === "panel2" ? "dis-none" : ""
            }`}
          >
            {addresInfo.length > 0 &&
              addresInfo.map((item, index) => {
                return <span key={index}>{item}</span>;
              })}
          </div>
        </div>
        <div className="checkout-item">
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleAccordion("panel3")}
          >
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                <div
                  className={`checkout-title ${
                    expanded === "panel3" ? "active" : ""
                  } ${
                    checked !== "panel3" && addresInfo.length > 0
                      ? "checked"
                      : ""
                  }`}
                >
                  3. Ödəmə üsulu
                  <FaRegCheckCircle />
                </div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <form
                  className="userForm"
                  onSubmit={(e) => saveUserInfo(e, "panel3")}
                >
                  <div className="form-group-list">
                    <div className="card-btns">
                      <div className="card-btn">
                        <TbCreditCard />
                        Onlayn kart ilə ödəmə
                      </div>
                      <div className="card-btn">
                        <BiMoney />
                        Qapıda nağd ödəmə
                      </div>
                    </div>
                  </div>
                  <button>Yadda saxla</button>
                </form>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default CheckoutInfo;
