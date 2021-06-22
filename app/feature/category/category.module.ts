import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryRoutingModule } from './category-routing.module';

@NgModule({
  imports: [CommonModule, CategoryRoutingModule],
  declarations: [AddCategoryComponent],
  exports: [AddCategoryComponent]
})
export class CategoryModule {}
