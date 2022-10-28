import {Component, ViewChild} from '@angular/core';
import {SearchResultsComponent} from "./search-results/search-results.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  isSettingsOpen: boolean = false;
  isLoginBlockOpen: boolean = false;
  isRegistrationFormOpen: boolean = false;
  mainSearchKey: string = '';
  subSearchKey: string = '';
  searchResultsIsOpen: boolean = false;
  searchWay: string = '';
  isAscending: boolean = false;


  @ViewChild(SearchResultsComponent)
  private searchResultComponent: SearchResultsComponent | undefined;

  openSettings() {
    this.isSettingsOpen = !this.isSettingsOpen;
  }

  openLoginBlock() {
    this.isLoginBlockOpen = !this.isLoginBlockOpen;
    if (this.isRegistrationFormOpen) this.isRegistrationFormOpen = !this.isRegistrationFormOpen;
  }

  openRegistrationForm() {
    this.isRegistrationFormOpen = !this.isRegistrationFormOpen;
    if (this.isLoginBlockOpen) this.isLoginBlockOpen = !this.isLoginBlockOpen;
  }

  showSearchResults() {
    this.searchResultsIsOpen = !this.searchResultsIsOpen;
  }

  activeSortLink(e: Event) {
    const element = e.target as HTMLElement;
    if(element.tagName === 'INPUT') {
      document.querySelectorAll('.open-settings__options').forEach(element => element.classList.remove('active-sort-link'));
      document.querySelector('.link-header')?.classList.add('.active-sort-link');
    } else {
      document.querySelectorAll('.open-settings__options').forEach(element => element.classList.remove('active-sort-link'));
      element.classList.toggle("active-sort-link");
    }
  }

  sortByDate(e: Event){
    this.searchWay = 'date';
    this.isAscending = !this.isAscending;
/*    const dates = this.searchResultComponent?.data.items.map(element => new Date(element.snippet.publishedAt).getTime());
    console.log(dates);
    let sortedDates: number [] = [];
    if (dates) sortedDates = [...dates].sort((a, b) => a - b);
    console.log(sortedDates);
    let resArray: (videoItem | undefined) [] = []
    if (dates) resArray = sortedDates.map(date => this.searchResultComponent?.data.items[dates?.indexOf(date)]);
    console.log(resArray);*/
    this.activeSortLink(e);
  }

  sortByViews(e: Event){
    this.searchWay = 'views';
    this.isAscending = !this.isAscending;
    /*let views: string[] | undefined = this.searchResultComponent?.data.items.map(element => element.statistics.viewCount);
    const sortedArray = views?.slice(0, views?.length).sort((a, b) => +a - +b);
    console.log(views, sortedArray);
    const resArray = sortedArray?.map(elem => views?.indexOf(elem));
    console.log(resArray);*/
    this.activeSortLink(e);
/*    return resArray;*/
  }

  sortByKeyWords(e: Event) {
    this.searchWay = 'keyWords';
    this.activeSortLink(e);
  /*  const titles: string[]|undefined = this.searchResultComponent?.data.items.map(element => element.snippet.title);
    console.log(titles);
    const arrayOfResultIndexes = [];
    if(titles) {
        for (let i = 0; i < titles.length; i++) {
          if(titles[i].toLowerCase().includes(this.subSearchKey.toLowerCase())) arrayOfResultIndexes.push(i);
        }
      console.log(`arrayOfResultIndexes is ${arrayOfResultIndexes}`);
      const res = arrayOfResultIndexes.map(item => this.searchResultComponent?.data.items[item]);
      console.log(res);
      return res;
    }
    console.log('Error, titles was not found');
    return 'Error, titles was not found';*/
  }

}
