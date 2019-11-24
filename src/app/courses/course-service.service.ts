import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor() { }
  public getCourse():Array<any>{
    return [
      {name: "HTML5&CSS3", description: "HTML (от англ. HyperText Markup Language — «язык гипертекстовой разметки») — стандартизированный язык разметки документов во Всемирной паутине.", img: "assets/img/pic0.jpg"},
      {name: "JavaScript", description: "JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили.", img: "assets/img/pic1.jpg"},
      {name: "Bootstrap4", description: "Bootstrap - свободный набор инструментов для создания сайтов и веб-приложений (HTML- и CSS-шаблоны).", img: "assets/img/pic2.jpg"},
      {name: "SASS", description: "Sass — это метаязык на основе CSS, предназначенный для увеличения уровня абстракции CSS кода и упрощения файлов каскадных таблиц стилей.", img: "assets/img/pic3.jpg"},
      {name: "TypeScript", description: "TypeScript — язык программирования, позиционируемый как средство разработки веб-приложений, расширяющее возможности JavaScript.", img: "assets/img/pic4.jpg"},
      {name: "Angular2", description: "Angular2 — это открытая и свободная платформа для разработки веб-приложений, написанная на языке TypeScript.", img: "assets/img/pic5.jpg"},
      {name: "Node.js", description: "Node или Node.js — программная платформа, основанная на движке V8 (транслирующем JavaScript в машинный код), превращающая JavaScript из узкоспециализированного языка в язык общего назначения.", img: "assets/img/pic6.png"},
      {name: "Git", description: "Git — распределённая система управления версиями. Проект был создан Линусом Торвальдсом для управления разработкой ядра Linux, первая версия выпущена 7 апреля 2005 года.", img: "assets/img/pic7.png"},
    ]
  }
}
