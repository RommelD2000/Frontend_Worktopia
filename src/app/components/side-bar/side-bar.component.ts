import { Component, ElementRef, Renderer2 } from '@angular/core';
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
  // constructor(public router:Router){}


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
 // États pour gérer l'active menu / sous-menu
  activeMenu: string | null = null;
  
  // Garder la trace des sous-menus ouverts
  expandedSubmenus: Set<string> = new Set();

  // Pour l'active élément dans les sous-menus
  activeSubmenuItems: Set<string> = new Set();

  // Gérer la sélection de menu principal
  selectMenu(menu: string): void {
    this.activeMenu = menu;
    this.expandedSubmenus.delete(menu);
  }

  // Toggle le sous-menu
  toggleSubmenu(menu: string): void {
    if (this.expandedSubmenus.has(menu)) {
      this.expandedSubmenus.delete(menu);
    } else {
      // Fermer tous les autres sous-menus
      this.expandedSubmenus.clear();
      this.expandedSubmenus.add(menu);
    }
    this.activeMenu = menu; // pour indiquer l'élément actif
  }

  // Vérifie si le menu est actif
  isActive(menu: string): boolean {
    return this.activeMenu === menu;
  }

  // Vérifie si le sous-menu est étendu
  isSubmenuExpanded(menu: string): boolean {
    return this.expandedSubmenus.has(menu);
  }

  // Sélectionne un item de sous-menu
  selectSubmenuItem(item: string): void {
    // déselectionner tous
    this.activeSubmenuItems.clear();
    this.activeSubmenuItems.add(item);
    // Activer aussi le menu parent
    // dans ce cas, vous pouvez fixer l'active menu si besoin
  }

  // Vérifier si un sous-item est actif
  isSubmenuItemActive(item: string): boolean {
    return this.activeSubmenuItems.has(item);
  }
}
