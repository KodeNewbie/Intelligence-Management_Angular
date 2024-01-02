import { Component } from '@angular/core';
import { IntelService } from 'src/app/Services/Intel/intel.service';

@Component({
  selector: 'app-add-intel',
  templateUrl: './add-intel.component.html',
  styleUrls: ['./add-intel.component.css']
})
export class AddIntelComponent {
  intel: any = {}; 

  constructor(private intelService: IntelService) {}

  processAddIntelForm() {
    console.log(this.intel); 
    this.intelService.addIntel(this.intel).subscribe(
      (response) => {
        console.log(response);
        alert('Intel added!');
      },
      (error) => {
        console.error(error); // Add error handling
        alert('Error adding intel!');
      }
    );
}

intels: any[] = [];

ngOnInit(): void {
 this.intelService.getAllIntel().subscribe(
  (response)=>{  //An array of json objects
    this.intels=response;
    console.log(response);
  }
 );
}
}