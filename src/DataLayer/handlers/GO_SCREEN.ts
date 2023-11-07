import { store } from "../store";
import { IActionEvent } from "../../Interfaces/IActionEvent";
import { actionSync } from "../../DataLayer/index.action";

const { dispatch } = store;

export const GO_SCREEN: IActionEvent = (event, data) => {
  const { history: navigate, path } = data;
  navigate(path);
  dispatch(actionSync.TOGGLE_SIDE_NAVIGATION());
};
