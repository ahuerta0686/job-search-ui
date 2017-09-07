import { ISnippet } from './snippet';

export class Snippet implements ISnippet {
  public html: string;

  constructor(snippet: any) {
    Object.assign(this, snippet);
  }
}
