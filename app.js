"use strict";

var MarkovTweet = function(){
	this.table = [];
};


/**
 * Takes input and adds to our data structure.
 * 
 * Here is where you would feed the application the JSON response from GET statuses/user_timeline Request to Twitter's API.
 * I have cleaned up the input and only left the "text" key value pair for demonstration purposes.
 * You can read more on how to get the response from Twitter here: https://dev.twitter.com/rest/reference/get/statuses/user_timeline
 */
MarkovTweet.prototype.addData = function(){

	var input = [{"text":"@bkurbs your 'stash post yesterday was top notch but you missed one...'the outlaw' http://t.co/QVMYipC8Pg http://t.co/Rpw4Po5NsD"},{"text":"@leighweingus Pinkerton has an app for creating a classic agent or outlaw 'stash: http://t.co/KlETK301z5"},{"text":"@RossESzabo Stumbled on your huffpo article while researching for a movember project i'm working on; thanks for writing it, I related."},{"text":"@Studio360show I'm digging @KBAndersen 's Pinterest board - any considerations for wild west style 'stashes? http://t.co/QVMYipC8Pg"},{"text":"@NYTFashion Gotta consider - some guys can't grow a mean 'stash and need a little help: http://t.co/KlETK301z5 http://t.co/0P47eZyhKs"},{"text":"My tolerance for pain is known &amp; celebrated at the dentists office; not sure if this is good or bad..."},{"text":"@mollylizshea Thought you'd find Pinkerton's app useful for those who can't grow a 'stash! http://t.co/KlETK301z5 http://t.co/hrZut7rGge"},{"text":"Solid thoughts from @crestodina - How to get more followers on #Twitter (the Semi-Legit Way) http://t.co/EL9UYfrsqc via @orbiteers"},{"text":"Twitter"},{"text":"@DragonSearch THIS IS ULSTER COUNTY! @AbeUchitelle"},{"text":"It's pretty hard being @AbeUchitelle http://t.co/fIzp0rEF7j"},{"text":"RT @erinever: Microsoft is open-sourcing .NET. Mind. Blown http://t.co/u2Wu3ijbCj"},{"text":"Microsoft is open-sourcing .NET. Mind. Blown http://t.co/u2Wu3ijbCj"},{"text":"A space craft is landing on a comet and it's being live tweeted! 2014 is crazy dudes! http://t.co/l8lqZhKgOM #cometlanding"},{"text":"cometlanding"},{"text":"common @googleanalytics no need to be cranky pants today, let's do it do it!"},{"text":"RT @lisabuyer: Blinders Off! \"Looking Ahead to Google 2015\" #seochat this week is w/ host @dr_pete!   Thurs 1pm ET See you there! http://t.…"},{"text":"Blinders Off! \"Looking Ahead to Google 2015\" #seochat this week is w/ host @dr_pete!   Thurs 1pm ET See you there! http://t.co/rhb6M4U7hJ"},{"text":"seochat"},{"text":"seochat"},{"text":"Tuesday. http://t.co/PT6eQokIBQ"},{"text":"Great read on productivity and what \"sinful unproductive time\" means on society from @quinnnorton https://t.co/7B4nLmUAuK"},{"text":"@KristiKellogg happy birthday!!! Hope you had a rad one!!!"},{"text":"Bad joke."},{"text":"Calling all stationary freaks! @DragonSearch is looking for a paper clip #PPC specialist: http://t.co/5fjWi6yFVC"},{"text":"PPC"},{"text":"RT @ChelseaBeaAdams: Hey PPCers: I'm looking for a senior analyst to come work for Bruce Clay in SoCal. Interested? http://t.co/UtSICoWgko …"},{"text":"Hey PPCers: I'm looking for a senior analyst to come work for Bruce Clay in SoCal. Interested? http://t.co/UtSICoWgko http://t.co/UtrSwA2U5x"},{"text":"@cjammet to stress? For sure, it's all yours!"},{"text":"I gotta be the only guy who can stress eat and still drop weight."},{"text":"@AbeUchitelle think bigger...ask ol'BG for a bitcoin, it'll be worth more. @BillGates"},{"text":"I turned back time! I found a way! Take that @cher http://t.co/Hzd0OoWMu7"},{"text":"@Moz my 2.5 y/o saw your twitter avatar &amp; yelled \"that's my robot!\" (he got the mozcon Roger) &amp; then broke out into robot talk to say hi!"},{"text":"ooo, looks like @SpamFlag got a little better! Now supporting multiple domains, shortcut keys and more! http://t.co/PvaP9KEato"},{"text":"Communication Skills Exercises for Business and Life:  http://t.co/Cgce3UYj8U by @spodek"},{"text":"MASSIVE post on #SEO Conference Takeaways: #SMXeast &amp; #C3 http://t.co/FZWZV9W9n0 by @jacquesbouchard"},{"text":"SEO"},{"text":"SMXeast"},{"text":"C3"},{"text":"@joepawl the bromosexual query from yesterday was interesting..."},{"text":"The sleeper who ate your cheese is @evanauerbach RT@fighto: Tame #LinkedIn With These 10 Expert Tips http://t.co/ruQ03KmLnh by @sagecrm"},{"text":"LinkedIn"},{"text":"RT @SEO: 20 SEO Sumos to Follow on Twitter http://t.co/SHpujKHKK2 via @searchdecoder #SEO http://t.co/7Tt2BDkWnD"},{"text":"20 SEO Sumos to Follow on Twitter http://t.co/SHpujKHKK2 via @searchdecoder #SEO http://t.co/7Tt2BDkWnD"},{"text":"SEO"},{"text":"SEO"},{"text":"RT @buzzstream: #seochat: The Mobile Experience &amp; it's Potential Role in Search Rankings this Thurs. 10PDT. @bloomreachinc is moderating"},{"text":"#seochat: The Mobile Experience &amp; it's Potential Role in Search Rankings this Thurs. 10PDT. @bloomreachinc is moderating"},{"text":"seochat"},{"text":"seochat"},{"text":"Who doesn't like to freebase in the morning?"},{"text":"RT @tweetsoutloud: Sad loss today, but space folks know how challenging this is &amp; want to be a part of it b/c it’s amazing when it works. #…"},{"text":"Sad loss today, but space folks know how challenging this is &amp; want to be a part of it b/c it’s amazing when it works. #antares #bestwishes"},{"text":"antares"},{"text":"bestwishes"},{"text":"antares"},{"text":"bestwishes"},{"text":"Search is everything. This is why [not provided]. http://t.co/LLdCMJUuP3"},{"text":"I feel like my computer's unwillingness to do anything in the last 20 min is a sign I shouldn't do work tonight."},{"text":"@CyrusShepard @dr_pete @trevoratmoz Tried to find a video of babies getting tickled but babies eating lemons wins: https://t.co/iuORWe8Lce"},{"text":"I hate 'expert' but I'll take Sumo! Thanks for the nod @SearchDecoder ! 20 #SEO Sumos to Follow on #Twitter http://t.co/1lhZHOb05K"},{"text":"SEO"},{"text":"Twitter"},{"text":"@AbeUchitelle @ChelseaBeaAdams agree, weird things can happen when @GregEMartinez starts messing around...better to leave this off twitter!"},{"text":"@billsebald I never want to stop with audits; total shinny new object syndrome."},{"text":"ah local search, why is your quality is always lacking? Burritos Kingston NY gives me Ontario, Jamaica and Road Island results. doy."},{"text":"&lt;3 @NPR 's series: A weird little lesson about #color, in rainbow order http://t.co/zWS7Eohdqu but that social game is lacking #colorfacts"},{"text":"color"},{"text":"colorfacts"},{"text":"You standout in my mind like a rich snippet @DragonSearch"},{"text":"I miss SEO Ryan Gosling."},{"text":"@ChelseaBeaAdams heh, 3k is a story...4k? I'll say \"mirror, mirror on the wall, who's got the most followers, you recall?\" I &lt;3 vanity."},{"text":"@ChelseaBeaAdams someday we'll make it happen!"},{"text":"@joepawl all good, thanks!"},{"text":"@joepawl if you have one I'd put it to good use :)"},{"text":"RT @ChelseaBeaAdams: When I accrue 1,000 Twitter Followers......... that day. That day something big is going to happen. http://t.co/uNN5Us…"},{"text":"When I accrue 1,000 Twitter Followers......... that day. That day something big is going to happen. http://t.co/uNN5UsrgJX"},{"text":"@jennyhalasz all I really want to know is how's Friday shaping up Sha? @ShahMenz @Marie_Haynes"},{"text":"@kmullett are you going to eat that?"},{"text":"@dan_patterson thanks for hosting Dan! #seochat"},{"text":"seochat"},{"text":"@MatthewAYoung I'm sure you can make an educated guess in a nonchalant, 'this is easy' tone :)  @marcusbowlerhat @jennyhalasz"},{"text":"@dan_patterson yeah, pretty much. They're difficult emotionally and physically to recover from! #seochat"},{"text":"seochat"},{"text":"@EricLanderSEO gotta get the snuggles while you can! Congrats!!"},{"text":"@dan_patterson A6: Getting penalized when it wasn't deserved. Google targeting agencies/individual SEOs wrongly. #seochat"},{"text":"seochat"},{"text":"@jennyhalasz the client I'm debating about has 111k backlinks and the bad ones are legit organic or neg seo; reputable brand @MatthewAYoung"},{"text":"@jennyhalasz so just proactive negative seo cleaning is how you guys view it? @MatthewAYoung"},{"text":"@jennyhalasz any thresholds or special considerations? Been debating this internally. @MatthewAYoung"},{"text":"@MatthewAYoung do you proactively update a disavow for a client that doesn't have a penguin issue as part of a normal campaign? #seochat"},{"text":"seochat"},{"text":"@dan_patterson A5: Don't do SEO, be a marketer! #seochat http://t.co/S2Bre2E578"},{"text":"seochat"},{"text":"@dan_patterson I'm still trying to explain to Grandma White what I do for a living! @Thos003 @AlanBleiweiss"},{"text":"@AlanBleiweiss I find this with small, local mom and pop websites. checking source code is key! #seochat"},{"text":"seochat"},{"text":"@jennyhalasz already working on stalking a few people for even bigger things next year!"},{"text":"@jennyhalasz it was a surprise, the ones I wanted/was expecting didn't budge. *womp womp*"},{"text":"@jennyhalasz I'll have a stronger pitch next year!"},{"text":"A3 cont: Largely I'm hoping that @Marie_Haynes is right and more is coming because this one was a bust. #seochat"},{"text":"seochat"},{"text":"A3: Sites I was expecting to see recovery with haven't moved; seeing increases with some clients due to a competitor falling out #seochat"},{"text":"seochat"},{"text":"+1 RT @ramirez_robert: A3) What update? #seochat http://t.co/qwZvFIL4nY"},{"text":"seochat"},{"text":"@ThomasJArmitage that was legit. Client came to us after working with two others. It's brutal."},{"text":"@jennyhalasz Agree, caught what was called penguin actually a no index tag and dev ga code improperly rolled out! Simple fix! #seochat"},{"text":"seochat"},{"text":"@MatthewAYoung It's throwback Thursday after all! #seochat"},{"text":"seochat"},{"text":"a2: Look for the Penguin slam or the Panda surge and slam #seochat http://t.co/Gom3VVbjRA"},{"text":"seochat"},{"text":"@dan_patterson A1: I'll bite! Penguin goes after spam backlinks; Panda hunts weak copy/content/user experience #seochat"},{"text":"seochat"},{"text":"@ChelseaBeaAdams it's a wild ride dude!"},{"text":"@jennyhalasz hiiiiii! I hope all is going well for you, loved following your pubcon exploits with @ShahMenz &amp; @Marie_Haynes !!"},{"text":"Jason from @DragonSearch *waving* hello from Upstate NY! #seochat http://t.co/zb24yOwE25"},{"text":"seochat"},{"text":"@joepawl me too; I'll let you know if I get one."},{"text":"@joepawl were you able to track down an Inbox invite?"},{"text":"WOW 13 years?!? RT @evboogie: Thirteen years ago today, Apple announced the release of the iPod. http://t.co/y0zGIb0qXo"},{"text":"@SearchDecoder done!"},{"text":"RT @Marie_Haynes: Another great Panda commentary by @glenngabe http://t.co/etEXUjulH0 Great comment discussion too."},{"text":"Another great Panda commentary by @glenngabe http://t.co/etEXUjulH0 Great comment discussion too."},{"text":"@ChelseaBeaAdams I like things that aren't 'that kind of thing' as well as those that are. #allthings @BruceClayInc"},{"text":"allthings"},{"text":"@ChelseaBeaAdams at my son's daycare they call this 'making it rain' slightly inappropriate but also funny."},{"text":".@ChelseaBeaAdams is back! #Penguin 3.0 Update is Overwhelmingly Underwhelming http://t.co/WdKf4HXURz via @BruceClayInc"},{"text":"Penguin"},{"text":"@SearchDecoder I was joking; not sure how a wrench would be useful to an seo :) will look and send you some more tho!"},{"text":".@SearchDecoder's got 99 Tools and a Spanner ain't one:  http://t.co/yi9n0kGi34"},{"text":"Fancy graphic design isn't always needed for a strong social ad. http://t.co/RJmhOFYaPp"},{"text":"@TheTylerBarnes thanks for the post! @emfluence cc: @evanauerbach"},{"text":"RT @evanauerbach: Nice shoutout @sonray! --&gt; SEO Secrets: @thetylerbarnes' 5 Actionable Steps for Link Building http://t.co/XRWnusakR5 (via…"},{"text":"Nice shoutout @sonray! --&gt; SEO Secrets: @thetylerbarnes' 5 Actionable Steps for Link Building http://t.co/XRWnusakR5 (via @emfluence)"},{"text":"RT @pincock: #seochat this week is all about the Penguin update. 1pm ET 10am PT Thurs with host @dan_patterson Be there!"},{"text":"#seochat this week is all about the Penguin update. 1pm ET 10am PT Thurs with host @dan_patterson Be there!"},{"text":"seochat"},{"text":"seochat"},{"text":"@SearchDecoder congrats doood!"},{"text":"RT @SearchDecoder: 99 #SEO Tools for 99 Cents &lt;-- hot off the Kindle press &amp; 99 CENTS ONLY! http://t.co/feZu6HO6gv http://t.co/Xo04lLuty7"},{"text":"99 #SEO Tools for 99 Cents &lt;-- hot off the Kindle press &amp; 99 CENTS ONLY! http://t.co/feZu6HO6gv http://t.co/Xo04lLuty7"},{"text":"SEO"},{"text":"SEO"},{"text":"@ChelseaBeaAdams you missed @KristiKellogg the most!!!"},{"text":"@JenHaley Just emailed you about the massive Google Penguin update; are you still interested?"},{"text":"I am excited about the next 10 penguin related calls I'll take with @AbeUchitelle - kid is a stud and real marketing wins."},{"text":"Penguin hits and my little human pulls his pants down and pees in the front yard for the first time. Today was a good day."},{"text":"RT @Marie_Haynes: Get email notification as soon as Google Penguin updates - Sign up for my newsletter here: https://t.co/zqy8ieuviE"},{"text":"Get email notification as soon as Google Penguin updates - Sign up for my newsletter here: https://t.co/zqy8ieuviE"},{"text":"@peoplesknees yeah Vic!"},{"text":"@DuaneForrester gah! Curse you spam bots!"}];

	for (var index = 0; index < input.length; index++) {
		this.addToChain(input[index].text);
	}
};


/**
 * Takes a string and tokenizes it using a space as a delimiter.
 * Uses that token to build out the chain
 * @param {String} token - A line of text to add to the chain
 */
MarkovTweet.prototype.addToChain = function(token) {
	var expression = /[\s]/;
	var tokens = token.split(expression);

	for (var index = 0; index < tokens.length; index++) {
		var currentToken = tokens[index].toLowerCase(),
			nextToken = null;

			if (index + 1 < tokens.length){
		    	nextToken  = tokens[index + 1].toLowerCase();
			}

		    if (currentToken !== "" && nextToken !==  null){
				this.buildChain(currentToken, nextToken);
		    }
	}
};


/**
 * Takes the currentToken and the nextToken in the string and searches for it in the data structure.
 * If we find the currentToken and the nextToken does not yet exist for that key then create it
 * If we find the currentToken and the nextToken does exist for the key then increment the total for that nextToken by 1
 * If we do not find the currentToken then create a new entry in the data structure
 * @param  {String} currentToken - Our key to search for in the data structure
 * @param  {String} nextToken    - The token found after the currentToken. Used to build out our map
 */
MarkovTweet.prototype.buildChain = function(currentToken, nextToken) {

	var found = false;

	for (var index = 0; index < this.table.length; index++) {
		
		var currentRow = this.table[index];
		var currentKey = currentRow.key;

		if (currentKey === currentToken){
			
			found = true;
			var increased = false;

			//Now check if the next token exists somewhere
			for (var n = 0; n < currentRow.values.length; n++) {
				if (currentRow.values[n].next === nextToken){
					currentRow.values[n].count++;
					currentRow.total++;
					increased = true;
					break;
				}
			}


			if (!increased){
				this.table[index].values.push({
					"next": nextToken,
					"count": 1
				});

				this.table[index].total++;

			}

		}
	}

	if (!found && nextToken !== ""){
		this.table.push({
			"key": currentToken,
			"values": [{
				"next": nextToken,
				"count": 1
			}],
			"total": 1
		});
	}
};


/**
 * Takes the completed Markov Chain and generates a tweet
 * @return {String} - A string based on the Markov Chain. 
 */
MarkovTweet.prototype.buildTweet = function() {

	var random = Math.floor(Math.random() * this.table.length);
	var tweet = this.table[random].key;
	var nextState = this.addToTweet(random);
	tweet += " " + nextState;

	while(tweet.length < 140){
		var selection = this.findIndex(nextState);
		nextState = this.addToTweet(selection);

		if (nextState === -1){
			break;
		}

		tweet+= " " + nextState;
	}

	return tweet;

};

/**
 * Searches through the index of the current key, picks the next token and returns it.
 * @param {Number} rowIndex - The index of the current key.
 * @return {String}         - The next token to use in the Markov Process.
 */
MarkovTweet.prototype.addToTweet = function(rowIndex){
		var currentRow = this.table[rowIndex];
		
		//No possible combination.
		if (currentRow === undefined){
			return -1;
		}
		var totalChoices = currentRow.total;
		var random = Math.floor(Math.random() * totalChoices);

		var selection = 0;
		var index = 0;

		while(selection < random){
			selection += currentRow.values[index].count;
			
			if (selection > random){
				break;
			}

			index++;

		}

		return currentRow.values[index].next;

};

/**
 * finds the index of a key within the structure.
 * @param  {String} key - the key to search for
 * @return {Number}     - returns the index of the key if found, otherwise returns -1
 */
MarkovTweet.prototype.findIndex = function(key) {

	for (var index = 0; index < this.table.length; index++) {
	
		if (this.table[index].key === key){
			return index;
		}

	}

	return -1;

};
