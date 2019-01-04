// JavaScript Document

// JQuery Twitter Feed. Coded by www.webdevdoor.com (2012) and modified from https://twitter.com/javascripts/blogger.js
$(document).ready(function () {
 
    var displayLimit = 1;
    var twitterprofile = "SC_ExecDirector";
    var screenname = "Student Centers";
    var showdirecttweets = true;
    var showretweets = false;
    var showtweetlinks = true;
    var showprofilepic = false;
 
    var headerHTML = '';
    var loadingHTML = '';
    loadingHTML += '<p>Loading Latest Tweet</p>';
 
    $('#twitter-feed').html(headerHTML + loadingHTML);
	
	
	var url = "http://vcsa-saturn.cas.uic.edu/studentcenters/get-tweets.php";
	
	var browser = navigator.userAgent;
	var IEversion = 99; //Give a default value for non-IE browsers
	 
	if (browser.indexOf("MSIE") > 1) { //Detects if IE
		IEversion = parseInt(browser.substr(browser.indexOf("MSIE")+5, 5));
	}
	if (IEversion < 10) {                
		xdr = new XDomainRequest();   // Creates a new XDR object.
		xdr.open("GET", url); // Creates a cross-domain connection with our target server using GET method. 
		xdr.send(); //Send string data to server
		xdr.onload = function () { //After load, parse data returned by xdr.responseText            
			mainfunction($.parseJSON(xdr.responseText));
		};              
	} else {
		$.getJSON(url, function(feeds) {
			mainfunction(feeds);
		})
	}
	
    $.getJSON(url, function(feeds) {
		mainfunction(feeds);
	});
	
	function mainfunction(feeds) {
		   //alert(feeds);
            var feedHTML = '';
            var displayCounter = 1;
            for (var i=0; i<feeds.length; i++) {
                var tweetscreenname = feeds[i].user.name;
                var tweetusername = feeds[i].user.screen_name;
                var profileimage = feeds[i].user.profile_image_url_https;
                var status = feeds[i].text;
                var isaretweet = false;
                var isdirect = false;
                var tweetid = feeds[i].id_str;
 
                //If the tweet has been retweeted, get the profile pic of the tweeter
                if(typeof feeds[i].retweeted_status != 'undefined'){
                   profileimage = feeds[i].retweeted_status.user.profile_image_url_https;
                   tweetscreenname = feeds[i].retweeted_status.user.name;
                   tweetusername = feeds[i].retweeted_status.user.screen_name;
                   tweetid = feeds[i].retweeted_status.id_str;
                   isaretweet = true;
                 };
 
                 //Check to see if the tweet is a direct message
                 if (feeds[i].text.substr(0,1) == "@") {
                     isdirect = true;
                 }
 
                //console.log(feeds[i]);
 
                 if (((showretweets == true) || ((isaretweet == false) && (showretweets == false))) && ((showdirecttweets == true) || ((showdirecttweets == false) && (isdirect == false)))) {
                    if ((feeds[i].text.length > 1) && (displayCounter <= displayLimit)) {
                        if (showtweetlinks == true) {
                            status = addlinks(status);
                        }
 
                        if (displayCounter == 1) {
                            feedHTML += headerHTML;
                        }
 
                        feedHTML += '<marquee behavior="scroll" scrollamount="3" direction="left" onmouseover="this.stop();" onmouseout="this.start();"><a href="https://twitter.com/'+tweetusername+'/status/'+tweetid+'">'+status+'</a><a href="https://twitter.com/'+tweetusername+'/status/'+tweetid+'">'+relative_time(feeds[i].created_at)+'</a></marquee>';
                       
                        displayCounter++;
                    }
                 }
            }
 
            $('#twitter-feed').html(feedHTML);
	}
 
    //Function modified from Stack Overflow
    function addlinks(data) {
        //Add link to all http:// links within tweets
        data = data.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function(url) {
            return '<a href="'+url+'" >'+url+'</a>';
        });
 
        //Add link to @usernames used within tweets
        data = data.replace(/\B@([_a-z0-9]+)/ig, function(reply) {
            return '<a href="http://twitter.com/'+reply.substring(1)+'" style="font-weight:lighter;" >'+reply.charAt(0)+reply.substring(1)+'</a>';
        });
        return data;
    }
 
    function relative_time(time_value) {
      var values = time_value.split(" ");
      time_value = values[1] + " " + values[2] + ", " + values[5] + " " + values[3];
      var parsed_date = Date.parse(time_value);
      var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
      var delta = parseInt((relative_to.getTime() - parsed_date) / 1000);
      var shortdate = time_value.substr(4,2) + " " + time_value.substr(0,3);
      delta = delta + (relative_to.getTimezoneOffset() * 60);
 
      if (delta < 60) {
        return '1m';
      } else if(delta < 120) {
        return '1m';
      } else if(delta < (60*60)) {
        return (parseInt(delta / 60)).toString() + 'm';
      } else if(delta < (120*60)) {
        return '1h';
      } else if(delta < (24*60*60)) {
        return (parseInt(delta / 3600)).toString() + 'h';
      } else if(delta < (48*60*60)) {
        //return '1 day';
        return shortdate;
      } else {
        return shortdate;
      }
    }
 
});
