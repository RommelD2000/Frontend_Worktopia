import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TrainingDTO } from '../../../training/TrainingDTO';
import { CategoryServiceService } from '../category-service.service';
import { Router } from '@angular/router';
import { ApiResponse } from '../../../common/api.response';
import { Category } from './category.model';


interface Categorie {
  dbId: number;
  name: string;
  icon: string;
  description: string;
  trainingDTO: TrainingDTO[];
}
@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
categories: Category[] = [];
  currentCategory: Category = {
    name: '',
    description: '',
    iconName: ''
  };
  isEditMode = false;
  editingCategoryId: number | null = null;

  // Liste des icônes disponibles
  availableIcons = [
    { name: 'briefcase', label: 'Management' },
    { name: 'laptop-code', label: 'Informatique' },
    { name: 'comments', label: 'Communication' },
    { name: 'chart-pie', label: 'Finance' },
    { name: 'graduation-cap', label: 'Formation' },
    { name: 'users', label: 'Ressources Humaines' },
    { name: 'shield-alt', label: 'Sécurité' },
    { name: 'language', label: 'Langues' },
    { name: 'handshake', label: 'Commercial' },
    { name: 'cogs', label: 'Technique' },
    { name: 'heart', label: 'Bien-être' },
    { name: 'globe', label: 'International' }
  ];

  constructor(private categoryService: CategoryServiceService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getAllCategories().subscribe(
     {
      next: (result: ApiResponse) => {
					this.categories= result.data as Category[]
				},
				error: (err) => console.log(err)
      }
    );
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      if (this.isEditMode && this.editingCategoryId) {
        this.updateCategory();
      } else {
        this.createCategory();
      }
    }
  }

  createCategory(): void {
    this.categoryService.createCategory(this.currentCategory).subscribe(
       {
      next: (result: ApiResponse) => {
					this.categories.push(result.data);
           this.resetForm();

				},
				error: (err) => console.log(err)
      })
    //   (data) => {
    //     this.categories.push(data);
    //     this.resetForm();
    //   },
    //   (error) => {
    //     console.error('Erreur lors de la création de la catégorie:', error);
    //   }
    // );
  }

  updateCategory(): void {
    if (this.editingCategoryId) {
      this.categoryService.updateCategory(this.editingCategoryId, this.currentCategory).subscribe({
      next: (result: ApiResponse) => {
					// this.categories.push(result.data);
          this.resetForm();

				},
		 		// error: (err) => console.log(err)
      }
        
      );
    }
  }

  editCategory(category: Category): void {
    this.currentCategory = { ...category };
    this.isEditMode = true;
    this.editingCategoryId = category.dbId || null;
  }

  deleteCategory(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette catégorie ?')) {
      this.categoryService.deleteCategory(id).subscribe(
        () => {
          this.categories = this.categories.filter(c => c.dbId !== id);
        },
        (error) => {
          console.error('Erreur lors de la suppression de la catégorie:', error);
        }
      );
    }
  }

  resetForm(): void {
    this.currentCategory = {
      name: '',
      description: '',
      iconName: ''
    };
    this.isEditMode = false;
    this.editingCategoryId = null;
  }

  getIconLabel(iconName: string): string {
    const icon = this.availableIcons.find(i => i.name === iconName);
    return icon ? icon.label : iconName;
  }
 
 
}
