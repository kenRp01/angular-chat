import { Component } from "@angular/core";
import { Comment } from "./class/comment";
import { User } from "./class/user";
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

const CURRENT_USER: User = new User(1, "五十川　洋平");
const ANOTHER_USER: User = new User(2, "竹井　賢治");

const COMMENTS: Comment[] = [
  new Comment(ANOTHER_USER, "お疲れ様です！"),
  new Comment(ANOTHER_USER, "この間の件ですが、どうなりましたか？"),
  new Comment(CURRENT_USER, "お疲れ様です！"),
  new Comment(CURRENT_USER, "クライアントからOKがでました")
];

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  item: Observable<any>;
  comments = COMMENTS;
  currentUser = CURRENT_USER;
  content = "";

  constructor(private db: AngularFireDatabase) {
    this.item = db.object('/item').valueChanges();
  }
  addComment(comment: string): void {
    if (comment) {
      this.comments.push(new Comment(this.currentUser, comment));
    }
  }
}
