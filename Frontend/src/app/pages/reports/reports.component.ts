import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../services/reports.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  products: any[] = [];
  totalProducts: number = 0;
  totalInventoryValue: number = 0;
  cashFlow: number = 0; // Simulación del flujo de caja

  constructor(private reportsService: ReportsService) {}

  ngOnInit(): void {
    this.getProductsData();
  }

  getProductsData(): void {
    this.reportsService.getProducts().subscribe((data: any[]) => {
      this.products = data;

      // Calcular el total de productos
      this.totalProducts = data.reduce((sum, product) => sum + product.quantity, 0);

      // Calcular el valor total del inventario
      this.totalInventoryValue = data.reduce((sum, product) => sum + (product.quantity * product.price), 0);

      // Simulación del flujo de caja (puedes cambiar la lógica según lo necesites)
      this.cashFlow = this.totalInventoryValue * 0.85; // Por ejemplo, suponiendo 85% de rentabilidad
    });
  }
}
