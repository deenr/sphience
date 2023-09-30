import {Component, Input} from '@angular/core';
import {Article} from '@shared/models/article/article.model';

@Component({
  selector: 'app-add-article-preview',
  templateUrl: './add-article-preview.component.html',
  styleUrls: ['./add-article-preview.component.scss']
})
export class AddArticlePreviewComponent {
  @Input() public article: Article;
}