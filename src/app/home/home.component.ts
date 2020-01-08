import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts$: Observable<ScullyRoute[]> = this.srs.available$.pipe(
    map((posts: ScullyRoute[]) =>
      posts.filter((p: ScullyRoute) => p.title !== undefined)
    )
  );

  constructor(private srs: ScullyRoutesService) {}

  ngOnInit() {}
}
