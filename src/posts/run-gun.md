---
layout: post.html
title: Run and Gun VR Game 
intro: About the time I decided to make a game that combines endless running and guns for the Oculus Quest, having never done anything significant in VR before. 
thumbnail: thumbnail-run.jpg
tags: 
- post
- ue
- games
---

**Built with Unreal Engine 4.24 for Oculus Quest**\
Download and play the game on [itch.io](https://rustbucket71.itch.io/run-and-gun)\
Check out early prototypes of the game [YouTube playlist](https://youtube.com/playlist?list=PLHf1uI_pZsIVRWYqYhi-3hMh1fY9UZpvx)


When the Oculus Quest got announced I knew I wanted to make something for the platform using Unreal Engine, I just wasn't sure what. Fast forward to a couple of months playing with my new toy and I realized this was the best workout device ever created for nerds like me who don't particularly love going to the gym. After a lot of sweating to beat Saber and FitXR I started to wonder if I could make something more "game like" and less abstract than those titles. I also play a fair number of casual mobile games and hit on the idea of creating an endless runner in VR that also had guns.

Turns out I wasn't the only one with that idea. Several months into me starting the project a little game known as Pistol Whip was announced. Ouch. Then I bought and played pistol whip. Double ouch. Then they made really cool expansions for it. Ouch and more ouch. And so despite making enough progress that someone could actually play my game I left it for dead.

![screenshot](/img/posts/rungun/811NfK.png)
<small>Scene from the final version of the game</small>

Only it bothered me to leave something incomplete, especially when I was so close. And I reasoned that there was room for another title in the same genre and mine had some different features, like having to pick up ammo and coins. Not sure what I was thinking with the coins but hey, good excuse to increase your score. So I went back to the project and figured at the very least I would get a feature complete game under my belt and that would feel way better than having some incomplete Unreal project cluttering up my hard drive.

If I'm honest the end result is a bit lackluster and I think having Pistol Whip in the back of my mind as a sort of impossible bench mark made this one of the tougher projects I've tried to complete. That said I am **so glad** I slogged through this. Not just for the sense of completion but because it was such an invaluable learning experience to complete a full "game" in Unreal. The roadblocks of squeezing a performant game into an Android powered headset will be valuable in optimizing anything I do in the future and I also learned that some things I take for granted as easy, like creating a load/save system or a VR interface in UMG, actually take a lot more work. Especially if you haven't done it before. Probably the biggest lesson was how badly creating and destroying assets was for performance. Not sure what's going on with the garbage collection inside UE but my game stuttered like nobody's business when trying to load up random blueprint level parts. Fortunately this led to discover a very inexpensive yet super powerful [Unreal plugin](https://www.unrealengine.com/marketplace/en-US/product/object-pool-plugin) so that I could do object pooling and that fixed that problem. As I write this I am thinking of all the other issues and problems I had with various parts of the game but they are so numerous I'll stop here or you'll get bored and stop reading. I know I would.

![screenshot](/img/posts/rungun/dEtJzc.png)
<small>So much effort for a simple UI and the ability to save the high score</small>

The other big challenge was coming up with a theme for how the game should look. I never did nail this but ended up using the prototype Synty Studio asset pack because it suited the prototype nature of the game. You can see all the various ideas here on my youtube playlist. In hindsight the first idea of the hallway looked the best and its a good reminder to sometimes not overthink things. 

![screenshot](/img/posts/rungun/adwfGC.png)
<small>At least it's colorful?</small>

Now that some time has passed and I've learned a lot more about Unreal it might be interesting to revisit this idea, maybe remove the guns and go with a sword or even punching to maximize the fitness aspect I was going for but failed to accomplish. On a technical level there is no way I would use the existing project's code but everything I learned would benefit a potential sequel. Even if I made a completely different type of VR game this experience is insanely valuable in what *not to do*. The take away I'm trying to convey is that a project doesn't have to be a "success" for you to gain a massive benefit from the effort. I could have spent that time completing an online UE4 course where everything is laid out for me in easy to digest chapters but there's something unique and wonderful about being stuck out in the weeds that really cements the learning. And if someone with a crystal ball had been able to show me how difficult the whole thing was going to be I doubt I would have even started. Not knowing is sometimes a very good thing. ;-)

<iframe width="560" height="315" src="https://www.youtube.com/embed/ediQ94EqmW0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<small>The game in action</small>