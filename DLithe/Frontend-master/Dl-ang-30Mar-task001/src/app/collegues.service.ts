import { Injectable } from '@angular/core';
import { Collegue } from './collegues';
import { cl } from 'src/collegues_mock';

@Injectable({
  providedIn: 'root'
})
export class ColleguesService {
  colleague :any;

  constructor() { }
}
