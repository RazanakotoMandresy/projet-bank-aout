export interface TopSendTypes {
  SentByImg: string;
  SentToImg: string;
  sentTo: string;
  sommeTrans: number;
  userName: string;
}
export interface UserContextType {
  AppUserName: string;
  BlockedAcc: Array<string> | null;
  Email: string;
  ID: number;
  firstName: string;
  image: string;
  name: string;
  residance: string;
  money: number;
  UUID: string;
}
export interface UserToSendType {
  nameFirstName: string;
  Email: string;
  uuid: string;
}
