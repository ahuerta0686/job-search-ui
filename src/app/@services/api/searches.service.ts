import { Injectable } from '@angular/core';
import { ApiBaseService } from './base.service';

@Injectable()
export class ApiSearchesService extends ApiBaseService {
  protected resourcePrefix = 'searches';

}
