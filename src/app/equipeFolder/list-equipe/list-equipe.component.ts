import { Component, Input, OnInit } from '@angular/core';
import { Equipe } from 'src/app/Model/Equipe';
import { EquipeServiceService } from 'src/app/equipe-service.service';
@Component({
  selector: 'app-list-equipe',
  templateUrl: './list-equipe.component.html',
  styleUrls: ['./list-equipe.component.css']
})
export class ListEquipeComponent implements OnInit {
  @Input() equipes: Equipe[];
  constructor(EquipeService : EquipeServiceService) { }

  ngOnInit(): void {
    /* this.equipes = this.EquipeService.getEquipes();*/
    this.equipes = [
      new Equipe (1,'Tunisie','Les Aigles de Carthage','lienfqfqs'),
      new Equipe (2,'France','Les Blues','lienfqfqs')
    ]
  }

}
