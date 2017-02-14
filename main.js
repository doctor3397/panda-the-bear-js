$(document).ready(function() {

  //Select the element that contains the profile image (hint: look for the class). Change the src attribute so it points to a picture of your choosing instead (hint: use attr()).
  $('.highlight img').attr( "src", "images/panda.jpg" );

  //Use the same approach to select the element that contains the photo of the sky and change the src attribute to another picture URL of your choosing.
  $('#left-image img').attr( "src", "images/sky.jpg" );

  //Select the heading that says "Panda the Bear" and change it to your own name. (hint: use text())
  $('h1.highlight').text('Panpan Shen');

  // Select the heading that says "Employment" and change it to something else. (hint: use a descendant selector)
  $($('h3.info-title')[1]).text("Work Expereience");

  // Panda the Bear is lying about their skills! Take the "time travel" skill off the page to satisfy your personal sense of justice. (hint: there are multiple ways of doing this, but the parent() function might be useful when it comes to selecting the right element)
  $('#time-travel').parent().remove();

  // Change the colour of the body. (hint: use css())
  $('body').css('background', '#062205');

  // Change the colour used by the highlight class.
  $('.highlight').css('color', '#062205');

  // Change the font family of the h1 to 'monospace'.
  $('h1').css('font-family', 'monospace');

  // Find a way to select the round icons in the sidebar and then change their colour.
  $('.action-icon-bg').css('background-color', '#062205');

  // Scroll down to the contact form. Change the placeholder attribute of the name field to "identify yourself".
  $('input#name.contact-info').attr('placeholder', 'Your Name');

  // Change the placeholder attribute of the message field to "state your business".
  $('textarea#message').attr('placeholder', "Your Messages");

  // Give the name field a "value" attribute of "your nemesis".
  $('input#name.contact-info').attr('value', 'Kaola')

  // Change the value attribute of the email field to "koalathebear@gmail.com".
  $('input#email.contact-info').attr('value', 'koalathebear@gmail.com')

  // Change the value of the submit button on the contact form to "En garde!".
  //$('input#submit').attr('value', 'Send');
  // Bonus points: try experimenting with both the attr() function and the val() function to find different ways of doing this.
  $('input#submit').val('Send!');

  // Find a way to disable the submit button (hint: familiarize yourself with the disabled attribute).
  $('input#submit').prop( "disabled", true );

  // We should help Panda protect their privacy by clearing their personal details from the sidebar. You can use empty() to do this.
  $('ul.bio-info').empty();

  // Adding Elements to the DOM
  $('ul.bio-info').append('<li class="bio-info-item"><span class="bio-info-title">Name</span><span class="bio-info-value bio-info-name">Panpan Shen</span></li>');

  $('ul.bio-info').append('<li class="bio-info-item"><span class="bio-info-title">Location</span><span class="bio-info-value bio-info-location">35 Walmer Road, Toronto</span></li>');

  $('ul.bio-info').append('<li class="bio-info-item"><span class="bio-info-title">Phone</span><span class="bio-info-value bio-info-phone">647-999-0000</span></li>');

  // <li class="bio-info-item">
  // 	<span class="bio-info-title">Name</span>
  // 	<span class="bio-info-value bio-info-name">Theresa Shen</span>
	// </li>
  // <li class="bio-info-item">
  // 	<span class="bio-info-title">Location</span>
  // 	<span class="bio-info-value bio-info-location">35 Walmer Road, Toronto ON M5R2X3</span>
  // </li>
  // <li class="bio-info-item">
  // 	<span class="bio-info-title">Phone</span>
  // 	<span class="bio-info-value bio-info-location">647-999-0000</span>
  // </li>

  // That drawing of Pikachu is really cute. Let’s duplicate it using clone() and insert it at the bottom of the page using insertAfter() or appendTo().
  $('img.profile-image').clone().insertAfter( "form" );

  // $('#right-image img').clone().insertAfter( "form" );
  // Wow, that was so satisfying I think we should do it 10 more times. Use a for loop to help you do this.
  for (var i=0; i<5; i++){
    $('#right-image img').clone().insertAfter( "form" );
  }

  // Let’s add a message about when the page was last updated. We'll do this by appending a new <li> element to the <ul> in the sidebar (you might need to refresh the page to bring back the list items that we emptied out earlier).
  function dateToday(){
    var today = new Date();
    var dd = today.getDate(); //Returns the day of the month (from 1-31)
    var mm = today.getMonth()+1; //Returns the month (from 0-11)
    var yyyy = today.getFullYear();
    var hour = today.getHours(); //	Returns the hour (from 0-23)
    var minute = today.getMinutes();	//Returns the minutes (from 0-59)
    var second = today.getSeconds();	//Returns the seconds (from 0-59)
    var day = today.getDay(); //Returns the day of the week (from 0-6)

    var days = {
      0: "Monday",
      1: "Tuesday",
      2: "Wednesday",
      3: "Thursday",
      4: "Friday",
      5: "Saturday",
      6: "Sunday"
    };
    var anObject = { key: "value", name: "description", "title": "body"};

    if(dd<10) {
      dd='0'+dd
    }

    if(mm<10) {
      mm='0'+mm
    }

    if(hour < 12) {
      hour += "AM";
    } else {
      hour += "PM";
    }

    today = days[day] + " " + mm+'/'+dd+'/'+yyyy + " " + hour + ":" + minute + ":" + second;
    return today;
  }
  //var day = dateToday();
  //s = 'Last Updated ' + day + ' .';
  $('ul.bio-info').append('<li class="bio-info-item"><span class="bio-info-title">Today</span><span class="bio-info-value">' + dateToday() + '</span></li>');

  //construct a new <li> tag.
  var listItem = document.createElement('li');
  //create a new <span> tag
  var leftSpan = document.createElement('span');
  var rightSpan = document.createElement('span');
  //make a "text node" in order to put text inside our new span
  var lastUpdated = document.createTextNode('Page last updated on');
  var today = document.createTextNode('2017/2/14');

  leftSpan.appendChild(lastUpdated);
  rightSpan.appendChild(today);

  listItem.appendChild(leftSpan);
  listItem.appendChild(rightSpan);

  var bio = document.getElementsByClassName('bio-info');
  bio[0].appendChild(listItem);

});
