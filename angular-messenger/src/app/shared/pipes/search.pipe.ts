import { Pipe, PipeTransform } from '@angular/core';
import {BaseConversationModel} from "../../../models/conversation.model";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: BaseConversationModel[], searchKey: string): BaseConversationModel[] {
     return searchKey
      ?  value.filter(item => item.participants[1].username.toLowerCase().includes(searchKey.toLowerCase()))
      :  value

  }

}
