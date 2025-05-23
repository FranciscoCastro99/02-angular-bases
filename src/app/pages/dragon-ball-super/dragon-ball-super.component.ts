import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { ValueChangeEvent } from '@angular/forms';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { Character } from '../../interfaces/character.interface';
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";




@Component({
  selector: 'app-dragon-ball-super',
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragon-ball-super.component.html',
})
export class DragonBallSuperComponent {

  name = signal('Gohan');
  power = signal (1000);


  characters = signal<Character[]>([
    {id:1, name:'Goku', power:9001},
    {id:2, name:'Vegeta', power:8000},
    // {id:4, name:'Yamcha', power:500},
    // {id:3, name:'Piccolo', power:3000},
  ]);

  powerClasses = computed(()=>{
    return{
      'text-danger': true,
    }
  });




}

