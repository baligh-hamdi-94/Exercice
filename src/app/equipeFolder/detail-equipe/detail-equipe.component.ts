import { Component, Input, OnInit } from '@angular/core';
import { Equipe } from 'src/app/Model/Equipe';

@Component({
  selector: 'app-detail-equipe',
  templateUrl: './detail-equipe.component.html',
  styleUrls: ['./detail-equipe.component.css']
})
export class DetailEquipeComponent implements OnInit {
  @Input() equipe: Equipe;
  constructor() { }

  ngOnInit(): void {
  }

}
