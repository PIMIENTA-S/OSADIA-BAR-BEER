import { Component, OnInit } from '@angular/core';
import { ProvidersService, Provider } from '../../services/providers.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
    standalone: true,
    selector: 'app-providers',
    templateUrl: './providers.component.html',
    styleUrls: ['./providers.component.css'],
    imports: [CommonModule, FormsModule]
})
export class ProvidersComponent implements OnInit {
    
    providers: Provider[] = [];
    showForm = false;

    newProvider: Partial<Provider> = {
        name: '',
        contact: '',
        phone: '',
        products: []
    };

    newProducts: string = '';

    constructor(private providersService: ProvidersService) {}

    ngOnInit(): void {
        this.getProviders();
    }

    getProviders(){
        this.providersService.getProviders().subscribe(
            datos => this.providers = datos
        );
    }

    deleteProvider(id: string | undefined){
        if (!id) {
            console.error('ID no definido');
            return;
        }

        swal.fire('Eliminado exitosamente', '', 'success')
        

        this.providersService.deleteProvider(id).subscribe(
            () => this.getProviders(),
            err => console.error('Error eliminando proveedor:', err)
        );
    }

    toggleForm() {
        this.showForm = !this.showForm;
    }

    addProvider() {
        if (!this.newProvider.name || !this.newProvider.contact || !this.newProvider.phone) {
            swal.fire('Por favor, completa todos los campos', '', 'error')
            return;
        }

        this.newProvider.products = this.newProducts.split(',').map(p => p.trim());

        this.providersService.createProvider(this.newProvider as Provider).subscribe(
            res => {
                swal.fire('Añadido exitosamente', '', 'success')
                this.getProviders();
                this.showForm = false;
                this.newProvider = { name: '', contact: '', phone: '', products: [] };
                this.newProducts = '';
            },
            
            err => swal.fire('Error agregando proveedor:', err, 'error')
        );
    }
}
