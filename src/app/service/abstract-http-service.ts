import {environment} from '../../environments/environment';

export abstract class AbstractHttpService {
  url = environment.backendUrl;

  constructor() {
  }
}
