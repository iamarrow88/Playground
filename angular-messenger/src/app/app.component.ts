import {Component, Output} from '@angular/core';
import { selectedConversationsMock } from './../mocks/selected-conversations.mock'
import {SelectedConversationModel} from "../models/conversation.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angular-messenger';
  @Output() selectedConversation: SelectedConversationModel | null = null;
  allConversations: SelectedConversationModel[] = selectedConversationsMock;
}
