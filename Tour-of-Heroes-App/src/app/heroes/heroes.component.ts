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
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHerose();
  }
  getHerose(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }
}
