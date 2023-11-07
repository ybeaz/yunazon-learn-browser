import { store } from "../store";
import { IActionEvent } from "../../Interfaces/IActionEvent";
import { actionSync } from "../../DataLayer/index.action";

const { dispatch } = store;

export const GO_ACADEMY_SCREEN: IActionEvent = (event, data) => {
  const { history: navigate } = data;
  navigate("/academy");
  dispatch(actionSync.TOGGLE_SIDE_NAVIGATION());
};
