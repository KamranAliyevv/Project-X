import React, { useState } from "react";
import { TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {FiEdit3,FiSave} from "react-icons/fi";

const UserInfo = () => {
  const [value, setValue] = useState(null);
  const [number, setNumber] = useState("050");

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  return (
    <div className="user-info">
      <div className="profil-title">Şəxsi məlumatlar</div>
      <div className="user-info-inner">
        <form className="userForm">
         <div className="form-group-list">
         <div className="form-group">
            <label forName="fName">Ad</label>
            <div className="form-input">
              <input type="text" id="fName" name="fName" />
            </div>
          </div>
          <div className="form-group">
            <label forName="lName">Soyad</label>
            <div className="form-input">
              <input type="text" id="lName" name="lName" />
            </div>
          </div>
          <div className="form-group">
            <label forName="email">E-mail</label>
            <div className="form-input">
              <input type="text" id="email" name="email" />
            </div>
          </div>
          <div className="form-group">
            <label forName="phoneNumber">Mobil nömrə</label>
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
              <input type="tel" placeholder="000-00-00" />
            </div>
          </div>
          <div className="form-group">
            <label forName="birthday">Doğüm tarixi</label>
            <div className="form-input">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  placeholder="Doğum tarixinizi seçin"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
          </div>
         </div>
          <button className="edit-btn">
            <FiEdit3/>
          Məlumatları yenilə
          </button>
          <button className="save-btn">
            <FiSave/>
            Yadda saxla
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserInfo;
