import storage from "../../services/storage";
import http from "../../services/http";
import { setToken } from "../auth/authState";
import { updateUser } from "../auth/user";

export const signup = ({ body, onSuccess, onError }) => {
  return async (dispatch, getState) => {
    try {
      const res = await http.post("/user", body);
      console.log("responce===>", res.data);
      const { data } = res;
      dispatch(updateUser(data));
      await storage.store("user", data);
      console.log("storage====>", storage);

      if (onSuccess) onSuccess(res);
    } catch (error) {
      if (onError) onError(err);
      console.log("error==========", error.response.data);
    }
  };
};

export const login = ({ body, onSuccess, onError }) => {
  return async (dispatch, getState) => {
    try {
      const res = await http.post("/user/authenticate", body);
      console.log("res=====>", res.data);
      const { data } = res;
      const { token } = data;
      dispatch(updateUser(token));
      dispatch(setToken(token));
      await storage.store("xAuthToken", data);
      console.log("storage====>", storage);
      // await storage.store("user", data.user);

      if (onSuccess) onSuccess(res);
    } catch (error) {
      if (onError) onError(err);
      console.log("error===========", error.response);
    }
  };
};
