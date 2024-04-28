import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent {
  
  usuariosOriginales: any;
  usuarios:any;
  selectedUserId: any;
  selectedUserName: any;
  selectedUserSurname1: any;
  selectedUserSurname2: any;
  selectedUserEmail: any;
  isEditMode=false;

  // Propiedades para filtros
  filterName: string = '';
  filterSurname1: string = '';
  filterSurname2: string = '';
  filterEmail: string = '';

  //pag
   p: number = 1;

  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute,private cdr: ChangeDetectorRef) {}

  ngOnInit() {

    this.obtenerDatos();
    this.cdr.markForCheck();

    setTimeout(() => {
      this.cdr.markForCheck();
    }, 5000);
  }



   obtenerDatos() {
    this.http.get("http://localhost:3000/usuarios").subscribe(
      info => {
        this.usuariosOriginales = info;
        this.usuarios = [...this.usuariosOriginales]; // Copia la lista original a la lista actualizada
        console.log(info);
        console.log(this.usuarios);
        this.cdr.markForCheck();
      },
      err => {
        console.log(err);
      }
    );
  }

  // Método para detectar cambios en tiempo real y aplicar filtros
  onInputChange() {
    this.applyFilters();
  }

  // Método para aplicar filtros sobre la lista original
  applyFilters() {
    this.usuarios = this.usuariosOriginales.filter((user: any) =>
      user.name.toLowerCase().includes(this.filterName.toLowerCase()) &&
      user.surname1.toLowerCase().includes(this.filterSurname1.toLowerCase()) &&
      user.surname2.toLowerCase().includes(this.filterSurname2.toLowerCase()) &&
      user.email.toLowerCase().includes(this.filterEmail.toLowerCase())
    );
  }

  // Método para limpiar filtros y restaurar la lista original
  clearFilters() {
    this.filterName = '';
    this.filterSurname1 = '';
    this.filterSurname2 = '';
    this.filterEmail = '';
    this.usuarios = [...this.usuariosOriginales]; // Restaura la lista original
  }

    setSelectedUser(user: any) {
      this.selectedUserId = user.id;
      this.selectedUserName = user.name;
      this.selectedUserSurname1 = user.surname1;
      this.selectedUserSurname2 = user.surname2;
      this.selectedUserEmail = user.email;
      this.isEditMode=true;
  }

  clearSelectedUser() {
    this.selectedUserId = '';
    this.selectedUserName = '';
    this.selectedUserSurname1 = '';
    this.selectedUserSurname2 = '';
    this.selectedUserEmail = '';
    this.isEditMode=false;
  }

isValidForm(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return (
        !!this.selectedUserName &&
        !!this.selectedUserSurname1 &&
        emailRegex.test(this.selectedUserEmail)
    );
}


  saveChanges() {
    if (this.isEditMode) {
      const body = {
      //id: this.selectedUserId,
      name: this.selectedUserName,
      surname1: this.selectedUserSurname1,
      surname2: this.selectedUserSurname2,
      email: this.selectedUserEmail,
    };

    this.http.put('http://localhost:3000/usuarios/'+this.selectedUserId, body).subscribe(
      response => {
        console.log('Cambios guardados exitosamente:', response);
        this.obtenerDatos();
      },
      error => {
        console.error('Error al guardar cambios:', error);
      }
    );
    } else {
      const body = {
      //id: this.selectedUserId,
      name: this.selectedUserName,
      surname1: this.selectedUserSurname1,
      surname2: this.selectedUserSurname2,
      email: this.selectedUserEmail,
    };

    this.http.post('http://localhost:3000/usuarios', body).subscribe(
      response => {
        console.log('Usuario insertado exitosamente:', response);
        this.obtenerDatos();
      },
      error => {
        console.error('Error al insertar usuario:', error);
      }
    );
    }
  }


    deleteUser() {
    this.http.delete(`http://localhost:3000/usuarios/${this.selectedUserId}`).subscribe(
      response => {
        console.log('Usuario eliminado exitosamente:', response);
        this.obtenerDatos();
      },
      error => {
        console.error('Error al eliminar usuario:', error);
      }
    );
  }


}