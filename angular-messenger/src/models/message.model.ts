export interface MessageModel {
  recipient: string;
  sender: string;
  timestamp: string;
  message: string;
  id: string;
}

export interface MessageSendRequestModel {
  recipient: string;
  message: string;
}
