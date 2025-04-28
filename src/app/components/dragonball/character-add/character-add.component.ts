import { Component, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';


@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.component.html',
})
export class CharacterAddComponent {

  name = signal('Gohan');
  power = signal (1000);

  addCharacter (){
    if (!this.name() || !this.power() || this.power() <= 0 ) {
      return;
    }
      const newCharacter:Character = {
        // id: this.characters().length+1,
        id: 10000,
        name: this.name(),
        power: this.power(),
      };

      // this.characters.update((list)=> [... list, newCharacter]);
      console.log({newCharacter})
      this.restFields()
    }
    restFields(){
      this.name.set('');
      this.power.set(0);
    }
}
