import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { SearchService } from '../@services/search.service';
import { Search } from '../@models/search.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  searchFormSubmitted: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private searchService: SearchService,
  ) { }

  public submitSearch(value, valid) {
    this.searchFormSubmitted = true;
    if (valid) {
      this.router.navigate(['results', value.zip, value.query]);
    }
  }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      query: [null, [Validators.required]],
      zip: [null, [Validators.required, CustomValidators.digits, CustomValidators.rangeLength([5,5])]],
    });

    this.searchService.init().subscribe();
  }

}
