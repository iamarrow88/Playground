import { Component, OnInit } from '@angular/core';
import {Hero} from './../hero';
import { HEROES } from '../mock-heroes';
import { HeroService} from "../hero.service";
import { MessageService } from "../messages.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;
  heroClicked: number = 0;
  constructor(private heroService: HeroService ,private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHerose();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.heroClicked++;
    this.messageService.add(this.heroClicked.toString());
    this.messageService.add(hero.name);

  }
  getHerose(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }
}
