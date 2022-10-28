import { Pipe, PipeTransform } from '@angular/core';
import {videoItem} from "../../../../models/interfaces";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: videoItem[], isSettingsOpen: boolean, mainSearchKey: string, searchWay: string, asc?: boolean): videoItem[] {
    if(isSettingsOpen){
      console.log('pass isSettingsOpen. it\'s true');
      if(searchWay === 'views') {
        console.log('pass searchWay. it\'s views');
        if(asc) {
          console.log('pass asc, searchWay is views, asc is true');
          return value.sort((a, b) => +a.statistics.viewCount - +b.statistics.viewCount);
        } else {
          console.log('pass asc, searchWay is views, asc is false');
          return value.sort((a, b) => +b.statistics.viewCount - +a.statistics.viewCount);
        }
      } else if (searchWay === 'date') {
        console.log('pass searchWay. it\'s date');
        if(asc) {
          console.log('pass asc, searchWay is date, asc is true');
          return value.sort((a, b) => new Date(a.snippet.publishedAt).getTime() - new Date(b.snippet.publishedAt).getTime());
        } else {
          console.log('pass asc, searchWay is date, asc is true');
          return value.sort((a, b) => new Date(b.snippet.publishedAt).getTime() - new Date(a.snippet.publishedAt).getTime());
        }
      } else {
        console.log('pass searchWay. it\'s key words');
        return value.filter(video => video.snippet.localized.title.toLowerCase().includes(mainSearchKey.toLowerCase()))
      }
    } else {
      console.log('pass isSettingsOpen. it\'s false');
      return value;
    }
  }
}
