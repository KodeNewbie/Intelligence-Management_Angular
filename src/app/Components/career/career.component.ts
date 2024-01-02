import { Component } from '@angular/core';
import { SpyService } from 'src/app/Services/Spy/spy.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent {
  spy: any = {}; 

  constructor(private spyService: SpyService) {}

  processAddSpyForm() {
    console.log(this.spy); 
    this.spyService.addSpy(this.spy).subscribe(
      (response) => {
        console.log(response);
        alert('Spy added!');
      },
      (error) => {
        console.error(error); // Add error handling
        alert('Error adding spy!');
      }
    );
  }
}
