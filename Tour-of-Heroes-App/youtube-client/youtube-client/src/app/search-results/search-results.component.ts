import { Component, OnInit, DoCheck, OnChanges, AfterContentInit } from '@angular/core';
import {youTubeResponse} from "../interfaces";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  /*
  ngDoCheck() {
    console.log('Do Check');
  }

  ngOnChanges() {
    console.log("on changes");
  }

  ngAfterContentInit() {
    console.log("AfterContentInit")
  }

  ngAfterViewInit() {
    console.log('AfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked');
  }*/

  data: youTubeResponse = {
    "kind": "youtube#videoListResponse",
    "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/Cmodw7c5XPTM8Yg3kMXelihxek4\"",
    "pageInfo": {
      "totalResults": 10,
      "resultsPerPage": 10
    },
    "items": [
      {
        "kind": "youtube#video",
        "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/tmmI1yiRrmLWlKikXk1gD3TXsUI\"",
        "id": "YN8zNnV0sK8",
        "snippet": {
          "publishedAt": "2019-05-30T12:42:19.000Z",
          "channelId": "UCg8ss4xW9jASrqWGP30jXiw",
          "title": "Angular 8 - Быстрый курс за 60 минут",
          "description": "Полный курс по Angular 8+:\nhttps://clc.to/angular\n\nTelegram: https://teleg.one/js_by_vladilen \nInstagram: https://www.instagram.com/vladilen.minin \nVK: https://vk.com/vladilen.minin \nГруппа VK: https://vk.com/js_by_vladilen \n\nReact Native: мобильная разработка на JavaScript:\nhttps://clc.to/rnative\n\nПоддержать выпуск новых видео:\nЯД: https://money.yandex.ru/to/410013757655670\nPayPal: https://www.paypal.me/vladilenm \n\n30 мая 2019 года бы релиз Angular 8 и я решил записать  по нему быстрый курс. В видео вы узнаете, как Angular работает, как его установить.\nВ результате урока я покажу создание Todo приложения с разными подходами. Разберем работу с сервером, сервисами, пайпами, коммуникацией между компонентами и немного RxJS\n\nИсходный код:\nhttps://github.com/vladilenm/angular8-cc\n\nAngular 8 - Быстрый курс за 60 минут",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/YN8zNnV0sK8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/YN8zNnV0sK8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/YN8zNnV0sK8/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/YN8zNnV0sK8/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/YN8zNnV0sK8/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "Владилен Минин",
          "tags": [
            "angular",
            "angular 8",
            "angularjs",
            "js",
            "javascript",
            "rxjs",
            "angular 60 минут",
            "angular 1 час",
            "angular 8 1 час",
            "владилен минин",
            "уроки javascript",
            "angular 2",
            "angular 4",
            "angular уроки",
            "курс angular",
            "основы angular",
            "angular фреймворк",
            "angular уроки для начинающих",
            "уроки angular",
            "angular практика",
            "ангуляр",
            "angular изучение",
            "angular курс",
            "ангуляр 4 уроки",
            "angular уроки на русском"
          ],
          "categoryId": "27",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Angular 8 - Быстрый курс за 60 минут",
            "description": "Полный курс по Angular 8+:\nhttps://clc.to/angular\n\nTelegram: https://teleg.one/js_by_vladilen \nInstagram: https://www.instagram.com/vladilen.minin \nVK: https://vk.com/vladilen.minin \nГруппа VK: https://vk.com/js_by_vladilen \n\nReact Native: мобильная разработка на JavaScript:\nhttps://clc.to/rnative\n\nПоддержать выпуск новых видео:\nЯД: https://money.yandex.ru/to/410013757655670\nPayPal: https://www.paypal.me/vladilenm \n\n30 мая 2019 года бы релиз Angular 8 и я решил записать  по нему быстрый курс. В видео вы узнаете, как Angular работает, как его установить.\nВ результате урока я покажу создание Todo приложения с разными подходами. Разберем работу с сервером, сервисами, пайпами, коммуникацией между компонентами и немного RxJS\n\nИсходный код:\nhttps://github.com/vladilenm/angular8-cc\n\nAngular 8 - Быстрый курс за 60 минут"
          },
          "defaultAudioLanguage": "en-US"
        },
        "statistics": {
          "viewCount": "33265",
          "likeCount": "1173",
          "dislikeCount": "26",
          "favoriteCount": "0",
          "commentCount": "170"
        }
      },
      {
        "kind": "youtube#video",
        "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/uto79F2R8W05GFpiUAcLdFGs7PQ\"",
        "id": "Fdf5aTYRW0E",
        "snippet": {
          "publishedAt": "2019-01-23T17:46:58.000Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Angular Crash Course",
          "description": "In this video we will talk about what Angular is and then jump in and build a small app With Angular 7, looking at most of the fundamental concepts like components, services, modules, etc\n\nSponsor:\nhttp://www.netlify.com\n\nCode:\nhttps://github.com/bradtraversy/angular-crash-todolist\n\n💖 Become a Patron: Show support & get perks!\nhttp://www.patreon.com/traversymedia\n\nWebsite & Udemy Courses\nhttp://www.traversymedia.com\n\nFollow Traversy Media:\nhttps://www.facebook.com/traversymedia\nhttps://www.twitter.com/traversymedia\nhttps://www.instagram.com/traversymedia",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Fdf5aTYRW0E/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Fdf5aTYRW0E/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Fdf5aTYRW0E/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/Fdf5aTYRW0E/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/Fdf5aTYRW0E/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "Traversy Media",
          "tags": [
            "angular",
            "angular 7",
            "angular tutorial",
            "angularjs"
          ],
          "categoryId": "28",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Angular Crash Course",
            "description": "In this video we will talk about what Angular is and then jump in and build a small app With Angular 7, looking at most of the fundamental concepts like components, services, modules, etc\n\nSponsor:\nhttp://www.netlify.com\n\nCode:\nhttps://github.com/bradtraversy/angular-crash-todolist\n\n💖 Become a Patron: Show support & get perks!\nhttp://www.patreon.com/traversymedia\n\nWebsite & Udemy Courses\nhttp://www.traversymedia.com\n\nFollow Traversy Media:\nhttps://www.facebook.com/traversymedia\nhttps://www.twitter.com/traversymedia\nhttps://www.instagram.com/traversymedia"
          },
          "defaultAudioLanguage": "en"
        },
        "statistics": {
          "viewCount": "456979",
          "likeCount": "8213",
          "dislikeCount": "131",
          "favoriteCount": "0",
          "commentCount": "555"
        }
      },
      {
        "kind": "youtube#video",
        "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/6e0k9ik7TThWpqueHGOhTRIN1-A\"",
        "id": "k5E2AVpwsko",
        "snippet": {
          "publishedAt": "2017-09-05T16:48:15.000Z",
          "channelId": "UCWv7vMbMWH4-V0ZXdmDpPBA",
          "title": "Angular Tutorial for Beginners: Learn Angular from Scratch | Mosh",
          "description": "🔥Get the COMPLETE COURSE (60% OFF - LIMITED TIME): https://programmingwithmosh.com/courses/angular\n\nThis Angular tutorial teaches you the fundamentals of Angular and TypeScript.\n\nSUBSCRIBE FOR MORE VIDEOS!\nhttps://www.youtube.com/channel/UCWv7vMbMWH4-V0ZXdmDpPBA?sub_confirmation=1\n\n\nTABLE OF CONTENT \n\n00:00 Introduction\n02:54 What is Angular?\n04:54 Architecture of Angular Apps\n08:41 Setting Up the Development Environment\n11:25 Your First Angular App\n13:50 Structure of Angular Projects\n20:43 Webpack\n23:57 Angular Version History \n27:31 Course Structure\n31:55 TypeScript Fundamentals\n32:34 What is TypeScript?\n34:58 Your First TypeScript Program\n37:57 Declaring Variables\n42:46 Types\n48:29 Type Assertions\n51:15 Arrow Functions\n52:59 Interfaces\n56:54 Classes\n01:01:22 Objects\n01:05:31 Constructors\n01:08:22 Access Modifiers\n01:11:18 Access Modifiers in Constructor Parameters\n01:12:58 Properties\n01:18:15 Modules\n01:23:22 Angular Fundamentals\n01:23:41 Building Blocks of Angular Apps\n01:27:22 Creating Components\n01:37:00 Generating Components Using Angular CLI\n01:41:40 Templates\n01:44:08 Directives\n01:47:34 Services\n01:52:02 Dependency Injection\n01:59:22 Generating Services Using Angular CLI\n02:01:32 Exercise\n \n\nSTAY IN TOUCH\n\nhttps://www.facebook.com/programmingwithmosh/\nhttps://twitter.com/moshhamedani",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/k5E2AVpwsko/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/k5E2AVpwsko/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/k5E2AVpwsko/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/k5E2AVpwsko/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/k5E2AVpwsko/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "Programming with Mosh",
          "tags": [
            "learn angular 4",
            "learn angular 4 from scratch",
            "angular4",
            "learn angular",
            "angular tutorial",
            "angular 4",
            "Angular",
            "angular 5",
            "angular 5 course",
            "angular course",
            "angular.js",
            "angularjs",
            "angular 2",
            "angular2",
            "angular 4 tutorial",
            "angular 4 tutorial for beginners",
            "angular tutorial for beginners",
            "angular 4 crash course",
            "angular 4 in 60 minutes",
            "angularjs 4",
            "angular 4 tutorial for beginners step by step",
            "angular js",
            "angularjs tutorial for beginners",
            "angular 6",
            "angular 7"
          ],
          "categoryId": "22",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Angular Tutorial for Beginners: Learn Angular from Scratch | Mosh",
            "description": "🔥Get the COMPLETE COURSE (60% OFF - LIMITED TIME): https://programmingwithmosh.com/courses/angular\n\nThis Angular tutorial teaches you the fundamentals of Angular and TypeScript.\n\nSUBSCRIBE FOR MORE VIDEOS!\nhttps://www.youtube.com/channel/UCWv7vMbMWH4-V0ZXdmDpPBA?sub_confirmation=1\n\n\nTABLE OF CONTENT \n\n00:00 Introduction\n02:54 What is Angular?\n04:54 Architecture of Angular Apps\n08:41 Setting Up the Development Environment\n11:25 Your First Angular App\n13:50 Structure of Angular Projects\n20:43 Webpack\n23:57 Angular Version History \n27:31 Course Structure\n31:55 TypeScript Fundamentals\n32:34 What is TypeScript?\n34:58 Your First TypeScript Program\n37:57 Declaring Variables\n42:46 Types\n48:29 Type Assertions\n51:15 Arrow Functions\n52:59 Interfaces\n56:54 Classes\n01:01:22 Objects\n01:05:31 Constructors\n01:08:22 Access Modifiers\n01:11:18 Access Modifiers in Constructor Parameters\n01:12:58 Properties\n01:18:15 Modules\n01:23:22 Angular Fundamentals\n01:23:41 Building Blocks of Angular Apps\n01:27:22 Creating Components\n01:37:00 Generating Components Using Angular CLI\n01:41:40 Templates\n01:44:08 Directives\n01:47:34 Services\n01:52:02 Dependency Injection\n01:59:22 Generating Services Using Angular CLI\n02:01:32 Exercise\n \n\nSTAY IN TOUCH\n\nhttps://www.facebook.com/programmingwithmosh/\nhttps://twitter.com/moshhamedani"
          },
          "defaultAudioLanguage": "en-US"
        },
        "statistics": {
          "viewCount": "1266085",
          "likeCount": "18342",
          "dislikeCount": "473",
          "favoriteCount": "0",
          "commentCount": "1255"
        }
      },
      {
        "kind": "youtube#video",
        "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/cDwx4Ds5-J9CmiqmazUetzrLZKY\"",
        "id": "Rf54BH35yrY",
        "snippet": {
          "publishedAt": "2019-09-04T15:00:12.000Z",
          "channelId": "UCg8ss4xW9jASrqWGP30jXiw",
          "title": "Angular 8 Основы. Полный Курс для начинающих",
          "description": "Полный курс по Angular 8+:\nhttps://clc.to/angular\n\nДобавляйте меня в ВК: https://vk.com/vladilen.minin\nTelegram: https://teleg.one/js_by_vladilen\nInstagram: https://www.instagram.com/vladilen.minin\nГруппа ВК: https://vk.com/js_by_vladilen\n\nПоддержать выпуск новых видео:\nЯД: https://money.yandex.ru/to/410013757655670\nPayPal: https://www.paypal.me/vladilenm \n\nУрок по Angular. В этом курсе вы познакомитесь со всеми основными элементами, которые есть в Angular с полного нуля\n\nAngular 8 Основы. Полный Курс. Урок для Новичков",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Rf54BH35yrY/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Rf54BH35yrY/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Rf54BH35yrY/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/Rf54BH35yrY/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/Rf54BH35yrY/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "Владилен Минин",
          "tags": [
            "angular",
            "angularjs",
            "js",
            "javascript",
            "уроки angular",
            "angular уроки",
            "angular 8",
            "курс angular",
            "angular основы",
            "владилен",
            "владилен минин",
            "минин",
            "основы angular",
            "ангуляр",
            "angular 6",
            "angular js",
            "angular уроки для начинающих",
            "angular фреймворк",
            "angular практика",
            "что такое angular",
            "angular cli",
            "angular уроки на русском",
            "курсы программирования",
            "angular tutorial"
          ],
          "categoryId": "27",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Angular 8 Основы. Полный Курс для начинающих",
            "description": "Полный курс по Angular 8+:\nhttps://clc.to/angular\n\nДобавляйте меня в ВК: https://vk.com/vladilen.minin\nTelegram: https://teleg.one/js_by_vladilen\nInstagram: https://www.instagram.com/vladilen.minin\nГруппа ВК: https://vk.com/js_by_vladilen\n\nПоддержать выпуск новых видео:\nЯД: https://money.yandex.ru/to/410013757655670\nPayPal: https://www.paypal.me/vladilenm \n\nУрок по Angular. В этом курсе вы познакомитесь со всеми основными элементами, которые есть в Angular с полного нуля\n\nAngular 8 Основы. Полный Курс. Урок для Новичков"
          },
          "defaultAudioLanguage": "en-US"
        },
        "statistics": {
          "viewCount": "14544",
          "likeCount": "573",
          "dislikeCount": "11",
          "favoriteCount": "0",
          "commentCount": "88"
        }
      },
      {
        "kind": "youtube#video",
        "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/_99tEunMszVYvCj2-1aUTKgOoSY\"",
        "id": "m0yGx2MGZWg",
        "snippet": {
          "publishedAt": "2018-05-13T07:44:08.000Z",
          "channelId": "UCe_H8hzx9WV7Ca7Ps5gt72Q",
          "title": "Что такое Angular. Обзор возможностей",
          "description": "В этом видео речь пойдет про javascript фреймворк Angular. Я расскажу что такое Angular, где и когда его применяют, а так же сделаю небольшой обзор его возможностей. Расскажу чем фреймворк сложен для новичков и чем он действительно хорош для новых проектов. Сейчас для того что б стать junior javascript разработчиком нужно обязательно знать хотя бы один фреймворк js и ангуляр будет отличным выбором.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/m0yGx2MGZWg/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/m0yGx2MGZWg/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/m0yGx2MGZWg/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/m0yGx2MGZWg/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/m0yGx2MGZWg/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "Web Developer Blog",
          "tags": [
            "angular",
            "ангуляр",
            "angular js",
            "уроки angular",
            "angular уроки",
            "angular tutorial",
            "что такое angular",
            "angular обзор",
            "angular фреймворк",
            "js",
            "javascript",
            "web development",
            "angular 6",
            "angular примеры",
            "angular практика",
            "стоит ли учить angular",
            "angular учить",
            "программирование"
          ],
          "categoryId": "27",
          "liveBroadcastContent": "none",
          "defaultLanguage": "ru",
          "localized": {
            "title": "Что такое Angular. Обзор возможностей",
            "description": "В этом видео речь пойдет про javascript фреймворк Angular. Я расскажу что такое Angular, где и когда его применяют, а так же сделаю небольшой обзор его возможностей. Расскажу чем фреймворк сложен для новичков и чем он действительно хорош для новых проектов. Сейчас для того что б стать junior javascript разработчиком нужно обязательно знать хотя бы один фреймворк js и ангуляр будет отличным выбором."
          },
          "defaultAudioLanguage": "ru"
        },
        "statistics": {
          "viewCount": "43470",
          "likeCount": "1047",
          "dislikeCount": "198",
          "favoriteCount": "0",
          "commentCount": "96"
        }
      },
      {
        "kind": "youtube#video",
        "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/GuGydXnkvpl-L4ntYhAaLNiseZ4\"",
        "id": "VAkio68d51A",
        "snippet": {
          "publishedAt": "2019-02-25T00:09:23.000Z",
          "channelId": "UCZ9qFEC82qM6Pk-54Q4TVWA",
          "title": "What is Angular? (Explained for Beginners)",
          "description": "When you're just starting out you are probably wondering \"What is Angular exactly? When you ask that question it leads to a lot of concepts that are over your head and don't make sense. So in this video I really want to cover what exactly Angular is and why it's even necessary... all from a beginners point of view.\n\n*** DOWNLOAD THE FREE REPORT ***\nFor my free report on the five best programming languages in 2019 (for beginners) go to: https://andysterkowitz.com/report",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/VAkio68d51A/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/VAkio68d51A/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/VAkio68d51A/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/VAkio68d51A/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/VAkio68d51A/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "Andy Sterkowitz",
          "tags": [
            "angular",
            "angular 7",
            "angularjs",
            "learn angular",
            "angular.js",
            "angular tutorial for beginners",
            "angular for beginners",
            "angular for dummies",
            "what is angular",
            "what is angular 7",
            "angular2",
            "angular 2",
            "javascript",
            "front end framework",
            "web development",
            "web development 2019",
            "front end framework 2019",
            "what is a front end framework",
            "software development",
            "programming",
            "front end software developer",
            "web developer"
          ],
          "categoryId": "28",
          "liveBroadcastContent": "none",
          "defaultLanguage": "en",
          "localized": {
            "title": "What is Angular? (Explained for Beginners)",
            "description": "When you're just starting out you are probably wondering \"What is Angular exactly? When you ask that question it leads to a lot of concepts that are over your head and don't make sense. So in this video I really want to cover what exactly Angular is and why it's even necessary... all from a beginners point of view.\n\n*** DOWNLOAD THE FREE REPORT ***\nFor my free report on the five best programming languages in 2019 (for beginners) go to: https://andysterkowitz.com/report"
          },
          "defaultAudioLanguage": "en"
        },
        "statistics": {
          "viewCount": "57997",
          "likeCount": "1662",
          "dislikeCount": "34",
          "favoriteCount": "0",
          "commentCount": "114"
        }
      },
      {
        "kind": "youtube#video",
        "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/u2qq5ltpXouoIrpkJgGLu8YOIeg\"",
        "id": "u1VCxpvDgsk",
        "snippet": {
          "publishedAt": "2018-12-01T15:00:05.000Z",
          "channelId": "UCvuY904el7JvBlPbdqbfguw",
          "title": "Уроки Angular для начинающих / #1 - Введение в Angular",
          "description": "Приступаем к изучению библиотеки Angular. В ходе курса мы создадим небольшой сайт и научимся всем основным концепциям библиотеки Angular. Мы рассмотрим события, компоненты, создание форм и многое другое, чтобы вы в дальнейшем сами могли создавать веб сайты на Angular.\n\n1) Курс на сайте itProger: https://itproger.com/course/angular\n2) Node JS: https://nodejs.org/\n3) Редактор кода: https://atom.io/\n4) Angular CLI: https://cli.angular.io/\n\n✔ Сообщество программистов: https://itproger.com/\n\n✔ -------------\nВступай в группу Вк - https://vk.com/prog_life 🚀\nГруппа FaceBook - https://goo.gl/XW0aaP\n\nInstagram: https://www.instagram.com/gosha_dudar/\nTelegram: http://t.me/itProger_official\nTwitter - https://twitter.com/GoshaDudar\n\n- Уроки от #GoshaDudar 👨🏼\u200d💻\n- Все уроки по хештегу #goshaAngular",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/u1VCxpvDgsk/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/u1VCxpvDgsk/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/u1VCxpvDgsk/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/u1VCxpvDgsk/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/u1VCxpvDgsk/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "Гоша Дударь",
          "tags": [
            "angular",
            "angular 6",
            "angular уроки",
            "angular node js",
            "angularjs",
            "angularjs уроки",
            "для начинающих",
            "angular уроки на русском",
            "Введение в Angular",
            "что такое angular",
            "установка angular",
            "#GoshaDudar",
            "#goshaAngular"
          ],
          "categoryId": "27",
          "liveBroadcastContent": "none",
          "defaultLanguage": "ru",
          "localized": {
            "title": "Уроки Angular для начинающих / #1 - Введение в Angular",
            "description": "Приступаем к изучению библиотеки Angular. В ходе курса мы создадим небольшой сайт и научимся всем основным концепциям библиотеки Angular. Мы рассмотрим события, компоненты, создание форм и многое другое, чтобы вы в дальнейшем сами могли создавать веб сайты на Angular.\n\n1) Курс на сайте itProger: https://itproger.com/course/angular\n2) Node JS: https://nodejs.org/\n3) Редактор кода: https://atom.io/\n4) Angular CLI: https://cli.angular.io/\n\n✔ Сообщество программистов: https://itproger.com/\n\n✔ -------------\nВступай в группу Вк - https://vk.com/prog_life 🚀\nГруппа FaceBook - https://goo.gl/XW0aaP\n\nInstagram: https://www.instagram.com/gosha_dudar/\nTelegram: http://t.me/itProger_official\nTwitter - https://twitter.com/GoshaDudar\n\n- Уроки от #GoshaDudar 👨🏼\u200d💻\n- Все уроки по хештегу #goshaAngular"
          },
          "defaultAudioLanguage": "ru"
        },
        "statistics": {
          "viewCount": "33896",
          "likeCount": "612",
          "dislikeCount": "37",
          "favoriteCount": "0",
          "commentCount": "50"
        }
      },
      {
        "kind": "youtube#video",
        "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/96JEWzuOaAgaHrcnKhmatlZzPME\"",
        "id": "rc3E4tplFCU",
        "snippet": {
          "publishedAt": "2019-10-29T15:00:14.000Z",
          "channelId": "UCg8ss4xW9jASrqWGP30jXiw",
          "title": "Angular 40 вопросов для собеседования",
          "description": "Полный курс по Angular 8+:\nhttps://clc.to/angular\n\nДобавляйте меня в ВК: https://vk.com/vladilen.minin\nГруппа ВК: https://vk.com/js_by_vladilen\nTelegram: https://teleg.one/js_by_vladilen\nInstagram: https://www.instagram.com/vladilen.minin\n\nПоддержать выпуск новых видео:\nЯД: https://money.yandex.ru/to/410013757655670\nPayPal: https://www.paypal.me/vladilenm \n\nAngular 40 вопросов для собеседования. Подготовка к интервью",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/rc3E4tplFCU/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/rc3E4tplFCU/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/rc3E4tplFCU/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/rc3E4tplFCU/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/rc3E4tplFCU/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "Владилен Минин",
          "tags": [
            "angular",
            "angularjs",
            "js",
            "javascript",
            "уроки angular",
            "angular уроки",
            "angular 8",
            "курс angular",
            "angular основы",
            "владилен",
            "владилен минин",
            "минин",
            "основы angular",
            "angular вопросы",
            "angular интервью",
            "собеседование",
            "angular собеседование",
            "вопросы на собеседование",
            "angular 6",
            "angular для начинающих",
            "angular уроки на русском"
          ],
          "categoryId": "27",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Angular 40 вопросов для собеседования",
            "description": "Полный курс по Angular 8+:\nhttps://clc.to/angular\n\nДобавляйте меня в ВК: https://vk.com/vladilen.minin\nГруппа ВК: https://vk.com/js_by_vladilen\nTelegram: https://teleg.one/js_by_vladilen\nInstagram: https://www.instagram.com/vladilen.minin\n\nПоддержать выпуск новых видео:\nЯД: https://money.yandex.ru/to/410013757655670\nPayPal: https://www.paypal.me/vladilenm \n\nAngular 40 вопросов для собеседования. Подготовка к интервью"
          },
          "defaultAudioLanguage": "en-US"
        },
        "statistics": {
          "viewCount": "6824",
          "likeCount": "595",
          "dislikeCount": "10",
          "favoriteCount": "0",
          "commentCount": "126"
        }
      },
      {
        "kind": "youtube#video",
        "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/pvVvPt5cchXjCoSYxodr18lOaEg\"",
        "id": "NaZwVUHnmfE",
        "snippet": {
          "publishedAt": "2019-06-19T16:06:13.000Z",
          "channelId": "UCg8ss4xW9jASrqWGP30jXiw",
          "title": "Angular 8 + RxJS. Приложение Органайзер С Нуля (Для Опытных!)",
          "description": "Курс по Angular 8+: \nhttps://clc.to/angular \n\nДобавляйте меня в ВК: https://vk.com/vladilen.minin\nTelegram: https://teleg.one/js_by_vladilen\nInstagram: https://www.instagram.com/vladilen.minin\nГруппа ВК: https://vk.com/js_by_vladilen\n\nПоддержать выпуск новых видео:\nЯД: https://money.yandex.ru/to/410013757655670\nPayPal: https://www.paypal.me/vladilenm \n\nВ видео я покажу разработку приложения органайзера с нуля.\nВ видео я не буду пояснять базовые моменты, так как это практика для опытных разработчиков\n\nВ результате вы получите приложение, в котором будет использоваться много RxJS, Firebase, MomentJS и Angular 8\nНе будет никаких CSS фреймворков - все стили будут написаны с нуля с использованием CSS переменных\n\nИсходный код:\nhttps://github.com/vladilenm/angular-organizer\n\nAngular 8 + RxJS. Приложение Целиком (Для Опытных!)\nhttps://youtu.be/NaZwVUHnmfE",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/NaZwVUHnmfE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/NaZwVUHnmfE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/NaZwVUHnmfE/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/NaZwVUHnmfE/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/NaZwVUHnmfE/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "Владилен Минин",
          "tags": [
            "angular",
            "angular 8",
            "vladilen",
            "владилен",
            "владилен минин",
            "angularjs",
            "angular практика",
            "уроки angular",
            "rxjs",
            "rxjs уроки",
            "momentjs",
            "js",
            "javascript",
            "web",
            "frontend",
            "ангуляр",
            "angular уроки",
            "angular уроки для начинающих",
            "создание приложения на angular 4",
            "angular 60 минут",
            "изучение angular",
            "angular 6",
            "ангуляр 7 уроки",
            "реактивное программирование"
          ],
          "categoryId": "27",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Angular 8 + RxJS. Приложение Органайзер С Нуля (Для Опытных!)",
            "description": "Курс по Angular 8+: \nhttps://clc.to/angular \n\nДобавляйте меня в ВК: https://vk.com/vladilen.minin\nTelegram: https://teleg.one/js_by_vladilen\nInstagram: https://www.instagram.com/vladilen.minin\nГруппа ВК: https://vk.com/js_by_vladilen\n\nПоддержать выпуск новых видео:\nЯД: https://money.yandex.ru/to/410013757655670\nPayPal: https://www.paypal.me/vladilenm \n\nВ видео я покажу разработку приложения органайзера с нуля.\nВ видео я не буду пояснять базовые моменты, так как это практика для опытных разработчиков\n\nВ результате вы получите приложение, в котором будет использоваться много RxJS, Firebase, MomentJS и Angular 8\nНе будет никаких CSS фреймворков - все стили будут написаны с нуля с использованием CSS переменных\n\nИсходный код:\nhttps://github.com/vladilenm/angular-organizer\n\nAngular 8 + RxJS. Приложение Целиком (Для Опытных!)\nhttps://youtu.be/NaZwVUHnmfE"
          },
          "defaultAudioLanguage": "en-US"
        },
        "statistics": {
          "viewCount": "12128",
          "likeCount": "665",
          "dislikeCount": "11",
          "favoriteCount": "0",
          "commentCount": "156"
        }
      },
      {
        "kind": "youtube#video",
        "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/KuFm1jGNMzgjE2VlAEsPgRVra4o\"",
        "id": "G0bBLvWXBvc",
        "snippet": {
          "publishedAt": "2019-09-16T16:53:41.000Z",
          "channelId": "UCsBjURrPoezykLs9EqgamOA",
          "title": "Angular for Beginners - Let's build a Tic-Tac-Toe PWA",
          "description": "Learn the basics of Angular 8 🚀 by building a tic-tac-toe game 🕹️ from scratch...Then deploy it as an installable progressive web app (PWA). Go beyond the basics 👉https://fireship.io/courses/angular/\n\nFull Source Code: https://github.com/fireship-io/angular-tic-tac-toe\nAngular Docs: https://angular.io/\n\n#angular #pwa #tutorial\n\nTake Angular quizzes 🤓\n\niOS https://itunes.apple.com/us/app/fireship/id1462592372?mt=8\nAndroid https://play.google.com/store/apps/details?id=io.fireship.quizapp\n\nUpgrade to Fireship PRO at https://fireship.io/pro\nUse code lORhwXd2 for 25% off your first payment.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/G0bBLvWXBvc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/G0bBLvWXBvc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/G0bBLvWXBvc/hqdefault.jpg",
              "width": 480,
              "height": 360
            },
            "standard": {
              "url": "https://i.ytimg.com/vi/G0bBLvWXBvc/sddefault.jpg",
              "width": 640,
              "height": 480
            },
            "maxres": {
              "url": "https://i.ytimg.com/vi/G0bBLvWXBvc/maxresdefault.jpg",
              "width": 1280,
              "height": 720
            }
          },
          "channelTitle": "Fireship",
          "tags": [
            "webdev",
            "app development",
            "lesson",
            "tutorial",
            "beginners",
            "beginner",
            "basic",
            "angular tutorial",
            "angular basics",
            "angular for beginners",
            "angular 8",
            "angular components",
            "learn angular"
          ],
          "categoryId": "28",
          "liveBroadcastContent": "none",
          "localized": {
            "title": "Angular for Beginners - Let's build a Tic-Tac-Toe PWA",
            "description": "Learn the basics of Angular 8 🚀 by building a tic-tac-toe game 🕹️ from scratch...Then deploy it as an installable progressive web app (PWA). Go beyond the basics 👉https://fireship.io/courses/angular/\n\nFull Source Code: https://github.com/fireship-io/angular-tic-tac-toe\nAngular Docs: https://angular.io/\n\n#angular #pwa #tutorial\n\nTake Angular quizzes 🤓\n\niOS https://itunes.apple.com/us/app/fireship/id1462592372?mt=8\nAndroid https://play.google.com/store/apps/details?id=io.fireship.quizapp\n\nUpgrade to Fireship PRO at https://fireship.io/pro\nUse code lORhwXd2 for 25% off your first payment."
          },
          "defaultAudioLanguage": "en"
        },
        "statistics": {
          "viewCount": "56657",
          "likeCount": "2092",
          "dislikeCount": "36",
          "favoriteCount": "0",
          "commentCount": "128"
        }
      }
    ]
  }

  findTimeDiff(publishedAt: string) {
    const publishingDateMs = new Date(publishedAt).getTime();
    const currentDateMs = new Date().getTime();

    const difference = currentDateMs - publishingDateMs;

    const sevenDays = 604800000;
    const oneMonth = 2629800000;
    const halfYear = 15778800000;
    if (difference >= halfYear) {
      return 'red';
    } else if (difference >= oneMonth) {
      return 'yellow';
    } else if (difference >= sevenDays) {
      return 'green';
    } else {
      return 'blue';
    }
  }
}
