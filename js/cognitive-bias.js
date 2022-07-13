$(document).ready(function(){

    var cogbiaselem =`[
        {
            "Title":"Fundamental Attribution Error",
            "Def":"We judge others on their personality of fundamental character, but we judge ourselves on the situation.",
            "Img":"",
             "Eg":"Sofia is late to class, she's lazy. You're late to class, it was a bad morning."
        
        },
        {
            "Title":"Self-serving Bias",
            "Def":"Our failures are situational, but our successes are out responsibility.",
            "Img":"",
             "Eg":"You won that award due to hard work rather than help or luck. Meanwhile, you failed a test because you hadn't gotten enough sleep."
        },
        {
            "Title":"In-Group Favoritism",
            "Def":"We favor people who are in out in-group as opposed to an out-group.",
            "Img":"",
             "Eg":"Francis is in your church, so you like Francis more than Sofia."
        },
        
        
           {
                "Title":"Bandwagon Effect",
                "Def":"Ideas, fads, and beliefs grow as more people adopt them.",
                "Img":"",
                 "Eg":"Sofia believes fidget spinners help her children. Francis does, too."
            
            },
        
        
         {
                "Title":"Group Thinking",
                "Def":"Due to a desire for conformity and harmny in the group, we make irrational decisions, often to minimize conflict.",
                "Img":"",
                 "Eg":"Sofia wants to go get ice cream. Francis wants to shop for T-shirts. You suggest getting T-shirts with pictures of ice-cream on them."
            
            },
        
        
           {
                "Title":"Halo Effect",
                "Def":"If you see a person as having a positive trait, that positive impression will spill over into their trait. (This also works for negative traits.)",
                "Img":"",
                 "Eg":"Sofia could never be mean; she is so cute!"
            
            },
        
     {
                "Title":"Moral Luck",
                "Def":"Better moral standing happens due to a positive outcome; worse moral standing happens due to a negative outcome.",
                "Img":"",
                 "Eg":"X culture won X war because they were morally superior to the losers."
            
            },
        
        
           {
                "Title":"False Consensus",
                "Def":"We believe more people agreee us than is actually the case.",
                "Img":"",
                 "Eg":"Everybody thinks that."
            
            },
           {
                "Title":"Curse of Knowledge",
                "Def":"Once we know something, we assume everyone else knows it, too.",
                "Img":"",
                 "Eg":"Alice is a teacher and struggles to understand the perspective of her new students."
            
            },
          {
                "Title":"Spotlight Effect",
                "Def":"We overestimate how much people are paying attention to our behavior and appearence.",
                "Img":"",
                 "Eg":"Sofia is worried everyone's going to notice how lame her ice cream T-shirt is."
            
            },
            {
                "Title":"Availability Heuristic",
                "Def":"We rely on immediate examples than come to mind while making judgements.",
                "Img":"",
                 "Eg":"When tryig to decide on which store to visit, you choose the one you most recently saw an ad for."
            
            },
            {
                "Title":"Defensive attribution",
                "Def":"As a witness who secretly fears being vulnerable to a serious mistrap, we will blame the victim less and attacker more if we relate to the victim.",
                "Img":"",
                 "Eg":"Sofia sat too long at a green light because she was playing with her phone. She got reaf ended. Greg, who is known to text and drive, got out and yelled at the person who smacked into her."
            
            },
            {
                "Title":"Just-World Hypothesis",
                "Def":"We tend to believe the world is just; therefore, we assume acts of injustice are deserved.",
                "Img":"",
                 "Eg":"Sofia's purse was stolen, because she was mean to Francis about their T-shirt and had bad karma."
            
            },
            {
                "Title":"Narve Realism",
                "Def":"We believe that we observe objective reality and that other people are irrational, uninformed, or biased.",
                "Img":"",
                 "Eg":"I see the world as it really is - other people are dumb."
            
            },
            {
                "Title":"Narve Cynicism",
                "Def":"We believe that we observe objective reality and that other people have a higher egocentric bias than they actually do in their intentions/actions.",
                "Img":"",
                 "Eg":"The only reason this person is doing something nice is to get something out of me."
            
            },
            {
                "Title":"Forer Effect (aka Barnum Effect)",
                "Def":"We easily attribute to vague statements, even if they can apply to a wide range of people.",
                "Img":"",
                 "Eg":"The horoscope is so accurate!"
            
            },
            {
                "Title":"Dunning-Kruger Effect",
                "Def":"The less you know, the more confident you are. The more you know, the less confident you are.",
                "Img":"",
                 "Eg":"Francis confidently assures the group that there's no kelp in ice cream. They do not work in the dairy industry."
            
            },
            {
                "Title":"Anchoring",
                "Def":"We rely heavily on the first piece of information introduced when making decisions.",
                "Img":"",
                 "Eg":"That's 50% off? It must be a great deal."
            
            },
            {
                "Title":"Automation Bias",
                "Def":"We rely on automated systems, sometimes trusting too much in the automated correction of actually correct decisions.",
                "Img":"",
                 "Eg":"Your phone auto-corrects 'its' to 'it's', so you assume it's night."
            
            },
            {
                "Title":"Google Effect (aka Digital Amnesia)",
                "Def":"We tend to forget information that's easily looked up in search engine.",
                "Img":"",
                 "Eg":"What was the name of that actor in that funny movie? I've looked it up like eight times."
            
            },
            {
                "Title":"Reactance",
                "Def":"We do the opposite of what we're told, especially when we perceive threats to personal freedoms.",
                "Img":"",
                 "Eg":"One of Alice's students refuses to do his homework, even thought both she and his parents tell him to."
            
            },
            {
                "Title":"Confirmation Bias",
                "Def":"We tend to find and remember information that confirms our perceptions.",
                "Img":"",
                 "Eg":"You can confirm a conspirecy theory based on scant evidence while ignoring contrary evidence."
            
            },
            {
                "Title":"Backfire Effect",
                "Def":"Disproving evidence sometimes has the unwarranted effect of confirming our beliefs.",
                "Img":"",
                 "Eg":"The evidence that disaproves your conspiracy theory was probably faked by the government."
            
            },
            {
                "Title":"Third-Person Effect",
                "Def":"We believe that others are more affected by mass media consumption than we ourselves are.",
                "Img":"",
                 "Eg":"You've clearly been brainwashed by the media!"
            
            },
            {
                "Title":"Belief Bias",
                "Def":"We judge an argument's strength not by how strongly it supports the conclusion but how plausible the conclusion is in our own minds.",
                "Img":"",
                 "Eg":"Sofia mentions her supporting theory about your conspiracy theory, which you adopt wholeheartedly despite the fact that she has very little evidence for it."
            
            },
            {
                "Title":"Availability Cascade",
                "Def":"Tied to our need for social acceptance, collective beliefs gain more plausibility through public repetition.",
                "Img":"",
                 "Eg":"A story about razor blades appearing in candy eventually led to many people no longer offering homemade treats on Halloween in America."
            
            },
            {
                "Title":"Declinism",
                "Def":"We tend to romanticize the past and view the future negatively, believing that sometimes institutions are by and large in decline.",
                "Img":"",
                 "Eg":"In my days, kids had more respect!"
            
            },
            {
                "Title":"Status Quo Bias",
                "Def":"We tend to prefer things to stay the same, changes from the baseline are considered to be a loss.",
                "Img":"",
                 "Eg":"Even though an app's terms of service invade. Sofia's privacy, she'd rather not switch to another app."
            
            },
            {
                "Title":"Sunk Cost Fallacy (aka Escalation of Commitment)",
                "Def":"We invest more in things that have cost us something rather than altering our investmnets, even if we face negative outcomes.",
                "Img":"",
                 "Eg":"In for penny, in for pound!"
            
            },
            {
                "Title":"Gambler's Fallacy",
                "Def":"We think future possibilities are affected by past events.",
                "Img":"",
                 "Eg":"Alice has lost nine coin tosses in a row, so she's sure to win ext one!"
            
            },
            {
                "Title":"Zero-Risk Bias",
                "Def":"We prefer to reduce small risks to zero, even if we can reduce more risk overall with another option.",
                "Img":"",
                 "Eg":"You should probably buy the warranty."
            
            },
            {
                "Title":"Framing Effect",
                "Def":"We often draw different conclusions from the same information depending on how it's presented.",
                "Img":"",
                 "Eg":"Alice hears that her favorite candidate is 'killing it' with a 45% approval rating. Sofia hears that the candidate is 'dissapointing the country' with a 45% rating. They have wildly different interpretations of the same statistic."
            
            },
            {
                "Title":"Stereotyping",
                "Def":"We adopt generalized beliefs that memebers of a group will have certain characteristics, despite not having information about the individual.",
                "Img":"",
                 "Eg":"That guy with the fancy mustache is hipster. He probably has a vinyl collection."
            
            },
            {
                "Title":"Outgroup Homogeneity Bias",
                "Def":"We perceive out-group members as homogeneous and our own in-groups as more diverse.",
                "Img":"",
                 "Eg":"Alice is not a gamer, but she believes,'all gamers are the same.'"
            
            },
            {
                "Title":"Authority Bias",
                "Def":"we trust and are more often influenced by the opinions of authority figures.",
                "Img":"",
                 "Eg":"My teacher told me this was fine."
            
            },
            {
                "Title":"Placebo Effect",
                "Def":"If we believe a treatment will work, it often will have a small physiological effect.",
                "Img":"",
                 "Eg":"Alice was given a placebo for her pain, and her pain decreased."
            
            },
            {
                "Title":"Survivorship Bias",
                "Def":"We tend to focus on those things that survived a process and overlook ones that failed.",
                "Img":"",
                 "Eg":"Greg tells Alice her purse business is going to be great because a successful fashion company had the same strategy (But 10 other failed companies also had the same strategy)"
            
            },
            {
                "Title":"Tachypsychia",
                "Def":"Our perceptions of time shift depending on trauma, drug use, and physical exercise.",
                "Img":"",
                 "Eg":"When the car almost hit me, time slowed down."
            
            },
            {
                "Title":"Law of Triviality (aka 'Bike-Shedding')",
                "Def":"We give disproportionate weight to trivial issues, often while avoiding more complex issues.",
                "Img":"",
                 "Eg":"Rather than figuring out how to help the homeless, a local city government spends a lot of time discussing putting in a bike path and bike sheds."
            
            },
            {
                "Title":"Zeigarnik Effect",
                "Def":"We remember incomplete tasks more than completed ones.",
                "Img":"",
                 "Eg":"Greg feels guilty for never getting anything done, until he sees all of the tasks he's checked off on his task list."
            
            },
            {
                "Title":"IKEA Effect",
                "Def":"We place higher value on things we partially created ourselves.",
                "Img":"",
                 "Eg":"Don't you love this pot I spent $20 on? I painted it myself!"
            
            },
            {
                "Title":"Ben Franklin Effect",
                "Def":"We like doing favors, we are more likely to do another favor for someone if we've already done a favor for them than if we had received a favor from that person.",
                "Img":"",
                 "Eg":"Greg loaned Frncis a pen. When Francis asked to borrow $5, Greg did it readily."
            
            },
            {
                "Title":"Bystander Effect",
                "Def":"The more other people are around, the less likely we are to help a victim.",
                "Img":"",
                 "Eg":"In a crowd of students, no one called 911 when someone got hurt in a fight."
            
            },
            {
                "Title":"Suggestibility",
                "Def":"We, especially children, sometimes mistake ideas suggested by a questioner for memories.",
                "Img":"",
                 "Eg":"So did you fall off the couch before or after your mom hit you?"
            
            },
            {
                "Title":"False Memory",
                "Def":"We mistake imagination for real memories.",
                "Img":"",
                 "Eg":"Greg is certain. Sofia said a really funny joke about pineapples, when that joke actually came from a TV show."
            
            },
            {
                "Title":"Cryptomnesia",
                "Def":"We mistake real memories for imagination.",
                "Img":"",
                 "Eg":"Greg thinks he visited a graveyard, but he's pretty sure he just had a spooky dream."
            
            },
            {
                "Title":"Clustering Illusion",
                "Def":"We find patterns and 'cluster' in random data.",
                "Img":"",
                 "Eg":"That cloud looks like your cat, Alice!"
            
            },
            {
                "Title":"Pessimism Bias",
                "Def":"We sometimes overestimate the likehood of bad outcomes.",
                "Img":"",
                 "Eg":"Nothing will ever get better."
            
            },
            {
                "Title":"Optimism Bias",
                "Def":"We sometimes are over-optimistic about good outcomes.",
                "Img":"",
                 "Eg":"It's going to turn out great!"
            
            },
            {
                "Title":"Blind Spot Bias",
                "Def":"We don't think we have bias, and we see it in others more than ourselves.",
                "Img":"",
                 "Eg":"I am not biased!"
            
            }
        
        ]`;
     
var obj = JSON.parse(cogbiaselem);
var cogelemlen = obj.length;
for(var i=0; i<=cogelemlen;i++){

    document.getElementById('cogbias').innerHTML += "<div class='cogbelem'><h4>"+obj[i].Title +"</h4><h5>"+obj[i].Def+"</h5><h6>Eg: "+obj[i].Eg+"</h6></div>"; 
    
}


});

$('#cogelemhead').click(function(){
    $('#cogbias').toggle();
    });
    
