import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { SpyService } from 'src/app/Services/Spy/spy.service';

@Component({
  selector: 'app-spy-list',
  templateUrl: './spy-list.component.html',
  styleUrls: ['./spy-list.component.css']
})
export class SpyListComponent {


  spies: any[] = [];
  constructor(private spyService:SpyService)
  {

  }
  ngOnInit(): void {
   this.spyService.getAllSpy().subscribe(
    (response)=>{  //An array of json objects
      this.spies=response;
      console.log(response);
    }
   );
  }

  delete(id:any)
  {
   this.spyService.deleteSpy(id).subscribe(
    (response)=>{
      alert('Spy deleted!');
      this.ngOnInit();
    }
   );
  } 
}
