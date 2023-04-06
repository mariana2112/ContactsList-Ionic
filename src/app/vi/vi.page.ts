import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-vi',
  templateUrl: './vi.page.html',
  styleUrls: ['./vi.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ViPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
