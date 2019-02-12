import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../autenticacion/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {
  usuario: string;
  clave: string;
  
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.login(this.usuario, this.clave, () => { this.router.navigate(['/tableros/cartera/resumen' ]) } );
  }
}
