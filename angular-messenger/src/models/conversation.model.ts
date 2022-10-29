import { UserModel } from './user.model';
import { MessageModel } from './message.model';

export interface BaseConversationModel {
  id: string;
  participants: UserModel[];
  last_message: MessageModel;
}

export interface SelectedConversationModel extends BaseConversationModel {
  messages: MessageModel[],
}

export interface ConversationListResponseModel {
  conversations: BaseConversationModel[];
}
