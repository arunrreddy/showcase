/** Author : Arun
Date: 03/11/2016
Description: Auto Download videos and subtitles for the week on coursera(new)
Works only on chrome
Version: 1.0.0
Procedure:
1. Enroll for the course.
2.Navigate within the course to any one video lecture of any week.
3. Right click anywhere on the page and open inspect element. 
In inspect element copy-paste the following code in the browser console, 
press Enter and then wait for 8 seconds. 
This will download all lecture videos and subtitles for the week with delay of 8 seconds between every video. 
To download for all weeks, repeat step 2 and 3 for every week.

*/

var j = 0;
var i = 0;
var temp = i;
function myLoop (i,temp) {
	var a = document.getElementsByClassName('item-name inline-child caption-text');
	var index = (i + temp);
	if(index <= (a.length-1)){
		console.log("item number = "+ i + "; previous lesson item number = "+temp+"; number of items in lesson: " + a.length);
		document.getElementsByClassName('item-name inline-child caption-text')[index].click();
	} else {
		console.log("item number = "+ i + "; previous lesson item number = "+temp+"; number of items in lesson: " + a.length);
		document.getElementsByClassName('item-name inline-child caption-text')[i].click();
	}
	setTimeout(function () {
		console.log("8 sec over");
		var b = document.getElementsByClassName('resource-name body-2-text color-secondary-text');
		if (b.length!=0){
			console.log(document.title);
			console.log("Downloading videos and subtitles");
			b[0].click();
			b[1].click();
		}
		i++;
		if (i < a.length) {
			myLoop(i,temp);
		}
		else{
			console.log("Lesson Over! Trying to fetch next lessson.");
			j++;
			temp = i;
			var b = document.getElementsByClassName('rc-CollapsibleLesson');
			for(i=0;i<b.length;i++){
				if(i == j){
					console.log("Next Lesson found.");
					var buttonToBeClicked = b[i].firstChild;
					buttonToBeClicked.click();
					console.log("Going to the Next Lesson.");
					myLoop(0,temp);
					break;
				}
			}
		}
	}, 8000);
}
if(temp == 0){
	myLoop(i,temp);
}
