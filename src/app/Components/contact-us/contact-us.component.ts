import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ApplicationDataService } from '../../Services_Component/application-data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

declare var AOS: any; // Declare AOS for animation

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  constructor(private router: Router, private applicationDataService: ApplicationDataService, private fb: FormBuilder) {}

  allData: any[] = [];
  contactForm!: FormGroup;
  submitted = false;
  showSuccessMessage = false;

  ngOnInit(): void {
    // Subscribe to router events
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Scroll the window to the top
      }
    });
    this.FetchAllData(); // Fetch all data
    this.animation(); // Initialize animation
    this.initForm(); // Initialize contact form
  }

  // Fetch all data
  FetchAllData() {
    this.applicationDataService.GetallData().subscribe((res: any) => {
      this.allData = res;
    });
  }

  // Initialize animation
  animation() {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }

  // Initialize contact form
  initForm() {
    this.contactForm = this.fb.group({
      fullname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]{3,}$')]],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]],
      phone: ['', [Validators.required, Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$')]],
      subject: ['', [Validators.required, Validators.maxLength(200)]],
      message: ['', [Validators.required, Validators.maxLength(2500)]]
    });
  }

  // Getter for fullname form control
  get fullname() {
    return this.contactForm.get('fullname');
  }

  // Getter for email form control
  get email() {
    return this.contactForm.get('email');
  }

  // Getter for phone form control
  get phone() {
    return this.contactForm.get('phone');
  }

  // Getter for subject form control
  get subject() {
    return this.contactForm.get('subject');
  }

  // Getter for message form control
  get message() {
    return this.contactForm.get('message');
  }

  // Form submission
  onSubmit() {
    this.submitted = false;

    if (this.contactForm.valid) {
      // Process the form
      this.submitted = true;
      this.showSuccessMessage = true;
      this.contactForm.reset();
      setTimeout(() => {
        this.submitted = false;
        this.showSuccessMessage = false;
      }, 3000);
    } else {
      // Form is invalid, mark all fields as touched
      this.contactForm.markAllAsTouched();
    }
  }
}
