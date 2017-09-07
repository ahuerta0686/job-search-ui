import { Injectable } from '@angular/core';
import { ApiBaseService } from './base.service';

@Injectable()
export class ApiSnippetService extends ApiBaseService {
  protected resourcePrefix = 'snippets';

}
