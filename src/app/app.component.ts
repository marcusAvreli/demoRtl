import { Component } from '@angular/core';
import {
Animation
,Aside
,Avatar
,Button
,Container
,Icon
,Input
,Item
,Label
,Img
,Badge
,Breadcrumb
,Breadcrumbs
	,Card
	,CardContent
	,CardControls
	,CardHeader
	,CardSubtitle
	,CardTitle
	,Carousel
	,CarouselItem
	,Checkbox
	,Chip
	,Col
	,ColorPicker
	 ,CopyButton
  ,Divider
  ,Dialog
  //31-05-2024
 , Dropdown
 ,Footer
 ,FormatDigital
  ,Grid
  ,Header
 // ,IconPicker
 ,Tooltip
 ,Main
 ,Toast
 ,Menu
 ,MenuItem
 
  ,Panel
  ,ProgressBar
,Radio
,RadioGroup
,Rate
,RelativeTime
,Row
,Select
,Slider
,SplitView

,Tab
,TabGroup
,TabPanel
,Textarea
,Thumbnail
,Toggle
,Toolbar
,ToolbarAction
,VisuallyHidden
 
	} from 'mgcomponents';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoRtl';
  //https://gist.github.com/heyMP/8ef3912847dcc93304652a412981caca
	constructor(){
		if (!customElements.get(Grid.is)){
			customElements.define(Grid.is, Grid);
		}
	}
	test(e){		
		let inputNode = document.querySelector('wj-grid');
		if(inputNode){			
			const inputs = inputNode.querySelectorAll('wj-input');
			if(inputs){				
				const inputsArray = Array.from(inputs);
				inputsArray.forEach((item)=>{
					const wjInput = item as Input
					const wjLabel = wjInput.label
					const wjValue = wjInput.input.value;					
				})
			}
		}
	}
}