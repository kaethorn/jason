import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter } from 'rxjs';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.sass']
})
export class JsonComponent implements OnInit {

  public uglyJson = new FormControl('');
  public prettyJson = new FormControl('');
  public errors: string[] = [];

  constructor() { }

  public ngOnInit(): void {
    this.uglyJson.valueChanges
      .pipe(filter(item => item))
      .subscribe(value => {
        this.prettify(value);
      });
  }

  private prettify(text: string): void {
    this.errors = [];
    try {
      const result = JSON.parse(text);
      this.prettyJson.setValue(JSON.stringify(result, null, 2));
    } catch (e) {
      this.errors.push(e as string);
    }
  }
}
