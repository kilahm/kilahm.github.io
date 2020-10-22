import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'kilahm-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  encapsulation: ViewEncapsulation.Native,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
