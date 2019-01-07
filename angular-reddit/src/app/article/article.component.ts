import { Component, OnInit, HostBinding, Input } from "@angular/core";

import { Article } from "./article.model";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"]
})
export class ArticleComponent implements OnInit {
  // 4 properties
  @HostBinding("attr.class") cssClass = "row";
  @Input() article: Article;

  constructor() {
    // this.article = new Article("Movie Planet", "https://movie-planet.com", 10);
  }

  ngOnInit() {}

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }
}
