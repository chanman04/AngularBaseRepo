import { Component } from '@angular/core';
import Amplify from 'aws-amplify';
import aws_exports from '../aws-exports';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'base-app';

  ngOnInit(){
    Amplify.configure(aws_exports);
    console.log('Amplify Initialised');
    this.title = "Amplify Initialised";
  }
}
