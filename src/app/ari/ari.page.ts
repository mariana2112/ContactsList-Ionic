import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-ari',
  templateUrl: './ari.page.html',
  styleUrls: ['./ari.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AriPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
