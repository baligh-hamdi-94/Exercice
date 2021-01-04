import { Injectable } from '@angular/core';
import { Equipe } from 'src/app/Model/Equipe';
@Injectable({
  providedIn: 'root'
})
export class EquipeServiceService {
  private equipes: Equipe[];
  constructor() { 
    this.equipes = [
      new Equipe (1,'Tunisie','Les Aigles de Carthage','lienfqfqs'),
      new Equipe (2,'France','Les Blues','lienfqfqs')
    ]
  }
  getEquipes(): Equipe[]{
    return this.equipes;
  }
  }

