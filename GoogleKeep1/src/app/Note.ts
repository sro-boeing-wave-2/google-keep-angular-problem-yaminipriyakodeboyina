import {label} from './Label';
import {checklist} from './Checklist';
export class Note{
  id: number;
  heading: string;
  pinned: boolean;
  text: string;
  label: label[];
  checklist: checklist[];
}
