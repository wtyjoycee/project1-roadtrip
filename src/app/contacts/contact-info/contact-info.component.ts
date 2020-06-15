import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl, Validators, MaxLengthValidator, EmailValidator} from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {
  serverForm: FormGroup;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    
    this.route.params
      .subscribe(
        (params: Params) => {
          this.initForm();
        }
      );
    
  }
  onUpdate(){

  }
  onSubmit(){
    console.log(this.serverForm.value);
    this.router.navigate(['../'], {relativeTo: this.route});
  }
  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
  private initForm() {
    let firstname = '';
    let lastname = '';
    let description = '';
    let email = '';

    
    // if (this.editMode) {
    //   const recipe = this.recipeService.getRecipe(this.id);
    //   recipeName = recipe.name;
    //   recipeImagePath = recipe.imagePath;
    //   recipeDescription = recipe.description;
    //   if (recipe['ingredients']) {
    //     for (let ingredient of recipe.ingredients) {
    //       recipeIngredients.push(
    //         new FormGroup({
    //           'name': new FormControl(ingredient.name, Validators.required),
    //           'amount': new FormControl(ingredient.amount, [
    //             Validators.required,
    //             Validators.pattern(/^[1-9]+[0-9]*$/)
    //           ])
    //         })
    //       );
    //     }
    //   }
    // }

    this.serverForm = new FormGroup({
      'firstname': new FormControl(firstname, Validators.required),
      'lastname': new FormControl(lastname, Validators.required),
      'email': new FormControl(email, [Validators.required,Validators.email]),
      'description': new FormControl(description, Validators.required)
    });
  }
}
