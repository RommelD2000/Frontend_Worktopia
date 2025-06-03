import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  constructor(public router:Router){}


  // menus = [
  //   { 
  //     label: 'Dashboard', 
  //     link: 'dashboard', 
  //     icon: 'fas fa-tachometer-alt', 
  //     isOpen: false,
  //     subMenu: [] // Si tu veux ajouter des sous-menus
  //   },
  //   { 
  //     label: 'Employés', 
  //     link: 'employe', 
  //     icon: 'fas fa-users', 
  //     isOpen: false,
  //     subMenu: [
  //       { label: 'Liste', link: 'employe/liste' },
  //       { label: 'Ajouter', link: 'employe/ajouter' }
  //     ]
  //   },
  //   { 
  //     label: 'Paie', 
  //     link: 'paie', 
  //     icon: 'fas fa-money-bill-wave', 
  //     isOpen: false,
  //     subMenu: []
  //   },
  //   { 
  //     label: 'Congés', 
  //     link: 'conge', 
  //     icon: 'fas fa-umbrella-beach', 
  //     isOpen: false,
  //     subMenu: []
  //   },
  //   { 
  //     label: 'Formations', 
  //     link: 'formation', 
  //     icon: 'fas fa-graduation-cap', 
  //     isOpen: false,
  //     subMenu: []
  //   }
  // ];

  // toggleMenu(index: number) {
  //   this.menus[index].isOpen = !this.menus[index].isOpen;
  // }


  //  menus = [
  //   { label: 'Dashboard', link: 'dashboard', icon: 'fas fa-tachometer-alt', isOpen: false, subMenu: [
  //     { label: 'Sous menu 1', link: 'dashboard/sub1' },
  //     { label: 'Sous menu 2', link: 'dashboard/sub2' }
  //   ]},
  //   { label: 'Employés', link: 'employe', icon: 'fas fa-users', isOpen: false, subMenu: [
  //     { label: 'Liste', link: 'employe/liste' },
  //     { label: 'Ajouter', link: 'employe/ajouter' }
  //   ]},
  //   { label: 'Paie', link: 'paie', icon: 'fas fa-money-bill-wave', isOpen: false, subMenu: [] },
  //   { label: 'Congés', link: 'conge', icon: 'fas fa-umbrella-beach', isOpen: false, subMenu: [] },
  //   { label: 'Formations', link: 'formation', icon: 'fas fa-graduation-cap', isOpen: false, subMenu: [] }
  // ];

  // toggleMenu(index: number): void {
  //   this.menus[index].isOpen = !this.menus[index].isOpen;
  // }
}
