import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-update-persona-natural',
  templateUrl: './update-persona-natural.component.html',
  styleUrls: ['./update-persona-natural.component.css']
})
export class UpdatePersonaNaturalComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    
  }

}
