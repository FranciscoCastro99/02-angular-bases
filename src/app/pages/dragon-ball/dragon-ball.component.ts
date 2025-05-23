import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { ValueChangeEvent } from '@angular/forms';

interface Character{
  id: number,
  name: string,
  power: number,

}


@Component({
  selector: 'app-dragon-ball',
  imports: [],
  templateUrl: './dragon-ball.component.html',
})
export class DragonBallComponent {

  name = signal('Gohan');
  power = signal (1000);


  characters = signal<Character[]>([
    {id:1, name:'Goku', power:9001},
    // {id:2, name:'Vegeta', power:8000},
    // {id:4, name:'Yamcha', power:500},
    // {id:3, name:'Piccolo', power:3000},
  ]);

  powerClasses = computed(()=>{
    return{
      'text-danger': true,
    }
  });

  addCharacter (){
if (!this.name() || !this.power() || this.power() <= 0 ) {
  return;
}
  const newCharacter:Character = {
    id: this.characters().length+1,
    name: this.name(),
    power: this.power(),
  };

  this.characters.update((list)=> [... list, newCharacter]);
  this.restFields()
}

  restFields(){
    this.name.set('');
    this.power.set(0);
  }
}

