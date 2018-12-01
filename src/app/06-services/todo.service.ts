
import { Http } from '@angular/http';
import 'rxjs/operator';
import 'rxjs-compat';

export class TodoService {
  constructor(private http: Http) {
  }

  add(todo) {
    return this.http.post('...', todo).map(r => r.json());
  }

  getTodos() {
    return this.http.get('...').map(r => r.json());
  }

  delete(id) {
    return this.http.delete('...').map(r => r.json());
  }
}
