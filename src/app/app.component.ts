import { Component } from '@angular/core';
import { Posts } from './classes/posts';
import { freeApiService } from './services/freeapi.service';
import { Comments } from './classes/comments';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CallRestApi';

  constructor(private _freeapiService: freeApiService){

  }


  lstcomments:Comments[];

  lstPosts:Posts[];
  objPosts:Posts;

  ngOnInit(){
this._freeapiService.getcomments()
.subscribe
(
  data=>
  {
    this.lstcomments = data;

  }
);

this._freeapiService.getcommentsbyparameter()
.subscribe
(
  data=>
  {
     this.lstPosts = data;
  }
);

var opost = new Posts();

opost.body = 'testbody';
opost.title = 'testtitle';
opost.userId =1;

this._freeapiService.post(opost)
.subscribe
(
 data=>
 {
   this.objPosts = data;
 }
);

  }

}
