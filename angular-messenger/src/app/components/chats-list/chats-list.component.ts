import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {conversationListMock} from "../../../mocks/conversation-list.mock";
import { BaseConversationModel } from '../../../models/conversation.model';


@Component({
  selector: 'app-chats-list',
  templateUrl: './chats-list.component.html',
  styleUrls: ['./chats-list.component.scss']
})
export class ChatsListComponent implements OnInit {
  list: BaseConversationModel[] = conversationListMock;
  searchKey: string = '';
  selectedUserID: string = '';
  @Output() selectConversation = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onSelectUser(conversation: BaseConversationModel) {
    this.selectedUserID = conversation.id;
    this.selectConversation.emit(conversation);
  }
}
