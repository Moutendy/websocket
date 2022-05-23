import { TestBed } from '@angular/core/testing';

import { ServerwebsocketService } from './serverwebsocket.service';

describe('ServerwebsocketService', () => {
  let service: ServerwebsocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerwebsocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
