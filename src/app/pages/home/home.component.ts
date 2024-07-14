import { Component } from '@angular/core';
import { Vehicle } from '../../interfaces/vehicle';
import { VehicleService } from '../../services/vehicle.service';
import { DivisaPipe } from '../../pipes/divisa.pipe';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FilterVehiclesPipe } from '../../pipes/filter-vehicles.pipe';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DivisaPipe, RouterModule, FormsModule, FilterVehiclesPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  vehicles: Vehicle[] = [];
  user: User | null = null;
  filtro: string = ""

  constructor(private vehicleService: VehicleService, private userService: UserService){
    vehicleService.getAll().subscribe({
      next: (response)=>{
        this.vehicles = response as Vehicle[]
      },
      error: ()=>{}
    })

    
    this.userService.getUser(id).subscribe({
      next: (response) => {
        this.user = response;
      },
      error: () => {}
    });
  };
}
