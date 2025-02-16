import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserOnboardComponent } from '../user-onboard/user-onboard.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  constructor(public dialog: MatDialog,
    private route: ActivatedRoute
  ) { }

  coursesList = [
    {
      "title": "Web Development",
      "description": "Become a full-stack developer by mastering HTML, CSS, JavaScript, and modern frameworks like React & Node.js. Build responsive and dynamic websites from scratch. Learn backend development with Express.js and databases like MongoDB. Get hands-on experience with real-world web applications.",
      "price": 1500
    },

    {
      "title": "Data Science",
      "description": "Explore data analysis, visualization, and machine learning. Work with real datasets, master statistical techniques, and build predictive models using Python. Learn SQL, data wrangling, and visualization tools like Seaborn and Tableau. A perfect course for aspiring data analysts and scientists.",
      "price": 1500
    },
    {
      "title": "AI/ML Course",
      "description": "Dive into Artificial Intelligence and Machine Learning. Understand neural networks, deep learning, and NLP while building intelligent models with Python and TensorFlow. Implement algorithms like decision trees, SVM, and deep learning models using Keras and PyTorch.",
      "price": 1000
    },
    {
      "title": "Python Course",
      "description": "Master Python from basics to advanced topics. Learn by building real-world projects. Gain expertise in data structures, OOP, and automation. Work with libraries like Pandas, NumPy, and Matplotlib to analyze and visualize data. Ideal for beginners and professionals looking to upskill.",
      "price": 1000
    },

  ]

  openEnrollDialog() {
    this.dialog.open(UserOnboardComponent, {
      width: '400px',
      disableClose: true // Prevent accidental closing
    });
  }

// This function is to scrolling
  ngAfterViewInit() {
    this.route.fragment.subscribe((fragment) => {
      console.log("5333****", fragment)
      if (fragment === 'courses') {
        this.scrollToSection(fragment);
      }
    });
  }

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
