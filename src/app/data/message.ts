export interface Message {
  type: string;
  from: number;
  date:Date;
  fromUserName: string;
  message: string;
}