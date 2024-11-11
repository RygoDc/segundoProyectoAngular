import { TestBed } from '@angular/core/testing';

import { EnviarPokemonService } from './enviar-pokemon.service';

describe('EnviarPokemonService', () => {
  let service: EnviarPokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnviarPokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
