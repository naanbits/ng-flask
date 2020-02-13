import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-option-select-modal',
  templateUrl: './option-select-modal.component.html',
  styleUrls: ['./option-select-modal.component.scss']
})
export class OptionSelectModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<OptionSelectModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
