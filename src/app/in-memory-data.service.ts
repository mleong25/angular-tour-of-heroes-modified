import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero/hero';
import { Villain } from './villain/villain';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, 
        name: 'Dr. Nice', 
        description: 'Excuse me, would you like to win your enemies over with kindness?',
        weakness: 'Charm, grace',
        counter: 'Eleganto',
      },
      { id: 12, 
        name: 'Narco', 
        description: 'The perfect drug bust.',
        weakness: 'Invisibility, lack of evidence',
        counter: 'EL Drogo',
      },
      { id: 13, 
        name: 'Bombasto', 
        description: 'Explosions. Enough said.',
        weakness: 'Implosions, impact absorption, restoration',
        counter: 'Mr. Fixer-Upper',
      },
      { id: 14, 
        name: 'Celeritas', 
        description: 'Too fast, too furious.', 
        weakness: 'Time warp, instability',
        counter: 'Osiris',
      },
      { id: 15, 
        name: 'Magneta', 
        description: 'Ultimate peacekeeper and enforcer of balance', 
        weakness: 'Instability, imbalance',
        counter: 'Miss-Fortunate',
      },
      { id: 16, 
        name: 'RubberMan', 
        description: 'Elastigirl? I deserve more screen time.', 
        weakness: 'Ego, extreme temperature change',
        counter: 'Frosty',
      },
      { id: 17, 
        name: 'Dynama', 
        description: 'I\'m the one that you want.', 
        weakness: 'Plastic, lack of conduction',
        counter: 'Polymeer',
      },
      { id: 18, 
        name: 'Dr IQ', 
        description: 'Smartest baby you\'ll meet, so smart you\'ll want to take me home.', 
        weakness: 'Ignorance, stupidity',
        counter: 'Shanencephaly',
      },
      { id: 19, 
        name: 'Magma', 
        description: 'A hothead at times, but I get the job done.', 
        weakness: 'Water, Rock',
        counter: 'Elliemental',
      },
      { id: 20, 
        name: 'Tornado', 
        description: 'Life\'s a breeze.', 
        weakness: 'Stop of time',
        counter: 'Doomsday',
      }
    ];
    const villains = [
      { id: 1,
        name: 'Eleganto',
        description: '',
      },
      { id: 2,
        name: 'El Drogo',
        description: '',
      },
      { id: 3,
        name: 'Mr. Fixer-Upper',
        description: '',
      },
      { id: 4,
        name: 'Osiris',
        description: '',
      },
      { id: 5,
        name: 'Miss-Fortunate',
        description: '',
      },
      { id: 6,
        name: 'Frosty',
        description: '',
      },
      { id: 7,
        name: 'Polymeer',
        description: '',
      },
      { id: 8,
        name: 'Shannencephaly',
        description: '',
      },
      { id: 9,
        name: 'Elliemental',
        description: '',
      },
      { id: 10,
        name: 'Doomsday',
        description: '',
      },
    ]
    return {heroes, villains};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
  genIdV(villains: Villain[]): number {
    return villains.length > 0 ? Math.max(...villains.map(hero => hero.id)) + 1 : 11;
  }
}