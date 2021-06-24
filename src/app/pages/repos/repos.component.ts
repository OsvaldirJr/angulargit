import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UserService} from '../../shared/services/user.service';
import {RepoService} from '../../shared/services/repos.service'
import { NavService } from 'src/app/shared/services/nav.service';
import { Repository } from 'src/app/shared/models/repository.model';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {
  @Output() subscriberEvent = new EventEmitter<number>();
  @Output() projectEvent = new EventEmitter<number>();
  public repositories: Repository[];
  public reposCount: number = 0;
  public reposSelected: any[] = [];
  public org = "adplabs";
  
  constructor(private userService: UserService,
              private repoService: RepoService) {}

  ngOnInit(): void {
    this.getRepositories();
    
  }
  onEnter(event){
    this.org = event.target.value;
    this.getRepositories();
  }
  public getRepositories(){
    this.userService.getAllPublicRepos(this.org).subscribe(r=>{
      this.repositories = r;
    })
  }

  public getReposSubscribers(name){
    let repository = this.repositories.find(x=>x.name == name);
    if(!this.reposSelected.find(x=>x.name == name)){
      this.repoService.getSubscribersRepos(repository.subscribers_url).subscribe(s=>{
            this.reposCount = this.reposCount + s.length;
            this.reposSelected.push({name, s});
            this.addSubscriberItem(this.reposCount);
            this.addProjectItem(this.reposSelected.length);
      })
    }
    else{
      this.reposCount=0;
      this.reposSelected = this.reposSelected.filter(x=>x.name != name);
      this.reposSelected.forEach(x=>{
        this.reposCount = this.reposCount + x.s.length;
      })
      this.addSubscriberItem(this.reposCount);
      this.addProjectItem(this.reposSelected.length);
    }
    
  }
  public addSubscriberItem(value) {
    this.subscriberEvent.emit(value);
  }
  public addProjectItem(value) {
    this.projectEvent.emit(value);
  }

}
