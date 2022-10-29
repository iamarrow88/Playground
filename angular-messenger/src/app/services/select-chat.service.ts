import { Injectable } from '@angular/core';
import {BaseConversationModel} from "../../models/conversation.model";
import {conversationListMock} from "../../mocks/conversation-list.mock";

@Injectable({
  providedIn: 'root'
})
export class SelectChatService {
  list: BaseConversationModel[] = conversationListMock;
  constructor() { }
  select(user: BaseConversationModel) {
    return user.last_message;
  }
}
