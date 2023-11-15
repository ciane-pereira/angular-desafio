import { Component } from '@angular/core';
import { PostData } from 'src/app/models/postData';

@Component({
  selector: 'app-card',
  templateUrl: './card.components.html',
  styleUrls: ['./card.components.css']
})
export class CardComponent implements OnInit {
  post?: PostData = {
    id:0,
    title:'',
    body:''
  }

  constructor(
    private service: PostService
  ) {
    this.post ={ id:0,
    title:'',
    body:''}
   }

  ngOnInit(): void {
    this.service.getPots("").subscribe(
      {
        next: (res) => {

        this.post = {
          id: res.id,
          title: res.title,
          body: res.body
        }
        console.log(res)
        error: (err) => console.log(err)

      }
    )
  }

}

