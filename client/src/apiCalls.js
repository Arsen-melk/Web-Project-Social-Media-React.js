import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8800/api";


export const loginCall = async (userCredential,dispatch) => {
    dispatch({type: "LOGIN_START"});
    try{
      const res = await axios.post(`${API_URL}/auth/login`,userCredential);
      dispatch({type:"LOGIN_SUCCESS", payload:res.data});
    }catch(err){
      dispatch({type:"LOGIN_FAILURE", payload:err});
    }
}
