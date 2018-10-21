import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Data } from "../../../providers/data";

/**
 * Generated class for the EstudianteVerJuegoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estudiante-ver-juego',
  templateUrl: 'estudiante-ver-juego.html',
})


export class EstudianteVerJuegoPage {

	@ViewChild('slides') slides: any;

	hasAnswered: boolean = false;
	score: number = 0;

	slideOptions: any;
	questions: any;

	constructor(public navCtrl: NavController, public dataService: Data) {

	}

	ionViewDidLoad() {

		this.slides.lockSwipes(true);



    try{
      this.dataService.loadMateI().then(
        (res) => {
          this.questions = res['questions']
          console.log(res);
          console.log(this.questions);
        },
        (error) =>{
          console.log(error);
        }
      )  
    }catch(e){

    }


	}

	nextSlide(){
		this.slides.lockSwipes(false);
		this.slides.slideNext();
		this.slides.lockSwipes(true);
	}

	selectAnswer(answer, question){

		this.hasAnswered = true;
		answer.selected = true;
		question.flashCardFlipped = true;

		if(answer.correct){
			this.score++;
		}

		setTimeout(() => {
			this.hasAnswered = false;
			this.nextSlide();
			answer.selected = false;
			question.flashCardFlipped = false;
		}, 1000);
	}

	randomizeAnswers(rawAnswers: any[]): any[] {

		for (let i = rawAnswers.length - 1; i > 0; i--) {
		    let j = Math.floor(Math.random() * (i + 1));
		    let temp = rawAnswers[i];
		    rawAnswers[i] = rawAnswers[j];
		    rawAnswers[j] = temp;
		}

		return rawAnswers;

	}

	restartQuiz() {
		this.score = 0;
		this.slides.lockSwipes(false);
		this.slides.slideTo(1, 200);
		this.slides.lockSwipes(true);
	}

 
}
