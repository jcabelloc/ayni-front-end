import { PersonaNaturalModule } from './persona-natural.module';

describe('PersonaNaturalModule', () => {
  let personaNaturalModule: PersonaNaturalModule;

  beforeEach(() => {
    personaNaturalModule = new PersonaNaturalModule();
  });

  it('should create an instance', () => {
    expect(personaNaturalModule).toBeTruthy();
  });
});
