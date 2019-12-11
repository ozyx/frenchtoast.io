import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AboutUsModalWindowComponent } from '../about-us-modal-window/about-us-modal-window.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openAboutUs() {
    const dialogRef = this.dialog.open(AboutUsModalWindowComponent, { width: '30vw', maxWidth: '50vw', height: '75vh' });
  }
}
