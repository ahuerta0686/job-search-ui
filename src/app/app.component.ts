import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SnippetFactory } from './@services/factories/snippet.factory';
import { Snippet } from './@models/snippet.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private domSanitizer: DomSanitizer,
    private snippetFactory: SnippetFactory,
  ) { }

  ngOnInit() {
    this.snippetFactory.all()
      .subscribe((snippets: Snippet[]) => {
        let trackingSnippet = !!snippets[0] ? snippets[0].html : '';
        let trackingSnippetSanitized = this.domSanitizer.sanitize(SecurityContext.NONE, trackingSnippet);
        const fragment = (<any>document).createRange().createContextualFragment(trackingSnippetSanitized);
        (<any>document).body.appendChild(fragment);
      });

  }
}
