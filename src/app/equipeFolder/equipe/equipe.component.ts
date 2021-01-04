import { Component, OnInit } from '@angular/core';
import { EquipeServiceService } from 'src/app/equipe-service.service';
import { Equipe } from 'src/app/Model/Equipe';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {
  equipes: Equipe[];
  constructor() { }

  ngOnInit(): void {
    
  }

}
