import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResultsService } from '../@services/results.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  public searchQuery: string = null;
  public zipCode: number = null;
  public jobs: any[] = [];

  public page: number;
  public pages: number[];

  constructor(
    private route: ActivatedRoute,
    private resultsService: ResultsService,
  ) { }

  tracking(job: any, event: any) {
    const trackingStr = job.onmousedown;
    const trackingFn = trackingStr.match(/([^\s]*)\(this,'(\d*)'/);
    (<any>window)[trackingFn[1]](event.target, trackingFn[2]);
  }

  ngOnInit() {
    this.page = Number(this.route.snapshot.queryParams['page']) || 1;
    this.searchQuery = this.route.snapshot.params['query'];
    this.zipCode = this.route.snapshot.params['zip'];
    this.resultsService.results.subscribe(results => this.jobs = results);
    this.resultsService.pages.subscribe(pages => {
      this.pages = [];
      pages = pages < 10 ? pages : 10;
      for (let i = 0; i < pages; i++) {
        this.pages.push(i + 1);
      }
    });
    this.resultsService.init(this.zipCode, this.searchQuery, this.page)
      .take(1)
      .flatMap(() => {
        return this.route.queryParams;
      })
      .subscribe(queryParams => {
        const oldPage = this.page;
        this.page = Number(queryParams['page']) || 1;
        if (oldPage !== this.page) {
          this.resultsService.init(this.zipCode, this.searchQuery, this.page).subscribe();
        }
      });
  }

}
