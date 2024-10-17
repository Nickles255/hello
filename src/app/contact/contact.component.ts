import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
    emailForm: FormGroup;
    submitted = false;
    ok = false;

    constructor(private myformBuilder: FormBuilder) {
        this.emailForm = this.myformBuilder.group ({
            name: ['', [Validators.required, Validators.minLength(3)]],
            message: ['', Validators.required],
        })
    }

    onSubmit() {
        this.submitted = true;

        if (this.emailForm.invalid) {
            return;
        }

        this.ok = true;
    }
}
