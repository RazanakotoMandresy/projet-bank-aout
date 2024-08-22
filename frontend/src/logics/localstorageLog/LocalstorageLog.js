export const GetSettingState = localStorage.getItem("settingState");
export const SetSettingState = (stateValue) => {
  localStorage.setItem("settingState", stateValue);
};
export const ChangeState = localStorage.setItem("ChangeState", Math.random());
export const GetChangeState = localStorage.getItem("ChangeState");
