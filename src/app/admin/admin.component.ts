import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../@services/admin.service';
import { Search } from '../@models/search.model';
import { Snippet } from '../@models/snippet.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public page: number;
  public pages: number[];
  public searches: Search[];
  public trackingSnippet: Snippet;
  public snippetUpdated: boolean;
  public snippetFailed: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private adminService: AdminService,
  ) { }

  updateTrackingSnippet() {
    this.adminService.setTrackingSnippet(this.trackingSnippet.html).subscribe(() => {
      this.snippetUpdated = true;
      setTimeout(() => {
        this.snippetUpdated = false;
      }, 2000);
    }, () => {
      this.snippetFailed = true;
      setTimeout(() => {
        this.snippetFailed = false;
      }, 2000);
    });
  }

  ngOnInit() {
    this.page = Number(this.route.snapshot.queryParams['page']) || 1;
    this.adminService.pages.subscribe(pages => {
      this.pages = [];
      for (let i = 0; i < pages; i++) {
        this.pages.push(i + 1);
      }
    });
    this.adminService.searches.subscribe(searches => this.searches = searches);
    this.adminService.trackingSnippet.subscribe(trackingSnippet => this.trackingSnippet = trackingSnippet);
    this.adminService.init(this.page).flatMap(() => {
      return this.route.queryParams;
    }).subscribe(queryParams => {
      this.page = Number(queryParams['page']) || 1;
      this.adminService.goToPage(this.page).subscribe();
    });
  }

}
