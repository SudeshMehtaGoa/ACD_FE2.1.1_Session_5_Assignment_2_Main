/*'Bootstrap and JQuery Exerscise'*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <form>
          <div class="form-group">
            <br/>
            <input type="name" class="form-control" id="exampleInputName" placeholder="Name">
          </div>
          <button type="button" class="btn btn-primary btn-lg btn-block">Login</button>
        </form>
    </div>
  </div>
</div>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bootstrap and JQuery Exerscise';
}

