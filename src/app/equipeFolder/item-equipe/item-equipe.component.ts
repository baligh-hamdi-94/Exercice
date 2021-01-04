import { Component, Input, OnInit } from '@angular/core';
import { Equipe } from 'src/app/Model/Equipe';

@Component({
  selector: 'app-item-equipe',
  templateUrl: './item-equipe.component.html',
  styleUrls: ['./item-equipe.component.css']
})
export class ItemEquipeComponent implements OnInit {
  @Input() equipe: Equipe;
  constructor() { }

  ngOnInit(): void {
  }

}
